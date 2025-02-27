import React from 'react';
import { catagoryInfo } from './catagoryFullInfos';
import CategoryCard from './CategoryCard';
import classes from './catagory.module.css'

function Category() {
  return (
    <section className= {classes.catagory__container}>
        {
            catagoryInfo.map((info)=>(
                <CategoryCard data={info} />
            )
            )
        }
    </section>
  )
}

export default Category
