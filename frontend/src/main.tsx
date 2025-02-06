import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { DependenciesProvider} from './core/di'
import { ThemeProvider } from './app/providers/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(

        <StrictMode>
            <DependenciesProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>

            </DependenciesProvider>

        </StrictMode>,

)
