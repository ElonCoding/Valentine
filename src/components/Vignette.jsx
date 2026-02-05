import React from 'react';

const Vignette = () => {
    return (
        <div
            className="fixed inset-0 z-10 pointer-events-none"
            style={{
                background: 'radial-gradient(circle, rgba(0,0,0,0) 50%, rgba(42, 10, 24, 0.4) 100%)'
            }}
        />
    );
};

export default Vignette;
