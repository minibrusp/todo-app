import React, { createContext} from 'react'

export const AnimationContext = createContext()

const AnimationContextProvider = ({children}) => {


    <AnimationContext.Provider value={{}}>
        {children}
    </AnimationContext.Provider>
}

export default AnimationContextProvider