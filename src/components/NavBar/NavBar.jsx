import Logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <nav className="navbar px-3">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <Link className="navbar-brand d-flex align-items-center" to="/"><img className="logo" src={Logo} alt="Logo"/></Link>

                <div className="dropdown-center">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link  className="dropdown-item" to="/categorias/Accesorios">Accesorios</Link></li>
                        <li><Link className="dropdown-item" to="/categorias/Figuras">Figuras</Link></li>
                        <li><Link className="dropdown-item" to="/categorias/Peluches">Peluches</Link></li>
                        <li><Link className="dropdown-item" to="/categorias/Ropa">Ropa</Link></li>
                        <li><Link className="dropdown-item" to="/categorias/Tazas">Tazas</Link></li>
                        <li><Link className="dropdown-item" to="/categorias/Otros">Otros</Link></li>
                    </ul>
                </div>

                <form className="d-flex align-items-center w-50" role="search">
                    <input className="form-control me-2 buscador" type="search" placeholder="Tazas, cuencos, etc."/>
                    <button className="btn btn-light btn-buscar" type="submit">Buscar</button>
                </form>
            
                <CartWidget/>
            </div>
        </nav>

    )
}

export default NavBar