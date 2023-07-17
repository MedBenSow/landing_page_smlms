import Image from 'next/image';
import logo1 from '../assets/imgs/references/logo1.png';
import logo2 from '../assets/imgs/references/logo2.png';
import logo3 from '../assets/imgs/references/logo3.png';
import logo4 from '../assets/imgs/references/logo4.png';
import logo5 from '../assets/imgs/references/logo5.png';
import logo6 from '../assets/imgs/references/logo6.png';
const References = () => {
    return (
        <div className='container reference-container program_intro'>
            <h5>NOS REFERENCES</h5>
            <h2>De riche projets business</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='reference-image'>
                <Image src={logo1} alt="" />
                <Image src={logo2} alt="" />
                <Image src={logo3} alt="" />
                <Image src={logo4} alt="" />
                <Image src={logo5} alt="" />
                <Image src={logo6} alt="" />
            </div>
        </div>
    );
};

export default References;