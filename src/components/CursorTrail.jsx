import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorTrail = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Add point to trail
            const newPoint = {
                x: e.clientX,
                y: e.clientY,
                id: Date.now()
            };

            setTrail(prev => [...prev.slice(-20), newPoint]);
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    // Cleanup old trail points
    useEffect(() => {
        const interval = setInterval(() => {
            setTrail(prev => prev.filter(p => Date.now() - p.id < 500));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            {/* Main Cursor Glow */}
            <motion.div
                className="fixed w-8 h-8 rounded-full bg-romantic-pink opacity-50 blur-md"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />

            {/* Trail Particles */}
            {trail.map((point) => (
                <motion.div
                    key={point.id}
                    initial={{ opacity: 0.8, scale: 0.5 }}
                    animate={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed w-2 h-2 rounded-full bg-romantic-lavender blur-[1px]"
                    style={{
                        left: point.x,
                        top: point.y,
                    }}
                />
            ))}
        </div>
    );
};

export default CursorTrail;
