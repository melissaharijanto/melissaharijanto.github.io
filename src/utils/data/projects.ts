import type { ProjectProps } from '../types/ProjectProps';

export const projects: ProjectProps[] = [
    {
        title: 'Roger',
        description:
            'AI-powered business insights platform built with Next.js, TypeScript, and Tailwind CSS, with models from Hugging Face. Developed during a group hackathon, ROGER enables non-technical users to query databases, analyze data, and generate reports by filling out a prompt. Contributed to both frontend design/architecture and product design along with one other frontend developer, helping deliver a seamless user experience that saves time by over 88% and reduces costs by 95% with 0 code.',
        image: '/roger.jpg',
        links: {
            'Site Link': 'https://roger-db.netlify.app',
            'Demo Video': 'https://youtu.be/ofXROqxf32I',
            'Promotional Poster':
                'https://drive.google.com/file/d/1sA_vcpVUw77RESuhqDdWv2BITVygudTe/view?usp=sharing',
        },
        startDate: new Date('February 2025'),
        endDate: new Date('March 2025'),
        tags: ['Frontend Development', 'Web Application'],
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
        title: 'Meltdown',
        description:
            'A research-based VR escape room experience designed to raise awareness about climate change by simulating everyday actions like grocery shopping and kitchen clean-up. Built with Unity 3D and C#, the project was developed for the Meta Quest 3 and explored how immersive environments can promote sustainable behavior. I contributed to the development process and co-authored the project report, which was later published on arXiv. My work focused on scripting poster interactions, conditional scene rendering based on player input and helping integrate audio into the VR environment.',
        image: '/meltdown.jpg',
        links: {
            'Github Repository': 'https://github.com/melissaharijanto/meltdown',
            'Arxiv Paper': 'https://arxiv.org/abs/2504.14324',
        },
        startDate: new Date('January 2025'),
        endDate: new Date('July 2025'),
        tags: ['Virtual Reality', 'Game Development'],
        techStack: ['Unity3D', 'C#'],
    },
    {
        title: 'Classroom 360',
        description:
            'Top 15 Finalist at LifeHack 2023, a hackathon organized by NUS Computing Club. In response to an EdTech-focused prompt, we built a WebVR prototype of a 3D virtual classroom using React 360, designed to teach core elementary school subjects in an immersive environment. I contributed to the user interface development, working closely with the team to translate lesson content into interactive visual experiences. This project was an exploration of VR as a tool for accessible, engaging education.',
        image: '/classroom360.jpg',
        links: {
            'Github Repository':
                'https://github.com/melissaharijanto/pink-unicorn',
        },
        startDate: new Date('May 2023'),
        endDate: new Date('June 2023'),
        tags: ['Web Development'],
        techStack: ['React 360', 'HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'GameRoom',
        description:
            'A web forum for gamers to connect, share, and discuss, heavily inspired by Reddit’s community-driven design. Built during a winter break as my first full-stack project, it featured user authentication, threaded discussions, and a Figma-designed UI. Developed with React and Ruby on Rails, GameRoom marked my first hands-on experience with backend development and end-to-end integration. While the backend is no longer hosted, the Figma prototype remains accessible. This project was a meaningful milestone that deepened my interest in building complete, community-oriented web applications.',
        image: '/gameroom.jpg',
        links: {
            'Figma Prototype':
                'https://www.figma.com/design/igdl2LxkXuVHbLZZcwnNLB/gameroom-prototype?node-id=0-1&t=zWsP7HPI7S9rq90Z-1',
            'Github Repository':
                'https://github.com/melissaharijanto/gameroom-frontend',
        },
        startDate: new Date('December 2022'),
        endDate: new Date('January 2023'),
        tags: ['Inactive', 'Figma Prototyping', 'Full-Stack Development'],
        techStack: ['React', 'Ruby on Rails'],
    },
    {
        title: 'PINUS Study',
        description:
            'An educational forum built with React, TypeScript, and Go, aimed at fostering academic discussion and collaboration among Indonesian students in NUS. I joined as part of the founding engineering team during the early stages of the project in 2022, contributing to UI/UX design in Figma, frontend development, backend integration, and documentation QA. While I transitioned out after the initial development phase in 2023, the experience shaped my foundation in collaborative full-stack development and product design.',
        image: '/pinus-study.jpg',
        links: {
            'Site Link': 'https://pinusstudy.com',
        },

        startDate: new Date('August 2022'),
        endDate: new Date('July 2023'),
        tags: ['Frontend Development'],
        techStack: ['React', 'TypeScript'],
    },
    {
        title: 'TrackO',
        description:
            'A desktop application for managing orders and inventory, built with Java, JavaFX, and Gradle. Designed to streamline tracking workflows, the app features a responsive UI and modular architecture. I contributed to both feature development and user interface implementation, helping ensure a functional and user-friendly experience. A detailed breakdown of my contributions can be found in the project website.',
        image: '/tracko.jpg',
        links: {
            'Github Repository': 'https://github.com/melissaharijanto/tp',
            'Project Website': 'https://ay2223s1-cs2103t-w15-3.github.io/tp/',
        },

        startDate: new Date('September 2023'),
        endDate: new Date('November 2023'),
        tags: ['Application Development', 'Frontend Development'],
        techStack: ['JavaFX', 'Java', 'Gradle'],
    },
    {
        title: 'Travel Log',
        description:
            'A mobile travel planner app designed to help users organize their trips with ease, featuring interactive maps, itinerary management, and static recommendations. Developed using React Native, Firebase, and the Google Maps API, the app delivers a smooth cross-platform experience. I was responsible for both frontend and backend development, and ensured its reliability through comprehensive testing with React Native Testing Library. As my first end-to-end project, it served as both a learning ground and a meaningful milestone in my development journey.',
        image: '/travel-log.jpg',
        links: {
            'Project Website': 'https://melissaharijanto.github.io/Travel-Log',
            'Github Repository':
                'https://github.com/melissaharijanto/Travel-Log',
        },

        startDate: new Date('May 2022'),
        endDate: new Date('July 2022'),
        tags: ['Full-Stack Development', 'Mobile Application'],
        techStack: ['React Native', 'Firebase', 'Google Maps API'],
    },
];
