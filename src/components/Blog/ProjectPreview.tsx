import ProjectPreview from './ProjectPreview';
import {Project} from "../../types/Project";

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
    return (
        <div className="project-grid">
            {projects.map((project) => (
                <ProjectPreview
                    key={project.id}
                    imageSrc={project.imageSrc}
                    title={project.title}
                    onClick={() => {
                        // TODO: Navigieren zur Details-Seite für das Projekt
                    }}
                />
            ))}
        </div>
    );
}

export default ProjectGrid;
