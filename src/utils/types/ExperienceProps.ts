export interface ExperienceProps {
    title: string;
    company: string;
    companyLink: string;
    period: string;
    description: string;
    links: { [key: string]: string } | null;
}
