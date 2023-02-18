import { useParams } from "react-router-dom";
import {Project} from "../../types/Project";

function ProjectDetails(props: { blogPosts: Project[]; }) {
    const { id } = useParams<{ id?: string }>();
    const parsedId = id ? +id : undefined;
    const post = props.blogPosts.find((post) => post.id === parsedId);

    if (!post) {
        return <div>Blog post not found.</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <h3>{post.description}</h3>
            <p>{post.content}</p>
        </div>
    );
}

export default ProjectDetails;
