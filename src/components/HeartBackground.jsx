import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Heart = ({ delay, duration, left, size, opacity }) => (
    <motion.div
        initial={{ y: '110vh', x: left, opacity: 0, scale: 0 }}
        animate={{ 
            y: '-10vh',
            opacity: [0, opacity, opacity, 0],
            scale: [0.5, 1, 1, 0.8],
            rotate: [0, 45, -45, 0]
        }}
        transition={{ 
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "linear"
        }}
        className="fixed pointer-events-none text-red-500/20"
        style={{ fontSize: size }}
    >
        ❤️
    </motion.div>
);

const HeartBackground = () => {
    const hearts = useMemo(() => {
        return Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            delay: Math.random() * 20,
            duration: 15 + Math.random() * 10,
            left: `${Math.random() * 100}vw`,
            size: `${20 + Math.random() * 40}px`,
            opacity: 0.1 + Math.random() * 0.3
        }));
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-br from-[#1a0510] to-[#2a0a18]">
            {hearts.map(heart => (
                <Heart key={heart.id} {...heart} />
            ))}
            {/* Subtle glow spots */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-900/10 blur-[120px] rounded-full" />
        </div>
    );
};

export default HeartBackground;
