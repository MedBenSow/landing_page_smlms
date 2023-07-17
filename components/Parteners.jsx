import Image from 'next/image'
import Client1 from '../assets/imgs/clients/client-1.png'
import Client2 from '../assets/imgs/clients/client-2.png'
import Client3 from '../assets/imgs/clients/client-3.png'
import Client4 from '../assets/imgs/clients/client-4.png'
import Client5 from '../assets/imgs/clients/client-5.png'
import Client6 from '../assets/imgs/clients/client-6.png'

const Parteners = () => {
    return (
        <div className='container parteners'>
            <Image className='parterners-img' src={Client1} alt="client-1"
            />
            <Image className='parterners-img' src={Client2} alt="client-2" />
            <Image className='parterners-img' src={Client3} alt="client-3" />
            <Image className='parterners-img' src={Client4} alt="client-4" />
            <Image className='parterners-img' src={Client5} alt="client-5" />
            <Image className='parterners-img' src={Client6} alt="client-6" />
        </div>
    );
};

export default Parteners;