import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormatter from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import Layout from "../../Components/Layout/Layout";

function Payment() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const [CardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);


  const handleChange = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };


  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      // contact the backend to get the client secret
      setProcessing(true);
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      // client side confirmation
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
        // empty the basket 
        dispatch({type:Type.EMPTY_BASKET});

        setProcessing(false);
        navigate("/orders",{state:{msg:"You have placed new Order"}});
    } catch(error){
      console.log(error);
      setProcessing(false);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className={classes.payment__header}>
        Checkout ({totalItem}) items
      </div>
      <section className={classes.payment}>
        {/* Address */}
        <div className={classes.flex}>
          <h3>Delivery Address </h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        {/* Product Review */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* Card Form */}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment__card}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
              {/* check if card is valid */}
                {CardError && (
                  <small
                    style={{
                      color: "red",
                    }}
                  >{CardError}</small>
              )}
              
              {/* card element */}
              <CardElement onChange={handleChange} />
              {/* price */}
              <div className={classes.payment__price}>
                <span style={{ display: "flex", gap: "10px" }}>
                  <p> Total Order | </p>
                  <CurrencyFormatter amount={total} />
                </span>

                <button type="submit">
                  {processing ? (
                    <div className={classes.loading}>
                      <ClipLoader color="gray" size={12} />
                      <p>Please wait...</p>
                    </div>
                  ) : (
                    "Pay Now"
                  )}
                </button>
              </div>
            </form>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
