import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout';
// import classes from './ProductDetail.module.css';
import { useParams} from 'react-router-dom';
// import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import axios from 'axios';
import { ProductUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';
// import Layout from '../../Components/Layout/Layout';
// import Loader from '../../Components/'

function ProductDetail() {
    const [product,setProduct]=useState({})
    const {productId}=useParams()
    useEffect(()=>{
        axios.get(`${ProductUrl}/products/${productId}`)
        .then((res)=>{
            setProduct(res.data)
        }).catch((err)=>{
            console.log("err",err)
        })
    },[])
  return (
    <Layout>
        <ProductCard
        product={product} />
    </Layout>
  )
}

export default ProductDetail
