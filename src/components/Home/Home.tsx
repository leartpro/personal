import React from 'react';
import { Parallax } from "react-parallax";

function Home() {
    return (
        <section id={"home"}>
            <Parallax
                blur={5}
                bgImage={"./WalterWhite.png"}
                bgImageAlt="Heisenberg"
                strength={200}
                style={{ height: '500px'}}/>
        </section>

    );
}

export default Home;
