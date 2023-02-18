import ProjectPreview from './ProjectPreview';

function ProjectGrid({ projects }) {
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
