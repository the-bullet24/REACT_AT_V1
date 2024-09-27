import { Link } from 'react-router-dom'
import style from './Cabecera.module.css'
function Cabecera() {
    return (
        <div className={style.top_container}>
            <header>
                <h1>BetMaster</h1>
                <p>Tu sitio de confianza para apuestas deportivas</p>
            </header>

            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/deportes">Deportes</Link>
                <Link to="/en-vivo">En vivo</Link>
                <Link to="/promociones">Promociones</Link>
                <Link to="/Micuenta">Mi cuenta</Link>
            </nav>


            
        </div>
    )
}

export default Cabecera