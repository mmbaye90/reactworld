import React from 'react';
import "../styles/card.css"

function Card({country}) {
    const formatPop=(x)=>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (
      <li className="card">
          <img src={country.flags.svg} alt={country.name.common} />
          <div className="datacontener">
              <ul>
                  <li>{country.name.common}</li>
                  <li>{country.capital}</li>
                  <li>{`${formatPop(country.population)} Hbts`}</li>
              </ul>
          </div>
      </li>
    );
}

export default Card;