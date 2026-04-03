import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

document.addEventListener('deviceready', () => {
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<App />);
}, false);

// For development in browser
if (window.location.protocol === 'file:' === false) {
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<App />);
}
