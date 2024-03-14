import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import 'lib-flexible';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);