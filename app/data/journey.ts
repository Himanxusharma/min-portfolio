export interface ProfessionalExperience {
    id: string;
    company: string;
    position: string;
    period: string;
    achievements: AchievementItem[];
    icon?: string;
}

export type AchievementItem = string | {
    text: string;
    href?: string;
    linkText?: string;
};

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
            'Paymentus Core Product: Enhanced and maintained core payment platform features serving 2,500+ billers, tens of millions of consumers, and powering 724M+ payment transactions across North America and other regions.',
            'Green Dot (Cash Payments): Developed and integrated a Scan-to-Pay payment method, enabling cash bill payments, handling 5,000+ daily transactions, and expanding payment coverage by 20% across a 724M+ annual transaction ecosystem.',
            'Owned features end-to-end, collaborating with architects, senior engineers, product owners, and QA from requirements and design to deployment and production support.',
            'Accelerated feature delivery by 80% while maintaining 99.9% system stability through JUnit-based test coverage improvements and structured peer code reviews.',
            {
                text: 'Interested? Want to see more? Leave me a mail on',
                href: 'mailto:himanxusharma@gmail.com',
                linkText: 'himanxusharma@gmail.com',
            },
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
