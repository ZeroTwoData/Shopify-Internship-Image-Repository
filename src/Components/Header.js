import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {

    return (
        <>
            <header>
                {/*Repo Section*/}
                <div id="header-container">
                    <Link to="/" className="header-link">
                        <div id="header-logo" />
                        <h1>PC Setup Image Repository</h1>
                    </Link>
                </div>

                {/*FAQs Section*/}
                <nav>
                    <Link to="/guide" className="header-link">
                        FAQs
                    </Link>
                </nav>
            </header>
        </>
    );
}

export default Header;