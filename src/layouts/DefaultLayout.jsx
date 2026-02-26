import { Outlet } from "react-router-dom";
import { useGlobal } from "../contexts/GlobalContext";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";

const DefaultLayout = () => {

    // Recupero stato globale del loader dal contesto
    const { isLoading } = useGlobal();

    return (
        <>
            <MainHeader /> {/* Componente sempre visibile */}
            <main className="container">
                <Outlet /> {/* Segnaposto per il contenuto dinamico in base alla rotta corrente */}
            </main>
            {/* Se isLoading è true, mostra il Loader */}
            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayout