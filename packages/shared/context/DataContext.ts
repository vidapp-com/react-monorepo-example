import {createContext} from "react";
import {createContextHook} from "../src/createContextHook";

interface DataContextInterface {
    count: number;
    incrementCount: () => void;
    decrementCount: () => void;
}

export const DataContext = createContext<DataContextInterface | undefined>(undefined);


export const useData = createContextHook(DataContext, 'useData');
