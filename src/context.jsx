import React, { createContext, useState } from 'react'

const myContext = createContext()

function ProviderWrapper(props) {

    const [lang, setLang] = useState("sp")

    return (
        <myContext.Provider value={{lang, setLang}}>
            {props.children}
        </myContext.Provider>
    )
}

export {myContext, ProviderWrapper}