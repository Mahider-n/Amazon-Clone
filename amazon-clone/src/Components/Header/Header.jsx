import React from 'react';
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import classes from './Header.module.css';
import LowerHeader from './LowerHeader';


function Header() {
  return (
    <>
        <section>
            <div className={classes.header__container}>
                {/* {logo} */}
                <div className={classes.logo__container}>
                    <a href="#">
                        <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon logo" />
                    </a>
                    <div className={classes.delivery}>
                        <span>
                            <SlLocationPin />
                        </span>
                        <div>
                            <p>Delivered to</p>
                            <span>Ethiopia</span>
                        </div>
                    </div>
                </div>
                {/* {search} */}
                <div className={classes.search}>
                    <select name="" id="">
                        <option value="">All</option>
                    </select>
                    <input type="text" name='' id='' placeholder='search product' />
                    <BsSearch />
                </div>
                {/* other section*/}
                <div className={classes.order__container}>
                    <a href="" className={classes.language}>
                    <img src="https://image.shutterstock.com/image-vector/usa-flag-icons-vector-set-260nw-2491312125.jpg" alt="us Flag" />
                    
                    <select name="" id="">
                        <option value="">EN</option>
                    </select>
                    </a>
                    <a href="">
                        <p>Sign In</p>
                        <span>Account & Lists</span>
                    </a>
                    <a href="">
                        <p>returns</p>
                        <span>& Order</span>
                    </a>
                    <a href="" className={classes.cart}>
                        <BiCart size={35} />
                        <span>0</span>
                    </a>
                </div>
            </div>
        </section>
    <LowerHeader />
      </>
    
  )
}

export default Header
