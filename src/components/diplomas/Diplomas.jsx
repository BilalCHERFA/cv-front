import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BACK_URL, DOMAIN_URL} from '../../http';
import Navigation from '../navigation/Navigation';
import './diplomes.css';

const Diplomas = () => {
    const [diplomes, setDiplomes] = useState([]); 
        
    useEffect(() => {
         const fetchDiplomes = () => {
            axios
            .get(`${BACK_URL}/diplomes`)
            .then(res => setDiplomes(res.data))
         }
         fetchDiplomes()   
     }, []);

    return (
        <div>
            <Navigation />
            <div className="diplome-container">
                    {diplomes.map((diplome) => (
                        <div className="diplome-map" key={diplome.id}>
                            <div className="diplome-date">
                                <h4>{diplome.date_debut}</h4>
                                <h4>{diplome.date_fin}</h4> 
                            </div>
                            <div className="description-diplome">
                                <h3>{diplome.name}</h3>
                                <h4>{diplome.school}</h4>
                                <h5>- {diplome.program}</h5>
                            </div> 
                        </div>
                    ))} 
                </div> 
        </div>
    );
};

export default Diplomas;