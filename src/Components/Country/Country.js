import React from 'react';
import './Country.css'
const Country = (props) => {
        // console.log(props.country)
        const {name, area, population,flags,capital} = props.country
        return (
                <div className='country'>
                        <h1>Country name: {name.common}</h1>
                        <img src={flags.png} alt="" />
                        <h2>Capital :{capital}</h2>
                        <h2>Population : {population}</h2>
                        <p>Area : {area}</p> 
                        <button>Details</button>
                </div>
        );
};

export default Country;