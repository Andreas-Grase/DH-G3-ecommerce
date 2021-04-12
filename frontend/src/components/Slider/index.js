import slider1 from "../../assets/img/slider-home/slider1.jpg";
import slider2 from "../../assets/img/slider-home/slider2.jpg";
import slider3 from "../../assets/img/slider-home/slider3.jpg";
import slider4 from "../../assets/img/slider-home/slider4.jpg";
import slider11200 from "../../assets/img/slider-home/slider11200.jpg";
import slider21200 from "../../assets/img/slider-home/slider21200.jpg";
import slider31200 from "../../assets/img/slider-home/slider31200.jpg";
import slider41200 from "../../assets/img/slider-home/slider41200.jpg";
import "./style.css";
import React, { useState } from 'react';


const SliderHome = () => {
  const [slideactive,setslideactive] = useState(1)
  function changeslider(value){
     setslideactive(value)
  }
  function sliderarrowback(){
    
      if(slideactive === 1){
        return 
      }
       setslideactive(slideactive -1)
    
  }
  function sliderarrownext(){
    
    if(slideactive === 4){
      return 
    }
     setslideactive(slideactive +1)
  
}
  return (
    <div class="slider">
      <div class="images">
        <input checked={slideactive===1} type="radio" name="slide" id="img1" checked></input>
        <input checked={slideactive===2} type="radio" name="slide" id="img2"></input>
        <input checked={slideactive===3} type="radio" name="slide" id="img3"></input>
        <input checked={slideactive===4} type="radio" name="slide" id="img4"></input>

        <img src={slider1} srcset={slider11200} class="m1" alt="img1"></img>
        <img src={slider2} srcset={slider21200} class="m2" alt="img2"></img>
        <img src={slider3} srcset={slider31200} class="m3" alt="img3"></img>
        <img src={slider4} srcset={slider41200} class="m4" alt="img4"></img>
      </div>

      <div class="dots">
        <label onClick={() => changeslider(1)}></label>
        <label onClick={() => changeslider(2)}></label>
        <label onClick={() => changeslider(3)}></label>
        <label onClick={() => changeslider(4)}></label>
      </div>

      <a class="prev" onClick={sliderarrowback}>
        &#10094;
      </a>
      <a class="next" onClick={sliderarrownext}>
        &#10095;
      </a>
    </div>
  );
};

export default SliderHome;

