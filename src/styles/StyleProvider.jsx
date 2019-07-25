import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import theme from './theme'

export default function({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                {children}
            </>
        </ThemeProvider>
    )
}
