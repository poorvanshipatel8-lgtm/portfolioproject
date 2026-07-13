/**
 * Portfolio content — edit this file to update roles, projects, and copy
 * without touching the design system or layout code.
 */

export const site = {
  name: 'Poorvanshi Patel',
  title: 'Poorvanshi Patel — Portfolio',
  tagline: 'AI Marketing Enthusiast',
  subtitle:
    'MBA Student, Welingkar Institute of Management Development & Research, Mumbai.',
  email: 'poorvanshipatel8@gmail.com',
  linkedin: 'https://www.linkedin.com/in/poorvanshi-patel/',
  metaDescription:
    "Portfolio of Poorvanshi Patel — MBA student at Welingkar Mumbai, AI Marketing enthusiast, Founder's Office Manager with experience in HR, marketing, operations, and analytics.",
  ogImage: '/images/profile.jpg',
  formspreeId: '', // Optional: add your Formspree form ID, e.g. 'xyzabc'
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  eyebrow: '// 01 who I am',
  paragraphs: [
    "I'm an AI Marketing Enthusiast and MBA student at Welingkar Institute of Management Development & Research, Mumbai.",
    "Before joining B-school, I had close to 9 months of work ex as a Founder's Office Manager — the seat where hiring, marketing, and operations all land on the same desk.",
    'I have hired and managed interns, ran performance marketing, built reporting dashboards, and kept the day-to-day machinery of a growing team running.',
    "I write about AI and marketing on LinkedIn, and I like tools that turn scattered work into clean systems — whether that's a CRM workflow, a Power BI dashboard, or an automation that saves an hour a day.",
  ],
  stats: [
    { num: '9', desc: "Months of work ex as a Founder's Office Manager" },
    { num: '30%', desc: 'Efficiency gained by streamlining workflows' },
    { num: '3', desc: 'Power BI dashboards shipped' },
  ],
};

export const tagLegend = [
  { key: 'hr', label: 'HR & Talent' },
  { key: 'marketing', label: 'Marketing' },
  { key: 'ops', label: 'Operations' },
  { key: 'analytics', label: 'Analytics' },
];

export const workExperience = {
  eyebrow: "// 02 what I've worked on",
  jobs: [
    {
      company: 'Malsar',
      role: "Founder's Office Manager",
      dates: 'May 2025 — Feb 2026',
      bullets: [
        { tag: 'ops', text: 'Managed and mentored 4–5 interns across Wix, SEO, and Google Ads, ensuring timely execution.' },
        { tag: 'ops', text: 'Maintained expense tracking systems, monitoring budgets and supporting pricing decisions for subscriptions.' },
        { tag: 'ops', text: 'Streamlined workflows using Zoho Billing, CRM, and Notion — improving team efficiency by 30%.' },
        { tag: 'ops', text: 'Managed customer communication via Interakt, improving response time and satisfaction.' },
        { tag: 'analytics', text: 'Analysed Google Ads and Google Analytics data to track campaign performance and metrics.' },
        { tag: 'analytics', text: 'Built performance dashboards in Looker Studio, reducing manual reporting effort by 30%.' },
        { tag: 'marketing', text: 'Recommended UX enhancements, improving navigation flow and reducing customer drop-offs.' },
        { tag: 'marketing', text: 'Executed email marketing campaigns, creating and sending newsletters and weekly emails.' },
        { tag: 'ops', text: 'Led end-to-end product testing and launch, ensuring quality, functionality, and timely rollout.' },
        { tag: 'ops', text: 'Managed the executive calendar and tasks, optimising scheduling and timely execution.' },
      ],
    },
  ],
};

export const internships = {
  eyebrow: '// 03 hands-on beginnings',
  jobs: [
    {
      company: 'Wayne Education LLP',
      role: 'Business Development Executive Intern',
      dates: 'May 2026 — Jun 2026',
      bullets: [
        { tag: 'marketing', text: 'Qualified and nurtured prospective leads, driving admissions through consultative engagement.' },
        { tag: 'marketing', text: 'Counselled working professionals on academic programs aligned with long-term career growth.' },
        { tag: 'marketing', text: 'Addressed enrollment concerns and guided candidates toward informed admission decisions.' },
      ],
    },
    {
      company: 'Country Holidays Travel India',
      role: 'HR Intern',
      dates: 'May 2024 — Jun 2024',
      bullets: [
        { tag: 'hr', text: 'Designed recruitment marketing materials, improving candidate reach and engagement.' },
        { tag: 'hr', text: 'Analysed HR case studies and industry practices to strengthen recruitment knowledge.' },
        { tag: 'hr', text: 'Led onboarding sessions for interns, ensuring smooth integration and role clarity.' },
        { tag: 'hr', text: 'Participated in presentations and discussions, sharpening communication skills.' },
      ],
    },
    {
      company: 'Malsar',
      role: 'HR Intern',
      dates: 'Apr 2023 — Nov 2023',
      bullets: [
        { tag: 'hr', text: 'Conducted 100+ candidate interviews, managing screening, evaluation, and shortlisting.' },
        { tag: 'hr', text: 'Led a team of 5+ interns, ensuring accountability, performance tracking, and timely delivery.' },
        { tag: 'marketing', text: 'Managed community engagement, improving user interaction and retention.' },
        { tag: 'marketing', text: 'Created and executed social media content strategies to drive event participation.' },
        { tag: 'marketing', text: 'Launched the "Great India Quiz," increasing audience engagement and activity.' },
        { tag: 'marketing', text: 'Planned and conducted online events, improving participation and brand visibility.' },
        { tag: 'analytics', text: 'Collected and analysed feedback from 100+ customers, identifying improvement areas.' },
        { tag: 'ops', text: 'Handled customer support operations, ensuring timely issue resolution and satisfaction.' },
        { tag: 'ops', text: 'Utilised Interakt and Notion for communication and workflow management.' },
      ],
    },
  ],
};

export const projects = {
  eyebrow: "// 04 dashboards I've built",
  items: [
    {
      id: 'blinkit',
      tool: 'Power BI',
      previewImage: 'blinkit.png',
      title: 'Blinkit Sales Dashboard',
      dashboardUrl:
        'https://app.powerbi.com/groups/me/reports/4265b182-4dca-4839-a9e4-0a61642fd506/5f8217ab8eede68b9bcc?experience=power-bi',
      summary:
        'Built a sales dashboard for trend analysis and KPI tracking across product and category performance.',
      hover: {
        did: 'Structured sales data for trend analysis and KPI tracking across products and categories.',
        tools: 'Power BI, DAX measures, data modelling',
        outcome: 'Enabled clearer visibility into product and category performance trends.',
      },
      caseStudy: [
        'Designed a Power BI dashboard to analyse Blinkit sales data across products and categories.',
        'Focused on trend analysis and KPI tracking to surface performance patterns for decision-making.',
      ],
    },
    {
      id: 'uber',
      tool: 'Power BI',
      previewImage: 'uber.png',
      title: 'Uber Bookings Dashboard',
      dashboardUrl:
        'https://app.powerbi.com/groups/me/reports/2df64178-fa94-4ba0-86f7-53050a728a21/f62645afbc89cda06b90?experience=power-bi',
      summary:
        'Designed a dashboard tracking bookings, ratings, and business performance to surface operational patterns.',
      hover: {
        did: 'Mapped bookings, ratings, and business metrics into a single operational view.',
        tools: 'Power BI, visual analytics',
        outcome: 'Surfaced operational patterns across bookings and business performance.',
      },
      caseStudy: [
        'Built a dashboard tracking Uber bookings, ratings, and business performance metrics.',
        'Organised data to highlight operational patterns and support performance review.',
      ],
    },
    {
      id: 'samsung',
      tool: 'Power BI',
      previewImage: 'samsung.png',
      title: 'Samsung Operations Dashboard',
      dashboardUrl:
        'https://app.powerbi.com/groups/me/reports/0d073026-793b-4d14-ae33-01113af199e1/c6479f6ae2692a43591b?experience=power-bi',
      summary:
        'Built a logistics and supply chain performance dashboard for tracking operational efficiency.',
      hover: {
        did: 'Tracked logistics and supply chain performance in a unified dashboard.',
        tools: 'Power BI, supply chain KPIs',
        outcome: 'Provided a clear view of operational efficiency across logistics workflows.',
      },
      caseStudy: [
        'Created a logistics and supply chain performance dashboard for Samsung operations data.',
        'Focused on tracking operational efficiency across supply chain workflows.',
      ],
    },
  ],
};

export const skills = {
  eyebrow: '// 05 tools & training',
  softSkills: ['Communication', 'Analytical Thinking', 'Team Collaboration'],
  certifications: [
    { name: 'Power BI for Beginners — Microsoft', year: '2026' },
    { name: 'Introduction to MS Excel — Microsoft', year: '2026' },
    { name: 'Basics of Business Communication — Infosys', year: '2023' },
    { name: 'Fundamentals of Digital Marketing — Google', year: '2022' },
  ],
};

export const education = {
  eyebrow: '// 06 milestones',
  achievement:
    'Achieved Rank 2 in School in the CBSE Class 12th Board Examination.',
  school: 'Morning Star School, CBSE',
  rank: '2',
};

export const contact = {
  heading: "Let's build something meaningful together.",
  sub: 'Open to conversations about marketing, AI, community building.',
  footerLine: 'AI Marketing Enthusiast · MBA Student, WeSchool Mumbai',
  year: '2026',
};
