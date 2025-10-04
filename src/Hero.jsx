import React from 'react';

const Hero = () => (
    <section
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '70vh',
            background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
            color: '#fff',
            textAlign: 'center',
            padding: '2rem'
        }}
    >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Hi, I'm Zaki
        </h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '2rem' }}>
            I'm a passionate developer building modern web experiences.
        </p>
        <a
            href="#projects"
            style={{
                padding: '0.75rem 2rem',
                background: '#fff',
                color: '#6e8efb',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 'bold',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
        >
            View My Work
        </a>
    </section>
);

export default Hero;