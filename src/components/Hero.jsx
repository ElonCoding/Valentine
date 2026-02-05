import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onNext }) => {
    const [text, setText] = useState('');
    const fullText = "I have something special for you... ❤️";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full text-center relative z-10 p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="glass-card p-8 rounded-2xl mb-8 max-w-xl shadow-[0_0_30px_rgba(255,182,193,0.2)]"
            >
                <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-romantic-pink to-romantic-lavender drop-shadow-sm min-h-[3.5rem]">
                    {text}
                </h1>
            </motion.div>

            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.5, duration: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,182,193,0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="px-8 py-3 bg-gradient-to-r from-romantic-rose to-romantic-pink text-white rounded-full font-semibold text-lg tracking-wide shadow-lg hover:brightness-110 transition-all"
            >
                Open My Heart
            </motion.button>

            {/* Floating background elements specifically for Hero */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-2xl text-romantic-pink opacity-20"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight + 100
                        }}
                        animate={{
                            y: -100,
                            x: Math.random() * window.innerWidth
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    >
                        ♥
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
