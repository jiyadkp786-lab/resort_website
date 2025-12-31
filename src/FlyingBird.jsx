import { useEffect, useState } from 'react';
import './FlyingBird.css';

const FlyingBird = ({ delay = 0, duration = 25, top = '20%', size = 'medium', color = 'red' }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const sizeMap = {
        small: 70,
        medium: 90,
        large: 110
    };

    const colorSchemes = {
        red: {
            body: '#DC143C',
            wing1: '#DC143C',
            wing2: '#FFD700',
            wing3: '#1E90FF',
            tail: '#DC143C',
            head: '#DC143C',
            beak: '#FFD700'
        },
        yellow: {
            body: '#FFD700',
            wing1: '#FFD700',
            wing2: '#FF8C00',
            wing3: '#228B22',
            tail: '#FFD700',
            head: '#FFD700',
            beak: '#FF6347'
        }
    };

    const colors = colorSchemes[color] || colorSchemes.red;
    const birdSize = sizeMap[size] || 90;

    return (
        <div
            className="flying-bird-container"
            style={{
                top: top,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
            }}
        >
            <svg
                width={birdSize}
                height={birdSize * 0.7}
                viewBox="0 0 120 84"
                className="parrot-svg"
            >
                {/* Tail */}
                <g className="parrot-tail">
                    <path d="M 25 50 L 15 65 L 18 50 Z" fill={colors.tail} opacity="0.9" />
                    <path d="M 25 50 L 15 70 L 20 52 Z" fill={colors.wing3} opacity="0.8" />
                    <path d="M 25 50 L 12 68 L 17 48 Z" fill={colors.wing2} opacity="0.7" />
                </g>

                {/* Body */}
                <ellipse cx="40" cy="45" rx="15" ry="20" fill={colors.body} className="parrot-body" />

                {/* Head */}
                <circle cx="50" cy="35" r="12" fill={colors.head} />
                <circle cx="50" cy="35" r="10" fill={colors.body} />

                {/* Eye */}
                <circle cx="53" cy="33" r="3" fill="white" />
                <circle cx="54" cy="32" r="1.5" fill="black" />

                {/* Beak */}
                <path d="M 58 35 Q 65 35, 66 37 Q 65 39, 58 39 Z" fill={colors.beak} />
                <path d="M 58 37 L 62 37" stroke="#D2691E" strokeWidth="0.5" />

                {/* Left Wing - Animated */}
                <g className="wing wing-left">
                    {/* Wing feathers */}
                    <path d="M 35 40 Q 10 30, 5 35 L 8 45 Q 15 42, 35 48 Z" fill={colors.wing1} opacity="0.95" />
                    <path d="M 33 42 Q 12 34, 8 38 L 10 46 Q 16 44, 33 49 Z" fill={colors.wing2} opacity="0.9" />
                    <path d="M 31 44 Q 14 38, 11 42 L 13 48 Q 18 46, 31 50 Z" fill={colors.wing3} opacity="0.85" />

                    {/* Wing details */}
                    <path d="M 30 42 Q 15 36, 10 40" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" />
                    <path d="M 28 45 Q 16 40, 12 43" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" />
                </g>

                {/* Right Wing - Animated */}
                <g className="wing wing-right">
                    {/* Wing feathers */}
                    <path d="M 45 40 Q 70 30, 75 35 L 72 45 Q 65 42, 45 48 Z" fill={colors.wing1} opacity="0.95" />
                    <path d="M 47 42 Q 68 34, 72 38 L 70 46 Q 64 44, 47 49 Z" fill={colors.wing2} opacity="0.9" />
                    <path d="M 49 44 Q 66 38, 69 42 L 67 48 Q 62 46, 49 50 Z" fill={colors.wing3} opacity="0.85" />

                    {/* Wing details */}
                    <path d="M 50 42 Q 65 36, 70 40" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" />
                    <path d="M 52 45 Q 64 40, 68 43" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" />
                </g>

                {/* Feet */}
                <g className="parrot-feet">
                    <path d="M 38 65 L 38 68 M 36 68 L 40 68" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 42 65 L 42 68 M 40 68 L 44 68" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" />
                </g>
            </svg>
        </div>
    );
};

export default FlyingBird;
