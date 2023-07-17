import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import './navigation.css'

const Navigation = () => {
    const [navMobile, setNavMobile] = useState('');
    const [color, setColor] = useState(false);

    const changeStyleNavMobile = () => {
        setNavMobile(active => !active);
    }

    const changeColorNav = () => {
        if (window.scrollY >= 60) {
            setColor(true);
        }
        else {
            setColor(false);
        }
        // console.log(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', changeColorNav);
    }, [])
    return (
        <nav className={`navigation ${color ? 'nav-change-color' : ''}`} >
            <div className='container'>
                <ul className={`nav ${navMobile ? 'active' : ''} `} onClick={changeStyleNavMobile}>
                    <li>
                        <Link href="/" className={({ isActive }) => isActive ? 'active-nav' : ''}>
                            Home
                        </Link >
                    </li>
                    <li>
                        <Link href="/" >
                            Services
                        </Link >
                    </li>
                    <li>
                        <Link href="/" >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className={`nav-container `} >
                    <Link href="/" className='logo'>
                        <h2>SMLMS</h2>
                    </Link>
                    <button type="button" aria-label="toggle curtain navigation" className={`nav-toggle ${navMobile ? 'active' : ''}`} onClick={changeStyleNavMobile} >
                        <span className='line l1' ></span>
                        <span className='line l2' ></span>
                        <span className='line l3' ></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;