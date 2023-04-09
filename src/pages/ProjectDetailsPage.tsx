import {useParams} from "react-router-dom";
import {Project} from "../interfaces/Project";
import React, {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import {Content} from "../interfaces/Content";
import {Parallax} from "react-parallax";
import Header from "../components/Header/Header";
import Contact from "../components/Contact/Contact";
import {Navigation} from "../interfaces/Navigation";

const ProjectDetailsPage = (props: { blogPosts: Project[]; }) => {
    const {id} = useParams<{ id?: string }>();
    const [navigations, setNavigations] = useState<Navigation[]>([]);
    const [content, setContent] = useState<Content>();

    async function fetchContent() {
        const post = props.blogPosts.find(
            (post) => post.id === (id ? +id : undefined)
        );
        if (!post) return {content: []};
        const response = await fetch(post.content);
        return await response.json();
    }

    async function fetchNavigations() {
        if (!content) return <div>Blog post not found.</div>;
        const response = await fetch(content.navData);
        return await response.json();
    }

    useEffect(() => {
        fetchContent().then(data => {
            setContent(data);
        }).catch(error => {
            console.error("Error fetching content:", error);
        });
    }, []);

    useEffect(() => {
        if (content) {
            fetchNavigations().then(data => {
                setNavigations(data.navigations);
            }).catch(error => {
                console.error("Error fetching navigation:", error);
            });
        }
    }, [content]);


    if (!content) return <div>Blog post not found.</div>;
    return (
        <section>
            <Header navigations={navigations}/>
            <Parallax
                blur={0}
                bgImage={content.image}
                bgImageAlt="Parallax"
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
                <Typography id={navigations[0]?.anchorID}
                            style={{font: 'bold 64px roboto'}}>
                    {content.title}
                </Typography>
            </div>
            <Typography>{content.introduction}</Typography>
            {content.content.map((c: [string, string], i: number) => (
                <Box id={navigations[i + 1]?.anchorID}>
                    <Typography>{c[0]}</Typography>
                    <img alt={c[0]} src={c[1]}/>
                </Box>
            ))}
            <Contact navigations={navigations}/>
        </section>
    );
}

export default ProjectDetailsPage;
