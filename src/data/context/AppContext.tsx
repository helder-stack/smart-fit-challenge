'use client'

import { createContext, useState } from "react";

export const AppContext = createContext({
    locations: [],
    setLocations: (e?:any) => {}
})

export default function AppProvider(props: any) {

    const [locations, setLocations] = useState([])

    return (
        <AppContext.Provider value={
            {
                locations,
                setLocations
            }
        }>
            {
                props.children
            }
        </AppContext.Provider>
    )
}