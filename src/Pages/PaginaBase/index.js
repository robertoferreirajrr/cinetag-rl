import Cabecalho from "Componentes/Cabecalho";
import Container from "Componentes/Container";
import Rodape from "Componentes/Rodape";
import FavoritosProvider from "Contextos/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;