import { createContext, useContext, useState } from "react";

// Istanza del contesto globale
const GlobalContext = createContext();

// Provider per rendere disponibile lo stato globale ai figli
function GlobalProvider({ children }) {

    // Stato per gestire il loader che inizialmente è disattivato
    const [isLoading, setIsLoading] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

// Hook per consumare il contesto
function useGlobal() {
    const context = useContext(GlobalContext);
    return context;
}

// Esporto provider ed hook
export { GlobalProvider, useGlobal }