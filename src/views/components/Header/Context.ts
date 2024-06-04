import React from "react";

export const headContex = React.createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(['', () => {}])
export const useHeader = () => {
    const context = React.useContext(headContex)
    if (!context) {
        throw new Error('useHeader must be used within a HeaderProvider')
    }
    return context
}
