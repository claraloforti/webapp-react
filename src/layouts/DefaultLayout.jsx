import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";

const DefaultLayout = () => {
    return (
        <>
            <MainHeader /> {/* Componente sempre visibile */}
            <main className="container">
                <Outlet /> {/* Segnaposto per il contenuto dinamico in base alla rotta corrente */}
            </main>
        </>
    )
}

export default DefaultLayout