import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('app');

// Component
// Rule1: first letter Capital
// Rele2: return single element
// rule3: apply style as an object and properties in camel case
// rule4: use className instead class

const root = createRoot(container);
root.render(<App />);
