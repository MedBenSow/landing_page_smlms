import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'


const Contact = () => {
    return (
        <section className=''>
            <div className='program_intro'>
                <h5>Get in touch</h5>
                <h2>Contact</h2>
            </div>
            <div className='container contact-container'>
                <div className=' contact-options'>
                    <article className='contact-option'>
                        <MdOutlineEmail className='contact-option-icon' />
                        <h4>Email</h4>
                        <h5>smlms@gmail.com</h5>
                        <a href="mailto:smlms@gmail.com">Envoyez un message</a>
                    </article>
                    <article className='contact-option'>
                        <RiMessengerLine className='contact-option-icon' />
                        <h4>Messenger</h4>
                        <h5>SMLMS</h5>
                        <a href="http://m.me/smlms">Envoyez un message</a>
                    </article>
                    <article className='contact-option'>
                        <BsWhatsapp className='contact-option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+222 66 88 43 22</h5>
                        <a href="http://api.whatsapp.com/send?phone+22266884322">Envoyez un message</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name='name' placeholder='Nom complet' required />
                    <input type="email" name='email' placeholder='email' required />
                    <textarea name="message" rows="7" placeholder='message' required></textarea>
                    <button type='submit' className='btn'>Envoyez</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;