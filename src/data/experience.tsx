interface Experiences {
    position: string,
    society: string,
    startYear: string,
    endYear: string,
    desc: string
}
const experience: Experiences[] = [ 
    {
        position: "Data Analytics Intern",
        society: "IBM SkillsBuild, CSRBOX Foundation",
        startYear: "Jun 2024",
        endYear: "Aug 2024",
        desc: "Applied statistical hypothesis testing (t-tests, ANOVA) to validate the effectiveness of feature engineering, improving model accuracy by 15% and informing key business decisions. Designed 5+ interactive dashboards using Power BI and Tableau with real-time filters and drill-down capabilities, presenting data-driven recommendations through visual storytelling."
    },
    {
        position: "Apprentice",
        society: "CampusX (Data Science Mentorship)",
        startYear: "May 2025",
        endYear: "Jan 2026",
        desc: "Completed an intensive, project-based data science training spanning a 10-module curriculum covering Python, statistics, machine learning, deep learning, and MLOps fundamentals. Built real-world case studies and projects applying EDA, feature engineering, and predictive modeling techniques, reinforcing practical skills through hands-on assignments and job-preparation modules."
    }
]

export default experience;
