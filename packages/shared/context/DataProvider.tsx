import React, {ReactChild, useState} from "react";
import {DataContext} from "./DataContext";

const DataProvider = ({children}: { children: ReactChild }) => {
    const [count, setCount] = useState<number>(10)
    const incrementCount = () => setCount((c) => c + 1);
    const decrementCount = () => setCount((c) => c - 1);

    const context = {
        count,
        incrementCount,
        decrementCount
    };

    return <DataContext.Provider value={context}>{children}</DataContext.Provider>
}


export default DataProvider;
