import { createContext, ReactNode, useContext } from "react";
import { dependencies, AppDependencies } from "./dependencies";

const DependenciesContext = createContext<AppDependencies | undefined>(undefined);

export const DependenciesProvider = ({ children }: { children: ReactNode }) => {
    return (
        <DependenciesContext.Provider value={dependencies}>
            {children}
        </DependenciesContext.Provider>
    );
};

export function useDependencies(): AppDependencies {
    const context = useContext(DependenciesContext);
    if (!context) {
        throw new Error("useDependencies must be used within a DependenciesProvider");
    }
    return context;
}