import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterContextProvider({ children, value }) {

    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <CounterContext.Provider
            value={{
                counter,
                setCounter,
                increaseCounter
            }}>

            {/* Este context provider passa para todos os filhos terem acesso ao counter e ao setCounter */}
            {children}
        </CounterContext.Provider>
    )
}