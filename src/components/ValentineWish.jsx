import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { triggerHeartConfetti } from '../utils/celebration';

const ValentineWish = () => {
    useEffect(() => {
        // Trigger celebration automatically on this final page
        const timer = setTimeout(() => {
            triggerHeartConfetti();
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-start h-full pt-20 z-10 relative px-4">
            <motion.h1
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                    duration: 1.2, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100 
                }}
                className="text-4xl md:text-7xl lg:text-8xl font-black text-center text-white tracking-tighter leading-none"
                style={{
                    textShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 182, 193, 0.3)',
                    fontWeight: 900
                }}
            >
                HAPPY VALENTINES DAY <br />
                <span className="text-romantic-pink drop-shadow-[0_0_20px_rgba(255,182,193,0.6)]">
                    MY LOVE
                </span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-12 w-64 md:w-96 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,182,193,0.4)] border border-white/10"
            >
                <img 
                    src="/assets/tenor.gif" 
                    alt="Romantic bears animation"
                    className="w-full h-auto block"
                />
            </motion.div>

            {/* Subtle glow behind the text */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] bg-romantic-rose/10 blur-[120px] rounded-full -z-10" />
        </div>
    );
};

export default ValentineWish;
