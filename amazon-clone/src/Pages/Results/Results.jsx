import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ProductUrl } from '../../Api/endPoints'
import { useEffect } from 'react';
import classes from '../Results/Results.module.css'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'

function Results() {
    const [results,setResults]=useState([]);
    const {categoryName} =useParams();
    const[isLoading,setisLoading]=useState(false)

    useEffect(()=>{
        axios.get(`${ProductUrl}/products/category/${categoryName}`)
        .then((res)=>{
            setResults(res.data)
            setisLoading(false)
        }).catch((err)=>{
            console.log("err",err)
            setisLoading(false)
        })
    }, [])

  return (
    <Layout>
        <section>
            <h1 style={{padding: "30px"}}>Results</h1>
            <p style={{padding: "30px"}}>Catagory /{categoryName}</p>
            <hr />
            {isLoading ?(
                <Loader />
            ):(
                <div className={classes.product_container}>
                {results?.map((product)=>(
                    <ProductCard key={product.id} product={product} renderAdd={true} renderDesc={false} />
                ))}
            </div>
            )}
        </section>
    </Layout>
  )
}

export default Results
