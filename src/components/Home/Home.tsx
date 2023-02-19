import React from 'react';
import { Parallax } from "react-parallax";

function Home() {
    return (
        <Parallax
            blur={5}
            bgImage={"./WalterWhite.png"}
            bgImageAlt="Heisenberg"
            strength={200}
            style={{ height: '500px'}}/>
    );
}

export default Home;
