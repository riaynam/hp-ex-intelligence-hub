// Mock Data for HP EX Intelligence Hub

const mockData = {
    employees: [
        { id: 1, name: 'Alice Johnson', department: 'Engineering', role: 'Technical Specialist', lastContactDate: '2025-08-15', engagement: 8.5 },
        { id: 2, name: 'Bob Smith', department: 'Sales', role: 'Manager', lastContactDate: '2025-11-20', engagement: 6.2 },
        { id: 3, name: 'Carol Davis', department: 'Marketing', role: 'Individual Contributor', lastContactDate: '2025-09-10', engagement: 7.8 },
        { id: 4, name: 'David Wilson', department: 'Engineering', role: 'Manager', lastContactDate: '2025-07-05', engagement: 8.1 },
        { id: 5, name: 'Emma Brown', department: 'Operations', role: 'Support', lastContactDate: '2025-10-12', engagement: 6.9 },
        { id: 6, name: 'Frank Miller', department: 'HR', role: 'Executive', lastContactDate: '2025-08-28', engagement: 7.5 },
        { id: 7, name: 'Grace Lee', department: 'Engineering', role: 'Technical Specialist', lastContactDate: '2025-05-14', engagement: 8.7 },
        { id: 8, name: 'Henry Garcia', department: 'Sales', role: 'Individual Contributor', lastContactDate: '2025-12-02', engagement: 5.8 },
        { id: 9, name: 'Iris Martinez', department: 'Marketing', role: 'Technical Specialist', lastContactDate: '2025-06-21', engagement: 7.3 },
        { id: 10, name: 'Jack Robinson', department: 'Operations', role: 'Support', lastContactDate: '2025-11-11', engagement: 6.5 },
        // Additional employees (truncated for brevity)
        ...Array.from({ length: 1990 }, (_, i) => ({
            id: 11 + i,
            name: `Employee ${11 + i}`,
            department: ['Engineering', 'Sales', 'Marketing', 'HR', 'Operations'][Math.floor(Math.random() * 5)],
            role: ['Executive', 'Manager', 'Technical Specialist', 'Individual Contributor', 'Support'][Math.floor(Math.random() * 5)],
            lastContactDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            engagement: Math.random() * 3 + 5.5
        }))
    ],

    surveys: [
        {
            id: 'ESAT-2025-001',
            name: 'ESAT Pulse Survey Q1 2025',
            type: 'esat',
            recipients: 500,
            responses: 412,
            status: 'completed',
            dueDate: '2025-03-31',
            created: '2025-03-01',
            score: 7.6,
            responseRate: 82.4
        },
        {
            id: 'ENG-2025-001',
            name: 'Employee Engagement Survey Q1 2025',
            type: 'engagement',
            recipients: 2000,
            responses: 1456,
            status: 'active',
            dueDate: '2025-04-15',
            created: '2025-03-15',
            score: null,
            responseRate: 72.8
        },
        {
            id: 'NPS-2025-001',
            name: 'NPS Survey - Culture Assessment',
            type: 'nps',
            recipients: 300,
            responses: 89,
            status: 'pending',
            dueDate: '2025-04-30',
            created: '2025-03-20',
            score: null,
            responseRate: 29.7
        }
    ],

    results: {
        sentimentDistribution: {
            positive: 42,
            neutral: 35,
            negative: 23
        },
        esScoredByMonth: [
            { month: 'Jan', score: 7.1 },
            { month: 'Feb', score: 7.3 },
            { month: 'Mar', score: 7.4 },
            { month: 'Apr', score: 7.6 },
            { month: 'May', score: 7.8 },
            { month: 'Jun', score: 7.5 },
            { month: 'Jul', score: 7.2 },
            { month: 'Aug', score: 7.4 },
            { month: 'Sep', score: 7.6 },
            { month: 'Oct', score: 7.8 },
            { month: 'Nov', score: 7.9 },
            { month: 'Dec', score: 8.0 }
        ],
        departmentScores: {
            'Engineering': { score: 8.3, respondents: 234 },
            'Sales': { score: 6.4, respondents: 156 },
            'Marketing': { score: 7.6, respondents: 89 },
            'HR': { score: 7.3, respondents: 45 },
            'Operations': { score: 6.8, respondents: 112 }
        },
        responsesByScore: {
            '1': 12,
            '2': 24,
            '3': 45,
            '4': 67,
            '5': 89,
            '6': 102,
            '7': 145,
            '8': 156,
            '9': 134,
            '10': 98
        },
        writtenResponses: [
            {
                id: 1,
                surveyId: 'ESAT-2025-001',
                employeeId: 1,
                department: 'Engineering',
                role: 'Technical Specialist',
                response: "I really appreciate the flexible work arrangements. Being able to work from home has significantly improved my work-life balance. The company culture is supportive and collaborative.",
                sentiment: 'positive',
                themes: ['workplace connectivity', 'collaboration tools', 'team collaboration'],
                score: 9
            },
            {
                id: 2,
                surveyId: 'ESAT-2025-001',
                employeeId: 2,
                department: 'Sales',
                role: 'Manager',
                response: "The sales targets are unrealistic and the pressure is too high. I feel like I'm constantly chasing numbers without proper support from management. Career growth opportunities are limited.",
                sentiment: 'negative',
                themes: ['device performance', 'network reliability', 'meeting room AV'],
                score: 4
            },
            {
                id: 3,
                surveyId: 'ESAT-2025-001',
                employeeId: 3,
                department: 'Marketing',
                role: 'Technical Specialist',
                response: "The marketing tools are decent but could be better integrated. Communication across role teams could be improved. Overall, I'm satisfied with my role.",
                sentiment: 'neutral',
                themes: ['collaboration tools', 'digital workspaces', 'conference room technology'],
                score: 7
            },
            {
                id: 4,
                surveyId: 'ESAT-2025-001',
                employeeId: 4,
                department: 'Engineering',
                role: 'Manager',
                response: "Love the technical challenges and the team I'm working with. The compensation is competitive and benefits are excellent. Would like more opportunities for professional development.",
                sentiment: 'positive',
                themes: ['device performance', 'collaboration tools', 'network reliability'],
                score: 8
            },
            {
                id: 5,
                surveyId: 'ESAT-2025-001',
                employeeId: 5,
                department: 'Operations',
                role: 'Support',
                response: "Operations processes are inefficient and outdated. Too much manual work that could be automated. Management seems disconnected from day-to-day challenges.",
                sentiment: 'negative',
                themes: ['digital workspaces', 'meeting room AV', 'conference room technology'],
                score: 5
            },
            {
                id: 6,
                surveyId: 'ESAT-2025-001',
                employeeId: 6,
                department: 'HR',
                role: 'Executive',
                response: "HR processes are generally good but could be faster. The employee assistance program is helpful. More focus on diversity and inclusion initiatives would be welcome.",
                sentiment: 'neutral',
                themes: ['workplace connectivity', 'team collaboration', 'digital workspaces'],
                score: 7
            },
            {
                id: 7,
                surveyId: 'ESAT-2025-001',
                employeeId: 7,
                department: 'Engineering',
                role: 'Technical Specialist',
                response: "This is the best place I've worked. Innovative projects, great colleagues, and management truly cares about employee development. The only minor issue is occasional communication delays.",
                sentiment: 'positive',
                themes: ['collaboration tools', 'network reliability', 'conference room technology'],
                score: 9
            },
            {
                id: 8,
                surveyId: 'ESAT-2025-001',
                employeeId: 8,
                department: 'Sales',
                role: 'Individual Contributor',
                response: "Commission structure needs review - it's not motivating enough. Training programs are inadequate for the complex products we sell. High turnover in the team affects morale.",
                sentiment: 'negative',
                themes: ['device performance', 'meeting room AV', 'workplace connectivity'],
                score: 4
            },
            {
                id: 9,
                surveyId: 'ESAT-2025-001',
                employeeId: 9,
                department: 'Marketing',
                role: 'Technical Specialist',
                response: "Creative freedom is good but budget constraints limit campaign effectiveness. Cross-role collaboration has improved recently. Workload can be overwhelming during peak seasons.",
                sentiment: 'neutral',
                themes: ['digital workspaces', 'team collaboration', 'collaboration tools'],
                score: 6
            },
            {
                id: 10,
                surveyId: 'ESAT-2025-001',
                employeeId: 10,
                department: 'Operations',
                role: 'Support',
                response: "Safety protocols are excellent and well-enforced. However, the pace of change is too slow and we're falling behind competitors. Need more investment in technology.",
                sentiment: 'neutral',
                themes: ['conference room technology', 'device performance', 'network reliability'],
                score: 6
            }
        ],
        textAnalysis: {
            topThemes: [
                { theme: 'Conference Room Technology', mentions: 45, sentiment: 'positive', trend: 'increasing' },
                { theme: 'Collaboration Tools', mentions: 38, sentiment: 'mixed', trend: 'stable' },
                { theme: 'Meeting Room AV', mentions: 32, sentiment: 'neutral', trend: 'improving' },
                { theme: 'Workplace Connectivity', mentions: 28, sentiment: 'positive', trend: 'improving' },
                { theme: 'Device Performance', mentions: 25, sentiment: 'negative', trend: 'stable' },
                { theme: 'Network Reliability', mentions: 22, sentiment: 'negative', trend: 'increasing' },
                { theme: 'Team Collaboration', mentions: 19, sentiment: 'positive', trend: 'improving' },
                { theme: 'Digital Workspaces', mentions: 16, sentiment: 'neutral', trend: 'stable' }
            ],
            sentimentBreakdown: {
                positive: 156,
                neutral: 98,
                negative: 87
            },
            keyInsights: [
                "Conference room technology reliability is the most praised aspect (89% positive mentions)",
                "Device performance issues show consistent dissatisfaction (67% negative)",
                "Management communication gaps are a recurring theme across roles",
                "Technical Specialists report highest satisfaction with collaboration tools and autonomy",
                "Individual Contributors express concerns about network reliability and support"
            ]
        },
        themes: [
            { theme: 'Remote work flexibility', sentiment: 'positive', frequency: 89, keywordMentions: 245 },
            { theme: 'Career development', sentiment: 'negative', frequency: 34, keywordMentions: 156 },
            { theme: 'Team collaboration', sentiment: 'positive', frequency: 76, keywordMentions: 234 },
            { theme: 'Communication tools', sentiment: 'neutral', frequency: 45, keywordMentions: 123 },
            { theme: 'Work-life balance', sentiment: 'positive', frequency: 67, keywordMentions: 189 }
        ]
    },

    predictions: {
        forecastedScores: [
            { month: 'Jan 2026', score: 8.1, confidence: 0.87 },
            { month: 'Feb 2026', score: 8.2, confidence: 0.84 },
            { month: 'Mar 2026', score: 8.3, confidence: 0.79 }
        ],
        attritionRisk: {
            highRisk: 240,
            mediumRisk: 1000,
            lowRisk: 760
        },
        departmentForecast: {
            'Engineering': 0.85,
            'Sales': 0.68,
            'Marketing': 0.78,
            'HR': 0.71,
            'Operations': 0.72
        },
        roleForecast: {
            'Executive': 0.92,
            'Manager': 0.84,
            'Technical Specialist': 0.88,
            'Individual Contributor': 0.79,
            'Support': 0.75
        }
    },

    historical: {
        data: [
            { date: '2024-01', score: 6.8, respondents: 450 },
            { date: '2024-02', score: 6.9, respondents: 468 },
            { date: '2024-03', score: 7.0, respondents: 485 },
            { date: '2024-04', score: 7.1, respondents: 492 },
            { date: '2024-05', score: 7.2, respondents: 510 },
            { date: '2024-06', score: 7.1, respondents: 501 },
            { date: '2024-07', score: 7.0, respondents: 488 },
            { date: '2024-08', score: 7.2, respondents: 505 },
            { date: '2024-09', score: 7.4, respondents: 520 },
            { date: '2024-10', score: 7.5, respondents: 533 },
            { date: '2024-11', score: 7.6, respondents: 545 },
            { date: '2024-12', score: 7.7, respondents: 560 },
            { date: '2025-01', score: 7.6, respondents: 545 },
            { date: '2025-02', score: 7.7, respondents: 558 },
            { date: '2025-03', score: 7.8, respondents: 572 }
        ]
    }
};

// Agent responses for different prompts
const agentResponses = {
    sample: [
        "🎯 Employee Sampling Analysis Complete",
        "",
        "Based on your parameters:",
        "• Sample Size Requested: {{sampleSize}}",
        "• Role: {{role || 'All'}}",
        "• Contact Exclusion Window: {{exclusion}} days",
        "",
        "Results:",
        "✓ Total Eligible Employees: {{eligible}}",
        "✓ Excluded (Recent Contact): {{excluded}}",
        "✓ Selected for Survey: {{selected}}",
        "✓ Population Coverage: {{coverage}}%",
        "",
        "The sample is balanced across role segments in this mock data set."
    ],
    deploy: [
        "📤 Survey Deployment Initiated",
        "",
        "Survey Details:",
        "• Type: ESAT Pulse Survey",
        "• Recipients: {{recipients}}",
        "• Launch Date: Tomorrow ({{date}})",
        "• Estimated Response Time: 5-7 minutes",
        "",
        "Automated Actions Scheduled:",
        "✓ Pre-survey notification email queued",
        "✓ Reminder sequence scheduled (Day 3, Day 7)",
        "✓ Mobile app push notification prepared",
        "✓ Results dashboard auto-refresh enabled",
        "",
        "We'll track response rates in real-time and flag issues proactively."
    ],
    analyze: [
        "📊 Results Analysis Complete",
        "",
        "Key Findings:",
        "• Overall EX Score: 78% (↑3% from last month)",
        "• Response Rate: 78.4% (exceeds target of 60%)",
        "• Net Positive Sentiment: 64% (vs. 58% historical average)",
        "",
        "Quantitative Insights:",
        "✓ Conference room technology highly appreciated (89% positive mentions)",
        "✓ Device performance issues need improvement (34% mention frustration)",
        "✓ Collaboration tools could be more intuitive (45% find average)",
        "",
        "Written Response Analysis:",
        "• 341 written responses analyzed",
        "• Top themes: Conference Room Technology, Collaboration Tools, Meeting Room AV",
        "• Sentiment distribution: 42% positive, 35% neutral, 23% negative",
        "",
        "Recommended Actions:",
        "→ Upgrade conference room technology in Q2",
        "→ Evaluate collaboration tool effectiveness",
        "→ Analyze written responses for deeper insights"
    ],
    forecast: [
        "🔮 Predictive Analytics Report",
        "",
        "12-Month Trend Analysis:",
        "• Historical EX Growth: +17.6% YoY",
        "• Momentum Score: Strong ↗",
        "",
        "Q2 2026 Forecast:",
        "• Predicted EX Score: 82% ± 3% (87% confidence)",
        "• Attrition Risk: 1,240 employees (medium-high risk tier)",
        "",
        "Role-level Predictions:",
        "• Executive: ↑0.8 (strongest trajectory)",
        "• Manager: →0.0 (plateauing, needs intervention)",
        "• Support: ↓0.2 (declining - investigate)",
        "",
        "Recommended Proactive Measures:",
        "• Conduct exit interviews with flagged employees",
        "• Intensify manager coaching across role teams",
        "• Scale successful tactics from top-performing roles"
    ],
    default: [
        "🤖 I'm processing your request...",
        "",
        "I can help you with:",
        "• 👥 Employee sampling with smart constraints",
        "• 📤 Survey deployment and management",
        "• 📊 Real-time analysis of results",
        "• 🔮 Predictive EX trend forecasting",
        "• 📈 Historical data integration and comparison",
        "",
        "Try using one of the quick prompts, or describe your EX workflow needs!"
    ]
};

function formatResponse(template, values) {
    return template.map(line => line.replace(/\{\{([^}]+)\}\}/g, (_, key) => {
        const [rawKey, rawDefault] = key.split('||').map(s => s.trim());
        const defaultValue = rawDefault ? rawDefault.replace(/^'(.*)'$/, '$1') : '';
        const value = values[rawKey];
        return value !== undefined && value !== null && value !== '' ? value : defaultValue;
    })).join('\n');
}

function parseSamplePrompt(prompt) {
    const sampleSizeMatch = prompt.match(/(\d+)\s*employees/i);
    const roleMatch = prompt.match(/from\s+([A-Za-z ]+?)\s+(?:role|department)/i);
    const monthsMatch = prompt.match(/(\d+)\s*months?/i);

    return {
        sampleSize: sampleSizeMatch ? sampleSizeMatch[1] : '150',
        role: roleMatch ? roleMatch[1].trim() : 'All',
        exclusion: monthsMatch ? String(Number(monthsMatch[1]) * 30) : '180'
    };
}

function parseDeployPrompt(prompt) {
    const recipientsMatch = prompt.match(/(\d+)\s*randomly selected/i);
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

    return {
        recipients: recipientsMatch ? recipientsMatch[1] : '500',
        date: tomorrow
    };
}

// Utility function to get agent response
function getAgentResponse(prompt) {
    const lowerPrompt = prompt.toLowerCase();
    let response;

    if (lowerPrompt.includes('sample') || lowerPrompt.includes('select')) {
        const params = parseSamplePrompt(prompt);
        const result = generateSampleData(Number(params.sampleSize), params.role, Number(params.exclusion));
        response = formatResponse(agentResponses.sample, {
            sampleSize: params.sampleSize,
            role: params.role,
            exclusion: params.exclusion,
            eligible: result.eligible,
            excluded: result.excluded,
            selected: result.selected,
            coverage: result.coverage
        });
    } else if (lowerPrompt.includes('deploy') || lowerPrompt.includes('send') || lowerPrompt.includes('survey')) {
        const params = parseDeployPrompt(prompt);
        response = formatResponse(agentResponses.deploy, {
            recipients: params.recipients,
            date: params.date
        });
    } else if (lowerPrompt.includes('analyze') || lowerPrompt.includes('result') || lowerPrompt.includes('sentiment')) {
        response = agentResponses.analyze.join('\n');
    } else if (lowerPrompt.includes('forecast') || lowerPrompt.includes('predict') || lowerPrompt.includes('trend')) {
        response = agentResponses.forecast.join('\n');
    } else if (lowerPrompt.includes('text') || lowerPrompt.includes('written') || lowerPrompt.includes('response') || lowerPrompt.includes('open-ended')) {
        response = [
            "📝 Written Response Analysis",
            "",
            "Text Analysis Summary:",
            "• Total written responses: 341",
            "• Average response length: 87 words",
            "• Response completion rate: 68%",
            "",
            "Sentiment Analysis:",
            "• Positive responses: 42% (focus on flexibility, culture, growth)",
            "• Neutral responses: 35% (balanced feedback on tools, processes)",
            "• Negative responses: 23% (concerns about development, support, workload)",
            "",
            "Key Themes Identified:",
            "1. Work-life balance & remote work (156 mentions)",
            "2. Career development opportunities (98 mentions)",
            "3. Management communication & support (87 mentions)",
            "4. Tools & technology effectiveness (76 mentions)",
            "5. Team collaboration & culture (65 mentions)",
            "",
            "Actionable Insights:",
            "→ Implement flexible scheduling pilot program",
            "→ Develop comprehensive career pathing framework",
            "→ Launch management training on communication",
            "→ Upgrade collaboration tools based on feedback",
            "",
            "I've updated the Analytics dashboard with detailed text analysis. Check the 'Written Response Analysis' section for interactive exploration."
        ].join('\n');
    } else {
        response = agentResponses.default.join('\n');
    }

    return response;
}

// Utility function to get sample data
function generateSampleData(size, role, exclusionDays) {
    const today = new Date();
    const exclusionDate = new Date(today.setDate(today.getDate() - exclusionDays));

    let filtered = mockData.employees;

    if (role && role !== '') {
        filtered = filtered.filter(e => e.role === role);
    }

    const eligible = filtered.filter(e => new Date(e.lastContactDate) < exclusionDate);
    const selected = eligible.slice(0, Math.min(size, eligible.length));

    return {
        eligible: eligible.length,
        excluded: filtered.length - eligible.length,
        selected: selected.length,
        total: mockData.employees.length,
        coverage: Math.round((selected.length / mockData.employees.length) * 100)
    };
}

// Utility function to calculate role breakdown
function getRoleBreakdown(selectedSize) {
    const roles = ['Executive', 'Manager', 'Technical Specialist', 'Individual Contributor', 'Support'];
    const breakdown = {};
    const perRole = Math.floor(selectedSize / roles.length);

    roles.forEach(role => {
        breakdown[role] = perRole + Math.floor(Math.random() * 5);
    });

    return breakdown;
}
