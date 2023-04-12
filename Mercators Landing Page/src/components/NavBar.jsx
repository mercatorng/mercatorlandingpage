import React, { useState } from 'react'
import email from "../images/email.svg"
import call from "../images/call.svg"

import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {FaPinterest} from "react-icons/fa"
import { Link } from 'react-scroll'
import logo from "../images/logo.svg"
import navLogo from "../images/navLogo.svg"
import {BiMenuAltRight} from "react-icons/bi"
import { useGlobalContext } from '../context'

const NavBar = () => {
   const{openModal, } = useGlobalContext()
  return (
    <nav className=' p-4 flex flex-col ' data-aos="fade-down"
    data-aos-duration="2000">
      {/* nav-center  */}
      <div className='lg:container lg:mx-auto lg:max-w-[770px] xlg:max-w-[775px] bigLg:max-w-[785px] fity:max-w-[815px] extraLg:max-w-[840px] extraExtra:max-w-[900px] large:max-w-[920px] exl:max-w-[999px] topXl:max-w-[1088px] ' >
         
         {/* small nav  */}
         <div className={'bg-white flex justify-between items-center rounded-md max-w-[680px] p-3 mx-auto lg:hidden'}>
            {/* nav-logo  */}
            <article>
           <img src={logo} alt="logo" />
            </article>
            {/* toggle-btn  */}
            <button onClick={openModal}>
            <article>
              <BiMenuAltRight className='text-[3rem] text-pryPurpule cursor-pointer'/>
            </article>
            </button>
         </div>

        {/* big nav  */}
        <div className='hidden lg:block relative'>
      {/* contact details  */}
      <article className='grid grid-cols-2 justify-between '>
      {/* lg:container lg:mx-auto lg:max-w-[765px] xlg:max-w-[775px] bigLg:max-w-[785px] fity:max-w-[815px] extraLg:max-w-[840px] extraExtra:max-w-[900px] large:max-w-[920px] exl:max-w-[999px] topXl:max-w-[1088px] mb-2 */}
        {/* email & phone  */}
         <div className='flex gap-x-8 justify-self-start'> 
               {/* email  */}
               <div className='flex gap-x-2'>
               <img src={email} alt="email" />
               <p className='text-white'>Connect@mercator.ng</p>
               </div>
               {/* end of email  */}
               {/* call  */}
               <div className='flex gap-x-2'>
               <img src={call} alt="email" />
               <p className='text-white'>+234 903 618 9485</p>
               </div>
               {/* end of call  */}
         </div>
         {/* end of email & phone  */}

         <div className='inseti'><img src={navLogo} alt="logo" className='w-[10rem]'/></div>
                {/* socials  */}
                <div className='flex gap-x-5 justify-self-end ' >
              <button className='focus:outline-none'>
              <FaFacebookF className='text-white'/>
              </button>
               
                <button className='focus:outline-none'>
              <AiOutlineTwitter className='text-white'/>
              </button>
                
                <button className='focus:outline-none'>
              <AiFillLinkedin className='text-white'/>
              </button>
              
                <button className='focus:outline-none'>
              <FaPinterest className='text-white'/>
              </button>
            </div>

      </article>
      {/* end of contact details  */}
      
       {/* links  */}
      <article className=' bg-white mt-2 ml-auto mr-auto rounded-md   center'>
      {/* lg:max-w-[765px] xlg:max-w-[775px] bigLg:max-w-[795px] fity:max-w-[815px] extraLg:max-w-[840px] extraExtra:max-w-[900px]  large:max-w-[920px] exl:max-w-[999px] topXl:max-w-[1088px] */}
         <ul className='p-3 px-8 flex justify-between items-center'>
          {/* single-link  */}
          <Link
            to="Home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className='cursor-pointer text-pryPurpule underline'
           >
            <li>Home</li>
          </Link>
          {/* single-link  */}
          <Link 
           to="About"
                spy={true}
                smooth={true}
                offset={-220}
                duration={800}
                className='cursor-pointer ' >
            <li>About Mercator</li>
          </Link>
          <Link 
           to="Companies"
           spy={true}
           smooth={true}
           offset={7}
           duration={700}
           className="large:ml-64 lg:ml-44 cursor-pointer ">
            <li>Our Companies</li>
          </Link>
          <Link 
           to="Team"
           spy={true}
           smooth={true}
           offset={-50}
           duration={700}
           className='cursor-pointer '
           >
            <li>Team</li>
          </Link>
         </ul>
      </article>
      {/* end of links  */}
      </div>
      {/* end of big nav  */}
      </div>
      {/* end of nav-center  */}
    </nav>
  )
}

export default NavBar
