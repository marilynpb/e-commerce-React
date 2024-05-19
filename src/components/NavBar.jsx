import Logo from '../assets/logo.png'
import CartWidget from './CartWidget';


const NavBar = () => {
    return(
        <nav className="navbar px-3">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <a className="navbar-brand d-flex align-items-center"><img className="logo" src={Logo} alt="Logo"/></a>

                <div class="dropdown-center">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Decoración</a></li>
                        <li><a class="dropdown-item" href="#">Tazas</a></li>
                        <li><a class="dropdown-item" href="#">Vajilla</a></li>
                        <li><a class="dropdown-item" href="#">Otros</a></li>
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