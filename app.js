// HP EX Intelligence Hub - Main Application

let charts = {};
let currentSurveys = [...mockData.surveys];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    updateTimestamp();
    setInterval(updateTimestamp, 60000);
});

function initializeApp() {
    console.log('Initializing EX Intelligence Hub...');
    renderSurveysList();
    populateDateInputs();
    showToast('System initialized successfully', 'success');
}

// Navigation
function setupEventListeners() {
    document.querySelectorAll('.nav-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const section = e.currentTarget.getAttribute('data-section');
            switchSection(section);
        });
    });
}

function switchSection(sectionId) {
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

    // Update content sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    // Update header
    const titles = {
        'ai-agent': { title: 'AI Agent Assistant', desc: 'Orchestrate end-to-end employee experience workflows' },
        'sampling': { title: 'Employee Sampling', desc: 'Smart sample selection with contact constraints' },
        'surveys': { title: 'Survey Management', desc: 'Create, deploy, and track employee surveys' },
        'analytics': { title: 'Analytics & Results', desc: 'Analyze survey results and extract insights' },
        'predictions': { title: 'Predictive Analytics', desc: 'AI-powered forecasting and recommendations' },
        'historical': { title: 'Historical Data', desc: 'Review trends and historical EX metrics' }
    };

    const title = titles[sectionId];
    if (title) {
        document.getElementById('section-title').textContent = title.title;
        document.getElementById('section-description').textContent = title.desc;
    }

    // Initialize charts for relevant sections
    if (sectionId === 'sampling') {
        setTimeout(() => initSamplingChart(), 100);
    } else if (sectionId === 'analytics') {
        setTimeout(() => {
            initTrendChart();
            initDistributionChart();
            initSentimentChart();
            renderThemesGrid(); // Initialize text analysis
        }, 100);
    } else if (sectionId === 'predictions') {
        setTimeout(() => initForecastChart(), 100);
    } else if (sectionId === 'historical') {
        setTimeout(() => initHistoricalChart(), 100);
    }
}

// ==================== AI AGENT SECTION ====================

function sendAgentPrompt() {
    const input = document.getElementById('agent-input');
    const prompt = input.value.trim();

    if (!prompt) return;

    // Add user message
    addChatMessage(prompt, 'user');

    // Clear input
    input.value = '';

    // Simulate processing delay
    setTimeout(() => {
        const response = getAgentResponse(prompt);
        addChatMessage(response, 'bot');
    }, 800);
}

function useTemplate(prompt) {
    document.getElementById('agent-input').value = prompt;
    sendAgentPrompt();
}

function addChatMessage(content, type) {
    const chatHistory = document.getElementById('chat-history');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = content;

    messageDiv.appendChild(contentDiv);
    chatHistory.appendChild(messageDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// ==================== SAMPLING SECTION ====================

function generateSample() {
    const sampleSize = parseInt(document.getElementById('sample-size').value);
    const department = document.getElementById('dept-filter').value;
    const exclusionDays = parseInt(document.getElementById('exclusion-window').value);

    const result = generateSampleData(sampleSize, department, exclusionDays);

    // Update stats
    document.getElementById('eligible-count').textContent = result.eligible.toLocaleString();
    document.getElementById('excluded-count').textContent = result.excluded.toLocaleString();
    document.getElementById('selected-count').textContent = result.selected.toLocaleString();
    document.getElementById('coverage-pct').textContent = result.coverage + '%';

    // Initialize chart
    initSamplingChart();

    showToast(`Sample generated: ${result.selected} employees selected`, 'success');
}

function initSamplingChart() {
    const ctx = document.getElementById('samplingChart');
    if (!ctx) return;

    const sampleSize = parseInt(document.getElementById('sample-size').value);
    const breakdown = getDepartmentBreakdown(sampleSize);

    if (charts.sampling) {
        charts.sampling.destroy();
    }

    charts.sampling = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(breakdown),
            datasets: [{
                label: 'Employees Selected',
                data: Object.values(breakdown),
                backgroundColor: [
                    '#0066cc',
                    '#f39200',
                    '#10b981',
                    '#ef4444',
                    '#8b5cf6'
                ],
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: { size: 12 }
                    }
                }
            }
        }
    });
}

// ==================== SURVEYS SECTION ====================

function deployNewSurvey() {
    const type = document.getElementById('survey-type').value;
    const recipients = parseInt(document.getElementById('survey-recipients').value);
    const dueDate = document.getElementById('survey-duedate').value;
    const includeOpenEnded = document.getElementById('include-open-ended').checked;

    if (!dueDate) {
        showToast('Please select a due date', 'warning');
        return;
    }

    const surveyId = `SURVEY-${Date.now()}`;
    const types = {
        'esat': 'ESAT Pulse Survey',
        'engagement': 'Employee Engagement',
        'nps': 'Net Promoter Score',
        'culture': 'Culture Assessment',
        'custom': 'Custom Survey'
    };

    const newSurvey = {
        id: surveyId,
        name: types[type],
        type: type,
        recipients: recipients,
        responses: 0,
        status: 'pending',
        dueDate: dueDate,
        created: new Date().toISOString().split('T')[0],
        score: null,
        responseRate: 0,
        includeOpenEnded: includeOpenEnded
    };

    currentSurveys.unshift(newSurvey);
    renderSurveysList();

    // Clear form
    document.getElementById('survey-type').value = 'esat';
    document.getElementById('survey-recipients').value = '100';
    document.getElementById('survey-duedate').value = '';
    document.getElementById('include-open-ended').checked = true;

    const message = includeOpenEnded
        ? `Survey "${newSurvey.name}" deployed with written response questions`
        : `Survey "${newSurvey.name}" deployed`;

    showToast(message, 'success');
}

function renderSurveysList() {
    const container = document.getElementById('surveys-table');
    if (!container) return;

    container.innerHTML = currentSurveys.map(survey => `
        <div class="survey-row">
            <span class="survey-name">${survey.name}</span>
            <span>${survey.recipients} recipients</span>
            <span>Response Rate: ${survey.responseRate}%</span>
            <span class="survey-status status-${survey.status}">${survey.status.toUpperCase()}</span>
        </div>
    `).join('');
}

// ==================== ANALYTICS SECTION ====================

function updateAnalytics() {
    // This can filter analytics based on survey type
    console.log('Analytics updated');
}

function initTrendChart() {
    const ctx = document.getElementById('trendChart');
    if (!ctx) return;

    if (charts.trend) {
        charts.trend.destroy();
    }

    const data = mockData.results.esScoredByMonth;

    charts.trend = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.month),
            datasets: [{
                label: 'EX Score',
                data: data.map(d => d.score),
                borderColor: '#0066cc',
                backgroundColor: 'rgba(0, 102, 204, 0.05)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#0066cc',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: { font: { size: 12 } }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 6,
                    max: 10,
                    ticks: { font: { size: 12 } }
                }
            }
        }
    });
}

function initDistributionChart() {
    const ctx = document.getElementById('distributionChart');
    if (!ctx) return;

    if (charts.distribution) {
        charts.distribution.destroy();
    }

    const responses = mockData.results.responsesByScore;

    charts.distribution = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(responses),
            datasets: [{
                data: Object.values(responses),
                backgroundColor: [
                    '#ef4444',
                    '#f87171',
                    '#fb923c',
                    '#fbbf24',
                    '#fcd34d',
                    '#fde047',
                    '#bfdbfe',
                    '#60a5fa',
                    '#3b82f6',
                    '#1d4ed8'
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { font: { size: 11 }, padding: 12 }
                }
            }
        }
    });
}

function initSentimentChart() {
    const ctx = document.getElementById('sentimentChart');
    if (!ctx) return;

    if (charts.sentiment) {
        charts.sentiment.destroy();
    }

    const sentiment = mockData.results.sentimentDistribution;

    charts.sentiment = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [{
                data: [sentiment.positive, sentiment.neutral, sentiment.negative],
                backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { font: { size: 12 }, padding: 12 }
                }
            }
        }
    });
}

// ==================== TEXT ANALYSIS FUNCTIONS ====================

function switchTextAnalysisTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabName + '-tab').classList.add('active');

    // Load content for the tab
    if (tabName === 'themes') {
        renderThemesGrid();
    } else if (tabName === 'responses') {
        renderResponsesList();
    } else if (tabName === 'insights') {
        renderAIInsights();
    }
}

function renderThemesGrid() {
    const container = document.getElementById('themes-grid');
    if (!container) return;

    const themes = mockData.results.textAnalysis.topThemes;

    container.innerHTML = themes.map(theme => `
        <div class="theme-card ${theme.sentiment}">
            <div class="theme-name">${theme.theme}</div>
            <div class="theme-stats">
                <span>${theme.mentions} mentions</span>
                <span class="theme-trend ${theme.trend}">${theme.trend} ↗</span>
            </div>
        </div>
    `).join('');
}

function renderResponsesList() {
    const container = document.getElementById('responses-list');
    if (!container) return;

    const responses = mockData.results.writtenResponses.slice(0, 8); // Show first 8 responses

    container.innerHTML = responses.map(response => `
        <div class="response-card ${response.sentiment}">
            <div class="response-text">"${response.response}"</div>
            <div class="response-meta">
                <span class="response-dept">${response.department}</span>
                <span class="response-score">Score: ${response.score}/10</span>
            </div>
        </div>
    `).join('');
}

function renderAIInsights() {
    const container = document.getElementById('ai-insights');
    if (!container) return;

    const insights = mockData.results.textAnalysis.keyInsights;

    container.innerHTML = insights.map(insight => `
        <div class="insight-card">
            <h5>💡 Key Finding</h5>
            <p>${insight}</p>
        </div>
    `).join('');

    // Add additional AI-generated insights
    const additionalInsights = [
        "Sentiment analysis shows 67% of negative feedback is concentrated in Sales and Operations departments",
        "Thematic clustering reveals 'career development' as an emerging priority across all departments",
        "Response length correlates with engagement scores - longer responses tend to be more positive",
        "Cross-departmental collaboration themes appear more frequently in Engineering and Marketing"
    ];

    additionalInsights.forEach(insight => {
        container.innerHTML += `
            <div class="insight-card">
                <h5>🤖 AI Analysis</h5>
                <p>${insight}</p>
            </div>
        `;
    });
}

// ==================== PREDICTIONS SECTION ====================

function initForecastChart() {
    const ctx = document.getElementById('forecastChart');
    if (!ctx) return;

    if (charts.forecast) {
        charts.forecast.destroy();
    }

    const current = mockData.results.esScoredByMonth.slice(-3);
    const forecast = mockData.predictions.forecastedScores;
    const allData = [...current, ...forecast];

    charts.forecast = new Chart(ctx, {
        type: 'line',
        data: {
            labels: allData.map(d => d.month),
            datasets: [
                {
                    label: 'Historical',
                    data: [...current.map(d => d.score), null, null, null],
                    borderColor: '#0066cc',
                    backgroundColor: 'rgba(0, 102, 204, 0.05)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 5,
                    pointBackgroundColor: '#0066cc'
                },
                {
                    label: 'Forecast',
                    data: [null, null, null, ...forecast.map(d => d.score)],
                    borderColor: '#8b5cf6',
                    borderDash: [5, 5],
                    borderWidth: 2,
                    pointRadius: 5,
                    pointBackgroundColor: '#8b5cf6',
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: true, labels: { font: { size: 12 } } }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 7.5,
                    max: 8.5,
                    ticks: { font: { size: 12 } }
                }
            }
        }
    });
}

// ==================== HISTORICAL SECTION ====================

function loadHistoricalData() {
    const fromDate = document.getElementById('hist-from').value;
    const toDate = document.getElementById('hist-to').value;

    if (!fromDate || !toDate) {
        showToast('Please select both date range values', 'warning');
        return;
    }

    initHistoricalChart();
    updateHistoryTable();
    showToast('Historical data loaded', 'success');
}

function initHistoricalChart() {
    const ctx = document.getElementById('historicalChart');
    if (!ctx) return;

    if (charts.historical) {
        charts.historical.destroy();
    }

    const data = mockData.historical.data;

    charts.historical = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.date),
            datasets: [{
                label: 'EX Score',
                data: data.map(d => d.score),
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4,
                borderWidth: 3,
                pointRadius: 4,
                pointBackgroundColor: '#10b981',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: true, labels: { font: { size: 12 } } }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 6,
                    max: 8,
                    ticks: { font: { size: 12 } }
                }
            }
        }
    });
}

function updateHistoryTable() {
    const container = document.getElementById('history-table');
    if (!container) return;

    const data = mockData.historical.data.slice(-6);

    container.innerHTML = data.map(record => `
        <div class="history-row">
            <span>${record.date}</span>
            <span>Score: ${record.score}</span>
            <span>${record.respondents} responses</span>
            <span style="color: #10b981; font-weight: 600;">+${Math.round(Math.random() * 5)}%</span>
        </div>
    `).join('');
}

// ==================== UTILITY FUNCTIONS ====================

function updateTimestamp() {
    const now = new Date();
    const formatted = now.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('current-time').textContent = formatted;
}

function populateDateInputs() {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    document.getElementById('survey-duedate').value = todayString;
    document.getElementById('hist-to').value = todayString;
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==================== INITIALIZATION ====================

// Initialize sampling chart on page load for first time
window.addEventListener('load', () => {
    setTimeout(() => {
        const samplingSection = document.getElementById('sampling');
        if (samplingSection && samplingSection.classList.contains('active')) {
            initSamplingChart();
        }

        // If AI agent is active, initialize it
        const agentSection = document.getElementById('ai-agent');
        if (agentSection && agentSection.classList.contains('active')) {
            console.log('AI agent section ready');
        }
    }, 100);
});

console.log('EX Intelligence Hub application initialized');
