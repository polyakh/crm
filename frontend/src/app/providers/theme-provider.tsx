import '@mantine/core/styles.css';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { useState } from 'react';

import { lightTheme, darkTheme } from '../../styles/theme'


function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<MantineThemeOverride>(darkTheme);

    const toggleTheme = () => {
        setTheme(current => current === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <MantineProvider
            globalStyles={(theme) => ({
                '.mantine-InputWrapper-label': {
                    fontWeight: 700,
                },
            })}
            theme={theme}
        >
            {children}
        </MantineProvider>
    );
}

export default ThemeProvider