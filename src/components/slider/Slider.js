import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import './slicer.scss';

// import required modules
import { Autoplay,Pagination ,Navigation} from 'swiper/modules';
const Slider=()=>{
  return (
    <>


      <Swiper
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <div className="background"> 
            <div className="slideChild">
              
                <h1>Welcome to Location based service recommendation</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam velit quod, accusamus corporis architecto a quasi rem similique commodi ab?</p>
            </div>
            </div>
    
        </SwiperSlide>
        <SwiperSlide> 
        <div className="background"> 
          <div className="slideChild">
            <h1>Welcome to Location based service recommendation</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam velit quod, accusamus corporis architecto a quasi rem similique commodi ab?</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="background"> 
           <div className="slideChild">
           <h1>Welcome to Location based service recommendation</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam velit quod, accusamus corporis architecto a quasi rem similique commodi ab?</p>
            </div>
        </div>
            </SwiperSlide>
       
      </Swiper>
      
    </>
  );
}
export default Slider
