import type { ProjectProps } from "../types/ProjectProps";

export const projects: ProjectProps[] = [
    {
        title: "Roger",
        description: "",
        image: "/roger.jpg",
        links: [{
            "Site Link": "https://roger-db.netlify.app"
        }],
        startDate: new Date("February 2025"),
        endDate: new Date("March 2025"),
        tags: ["Frontend Development", "Web Application"]
    },
    {
        title: "Meltdown",
        description: "",
        image: "/meltdown.jpg",
        links: [{ 
            "Github Repository": "https://github.com/melissaharijanto/meltdown"
        }],
        startDate: new Date("January 2025"),
        endDate: new Date("July 2025"),
        tags: ["Virtual Reality", "Unity 3D", "Game Development"]
    },
    {
        title: "Classroom 360",
        description: "",
        image: "/classroom360.jpg",
        links: [{ 
            "Github Repository": "https://github.com/melissaharijanto/pink-unicorn"
        }],
        startDate: new Date("May 2023"),
        endDate: new Date("June 2023"),
        tags: ["React 360", "Web Development"]
    },
    {
        title: "GameRoom",
        description: "",
        image: "/gameroom.jpg",
        links: [{ 
            "Figma Prototype": "https://www.figma.com/design/igdl2LxkXuVHbLZZcwnNLB/gameroom-prototype?node-id=0-1&t=zWsP7HPI7S9rq90Z-1",
            "Github Repository": "https://github.com/melissaharijanto/gameroom-frontend"
        }],
        startDate: new Date("December 2022"),
        endDate: new Date("January 2023"),
        tags: ["Inactive", "Prototyping", "Full-Stack Development"]
    },
    {
        title: "PINUS Study",
        description: "",
        image: "/pinus-study.jpg",
        links: [{
            "Site Link": "https://pinusstudy.com",
        }],
        startDate: new Date("August 2022"),
        endDate: new Date("July 2023"),
        tags: ["Frontend Development"]
    },
    {
        title: "TrackO",
        description: "",
        image: "/tracko.jpg",
        links: [{ 
            "Github Repository": "https://github.com/melissaharijanto/tp",
        }],
        startDate: new Date("September 2023"),
        endDate: new Date("November 2023"),
        tags: ["Application Development", "Frontend Development"]
    },
    {
        title: "Travel Log",
        description: "Travel planner app created with React Native, Firebase, and Google Maps API.",
        image: "/travel-log.jpg",
        links: [{
            "Project Website": "https://melissharijanto.github.io/Travel-Log",
            "Github Repository": "https://github.com/melissaharijanto/Travel-Log"
        }],
        startDate: new Date("May 2022"),
        endDate: new Date("July 2022"),
        tags: ["Full-Stack Development", "Mobile Application"]
    },
]