import React from 'react';
import './Footer.css';

function Footer(){
    return (
        <footer>
            <div className="footer-content">
                <p>© 2023. All Rights Reserved.</p>
                <p>Design - Zoe Zhu. Icons by <a target="_blank" href="https://icons8.com">Icons8</a>.</p>
                
                <div className="social-links">
                    <a href="https://github.com/zoey402" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/zihan-zoe-zhu-521994260/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;