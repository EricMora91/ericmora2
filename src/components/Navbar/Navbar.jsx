import CartWidget from '../CartWidget/CartWidget.jsx';
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {

    return (
        <nav className="navbar-container">
            <Link to="/">
                <img className='logo' src="/images/logo.png" alt="logo The Victorian Way" />
            </Link>
            <NavLink to="/categoría/Dama" className="botonNavbar" id='dama'>Dama</NavLink>
            <NavLink to="/categoría/Caballero" className="botonNavbar" id='caballero'>Caballero</NavLink>
            <NavLink to="/cart" className="botonNavbar" id='carrito'>
                <CartWidget/>
            </NavLink>
        </nav>
    )
}

export default Navbar;