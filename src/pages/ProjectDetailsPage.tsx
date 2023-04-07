import {useParams} from "react-router-dom";
import {Project} from "../types/Project";
import React, {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import {Content} from "../types/Content";
import {Parallax} from "react-parallax";
import Header from "../components/Header/Header";
import {Image} from "@mui/icons-material";

const ProjectDetailsPage = (props: { blogPosts: Project[]; }) => {
    const {id} = useParams<{ id?: string }>();
    const [content, setContent] = useState<Content>(
        {
            title: "title",
            introduction: "introduction",
            image: "path_to_image",
            content: [["text", "path_to_image"]],
            navData: "unknown"
        }
    );

    async function fetchContent() {
        const post = props.blogPosts.find(
            (post) => post.id === (id ? +id : undefined)
        );
        if (!post) return <div>Blog post not found.</div>;
        const response = await fetch(post.content);
        return await response.json();
    }

    useEffect(() => {
        fetchContent().then(data => {
            setContent(data);
        }).catch(error => {
            console.error("Error fetching content:", error);
        });
    }, []);
    return (
        <section>
            <Header navData={content.navData}/>
            <Parallax
                blur={0}
                bgImage={content.image}
                bgImageAlt="It's Me"
                strength={300}
                style={{
                    height: '700px',
                    width: '700px',
                    left: '65%',
                    top: '50px',
                    transform: 'translate(-50%, 0%)'
                }}
            />
            <div style={{
                color: 'black',
                textAlign: 'center',
                position: 'absolute',
                top: 0,
                bottom: '20%',
                left: 0,
                right: '50%',
                height: 'fit-content',
                margin: 'auto'
            }}>
                <Typography style={{font: 'bold 64px roboto'}}>{content.title}</Typography>
            </div>
            <Typography>{content.introduction}</Typography>
            {content.content.map((c: [string, string]) => (
                <Box>
                    <Typography>{c[0]}</Typography>
                    <Image path={c[1]}/>
                </Box>
            ))}
        </section>
    );
}

export default ProjectDetailsPage;
