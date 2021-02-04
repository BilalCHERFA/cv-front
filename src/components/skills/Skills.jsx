import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BACK_URL, DOMAIN_URL} from '../../http';
import Navigation from '../navigation/Navigation';
import './skills.css';


const Skills = () => {
    const [skills, setSkills] = useState([]); 
        
    useEffect(() => {
         const fetchSkills = () => {
            axios
            .get(`${BACK_URL}/competences`)
            .then(res => setSkills(res.data))
         }
         fetchSkills()   
     }, []);

    return (
        <div className="section-container">
                <Navigation />
                <div className="skills-container">
                    {skills.map((skill) => (
                        <div className="skill" key={skill.id}>
                            <h3>{skill.title}</h3> 
                            <div className="description-skill">
                                <h5>{skill.description_1}</h5>
                                <h5>{skill.description_2}</h5>
                                <h5>{skill.description_3}</h5>
                            </div> 
                        </div>
                    ))} 
                </div>
        </div>
    );
};

export default Skills;