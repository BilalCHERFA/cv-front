import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {BACK_URL} from '../../http';
import './navigation.css';

const Navigation = () => {
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
        <div className="sidebar">
            
            <div className="idcContent">
                <h3>{apropos.firstname} {apropos.lastname}</h3>
                <h5> {apropos.title}</h5>
                <a href="./media/CvBilalCHERFA.pdf" target="_blank">Télécharger le Cv</a>
            </div>  
            
            <ul className="item-navigation">
                <li>
                    <Link exact to="/" className="navLink" activeStyle={{ color: 'red' }}>Acceuil</Link>
                </li>
                <li>
                    <Link exact to="/competences" className="navLink"> Compétences</Link>
                </li>
                <li>
                    <Link exact to="/realisations" className="navLink">Réalisations</Link>
                </li>
                <li>
                    <Link exact to="/experience" className="navLink">Expérience</Link>
                </li>
                <li>
                    <Link exact to="/diplomes" className="navLink">Diplômes</Link>
                </li>
                <li>
                    <Link exact to="/interets" className="navLink">Intérêts</Link>
                </li>
                <li>
                    <Link exact to="/contact" className="navLink">Contact</Link>
                </li>
            </ul>

        </div>
    );
};

export default Navigation;