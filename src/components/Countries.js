import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react/cjs/react.development';
import Card from './Card';
import "../styles/countries.css"

const Countries = () => {
    const[data,setData] = useState([]);
    const url = "https://restcountries.com/v3.1/all?fields=flags,name,population,capital,region";
    const [getApi,setGetApi] = useState(true);
    const[rangeValue,setRangeValue] = useState(10);
    const[dataTransformed,setDataTransformed] = useState([])
    const continents = ["Africa","America","Asia","Europe","Oceania"]
    const [radioChecked,setRadioChecked] = useState(" ");

    useEffect(() => {
        if(getApi){
            axios
        .get(url)
        .then(res =>setData(res.data))
        setGetApi(false)
        };
        const arrtransforme=()=>{
            const objcData = Object.keys(data).map((i)=>data[i]);
            const arr = objcData.sort((a,b)=>{
                return b.population - a.population;
            })
            arr.length = rangeValue
            setDataTransformed(arr)
        }
        arrtransforme()
       
        //     const datObject = Object.keys(data).map((i)=>data[i]);
        //     const arr = datObject
        // }
        // dataConverti()
    }, [data,getApi,rangeValue]);

    return (
        <div className="countries">
            <div className="sorcontener">
                <input type="range" value={rangeValue} min="1" max="250" onChange={(e)=>setRangeValue(e.target.value)} />
                <ul>
                   {
                    continents.map((continent)=>(
                       
                           <li key={continent}>
                               <input 
                               type="radio"
                               name={continent} 
                               id={continent} 
                               value={continent}
                               checked={continent === radioChecked}
                               onChange={(e)=>setRadioChecked(e.target.value)}/>
                               <label htmlFor={continent}>{continent}</label>
                           </li>
                       
                    ))}
                </ul>
               
            </div>
             <div className="annuler">
             {radioChecked &&(
              <h5 onClick={() => setRadioChecked("")}>Annuler recherche</h5>
            )}
                </div>
            <ul className="listcountries">
                {dataTransformed
                .filter(country=>country.region.includes(radioChecked))
                .map((country)=>(
                    <Card key={country.name.official} country={country}/>
                ))}
                
            </ul>
        </div>
    );
}

export default Countries;
