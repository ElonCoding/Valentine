import React, { useEffect, useRef } from 'react';
import { SpinePlayer } from '@esotericsoftware/spine-player';
import '@esotericsoftware/spine-player/dist/spine-player.css';

const SpineBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            // Placeholder for Spine assets. 
            // In a real scenario, these would be local files like /assets/character.json
            // For now, I'll point to a demo or leave it as a placeholder structure to be filled.
            // Using a generic spineboy demo from esoteric software for visualization if possible, 
            // but robustly, we should allow local.

            try {
                new SpinePlayer(containerRef.current, {
                    // jsonUrl: "assets/spine/character.json",
                    // atlasUrl: "assets/spine/character.atlas",
                    // animation: "idle",
                    // backgroundColor: "#00000000", // Transparent
                    // alpha: true,
                    // showControls: false,
                    // viewport: {
                    //   debugRender: false,
                    // }
                    // For demo purposes, we will supply a blank config that would work if assets existed
                    // or we can use a known public URL for testing if the user allows. 
                    // Given the prompt "Unique in design", we should probably expect local assets.
                    // I will put a placeholder comment here.

                    // DEMO MODE: (Uncomment to test with Spineboy)
                    jsonUrl: '/assets/spine/spineboy-pro.json',
                    atlasUrl: '/assets/spine/spineboy.atlas',
                    animation: 'idle',
                    backgroundColor: '#00000000',
                    alpha: true,
                    showControls: false,
                    preserveDrawingBuffer: true,
                });
            } catch (e) {
                console.error("Spine failed to load", e);
            }
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-50 grayscale-[0.3]"
            style={{ width: '100vw', height: '100vh' }}
        />
    );
};

export default SpineBackground;
