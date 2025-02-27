import React from 'react';
import classes from './catagory.module.css'

function CategoryCard({data}) {
  return (
    <div className={classes.catagory}>
      <a href="">
        <span>
            <h2>{data.title}</h2>
            <img src={data.img} alt="" />
            <p>shop now</p>
        </span>
      </a>
    </div>
  )
}

export default CategoryCard
