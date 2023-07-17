import skills1 from '../assets/imgs/skills1.png'
import Statistique from './Statistique';
import { staistiques } from '../data';
const AboutTeam = () => {
    return (
        <section id='About'>
            <div className='container program_intro'>
                <h5> A PROPOS DE NOUS</h5>
                <h2>Optenez un accompagnement Digitale sur Mesure</h2>
                <img src={skills1} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aspernatur harum? Itaque voluptas debitis dignissimos veritatis provident pariatur eveniet at, laudantium quod neque et culpa, nihil facilis in soluta ullam?</p>
                <div className='about-wrapper'>
                    {
                        staistiques.map(({ id, icon, number, title, domaine }) => {
                            return (
                                <Statistique className='staistiques-program' key={id}>
                                    {icon}
                                    <span>{number}+</span>
                                    <h3>{title}</h3>
                                    <small>{domaine}</small>
                                </Statistique>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;