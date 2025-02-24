import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import './styles/global.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

const rootElement = document.getElementById('root');

createRoot(rootElement!).render(

        <StrictMode>
                    <App />
        </StrictMode>,

)
