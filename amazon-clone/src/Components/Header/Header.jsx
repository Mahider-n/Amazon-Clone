import React, { useContext } from 'react';
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import classes from './Header.module.css';
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import {auth} from "../../Utility/firebase"


function Header() {
    const [{user,basket},dispatch]=useContext(DataContext)
    const totalItem=basket?.reduce((amount,item)=>{
        return item.amount+amount 
    },0)


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
                    <BsSearch size={25} />
                </div>
                {/* other section*/}
                <div className={classes.order__container}>
                    <Link to="" className={classes.language}>
                    <img src="https://image.shutterstock.com/image-vector/usa-flag-icons-vector-set-260nw-2491312125.jpg" alt="us Flag" />
                    
                    <select name="" id="">
                        <option value="">EN</option>
                    </select>
                    </Link>
                    <Link to={!user && "/auth"}>
                        <div>
                            {user?(
                                <>
                                    <p>Hello, {user?.email?.split("@")[0]}</p>
                                    <span onClick={() => auth.signOut()}>Sign Out</span>
                                </>
                                 ):(
                                    <>
                                        <p>Hello, Sign In</p>
                                        <span>Accounts & Lists</span>
                                    </>
                                    
                                )}
                        </div>
                    </Link>
                    <Link to="/orders">
                        <p>returns</p>
                        <span>& Order</span>
                    </Link>
                    <Link to="/cart" className={classes.cart}>
                        <BiCart size={35} />
                        <span>{totalItem}</span>
                    </Link>
                </div>
            </div>
        </section>
    <LowerHeader />
      </section>
    
  )
}

export default Header
