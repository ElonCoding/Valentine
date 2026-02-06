import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicToggle = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Initial autoplay attempt
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.3;

        // Try to play on first interaction with the document
        const handleFirstInteraction = async () => {
            try {
                await audio.play();
                setIsPlaying(true);
                document.removeEventListener('click', handleFirstInteraction);
                document.removeEventListener('touchstart', handleFirstInteraction);
            } catch (err) {
                console.log("Autoplay still blocked or failed");
            }
        };

        document.addEventListener('click', handleFirstInteraction);
        document.addEventListener('touchstart', handleFirstInteraction);

        return () => {
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('touchstart', handleFirstInteraction);
        };
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed top-6 right-6 z-50">
            <audio ref={audioRef} loop src="/music/romantic_instrumental.mp3" /> {/* Placeholder src */}
            <button
                onClick={togglePlay}
                className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all text-romantic-pink border border-white/20 shadow-[0_0_15px_rgba(255,182,193,0.3)] animate-pulse-slow"
            >
                {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </button>
        </div>
    );
};

export default MusicToggle;
