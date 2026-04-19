# HP EX Intelligence Hub - AI-Powered Employee Experience Platform

## Overview

This is a comprehensive prototype dashboard for HP's Employee Experience (EX) data ecosystem. It demonstrates an **agentic AI approach** to end-to-end employee experience management, combining intelligent automation with predictive analytics.

## 🎯 Key Features

### 1. **AI Agent Assistant** 🤖
- Natural language interface for orchestrating EX workflows
- Process employee sampling, survey deployment, analysis, and forecasting through conversational prompts
- Quick templates for common use cases:
  - Smart Employee Sampling
  - Survey Deployment
  - Results Analysis
  - EX Trend Forecasting
- Context-aware responses that understand your intent

### 2. **Employee Sampling with Smart Constraints** 👥
- Sample employees with configurable population size
- **6-month contact exclusion window** - ensures employees aren't over-surveyed
- Department-level filtering for targeted sampling
- Real-time eligibility calculations
- Visual breakdown by department
- Population coverage metrics

### 3. **Survey Management** 📋
- Deploy multiple survey types:
  - ESAT Pulse Surveys
  - Employee Engagement Surveys
  - Net Promoter Score (NPS)
  - Culture Assessments
  - Custom Surveys
- Track survey status (pending, active, completed)
- Monitor response rates in real-time
- Manage recipients and due dates

### 4. **Advanced Analytics & Results** 📊
- **Trend Analysis**: EX score trends over time with month-by-month breakdown
- **Response Distribution**: Visualize response patterns across rating scales
- **Sentiment Analysis**: Automatically categorize feedback as positive, neutral, or negative
- **Key Themes**: Extract and highlight major themes with frequency metrics
- **Department-level Insights**: Compare EX performance across organizations

### 5. **Predictive Analytics** 🔮
- **EX Score Forecasting**: AI-powered 3-month predictions with confidence intervals
- **Attrition Risk Prediction**: Identify 1,240+ employees flagged as medium-high flight risks
- **Department Performance Forecasting**: Predict EX trends by department
- **Actionable Recommendations**: AI-generated recommendations based on trends
- **Risk Stratification**: Categorize employees into high/medium/low risk tiers

### 6. **Historical Data Integration** 📈
- **12-Month Historical Analysis**: Review full-year EX evolution
- **Year-over-Year Comparison**: Track 2024 vs 2025 performance (+8.3% improvement)
- **Trend Analysis**: Identify patterns and inflection points
- **Survey History**: Complete audit trail of past surveys and campaigns

## 🚀 How to Use

### Getting Started
1. Open `index.html` in a modern web browser
2. The dashboard loads with the AI Agent section active
3. Navigate using the sidebar menu on the left

### Using the AI Agent
**Example Prompts:**
```
"Sample 150 employees from Sales department, exclude those contacted in the last 6 months"
"Send ESAT pulse survey to 500 randomly selected employees and deploy tomorrow"
"Analyze sentiment from last month's survey results"
"Show me EX trends over the past 12 months and predict next quarter's satisfaction"
```

Or use the **Quick Prompts** buttons for templated workflows.

### Employee Sampling Workflow
1. Set desired sample size (1-5000)
2. Filter by department (optional)
3. Adjust contact exclusion window (0-365 days)
4. Click "Generate Sample"
5. View breakdown by department in the chart

### Survey Deployment
1. Select survey type (ESAT, Engagement, NPS, etc.)
2. Enter number of recipients
3. Set due date
4. Click "Deploy Survey"
5. Monitor response rates in Active Surveys list

### Analyzing Results
1. Go to Analytics & Results section
2. View EX score trends, response distribution, sentiment analysis
3. Review key themes and insights
4. Filter by survey type if needed

### Predictive Analytics
1. View 3-month EX score forecast
2. Check attrition risk predictions
3. Review department-level predictions
4. Review AI-generated recommendations

### Historical Data
1. Set date range (from/to)
2. Click "Load Data"
3. View 12-month evolution
4. Compare year-over-year metrics
5. Review survey history

## 📁 File Structure

```
HP agentic Prototype/
├── index.html          # Main HTML dashboard
├── styles.css          # Professional styling and theming
├── app.js              # Core application logic and interactivity
├── mockData.js         # Mock employee, survey, and analytics data
└── README.md           # This file
```

## 🏗️ Architecture Overview

### Data Layers
- **Employee Base**: 2,000 mock employees with departments, last contact dates, engagement scores
- **Survey Management**: Active inventory of ESAT, engagement, NPS surveys
- **Results Database**: Historical scores, sentiment analysis, themes
- **Predictions Engine**: Forecasting and attrition risk models

### UI Components
- **Sidebar Navigation**: Quick access to all 6 main sections
- **Dynamic Header**: Context-aware titles and timestamps
- **Responsive Charts**: Chart.js-powered visualizations with real-time updates
- **Interactive Forms**: Sampling controls, survey deployment, date ranges
- **Chat Interface**: Conversational AI agent with message history

## 🎨 Design Principles

- **Professional HP Color Scheme**: Blue primary (#0066cc), orange accents
- **Clean Information Hierarchy**: Important metrics at a glance
- **Mobile-Responsive**: Works on tablets and larger screens
- **Accessibility**: Semantic HTML, clear contrast ratios
- **Real-time Feedback**: Immediate responses to user actions with toast notifications

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3 (modern CSS Grid/Flexbox), vanilla JavaScript
- **Charting**: Chart.js for data visualizations
- **Data**: Mock data in mockData.js (easily replaceable with API calls)
- **Responsive**: CSS media queries for tablet/desktop optimization

## 💡 Key Use Cases

### 1. Campaign Planning
"Show me which 200 employees I haven't contacted in 6 months and deploy an ESAT survey to them"

### 2. Problem Detection
"Which department has declining EX? Show me the themes"

### 3. Action Planning
"Based on predicted trends, what should we focus on next quarter?"

### 4. ROI Measurement
"How has our EX score changed year-over-year?"

### 5. Risk Mitigation
"Identify employees at flight risk and generate retention recommendations"

## 🔮 Future Enhancement Ideas

- **Real API Integration**: Connect to actual HR databases and survey platforms
- **Real-time Collaboration**: Multiple users working simultaneously
- **Export Functionality**: Generate reports, dashboards, presentations
- **Advanced Filtering**: More granular targeting (tenure, role, location, etc.)
- **Custom Models**: Build department-specific predictive models
- **Sentiment NLP**: Deploy actual NLP models for deeper text analysis
- **Automation Workflows**: Trigger actions based on thresholds and events
- **Mobile App**: Native iOS/Android applications
- **Third-party Integrations**: Connect Workday, Successfactors, Culture Amp, etc.

## 📊 Mock Data Statistics

- **Total Employees**: 2,000 across 5 departments
- **Available Surveys**: 3 (ESAT, Engagement, NPS)
- **Historical Period**: 15 months (Jan 2024 - Mar 2025)
- **Sample Response Themes**: 5 major themes with sentiment categorization
- **Predictive Horizon**: 12-month forecasts with confidence intervals

## 🚀 Getting Started for Development

### To Modify Mock Data
Edit `mockData.js` to change:
- Employee population
- Existing surveys
- Historical data
- Predictive models

### To Add New Charts
1. Add chart container in `index.html`
2. Create initialization function in `app.js`
3. Reference Chart.js for visualization types

### To Extend Features
- Add new survey types in the deployment form
- Create new analytics visualizations
- Build additional predictive models
- Integrate with real data sources

## 📝 Notes

- All data is simulated for demonstration purposes
- The AI agent uses pattern matching to generate contextually relevant responses
- Charts update dynamically based on user selections
- Charts are responsive and redraw on section changes

## 📧 Support & Questions

This prototype demonstrates best practices for building an agentic EX platform. It serves as both a functional tool and a reference implementation for HP's EX Intelligence vision.

**Key Takeaways:**
✅ Agentic AI can streamline complex EX workflows  
✅ Smart constraints (6-month exclusion) prevent survey fatigue  
✅ Predictive analytics enable proactive engagement strategies  
✅ Real-time dashboards provide actionable insights  
✅ Integration of historical + predictive data creates comprehensive view

---

**Built for HP** | EX Intelligence Hub | April 2026
