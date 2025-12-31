import { useState, useRef, useEffect } from 'react';
import './Stack.css';

const Stack = ({ cards, randomRotation = true, sensitivity = 180, sendToBackOnClick = true }) => {
    const [cardStates, setCardStates] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        // Initialize card states with random rotations
        setCardStates(
            cards.map((_, index) => ({
                zIndex: cards.length - index,
                rotation: randomRotation ? (Math.random() - 0.5) * 10 : 0,
            }))
        );
    }, [cards, randomRotation]);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const deltaX = (mouseX - centerX) / sensitivity;
        const deltaY = (mouseY - centerY) / sensitivity;

        setMousePosition({
            x: deltaX * 20,
            y: deltaY * 20,
        });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
    };

    const handleClick = (index) => {
        if (!sendToBackOnClick) return;

        setCardStates((prev) => {
            const newStates = [...prev];
            const clickedCard = newStates[index];

            // Move clicked card to back (lowest z-index)
            const minZIndex = Math.min(...newStates.map(s => s.zIndex));

            // Shift all other cards forward
            newStates.forEach((state, i) => {
                if (i !== index && state.zIndex > clickedCard.zIndex) {
                    state.zIndex -= 1;
                }
            });

            // Set clicked card to back with new random rotation
            newStates[index] = {
                ...clickedCard,
                zIndex: minZIndex - 1,
                rotation: randomRotation ? (Math.random() - 0.5) * 10 : 0,
            };

            return newStates;
        });
    };

    return (
        <div
            ref={containerRef}
            className="stack-container"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {cards.map((card, index) => {
                const state = cardStates[index] || { zIndex: 0, rotation: 0 };

                // Each card moves slightly differently based on its index for depth effect
                const depthMultiplier = 1 + (index * 0.1);
                const x = isHovering ? mousePosition.x * depthMultiplier : 0;
                const y = isHovering ? mousePosition.y * depthMultiplier : 0;

                return (
                    <div
                        key={index}
                        className="stack-card"
                        style={{
                            zIndex: state.zIndex,
                            transform: `translate(${x}px, ${y}px) rotate(${state.rotation}deg)`,
                            transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out',
                        }}
                        onClick={() => handleClick(index)}
                    >
                        {card}
                    </div>
                );
            })}
        </div>
    );
};

export default Stack;

