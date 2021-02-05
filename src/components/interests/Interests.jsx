import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BACK_URL, DOMAIN_URL} from '../../http';
import Navigation from '../navigation/Navigation';
import './interests.css';

const Interests = () => {
    const [interests, setInterets] = useState([]); 
        
    useEffect(() => {
         const fetchInterests = () => {
            axios
            .get(`${BACK_URL}/interets`)
            .then(res => setInterets(res.data))
         }
         fetchInterests()   
     }, []);

    return (
        <div className="section-interest">
            <Navigation />
                <div className="interests-container">
                    {interests.map((interest) => (
                        <div className="interest-map" key={interest.id}>
                            <h3>{interest.name}</h3> 
                            <div className="description-interets">
                                <h5>{interest.description}</h5>
                            </div> 
                        </div>
                    ))} 
                </div>
        </div>
    );
};

export default Interests;