import CartWidget from '../CartWidget/CartWidget.jsx';
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar-container">
                <img className="logo" src="/images/logo.png" alt="logo The Victorian Way" />
                <ul className="container-list">
                    <li>
                        <button className="dama botonNavbar">Dama</button>
                    </li>
                    <li>
                        <button className="caballero botonNavbar">Caballero</button>
                    </li>
                    <li>
                        <button className="accesorios botonNavbar">Accesorios</button>
                    </li>
                    <li>
                        <CartWidget/>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar;