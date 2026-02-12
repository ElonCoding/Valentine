import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { triggerHeartConfetti } from '../utils/celebration';

const FinalScreen = ({ onNext }) => {

    const handleCelebrate = () => {
        triggerHeartConfetti();
        if (onNext) {
            setTimeout(() => {
                onNext();
            }, 2000); // Give time for confetti before moving to the very last page
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full z-10 relative">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 1.5 }}
                className="mb-8"
            >
                <Heart
                    size={100}
                    className="text-romantic-pink drop-shadow-[0_0_15px_rgba(255,182,193,0.8)]"
                    fill="currentColor"
                />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-3xl md:text-5xl font-bold text-white mb-12 text-center"
            >
                You make my world <span className="text-romantic-lavender">brighter</span> every day.
            </motion.h1>

            <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255, 182, 193, 0.6)" }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                onClick={handleCelebrate}
                className="px-10 py-4 bg-gradient-to-r from-romantic-rose to-romantic-pink rounded-full text-xl font-bold text-white shadow-2xl relative overflow-hidden group"
            >
                <span className="relative z-10">Always With You</span>
                <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
        </div>
    );
};

export default FinalScreen;
