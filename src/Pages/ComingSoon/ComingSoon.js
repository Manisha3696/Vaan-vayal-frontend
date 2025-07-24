import React from 'react';
import logo from '../../images/logo-1.png';

export default function ComingSoon() {
    return (
        <div style={styles.container}>
            <img src={logo} width="20%" alt="Logo" style={{ margin: 'auto', display: 'block' }} />
            <h1 style={styles.title}>🚀 Coming Soon</h1>
            <p style={styles.subtitle}>We're working hard to launch our new website.</p>
            <p style={styles.footer}>© 2025 Vaan Vayal <br /> Enterprises Private Limited</p>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '10%',
        backgroundColor: '#fff3cd',
        color: '#f8fafc',
        height: '100vh',
    },
    title: {
        fontSize: '3rem',
        marginBottom: '10px',
        color: 'black'
    },
    subtitle: {
        fontSize: '1.25rem',
        marginBottom: '30px',
        color: 'black'
    },
    timer: {
        fontSize: '1.5rem',
        marginBottom: '50px',
    },
    footer: {
        fontSize: '0.9rem',
        color: '#94a3b8',
    },
};