import React, {ReactChild, ReactChildren} from "react";
import DataProvider from "./context/DataProvider";

const SharedContext = ({children}: { children: ReactChild }) => {

    return <DataProvider>{children}</DataProvider>
}

export default SharedContext
