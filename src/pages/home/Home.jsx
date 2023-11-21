import React from 'react'
import { FaBeer } from "react-icons/fa";
import './home.scss';
import Slider from '../../components/slider/Slider';

const Home = () => {
  return (
    <div className="home">
      {/* slider */}
      <Slider/>
      <div className="features">
        <div className="features-chidls">
          <FaBeer/>
          <p className='heading'>Heading</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, voluptatibus!</p>
        </div>
        <div className="features-chidls">
            <FaBeer/>
          <p className='heading'> <b>Heading</b> </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, voluptatibus!</p>
        </div>
        <div className="features-chidls">
            <FaBeer/>
          <p className='heading'>Heading</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, voluptatibus!</p>
        </div>
    
      </div>
    </div>
  )

}

export default Home



