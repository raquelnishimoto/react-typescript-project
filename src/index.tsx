import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// Get the div with "root" as id added in index.html  
const reactContainer = document.getElementById('root')!

// Render your React component instead
const root = createRoot(reactContainer);
root.render(<App />);