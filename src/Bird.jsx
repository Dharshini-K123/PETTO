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
                <img src="data:image/jpeg;base64,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" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">Laura</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        
        <div class="card__side card__side--back">
            <div class="card__body">
                <p> Name :  Laura<br></br>
                Gender : Female<br></br>
                Age :   4 years old<br></br>
                Breed : Sparrow
                <br></br>
                Price: $200
                <br></br>
                Decription : Laura is intelligent creatures. It prefer a place where they feel a positive vibration. 



 
                </p>
                
            </div>
            </div>
            
            </div>
            </div>
           
    <div class="card">
    <div class="card__inner">
        <div class="card__side card__side--front">
            <div class="card__image-wrapper">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-X8IOcxnna1FVniQX8rOMUa513GnzVHT6rA&usqp=CAU" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">Nikkie</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        <div class="card__side card__side--back">
            <div class="card__body">
            <p> Name : Nikkie<br></br>
            Gender : Male<br></br>
            Age :   4 years old<br></br>
            Breed : Dove
            <br></br>
            Price: $200
            <br></br>
            Decription : Nikkie is intelligent creatures. It prefer a place where they feel a positive vibration. 




            </p>
            </div>
        </div>

    </div>
</div>
<div class="card">
    <div class="card__inner">
        <div class="card__side card__side--front">
            <div class="card__image-wrapper">
                <img src="data:image/jpeg;base64,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" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">Boo</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        <div class="card__side card__side--back">
            <div class="card__body">
            <p> Name : Boo<br></br>
            Gender : Female<br></br>
            Age :   2 years old<br></br>
            Breed : Humming bird
            <br></br>
            Price: $200
            <br></br>
            Decription : Boo is intelligent creatures. It prefer a place where they feel a positive vibration. 




            </p>
            </div>
        </div>

    </div>
</div>
<div class="card">
    <div class="card__inner">
        <div class="card__side card__side--front">
            <div class="card__image-wrapper">
                <img src="https://images.birdfact.com/production/nightingale-5.jpg?w=1200&h=900&q=80&auto=format&fit=crop&dm=1619014417&s=512fc9aa39947652824f3c25dbae2192" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">Caro</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        <div class="card__side card__side--back">
            <div class="card__body">
                <p> Name : Caro<br></br>
                Age :  3 years old<br></br>
                Breed : Nightingale<br></br>
                Price : $300<br></br>
                Decription : Caro is intelligent creatures. It prefer a place where they feel a positive vibration. 
</p>
            </div>
            </div>
            
            </div>
            </div>
            </div>
            <div className='h1tag'>
            <Link to="/Lastpage">
            <button className='a'>Adapt Laura!</button></Link>
            <Link to="/Lastpage">
            <button className='a'>Adapt Nikie!</button></Link>
            <Link to="/Lastpage">
            <button className='a'>Adapt Booo!</button></Link>
            <Link to="/Lastpage">
            <button className='a'>Adapt caro!</button></Link>
</div>

</div>
  )
}


export default Card;


