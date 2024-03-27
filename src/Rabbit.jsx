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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfWOSAlNT9RicjK1_WE5mpHoUzg3lVWN7tQ&usqp=CAU" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">PETER</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        
        <div class="card__side card__side--back">
            <div class="card__body">
                <p> 
                Name :  Peter<br></br>
                Gender :  Male<br></br>
                Age :  4 years old<br></br>
                Breed : Angora rabbit<br></br>
                Price : 120<br></br>
                Decription : Peter remind most people of a soft toy. Peter has cute because they have soft velvet ears and a little nose that is always twitches. 
                
                </p>
                
            </div>
            </div>
            
            </div>
            </div>
           
    <div class="card">
    <div class="card__inner">
        <div class="card__side card__side--front">
            <div class="card__image-wrapper">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHzG-rglTbr1qtGsbbhVs7WktxhAGuIV7y_su9xQeJnsZ8S3WeM5wsgcs2lTpuzo1Qdk&usqp=CAU" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">COCO</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        <div class="card__side card__side--back">
            <div class="card__body">
            <p> 
            Name :  Coco<br></br>
Gender :  Male<br></br>
Age :  3 years old<br></br>
Breed : Dutch rabbit<br></br>
Price : $100<br></br>
Decription :  Coco Very energetic. Coco loves to be with people, he has a bit of separation anxiety but he can perfectly manage
in the company of other human beings.
            </p>
            </div>
        </div>

    </div>
</div>
<div class="card">
    <div class="card__inner">
        <div class="card__side card__side--front">
            <div class="card__image-wrapper">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktzHFMQG2J63XpVEWyDR5TkOBBy8LuTUA1BIWxg3I1GKiHHaeqLEe_hfOdcAD6ohZxyQ&usqp=CAU" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">COOKIE</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        <div class="card__side card__side--back">
            <div class="card__body">
            <p> 
            Name : Cookie<br></br>
            Gender :  Female<br></br>
            Age :   2 years old<br></br>
            Breed : English Lop<br></br>
            Price : $140<br></br>
            Decription : Cookie prefer a place where it feel a positive vibration. A house with peace and harmony attracts cookie to stay in.
            
            </p>
            </div>
        </div>

    </div>
</div>
<div class="card">
    <div class="card__inner">
        <div class="card__side card__side--front">
            <div class="card__image-wrapper">
                <img src="https://www.mulberrylanevet.com.au/wp-content/uploads/2020/11/rabbit-pic-1.jpg" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">SARA</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        <div class="card__side card__side--back">
            <div class="card__body">
                <p> 
                Name : Sara<br></br>
Gender :  Female<br></br>
Age :   3 years old<br></br>
Breed :  Havana<br></br>
Price : 100<br></br>
Decription : Sara remind most people of a soft toy. Sara has cute soft velvet ears,little nose that is always twitches. 
Sara have different personalities.
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


