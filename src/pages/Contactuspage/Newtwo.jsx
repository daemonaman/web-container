import React from 'react'
import { Link } from "react-router-dom";
import './New.css'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import image1 from '../../Assets/Image 1.png'

const Newtwo = () => {
  return (
    <div className='right-wrapper'>
        <h2>What issue are you facing?</h2>
        <Link to='/mangaeorders'> <div className='right-flex'>
          <div>
         <h3>I want to manage my order  <br /><span>View, Cancel, Return an order</span></h3> 
          </div>
          <div>
            <IoIosArrowForward style={{fontSize:'30px',color:'#000'}}/>
          </div>
        </div> </Link>  
       <Link to='/return'><div className='right-flex'>
          <div>
            <h3>I want to manage my order  <br /><span>Manage and track returns</span></h3>
          </div>
          <div>
            <IoIosArrowForward style={{fontSize:'30px',color:'#000'}}/>
          </div>
        </div></Link> 
       <Link to='/seller'> <div className='right-flex'>
          <div>
            <h3>I want to contact the seller  <br /></h3>
          </div>
          <div>
            <IoIosArrowForward style={{fontSize:'30px',color:'#000'}}/>
          </div>
        </div></Link>
        {/* <div className='right-flex'>
          <div>
            <h3>I want to manage my order</h3>
          </div>
          <div>
            <IoIosArrowForward style={{fontSize:'30px',color:'#000'}}/>
          </div>
        </div> */}
        <h2 id='last_head'>Want to reach us old style ? Here is our <span>postal address</span></h2>
      <div className='round_log'> <Link to='/chatbot'><img src={image1} alt="" srcset="" /></Link> </div>
      </div>
  )
}

export default Newtwo