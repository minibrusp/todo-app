import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false)

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('color-theme')) === true || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDarkTheme(true)
        } else {
            document.documentElement.classList.remove('dark')
            // setIsDarkTheme(false)
        }
    }, [])

    useEffect(() => {
        let app = document.documentElement
        isDarkTheme ? app.classList.add('dark') : app.classList.remove('dark')
        localStorage.setItem('color-theme', JSON.stringify(isDarkTheme))
      }, [isDarkTheme])

    return (
        <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider