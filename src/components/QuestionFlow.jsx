import React from 'react';
import { motion } from 'framer-motion';

const QuestionFlow = ({ onNext }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full z-10 relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass-card p-10 rounded-2xl max-w-md text-center border-t border-white/30"
            >
                <h2 className="text-2xl md:text-3xl text-white font-light mb-8">
                    Do you believe in <span className="text-romantic-pink font-semibold glow-text">destiny</span>?
                </h2>

                <div className="flex justify-center gap-6">
                    {/* 'No' button that runs away - playful dodging could receive its own complex logic, 
               but for 'Playful dodging buttons' request we can use a simple hover move or just standard flow.
               Let's implement a simple hover move for the 'No' button or just make both work for positivity.
               Prompt said "Playful dodging buttons". 
           */}
                    <motion.button
                        whileHover={{ x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 100 }}
                        className="px-6 py-2 rounded-full border border-white/20 text-white/70 hover:bg-white/10 transition-colors text-sm"
                    >
                        No...
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(200, 162, 200, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onNext}
                        className="px-8 py-2 rounded-full bg-gradient-to-r from-romantic-lavender to-romantic-pink text-white font-medium shadow-md"
                    >
                        Yes, absolutely!
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default QuestionFlow;
