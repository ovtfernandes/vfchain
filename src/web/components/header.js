import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">VFChain</Link>

            <div>
                <Link to="/settings" className="btn btn-outline-light">Settings</Link>
            </div>
        </nav>
    );
}

export default Header;
