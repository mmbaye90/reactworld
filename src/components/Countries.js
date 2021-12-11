import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react/cjs/react.development';

const Countries = () => {
    const[data,setData] = useState([]);
    const url = "https://restcountries.com/v3.1/all?fields=flags,name,population,capital,region";
    const [getApi,setGetApi] = useState(true);
    const[rangeValue,setRangeValue] = useState(3);
    const[dataTransformed,setDataTransformed] = useState([])

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
        <div>
            <div className="sorcontener">
                <input type="range" min="1" max="250" onChange={(e)=>setRangeValue(e.target.value)} />
            </div>
            <ul>
                {dataTransformed.map((country)=>(
                    <li key={country.name.common}>{country.name.common}</li>
                ))}
            </ul>
        </div>
    );
}

export default Countries;
