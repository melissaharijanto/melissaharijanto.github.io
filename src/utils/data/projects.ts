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
        title: "Travel Log",
        description: "Travel planner app created with React Native, Firebase, and Google Maps API.",
        image: "/travel-log.jpg",
        link: "https://melissharijanto.github.io/Travel-Log",
        startDate: new Date("May 2022"),
        endDate: new Date("July 2022"),
        tags: ["Full-Stack Development", "Mobile Application"]
    },
]