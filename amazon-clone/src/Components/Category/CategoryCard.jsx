import React from 'react';
import classes from './catagory.module.css'
import { Link } from 'react-router-dom';

function CategoryCard({data}) {
  return (
    <div className={classes.catagory}>
      <Link to={`/category/${data.name}`}>
        <span>
            <h2>{data.title}</h2>
            <img src={data.img} alt="" />
            <p>shop now</p>
        </span>
      </Link>
    </div>
  )
}

export default CategoryCard
