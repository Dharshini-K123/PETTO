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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZaWYiG7bIaqFi9IqLTWQiXLWi0vEyQ_5Gg&usqp=CAU" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">Buttu</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        
        <div class="card__side card__side--back">
            <div class="card__body">
                <p> Name : BUTTU<br></br>
                Gender :  Female<br></br>
                Age :   2 years old<br></br>
                Breed : Shih Tzu<br></br>
                Price: $200
                <br></br>
                Decription :  Twinkle is a male shih tzu of 3 years old. She is energetic in playing with kids and follows everywhere. She likes is Carrot, Banana, Curd Rice 
                Porridge and boiled egg. 
                </p>
            </div>
            </div>
            
            </div>
            </div>
           
    <div class="card">
    <div class="card__inner">
        <div class="card__side card__side--front">
            <div class="card__image-wrapper">
                <img src="https://images.immediate.co.uk/production/volatile/sites/10/2018/10/2048x1365-Plants-poisonous-to-dogs-GettyImages-123665955-5c197f0.jpg?resize=768,574" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">Rosy</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        <div class="card__side card__side--back">
            <div class="card__body">
                <p> Rosy<br></br>
                Gender :  Female<br></br>
                Age :   3 years old<br></br>
                Breed : Beagle<br></br>
                Price : $300<br></br>
                Decription : She is friendly with everyone and he can easy to minggle up with other.She is very gentle, loving. eats anything everything.</p>
            </div>
        </div>

    </div>
</div>
<div class="card">
    <div class="card__inner">
        <div class="card__side card__side--front">
            <div class="card__image-wrapper">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCSnBLCyQweKGsV6DcThYIcLyYGs-WjM7i6w&usqp=CAU" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">Leo</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        <div class="card__side card__side--back">
            <div class="card__body">
                <p> Name : Leo<br></br>
                Gender :  Male<br></br>
                Age :  4 years old<br></br>
                Breed : Rajapalayam<br></br>
                Price : $250<br></br>
                Decription : He eats mostly chicken, eggs, and rice. He loves to be with people.He can perfectly manage
                in the company of other human beings.He is an active pet.
                </p>
            </div>
        </div>

    </div>
</div>
<div class="card">
    <div class="card__inner">
        <div class="card__side card__side--front">
            <div class="card__image-wrapper">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtSO2QhzvERwEa8Wve4ySSs4CbyP5OkTf_Q&usqp=CAU" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">Happy</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        <div class="card__side card__side--back">
            <div class="card__body">
                <p> Name :  Happy<br></br>
                Age :  3 years old<br></br>
                Breed : lab<br></br>
                Price : $300<br></br>
                Decription : 3 years old Very energetic and playful.He loves to be with people, he has a bit of separation anxiety but he can perfectly manage
                in the company of other human beings or pets.
                </p>
            </div>
            </div>
            
            </div>
            </div>
            </div>
            <div className='h1tag'>
            <Link to="/Lastpage">
            <button className='a'>Adapt Buttu!</button></Link>
            <Link to="/Lastpage">
            <button className='a'>Adapt rosy!</button></Link>
            <Link to="/Lastpage">
            <button className='a'>Adapt leo!</button></Link>
            <Link to="/Lastpage">
            <button className='a'>Adapt Happy!</button></Link>
</div>

</div>
  )
}


export default Card;


