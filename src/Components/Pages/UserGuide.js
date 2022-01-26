import React from 'react';
import '../../App.css';
import './UserGuide.css';

export default function Link1() {
    return (
        <div id="home_container">
            {/* About Website information */}
            <div className="home_content" id="home_about">
                <h1>Aesthetico</h1>
                <p>Let Dreams Become Reality</p>

                <br /> <br />

            </div>

            {/* Video Demo*/}
            <div id="home_hw">
                <h3 className="smaller_h1">Demo + Explanation</h3>

                <div class="embed-responsive embed-responsive-16by9" style={{ width: "60%", margin: "auto" }}>
                    <iframe class="embed-responsive-item" src=""


                        allowfullscreen></iframe>
                </div>

                <h3 className="smaller_h1">Need More Info About How This Repository Work?</h3>
                <p class='text_for_first'>
                    Check Out My Github READ_ME For Additional Info <a href="https://github.com/ZeroTwoData/Shopify-Internship-Image-Repository">https://github.com/ZeroTwoData/Shopify-Internship-Image-Repository </a>
                </p>
                <br></br>

            </div>

        </div >
    );
}
