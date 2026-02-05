import confetti from 'canvas-confetti';

export const triggerHeartConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // transform heart shape
        // confetti usually supports squares/circles. For hearts, we might need a custom shape 
        // or just use colors. `canvas-confetti` supports shapes but custom shapes need SVGs.
        // For simplicity and robustness, we'll use circles with romantic colors first, 
        // or try scalar 'heart' if available in newer versions, but standard is circle/square.
        // Let's stick to standard shapes with romantic colors.

        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            colors: ['#ffb6c1', '#c8a2c8', '#b03060', '#ffffff'],
            shapes: ['circle']
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            colors: ['#ffb6c1', '#c8a2c8', '#b03060', '#ffffff'],
            shapes: ['circle']
        });
    }, 250);
};
