export interface ProjectProps {
    title: string;
    description: string;
    image: string;
    links: LinksProps[];
    startDate: Date;
    endDate: Date;
    tags: string[];
}

export interface LinksProps {
    [key: string]: string;
}
