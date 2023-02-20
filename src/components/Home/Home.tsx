import React from 'react';
import { Parallax } from "react-parallax";

function Home() {
    return (
        <section id={"home"}>
            <Parallax
                blur={0}
                bgImage={"./images/portrait.png"}
                bgImageAlt="It's Me"
                strength={300}
                style={{ height: '700px', width: '700px', left: '50%', top: '50px',
                    transform: 'translate(-50%, 0%)'}}
            />
        </section>

    );
}

export default Home;
