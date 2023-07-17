import Link from 'next/link';
import { SiLinkedin } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { MdOutlineEmail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';




const Footer = () => {
    return (
        <footer>
            <div className='container footer-container'>
                <article>
                    <Link to="/" className='logo'>
                        <h2>SMLMS</h2>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, maiores.ipsum dolor sit amet consectetur adipisicing elit. Saepe, maiores.ipsum dolor sit amet.</p>
                    <div className='footer-socials'>
                        <a href="http://linkedlin.com" target="_blank" rel="noopener noreferrer"><SiLinkedin /></a>
                        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><SiInstagram /></a>
                    </div>
                </article>
                <article>
                    <h4>Explorer</h4>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">contact</Link>
                </article>
                <article>
                    <h4>Ressources</h4>
                    <Link to="/">Team</Link>
                    <Link to="/">Temoignage</Link>
                    <Link to="/">Realisation</Link>
                </article>
                <article>
                    <h4>Adresse</h4>
                    <span>
                        <MdOutlineLocationOn className='adresse-icon' />
                        87, Tvz6, SOG, Nouakchott, Mauritanie
                    </span>
                    <span>
                        <MdOutlineEmail className='adresse-icon' />
                        <a href="mailto:smlms@gmail.com">smlms@gmail.com</a>
                    </span>
                    <span>
                        <BsTelephone className='adresse-icon' />
                        <a href="Tel:+22266884322">+222 66 88 43 22</a>
                    </span>
                </article>
            </div>
            <div className='footer-copyright'>
                <small>2022 SMLMS All rights Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;