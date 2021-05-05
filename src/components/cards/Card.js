  
// import React, { Component } from 'react';
import {data} from '../../helper/data';
import './Card.css';

const Card = () => {
        const arr=data.map((item, index)=>
            <div className="card" key={item.id} id={item.id}>
                <h1>{item.title}</h1>
                <img src={item.image} alt=""/>
                <div className="overlay">
                    <p className="text">{item.desc}</p>
                </div>
            </div>
        );
        return (
            <div className="container">
                {arr}
            
            {/*BURADA ÇAĞIRILACAKSA RETURNLE KULLANILMALI */
            /* {data.map((item, index)=>{
                    return <div className="card">{item.title}</div>
                }
            )} */}
            </div>
        );
    }


export default Card;