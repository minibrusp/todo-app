import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false)


    useEffect(() => {
        let x = document.documentElement
        x.classList.toggle('dark')
      }, [isDarkTheme])

    return (
        <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider