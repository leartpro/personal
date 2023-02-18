import { useEffect, useState } from 'react';

type ParallaxImageProps = {
    imageSrc: string;
};

function ParallaxImage({ imageSrc }: ParallaxImageProps) {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-image" style={{
            backgroundImage: `url(${imageSrc})`,
            transform: `translateY(-${scrollPosition / 2}px)` }}>
        </div>
    );
}

export default ParallaxImage;
