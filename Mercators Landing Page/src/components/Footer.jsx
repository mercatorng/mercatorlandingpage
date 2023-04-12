import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {FaPinterest} from "react-icons/fa"
import darkLine from "../images/darkLine.svg"
import logo from "../images/logo.svg"
import call from "../images/call.svg"
import icon from "../images/icon.svg"
import email from "../images/email.svg"
import shorterLine from "../images/shorterLine.svg"
import { Link } from 'react-scroll'
import purpleCircle from "../images/purpleCircle.svg"



const Footer = () => {
  return (
    <footer className='mt-60 bg-bgFooter' data-aos="fade-up"
    data-aos-duration="2000" >
       <div id='Footer'>
      <article className=' mt-12 flex flex-col bg-white  mx-auto  w-[90%] translate-y-[-50%] rounded-[2rem] shadow-2xl lg:max-w-[1176px] ' >

        <div className='p-12  max-w-[768px] mx-auto lg:flex lg:items-center lg:mx-0  lg:max-w-[1176px] lg:gap-x-3 extraLg:gap-x-8 large:gap-x-10'>
         {/* single contact  */}
           <article className='flex gap-x-4'>
              <div className='relative  '>
                <img src={purpleCircle} alt="ellipse" className='relative' />
                <div>
                  <img src={email} alt="icon"  className=' absolute top-[1rem] left-[1rem]  '/>
                </div>
              </div>
              {/* contact  */}
              <div>
              <h1 className='text-[1rem] xs:max-w-[10rem]  sm:max-w-[15rem] exl:max-w-[22rem] '> Block 3 Plot 57B Fatai Idowu Arobieke Street, Lekki Phase1, Lagos, Nigeria</h1>
              </div>
           </article>
         {/*end of single contact  */}
         <img src={darkLine} alt="line" className='hidden lg:block' />
 <div className=' lg:flex lg:gap-x-[9rem] extraLg:gap-x-[11.5rem]'>
         {/* single contact  */}
           <article className='flex items-center gap-x-4 mt-5 lg:mt-0'>
              <div className='relative  '>
                <img src={purpleCircle} alt="ellipse" className='relative' />
                <div>
                  <img src={email} alt="icon"  className=' absolute top-[1rem] left-[1rem]  '/>
                </div>
              </div>
              {/* contact  */}
              <div>
              <h1 className='text-[1rem] max-w-[15rem] lg:max-w-[2rem]'>Connect@mercator.ng</h1>
              </div>
           </article>
         {/*end of single contact  */}
         
         {/* single contact  */}
           <article className='flex items-center gap-x-4  extraLg:gap-x-5 large:gap-x-8 mt-10 lg:mt-0'>
           <img src={darkLine} alt="line" className='hidden lg:block' />
              <div className='relative  '>
                <img src={purpleCircle} alt="ellipse" className='relative' />
                <div>
                  <img src={call} alt="icon"  className=' absolute top-[1rem] left-[1rem]  '/>
                </div>
              </div>
              {/* contact  */}
              <div>
              <h1 className='text-[1rem] max-w-[30rem] '>+234 903 618 9485</h1>
              </div>
           </article>
         {/*end of single contact  */}
         </div>
         </div>
      </article>

      {/* footer-center  */}
      <div className=' md:max-w-[800px] lg:max-w-[910px] bigLg:max-w-[950px] extraLg:max-w-[1026px] large:max-w-[1076px] exl:max-w-[1176px]  md:mx-auto pl-5 sm:mt-[-4rem] md:mt-[-10rem] lg:mt-[-4rem] max-w-[500px] mx-auto md:flex  md:items-center md:justify-between'>
            {/* mercator  */}
           <article className='md:mt-[-3.6rem] mt-[-7rem]'>
             <img src={logo} alt="logo" />
             <p  className="text-white mt-3">Your Digital Transformation Partner...</p>

             {/* socials  */}
            <div className='flex gap-x-5 mt-6' >
              <button className='focus:outline-none'>
              <FaFacebookF className='text-white'/>
              </button>
                <img src={shorterLine} alt="" />
                <button className='focus:outline-none'>
              <AiOutlineTwitter className='text-white'/>
              </button>
                <img src={shorterLine} alt="" />
                <button className='focus:outline-none'>
              <AiFillLinkedin className='text-white'/>
              </button>
                <img src={shorterLine} alt="" />
                <button className='focus:outline-none'>
              <FaPinterest className='text-white'/>
              </button>
            </div>
           </article>
           {/* end of mercator  */}

           {/* quick Links  */}
           <article className='mt-12 '>
             {/* heading */}
             <h1 className='text-2xl text-[#433FDA]'>QUICK LINKS</h1>
              
              {/* single-link  */}
               <div>
                 <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={-200}
                duration={1200}
                className= "cursor-pointer text-white hover:text-pryPurpule" >
                <p className='mt-5 '>Home</p>  
                </Link>
                </div>
                {/* end of single-link  */}
             
              
              {/* single-link  */}
               <div>
                 <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1200}
                className= "cursor-pointer text-white hover:text-pryPurpule" >
                <p className='mt-5 '>About Mercator</p>  
                </Link>
                </div>
                {/* end of single-link  */}
             
              
              {/* single-link  */}
               <div>
                 <Link
                to="Companies"
                spy={true}
                smooth={true}
                offset={-10}
                duration={1200}
                className= "cursor-pointer text-white hover:text-pryPurpule" >
                <p className='mt-5 '>Our Companies</p>  
                </Link>
                </div>
                {/* end of single-link  */}
             
              
              {/* single-link  */}
               <div>
                 <Link
                to="Team"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1200}
                className= "cursor-pointer text-white hover:text-pryPurpule" >
                <p className='mt-5 '>Team</p>  
                </Link>
                </div>
                {/* end of single-link  */}
             
             </article>

           {/*end of quick Links  */}
            <article className='mt-9'> 
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-200}
              duration={1200}
              className="cursor-pointer">

              <button className='bg-[#FAFAFA] px-10 py-4 rounded-xl flex items-center gap-x-4 focus:outline-none'>
                <p className='text-xl'>Back to Top</p>
                <img src={icon} alt="icon" />
              </button>
              </Link>
            </article>
           {/* back to home  */}
      </div>
      {/*end of footer-center  */}

      {/* underline  */}
      <div className="p-12 lg:container lg:mx-auto large:max-w-[1200px]">
        <div className="border-t border-slate-400 "></div>
       {/* copyright  */}
         <div className='mt-4'>
          <p className='text-xl text-center text-white mt-5'>  &copy; copyright <span>{new Date().getFullYear()}</span> Mercator Technologies Ltd All Rights Reserved</p>
          </div>
          {/* end of copyright  */}
      </div>
      </div>
    </footer>
  )
}

export default Footer



