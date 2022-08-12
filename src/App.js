
import './App.css';
import React, { useState } from 'react';



function App(props) {

 const[description,setDescription]= useState(false)

  return (

       <div className="conteiner">
    <div className="head">{props.data.Name +'   '+ props.data.SurName}</div>

    <div className="mainBody">
        <div className="picture"> <img src={props.data.image} alt={props.data.id}/></div>
        <div className="description">
            <p><span>Имя:</span> {props.data.Name}</p>
            <p><span>Фамилия:</span> {props.data.SurName}</p>
            <p><span>Возраст:</span> {props.data.fullYearsOld}</p>
            <p><span>Семейное положение:</span> {props.data.family}</p>
            <p><span>Cтрана:</span> {props.data.country}</p>
            <p><span>Тел.:</span> {props.data.tell}</p>
            <p><span>Email:</span> {props.data.email}</p>
            <p className="lsDesc">{props.data.description}</p>
           
        </div>
    </div>
    <div className="footer">
        <button 
            onClick={()=>setDescription(prev =>!prev)}
            >{description? 'Cкрыть':'Подробнее..'}</button>
            {description && <p>{props.data.allDescription}</p>}
    </div>
    
 </div>
   
  );
}

export default App;
