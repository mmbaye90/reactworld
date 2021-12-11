import React from 'react';
import axios from 'axios';
import{useState,useEffect} from "react"
import Card from './Card';

const Countries = () => {
    const[data,setData]=useState([]);
    const url = "https://restcountries.com/v3.1/all?fields=flags,name,population,capital,region";

    useEffect(() => {
        axios
        .get(url)
        .then(res=>{
            setData(res.data)
        })
        
    },[]);
    return (
        <div className="countries">
            <ul>
                {data.map(country=>(
                    <Card country ={country}/>
                ))}
            </ul>
        </div>
    );
};

export default Countries;