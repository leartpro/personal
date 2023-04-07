// interfaces.ts

//TODO: each project stores a path to project content in public/Content/projects
export interface Project {
    id: number;
    title: string;
    image: string;
    description: string;
    content: string;
}
