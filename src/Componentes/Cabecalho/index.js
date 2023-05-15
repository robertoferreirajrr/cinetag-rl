import { Link } from "react-router-dom";
import styles from './Cabecalho.module.css';
import CabecalhoLink from "./CabecalhoLink";
import logo from 'assets/imagens/Logo-cinetag-branco1.png'

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;