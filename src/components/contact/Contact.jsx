import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BACK_URL, DOMAIN_URL} from '../../http';
import Navigation from '../navigation/Navigation';
import './contact.css'

const Contact = () => {
    const [contact, setContact] = useState([]); 
        
    useEffect(() => {
         const fetchContact = () => {
            axios
            .get(`${BACK_URL}/contact`)
            .then(res => setContact(res.data))
         }
         fetchContact()   
     }, []);

    return (
        <div className="section-contact">
            <Navigation />
            <div className="contact-container">
                    {contact.map((item) => (
                        <div className="contact-map" key={item.id}>
                            <h3>{item.adresse}</h3> 
                            <h5>{item.city}</h5>
                            <h5>{item.email}</h5>
                            <h5>{item.lien_linkedin}</h5>
                            <h5>{item.lien_github}</h5>

                         
                        </div>
                    ))} 
                </div>
        </div>
    );
};

export default Contact;