import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import { img } from './img/data';
// import classes from '../Header/Header.module.css'
import classes from '../Carousel/Carousel.module.css';

function CarouselEffect() {
  return (
    <div>
      <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
      >
        {
            img.map((imageItemLink)=>{
                return <img key={imageItemLink} src={imageItemLink} alt='images'/> 
            })
        }


      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  )
}

export default CarouselEffect
