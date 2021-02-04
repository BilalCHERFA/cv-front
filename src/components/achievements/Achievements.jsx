import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BACK_URL, DOMAIN_URL} from '../../http';
import Navigation from '../navigation/Navigation';
import './achievements.css'

const Achievements = () => {
    const [achievements, setAchievements] = useState([]); 
        
    useEffect(() => {
         const fetchAchievements = () => {
            axios
            .get(`${BACK_URL}/realisations`)
            .then(res => setAchievements(res.data))
         }
         fetchAchievements()   
     }, []);

    return (
        <div className="section-achiev">
            <Navigation />
            <div className="achiev-container">
                    {achievements.map((achiev) => (
                        <div className="achiev" key={achiev.id}>
                            <img className="project_image" src={`${DOMAIN_URL}/upload/${achiev.picture_url}`} alt={achiev.project_title}/>  
                            <h4>{achiev.project_title}</h4>          
                        </div>
                    ))} 
                </div>
        </div>
    );
};

export default Achievements;