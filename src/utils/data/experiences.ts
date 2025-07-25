import type { ExperienceProps } from '../types/ExperienceProps';

export const experiences: ExperienceProps[] = [
    {
        title: 'Full-Stack Developer',
        company: 'Singapore Airlines',
        period: "Jan'24 - Jun'24",
        companyLink: 'https://krislab.singaporeair.com/en',
        description:
            'During a 6-month internship at KrisLab, the digital innovation lab of Singapore Airlines, I developed AI-powered tools to streamline ideation, resulting in a 33% improvement in innovation outcomes. I also co-created real-time and emotion-aware applications using React, FastAPI, and Web APIs, and contributed to UI/UX design through Figma prototyping.',
        links: {
            'Recommendation Letter':
                'https://drive.google.com/file/d/11hhdBfcenwhzsAIwDMqDT_SwPuNckrVF/view?usp=sharing',
        },
    },
    {
        title: 'Software Developer',
        company: 'NUS',
        period: "Jun'23 - Dec'23",
        companyLink: 'https://nus.edu.sg/',
        description:
            'At the National University of Singapore, I developed a chatbot using the ChatGPT API to provide contextual hints for Object-Oriented Programming assignments in a course of 500–600 students, under the supervision of two professors. I applied prompt engineering techniques to ensure responses were relevant and aligned with the course content.',
        links: null,
    },
    {
        title: 'Test Automation Engineer',
        company: 'OCBC',
        period: "May'23 - Aug'23",
        companyLink: 'https://www.ocbc.com/group/gateway.page',
        description:
            'At OCBC, I wrote test cases based on user stories for user acceptance testing and conducted automated unit and integration tests using Tricentis Tosca, focusing on mobile and web integration. I also analyzed internal application data and designed a Quality Assurance dashboard to track downtime patterns and recommend improvements to enhance employee productivity.',
        links: null,
    },
    {
        title: 'Teaching Assistant',
        company: 'NUS SoC',
        period: "Jan'23 - Dec'24",
        companyLink: 'https://www.comp.nus.edu.sg/',
        description:
            "Worked as a Teaching Assistant at the National University of Singapore's School of Computing (NUS SoC) for CS2030S (Programming Methodology II) in Jan–May 2023 and CS2103T (Software Engineering) in Aug–Dec 2023 and Aug–Dec 2024. Responsibilities included conducting tutorial sessions, answering student inquiries, assisting with grading assignments, and invigilating exams. I took a break from TA duties from Jan–Jun 2024 to pursue a full-time internship.",
        links: null,
    },
];
