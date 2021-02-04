import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BACK_URL, DOMAIN_URL} from '../../http';
import Navigation from '../navigation/Navigation';
import './about_me.css';

const AboutMe = () => {
    const [apropos, setApropos] = useState([]); 
        
        useEffect(() => {
             const fetchApropos = () => {
                axios
                .get(`${BACK_URL}/a-propos`)
                .then(res => setApropos(res.data[0]))
             }
             fetchApropos()   
         }, []);

    return (
        <div>
            <Navigation/>
            <div  className="section-apropos">
                <div className="aprpos-title">
                    <h2>À PROPOS</h2>
                    <p>Mon profil en quelques mots.</p>
                </div>

                <div className="description-container">
                    <img className="Bilal_image" src={`${DOMAIN_URL}/upload/${apropos.picture_url}`} alt={apropos.lastname}/>            
                    <p className="apropos-description">"{apropos.description}"</p>
                </div>
            </div>
        </div>


    );
};

export default AboutMe;