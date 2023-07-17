import Image from 'next/image';
import Link from 'next/link';
import header from '../assets/imgs/header-img.png';

const MainHeader = () => {
    return (
        <header className='main-header'>
            <div className='container main-header-container'>
                <div className="main-header-left">
                    <h4>#100DaysOfWorkOut</h4>
                    <h1>Join de legend of IT</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam vitae tempore ipsum iste. Consequuntur.</p>
                    <Link href="/Services" className='btn lg'>Get Started</Link>
                </div>
                <div className='main-header-right'>
                    <div className='main-header-circle'></div>
                    <div className='main-header-image'>
                        <Image className='myImgHeader' src={header} alt="myImgHeader" />
                    </div>
                </div>
            </div>
        </header>
    );
};
export default MainHeader;