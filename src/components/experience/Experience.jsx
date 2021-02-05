import React, {useState, useEffect} from 'react';
import axios from 'axios';import {BACK_URL, DOMAIN_URL} from '../../http';
import Navigation from '../navigation/Navigation';
import './experience.css';

const Experience = () => {
    const [experience, setExperience] = useState([]); 
        
    useEffect(() => {
         const fetchExp = () => {
            axios
            .get(`${BACK_URL}/experience`)
            .then(res => setExperience(res.data))
         }
         fetchExp()   
     }, []);

    return (
        <div className="section-exp">
            <Navigation />
            <div className="exp-container">
                    {experience.map((exp) => (
                        <div className="exp-map" key={exp.id}>
                            <div className="exp-date">
                                <h4>{exp.date_debut}</h4>
                                <h4>{exp.date_fin}</h4> 
                            </div>
                            <div className="description-exp">
                                <h3>{exp.position}</h3>
                                <h4>{exp.company}</h4>
                                <h5>- {exp.description_1}</h5>
                                <h5>- {exp.description_2}</h5>
                                <h5>- {exp.description_3}</h5>
                            </div> 
                        </div>
                    ))} 
                </div> 
        </div>
    );
};

export default Experience;