import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeartBackground from './components/HeartBackground';
import CursorTrail from './components/CursorTrail';
import Vignette from './components/Vignette';
import MusicToggle from './components/MusicToggle';
import Hero from './components/Hero';
import QuestionFlow from './components/QuestionFlow';
import MessageReveal from './components/MessageReveal';
import FinalScreen from './components/FinalScreen';

function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#2a0a18] to-[#1a0510] text-white">
      {/* Background Layer */}
      <HeartBackground />
      <Vignette />

      {/* Interactive Layer */}
      <CursorTrail />
      <MusicToggle />

      <main className="relative z-20 w-full h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Hero onNext={nextStep} />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <QuestionFlow onNext={nextStep} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <MessageReveal onNext={nextStep} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="final"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <FinalScreen />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
