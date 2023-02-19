import Parallax, { Layer } from "react-parallax-scroll";


function Home() {
    return (
        <Parallax>
            <Layer settings={{ speed: 0.45 }}>
                <img src={"/WalterWhite.png"}/>
            </Layer>
        </Parallax>
    );
}

export default Home;
