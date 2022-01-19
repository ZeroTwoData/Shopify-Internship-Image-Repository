import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-share">
                <Link to='/' id="footer-box">
                    <div className="footer-logo" />
                    <h3 id="footer-title">PC Setup Image Repository</h3>
                </Link>
                <h5 className="footer-credit">Created By <span>Ralph Worley</span> | All Rights Reserved | © 2022 ZeroTwoData </h5>
            </section>
        </div>
    );
}

export default Footer
