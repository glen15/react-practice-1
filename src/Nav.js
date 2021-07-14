import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
            <ul className="nav__ul">
                <Link className="nav__link" to="/"><li>Gallery</li></Link>
                <Link className="nav__link" to="/about"><li>About</li></Link>
                <Link className="nav__link" to="/language"><li>Language</li></Link>
                <Link className="nav__link" to="/settings"><li>Settings</li></Link>
                <Link className="nav__link" to="/menu"><li>Menu</li></Link>
            </ul>
    )
}
export default withRouter(Nav);