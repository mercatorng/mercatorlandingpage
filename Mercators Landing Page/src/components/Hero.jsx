import React from 'react'
import NavBar from './NavBar'
import rectangle from "../images/rectangle.svg"
import heroImg from "../images/heroImg.svg"
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section className='relative mx-auto '>
    <div className='hero  h-screen w-full '>
    <NavBar/>
      {/* hero- center  */}   
      <div className='flex items-center justify-center lg:container max-w-[540px] mx-auto  lg:mx-auto lg:pl-16 lg:pl-24 large:max-w-[1360px]  xs:mt-16  sm:mt-6 smd:mt-1 lg:mt-[-3rem] extraLarg:mt-[-2rem] large:mt-[-5rem]' id = 'Home' >
      
       {/* hero-info  */}
       <article className='relative mx-auto self-center max-w-[540px] flex flex-col items-center justify-center  '  data-aos="fade-right"
    data-aos-duration="2000"> 
        {/* rectangle  */}
        <img src={rectangle} alt="rectangle" className='p-1 large:w-[38rem] ' />

        {/* text  */}
             <div className='bg-white rounded-2xl absolute xs:top-6 xs:-left-0 xsm:top-12 xxx:top-12 smd:top-[4rem] sm:-left-0 smd:-left-0 sms:-left-7 smax:top-[3.5rem] sms:top-16  sms:left-[-1rem] smax:-left-8 lg:-left-10 lg:top-4 bigLg:-left-16 bigLg:top-8 extraLg:top-11 large:top-[3.5rem] large:left-[-1.4rem]  sms:py-6'>
                <div className='p-4 '>
             <h1 className='uppercase font-700 xxx:text-3xl sms:text-4xl height text-pryPurpule tracking-wide xs:text-[1rem] '>A Fintech Focused <br /> <span className='text-pryPurpules'>Venture Studio </span> </h1>
             <p className='mt-4 xs:mt-1 xs:max-w-[18rem] smd:max-w-[28rem] smax:max-w-[30rem] lg:max-w-[22rem] bigLg:max-w-[30rem] text-greyText '>Mercator is a Fintech Focused Venture Studio building solutions to address identified gaps in the African Payments Space.</p>
             {/* hero-btns  */}
              <div className='sm:mt-6 xs:mt-2 flex gap-x-5'>
                {/* contact us  */}
                <Link
                 to="Footer"
                 spy={true}
                 smooth={true}
                 offset={-500}
                 duration={1200}
                 className='cursor-pointer'>
                <button className='bg-pryPurpule px-5 py-1'>
                <p className='text-white sm:text-[1.25rem] xs:text-[1rem] '>Contact Us</p> 
                </button>
                </Link>
                {/* learn more  */}
                <button className='bg-white px-5 py-1 border-2 border-pryPurpule'>
                <p className='text-pryPurpule sm:text-[1.25rem] xs:text-[1rem]'>Learn More</p> 
                </button>
              </div>
             </div>
             </div>
             {/* end of text  */}
       </article>
       {/* end of hero-info  */}

        {/* hero-img    */}
        <article className='hidden lg:block self-center mt-[4.5rem] '  data-aos="fade-left"
    data-aos-duration="2000">
          <img src={heroImg} alt="" className=' large:w-[35rem]' />
        </article>
        {/*end of hero-img    */}
      </div>
      
      {/* end of hero-center  */}
    </div>
    </section>
  )
  
}

export default Hero
