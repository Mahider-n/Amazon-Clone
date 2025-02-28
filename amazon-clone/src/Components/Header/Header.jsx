import React, { useContext } from 'react';
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import classes from './Header.module.css';
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';


function Header() {
    const [{basket},dispatch]=useContext(DataContext)


  return (
    <section className={classes.fixed}>
        <section>
            <div className={classes.header__container}>
                {/* {logo} */}
                <div className={classes.logo__container}>
                    <Link to="/">
                        <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon logo" />
                    </Link>
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
                    <Link to="" className={classes.language}>
                    <img src="https://image.shutterstock.com/image-vector/usa-flag-icons-vector-set-260nw-2491312125.jpg" alt="us Flag" />
                    
                    <select name="" id="">
                        <option value="">EN</option>
                    </select>
                    </Link>
                    <Link to="">
                        <p>Sign In</p>
                        <span>Account & Lists</span>
                    </Link>
                    <Link to="/orders">
                        <p>returns</p>
                        <span>& Order</span>
                    </Link>
                    <Link to="/cart" className={classes.cart}>
                        <BiCart size={35} />
                        <span>{basket.length}</span>
                    </Link>
                </div>
            </div>
        </section>
    <LowerHeader />
      </section>
    
  )
}

export default Header
