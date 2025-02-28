import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ProductUrl } from '../../Api/endPoints'
import { useEffect } from 'react';
import classes from '../Results/Results.module.css'
import ProductCard from '../../Components/Product/ProductCard'

function Results() {
    const [results,setResults]=useState([]);
    const {categoryName} =useParams();

    useEffect(()=>{
        axios.get(`${ProductUrl}/products/category/${categoryName}`)
        .then((res)=>{
            setResults(res.data)
        }).catch((err)=>{
            console.log("err",err)
        })
    }, [])

  return (
    <Layout>
        <section>
            <h1 style={{padding: "30px"}}>Results</h1>
            <p style={{padding: "30px"}}>Catagory /{categoryName}</p>
            <hr />
            <div className={classes.product_container}>
                {results?.map((product)=>(
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    </Layout>
  )
}

export default Results
