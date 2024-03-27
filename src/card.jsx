import React from 'react'
import './styles.css'

 function Card() {
  return (
    <div class="card">
    <div class="card__inner">
        <div class="card__side card__side--front">
            <div class="card__image-wrapper">
                <img src="https://th.bing.com/th/id/OIP.6BWKqqFeIsboIJ074BiuNQHaJ5?w=975&h=1303&rs=1&pid=ImgDetMain" alt="dessert" class="card__image"/>
            </div>
            <div class="card__body card__body--flex">
                <h2 class="card__title">dharshini</h2>
                <span class="card__arrow">&rarr;</span>
            </div>
        </div>
        <div class="card__side card__side--back">
            <div class="card__body">
                <p> Red sands and red mountains in the northwestern area of the Tabuk
                    region add natural beauty and geological dimension to Hisma
                    Desert, which has a longstanding history that dates back to 500
                    million years.</p>
            </div>
        </div>

    </div>
</div>



  )
}


export default Card;


