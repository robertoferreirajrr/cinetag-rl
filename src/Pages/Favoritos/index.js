import styles from './Favoritos.module.css';
import Banner from "Componentes/Banner";
import Card from 'Componentes/Card';
import Titulo from "Componentes/Titulo";
import { useFavoritoContext } from 'Contextos/Favoritos';

function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;