import React from 'react';
import { programs } from '../data'
import Card from '../components/Card';
const Programs = () => {
    return (
        <section className='programs'>
            <div className='container programs_container program_intro'>
                <h5>NOTRE OBJECTIF</h5>
                <h2>Accompagner la transformation digitale</h2>
                <p>Nous réunissons des équipes techniques de haut niveau pour repondre au mieux a vos besions</p>
                <div className='programs-wrapper'>
                    {
                        programs.map(({ id, icon, title, info }) => {
                            return (
                                <Card className='programs-program' key={id}>
                                    <img src={icon} alt=" " />
                                    <h3> {title} </h3>
                                    <p> {info} </p>
                                </Card>
                            )

                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Programs;