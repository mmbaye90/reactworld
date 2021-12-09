import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
             <NavLink exact to="/" >Accueil</NavLink>
             <NavLink exact to="/about">About</NavLink>
        </div>
       

    );
};

export default Navigation;