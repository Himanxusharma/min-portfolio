export interface ProfessionalExperience {
    id: string;
    company: string;
    position: string;
    period: string;
    achievements: string[];
    icon?: string;
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    period: string;
    description: string;
}

export interface TechnicalSkills {
    languages: string[];
    devops: string[];
    frameworks: string[];
    architecture: string[];
    databases: string[];
}

export interface ResumeDownload {
    directDownload: {
        filename: string;
        path: string;
    };
    googleDrive: {
        url: string;
        label: string;
    };
}

export const professionalExperience: ProfessionalExperience[] = [
    {
        id: 'paxcom-paymentus',
        company: 'Paxcom India (P) Ltd - A Paymentus Company',
        position: 'Software Developer',
        period: 'Feb 2023 - Present',
        achievements: [
            'Integrated Scan To Pay (Cash Provider) Payment Method using Java & Spring Boot, expanding transaction processing coverage by 20% across 597M+ annual payments, deployed in Dockerized microservices on Kubernetes.',
            'Led the design and implementation of the Recurring Maintenance Mode System for Paymentus, a major product feature developed from scratch that reduced system downtime by 25% and automated 100 hours of manual maintenance tasks monthly, significantly contributing to a platform trusted by over 25 Fortune 500 companies.',
            'Designed and developed a Dynamic Payments Report & Analysis page that allows users to filter and search transaction reports, presenting the results through interactive charts and data tables for enhanced data visualisation and analysis.',
            'Optimised report generation in microservices by integrating Snowflake, reducing execution time by 23% and performance, recognised by the Director of Product Development, Paymentus.',
            'Mid Level Implementation Tickets Delivered ~10.25 tickets/month (80% above average) with consistent quality, ranking among top contributors, demonstrating a commitment to delivering both quantity and quality within a high-volume payment processing environment.'
        ]
    },
    {
        id: 'shivalik-bank',
        company: 'Shivalik Small Finance Bank',
        position: 'Software Developer Intern',
        period: 'Jun 2022 - Jul 2022',
        achievements: [
            'Received a letter of recommendation from the CTO.',
            'Developed an API-driven Fraud Risk Management (FRM) algorithm using ISO 8583 protocols and JSON-based transaction data, securing UPI payments of 9.8 Lakh+ customers.',
            'Contributed to Core Banking System design, ensuring protocol harmonization across 79+ branches and 114 BC branches.',
            'Conducted analysis of 100K+ user activities to improve adoption of API-enabled modern banking facilities.'
        ]
    }
];

export const education: Education[] = [
    {
        id: 'juit-btech',
        institution: 'Jaypee University Of Information Technology',
        degree: 'Bachelor of Technology',
        period: '2019 - 2023',
        description: 'Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.'
    },
    {
        id: 'ncs-intermediate',
        institution: 'NCS, Delhi',
        degree: 'Intermediate',
        period: '2017 - 2019',
        description: 'Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.'
    }
];

export const technicalSkills: TechnicalSkills = {
    languages: ['Java', 'JavaScript', 'Python', 'SQL/PLSQL', 'FTL'],
    devops: ['Jira', 'Postman', 'Git', 'Docker', 'Kubernetes', 'CI/CD'],
    frameworks: ['Spring Boot', 'Spring MVC', 'JSP', 'Node.js', 'Microservices'],
    architecture: ['REST APIs', 'Kafka', 'Agile Methodologies', 'Linux', 'Shell Scripting', 'Microservices'],
    databases: ['Oracle', 'MongoDB', 'Snowflake', 'Amazon S3']
};

export const resumeDownload: ResumeDownload = {
    directDownload: {
        filename: 'Himanshu_Sharma_Resume.pdf',
        path: '/files/himanshusharma.pdf'
    },
    googleDrive: {
        url: 'https://drive.google.com/file/d/your-file-id/view?usp=sharing',
        label: 'View on Drive'
    }
};

// Helper functions
export const getAllProfessionalExperience = (): ProfessionalExperience[] => {
    return professionalExperience;
};

export const getProfessionalExperienceById = (id: string): ProfessionalExperience | undefined => {
    return professionalExperience.find(exp => exp.id === id);
};

export const getAllEducation = (): Education[] => {
    return education;
};

export const getEducationById = (id: string): Education | undefined => {
    return education.find(edu => edu.id === id);
};

export const getTechnicalSkills = (): TechnicalSkills => {
    return technicalSkills;
};

export const getResumeDownload = (): ResumeDownload => {
    return resumeDownload;
};

// Helper function to add new professional experience
export const addProfessionalExperience = (newExperience: ProfessionalExperience): void => {
    professionalExperience.push(newExperience);
};

// Helper function to add new education
export const addEducation = (newEducation: Education): void => {
    education.push(newEducation);
};

// Helper function to update technical skills
export const updateTechnicalSkills = (updatedSkills: Partial<TechnicalSkills>): void => {
    Object.assign(technicalSkills, updatedSkills);
};

// Helper function to update resume download links
export const updateResumeDownload = (updatedResume: Partial<ResumeDownload>): void => {
    Object.assign(resumeDownload, updatedResume);
};
