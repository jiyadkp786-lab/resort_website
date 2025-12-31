import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Masonry.css';

gsap.registerPlugin(ScrollTrigger);

const Masonry = ({
    items,
    ease = "power3.out",
    duration = 0.6,
    stagger = 0.05,
    animateFrom = "bottom",
    scaleOnHover = true,
    hoverScale = 0.95,
    blurToFocus = true,
    colorShiftOnHover = false,
}) => {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const items = itemsRef.current;

        // Initial animation setup
        const animationProps = {
            opacity: 0,
            y: animateFrom === "bottom" ? 100 : animateFrom === "top" ? -100 : 0,
            x: animateFrom === "left" ? -100 : animateFrom === "right" ? 100 : 0,
            scale: 0.8,
            filter: blurToFocus ? "blur(10px)" : "blur(0px)",
        };

        gsap.set(items, animationProps);

        // Animate in on scroll
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 80%",
            onEnter: () => {
                gsap.to(items, {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: duration,
                    ease: ease,
                    stagger: stagger,
                });
            },
            once: true,
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [items, ease, duration, stagger, animateFrom, blurToFocus]);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        if (scaleOnHover && itemsRef.current[index]) {
            gsap.to(itemsRef.current[index], {
                scale: hoverScale,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    const handleMouseLeave = (index) => {
        setHoveredIndex(null);
        if (scaleOnHover && itemsRef.current[index]) {
            gsap.to(itemsRef.current[index], {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    return (
        <div ref={containerRef} className="masonry-container">
            {items.map((item, index) => (
                <div
                    key={item.id}
                    ref={(el) => (itemsRef.current[index] = el)}
                    className={`masonry-item ${colorShiftOnHover && hoveredIndex === index ? 'color-shift' : ''}`}
                    style={{ height: item.height ? `${item.height}px` : 'auto' }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <img src={item.img} alt={`Gallery item ${item.id}`} />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Masonry;
