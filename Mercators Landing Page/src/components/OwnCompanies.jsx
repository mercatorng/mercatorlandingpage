import React, {useRef, useCallback, useState}from 'react'
import { companies } from '../data'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import { Navigation } from 'swiper';


import { Pagination } from "swiper";
import {BiChevronRight} from "react-icons/bi"
import {BiChevronLeft} from "react-icons/bi"


const OwnCompanies = () => {
  const sliderRef = useRef(null);
  const [inActive, setInActive] = useState(false)
  const [nextActive, setNextActive] = useState(false)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
     setInActive(false)
     setNextActive(true)
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    setInActive(true)
    setNextActive(false)
  }, []);
  return (
    // 40
    <div className='bg h-[50rem] sm:h-[40rem] smax:h-[40rem] w-[100%]' id='Companies'>
        {/* our companies-r center  */}
        <div  data-aos="fade-right"
    data-aos-duration="2000">
            {/* header  */}
            <article>
      <h1 className='pt-[7rem] text-white text-[1.95rem] text-center'>OUR COMPANIES</h1>
      <p className='text-center text-white  mt-4 max-w-[24rem] sms:max-w-[30rem] mx-auto'> We incubate ideas in the domains of payment,fintech and embedded finance and turn them into highly valuable companies...</p>
      </article>
      {/* end of header  */}
      
      {/* companies  */}
      <article className='flex space-x-12 px-5 large:max-w-[1170px] mx-auto'>
      <button className={inActive ? "bg-transparent border border-pryPurpule md:w-[3.1rem] md:h-[2.4rem]  smd:w-[3.2rem] w-[3.6rem] h-[2.3rem] lg:h-[2.6rem] large:w-[3.1rem] large:h-[2.5rem] mt-32 flex flex-col items-center justify-center rounded-3xl large:translate-x-[-55%] btn" : 'bg-pryPurpule w-[3.6rem] h-[2.3rem] smd:w-[3.2rem] md:w-[3.1rem] md:h-[2.4rem] lg:h-[2.6rem] large:w-[3.1rem] large:h-[2.5rem]  mt-32 flex flex-col items-center justify-center rounded-3xl large:translate-x-[-55%] btn'} onClick={handlePrev} >
      <BiChevronLeft className={inActive ? 'text-pryPurpule self-center text-[2.1rem]' : 'text-white self-center text-[2.1rem]'}/>
      </button>
      <Swiper style={{
        "--swiper-pagination-bullet-size" : "12px",
        "--swiper-pagination-bullet-inactive-color" : "rgba(89, 86, 233, 0.5)",
        "--swiper-pagination-bullet-inactive-opacity" : "0.6"
      }}

        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          680: {
            width: 680,
            slidesPerView: 1.3,
          },
          768: {
            width: 768,
            slidesPerView: 2.8,
          },
          992: {
            width: 992,
            slidesPerView: 3.2,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
     
        // custom btn 
        ref={sliderRef}
      >
     {companies.map(function (item) {
        const {id, companyName, info, logo} = item
        return  <>
        <SwiperSlide key={id}>
        <div className='mt-12 box'>
        {/* logo  */}
        <div>
        <img src={logo} alt="" className='mx-auto mb-3' />
        </div>
        {/* info  */}
        <div className='mt-4'>
        <h1 className='text-center text-white text-[1.5rem]'>{companyName}</h1>
        <p className='text-center text-white xs:max-w-[24rem] sms:max-w-[15rem] mx-auto mt-[.01rem] '>{info}</p>
        </div>
        {/* end of info  */}
        </div>
        </SwiperSlide>
        </>
     })}
        </Swiper>
        <button className={ nextActive ? 'bg-transparent border border-pryPurpule w-[3.6rem] h-[2.3rem] smd:w-[3.2rem] md:w-[3.1rem] md:h-[2.4rem] lg:h-[2.6rem] large:w-[3.1rem] large:h-[2.6rem] mt-32 flex flex-col items-center justify-center rounded-3xl btn focus:outline-none translate-x-[-60%]' : 'bg-pryPurpule md:w-[3.1rem] md:h-[2.4rem] large:w-[3.1rem] lg:h-[2.6rem] large:h-[2.6rem] mt-32 flex flex-col items-center justify-center rounded-3xl w-[3.6rem] h-[2.3rem] smd:w-[3.2rem] translate-x-[-60%] focus:outline-none btn'}  onClick={handleNext} >
        <BiChevronRight className={nextActive ? 'text-pryPurpule self-center text-[2.1rem]' : 'text-white self-center text-[2.1rem]'}/>
        </button>
      </article>
      {/* companies  */}
      </div>
       {/*end of our companies- center  */}
    </div>
  )
}

export default OwnCompanies
