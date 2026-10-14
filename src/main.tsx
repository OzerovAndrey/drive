import React from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource/inter/latin-400.css';import '@fontsource/inter/latin-600.css';import '@fontsource/inter/latin-700.css';
import '@fontsource/barlow-condensed/latin-700.css';import '@fontsource/dm-sans/latin-400.css';import '@fontsource/dm-sans/latin-700.css';import '@fontsource/cormorant-garamond/latin-600.css';
import './styles/tokens.generated.css';import './styles/app.css';
import {App} from './App';
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
