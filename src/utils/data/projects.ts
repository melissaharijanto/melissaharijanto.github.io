import type { ProjectProps } from "../types/ProjectProps";

export const projects: ProjectProps[] = [
    {
        title: "Roger",
        description: "",
        image: "/roger.jpg",
        link: "https://roger-db.netlify.app",
        startDate: new Date("February 2025"),
        endDate: new Date("March 2025"),
        tags: ["Frontend Development", "Web Application"]
    },
    {
        title: "Meltdown",
        description: "",
        image: "/meltdown.jpg",
        link: "https://github.com/melissaharijanto/meltdown",
        startDate: new Date("January 2025"),
        endDate: new Date("July 2025"),
        tags: ["Virtual Reality", "Unity 3D", "Game Development"]
    },
    {
        title: "PINUS Study",
        description: "",
        image: "/pinus-study.jpg",
        link: "https://pinusstudy.com",
        startDate: new Date("August 2022"),
        endDate: new Date("July 2022"),
        tags: ["Virtual Reality", "Unity 3D", "Game Development"]
    },
    {
        title: "Travel Log",
        description: "Travel planner app created with React Native, Firebase, and Google Maps API.",
        image: "/travel-log.jpg",
        link: "https://melissharijanto.github.io/Travel-Log",
        startDate: new Date("May 2022"),
        endDate: new Date("July 2022"),
        tags: ["Full-Stack Development", "Mobile Application"]
    },
]