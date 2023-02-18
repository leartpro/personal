import { useParams } from "react-router-dom";

function ProjectDetails(props) {
    const { id } = useParams();
    const post = props.blogPosts.find((post) => post.id === id);

    if (!post) {
        return <div>Blog post not found.</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}

export default ProjectDetails;
