import { useEffect, useState } from 'react';

function ParallaxImage({ imageSrc }) {
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
        <div className="parallax-image" style={{ backgroundImage: `url(${imageSrc})`, transform: `translateY(-${scrollPosition / 2}px)` }}>
            {/* Inhalt der ParallaxImage-Komponente */}
        </div>
    );
}

export default ParallaxImage;
