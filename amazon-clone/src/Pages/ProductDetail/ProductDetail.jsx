import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout';
// import classes from './ProductDetail.module.css';
import { useParams} from 'react-router-dom';
// import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import axios from 'axios';
import { ProductUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';
// import Layout from '../../Components/Layout/Layout';
// import Loader from '../../Components/'

function ProductDetail() {
    const [product,setProduct]=useState({})
    const[isLoading,setisLoading]=useState(false)
    const {productId}=useParams()
    useEffect(()=>{
        setisLoading(true)
        axios.get(`${ProductUrl}/products/${productId}`)
        .then((res)=>{
            setProduct(res.data)
            setisLoading(false)
        }).catch((err)=>{
            console.log("err",err)
            setisLoading(false)
        })
    },[])
  return (
    <Layout>
        {isLoading? (<Loader/>):(
            <ProductCard
            product={product}
            flex={true}
            renderDesc={true} />
        )}

        
    </Layout>
  )
}

export default ProductDetail
