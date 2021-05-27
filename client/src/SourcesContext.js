/* React */
import { createContext } from "react";

const SourcesContext = createContext({
    sources: {},
    setContextSources: () => {},
});

export default SourcesContext;
