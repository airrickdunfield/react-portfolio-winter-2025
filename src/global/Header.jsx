import { Link } from "react-router";
import logo from "../assets/logo.png";

import "./Header.css";

function Header() {

    return (
        <header className="site-header">
            <div className="container">
                <div className="grid vertical-center">

                    <div className="col-3">
                        <img src={logo} className="site-logo" />
                    </div>

                    <div className="col-9 header-menu">
                        <nav>
                            <ul className="inline-menu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/work">Work</Link></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    );

}

export default Header;