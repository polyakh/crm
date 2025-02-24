import { ThemeProvider, AppRouter } from '~app/providers'
import { ModalProvider } from '~shared/components'
import { DependenciesProvider } from '~core/di'

function App() {

    return (
        <DependenciesProvider>
            <ThemeProvider>
                <ModalProvider>
                    <AppRouter />
                </ModalProvider>
            </ThemeProvider>
        </DependenciesProvider>
    );
}

export default App
