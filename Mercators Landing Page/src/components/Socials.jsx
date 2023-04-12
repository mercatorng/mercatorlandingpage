import React from 'react'
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"
import {AiFillLinkedin} from "react-icons/ai"
import shortLine from "../images/shortLine.svg"
import { Link } from 'react-scroll'

const Socials = ({url}) => {
  return (
    <>
    {/* socials  */}
    <div className='flex gap-x-6 items-center justify-center mt-5'>
    {/* facebook  */}
   
   <button className='focus:outline-none'>
    <img src={facebook} alt="facebook" />
    </button>
   
     <img src={shortLine} alt="line" />
    {/* instagram */}
 
    <button className='focus:outline-none'>
    <img src={instagram} alt="instagram"  />
    </button>
   
        <img src={shortLine} alt="line" />
    {/* twitter  */}
    
    <button className='focus:outline-none'>
    <img src={twitter} alt="twitter" />
    </button>
    
    <img src={shortLine} alt="line" />
    {/* linkedIn  */}
      <a href={url}>
    <button className='focus:outline-none'>
    <AiFillLinkedin className=' hover:text-pryPurpule text-[2rem]'/>
    </button>
    </a>
   </div>
   {/* end of socials  */}
   </>
  )
}

export default Socials
