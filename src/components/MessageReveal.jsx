import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MessageReveal = ({ onNext }) => {
    const lines = [
        "Every moment with you is a gift.",
        "You make my world brighter even on the darkest days.",
        "I just wanted to remind you...",
        "How much you mean to me."
    ];

    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        if (visibleLines < lines.length) {
            const timeout = setTimeout(() => {
                setVisibleLines(prev => prev + 1);
            }, 2000); // 2 seconds per line
            return () => clearTimeout(timeout);
        } else {
            // Show next button after all lines
            const timeout = setTimeout(() => {
                // Optional auto-advance or just show button. 
                // Prompt says "Button: Always With You" is in final scene, so here we might just transition
                // or have a "Continue" button. Prompt says "Message Reveal" -> "Final Confession Scene".
                // Let's add a subtle continue button or auto transition.
                // Let's do a button for user control.
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [visibleLines]);

    return (
        <div className="flex flex-col items-center justify-center h-full z-10 relative px-6 text-center">
            <div className="space-y-6 max-w-2xl">
                {lines.map((line, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                            opacity: index < visibleLines ? 1 : 0,
                            y: index < visibleLines ? 0 : 10
                        }}
                        transition={{ duration: 1 }}
                        className="text-xl md:text-2xl text-white font-light tracking-wide drop-shadow-md"
                    >
                        {line}
                    </motion.p>
                ))}
            </div>

            {visibleLines >= lines.length && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-12"
                >
                    <button
                        onClick={onNext}
                        className="text-romantic-pink hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 italic"
                    >
                        Continue...
                    </button>
                </motion.div>
            )}

            {/* Heartbeat pulse background effect */}
            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-romantic-rose rounded-full opacity-5 blur-[100px] pointer-events-none"
                animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};

export default MessageReveal;
