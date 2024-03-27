import React from 'react'
import './Dog.css'
import { Link } from 'react-router-dom';

 function Card() {
  return (
    <div className='overall'>
      <h1 className='h11'>What do you want to adopt?</h1>
    <div className='cards'>
    <div class="card">
    <div class="card__inner">
        <div class="card__side card__side--front">
            <div class="card__image-wrapper">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3RABAwu59bg-4KO7Jsss0HOjdKfHuW5_4g&usqp=CAU" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">Juuuu</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        
        <div class="card__side card__side--back">
            <div class="card__body">
                <p> Name :  Juuuuu<br></br>
                Gender : Male<br></br>
                Age :   4 years old<br></br>
                Breed : Birman
                <br></br>
                Price: $200
                <br></br>
                Decription : Juuuuu is intelligent creatures. It prefer a place where they feel a positive vibration. 



 
                </p>
                
            </div>
            </div>
            
            </div>
            </div>
           
    <div class="card">
    <div class="card__inner">
        <div class="card__side card__side--front">
            <div class="card__image-wrapper">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKuVnzotSA5ezXAwPTk92a6YEKBxaZFVKArg&usqp=CAU" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">Jack</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        <div class="card__side card__side--back">
            <div class="card__body">
            <p> Name :  Jack<br></br>
            Gender : Male<br></br>
            Age :   4 years old<br></br>
            Breed : Ragdoll
            <br></br>
            Price: $200
            <br></br>
            Decription : Jack is intelligent creatures. It prefer a place where they feel a positive vibration. 




            </p>
            </div>
        </div>

    </div>
</div>
<div class="card">
    <div class="card__inner">
        <div class="card__side card__side--front">
            <div class="card__image-wrapper">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-Byucg5USQVPO48-5RS5AeQt8borxg4DqQ&usqp=CAU" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">Softie</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        <div class="card__side card__side--back">
            <div class="card__body">
            <p> Name :  Softie<br></br>
            Gender : Female<br></br>
            Age :   2 years old<br></br>
            Breed : Persian cat
            <br></br>
            Price: $200
            <br></br>
            Decription : Softie is intelligent creatures. It prefer a place where they feel a positive vibration. 




            </p>
            </div>
        </div>

    </div>
</div>
<div class="card">
    <div class="card__inner">
        <div class="card__side card__side--front">
            <div class="card__image-wrapper">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kUsKb38JYISEEQ1mEAgHT2U3F2AjNz4Ppw&usqp=CAU" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">Baby</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        <div class="card__side card__side--back">
            <div class="card__body">
                <p> Name :  Baby<br></br>
                Age :  3 years old<br></br>
                Breed : Burmese cat<br></br>
                Price : $300<br></br>
                Decription : Baby is intelligent creatures. It prefer a place where they feel a positive vibration. 
</p>
            </div>
            </div>
            
            </div>
            </div>
            </div>
            <div className='h1tag'>
            <Link to="/Lastpage">
            <button className='a'>Adapt Juuuu!</button></Link>
            <Link to="/Lastpage">
            <button className='a'>Adapt Jack!</button></Link>
            <Link to="/Lastpage">
            <button className='a'>Adapt Softie!</button></Link>
            <Link to="/Lastpage">
            <button className='a'>Adapt Baby!</button></Link>
</div>

</div>
  )
}


export default Card;


