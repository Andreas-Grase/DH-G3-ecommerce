import slider1 from '../../assets/img/slider-home/slider1.jpg'
import slider2 from '../../assets/img/slider-home/slider2.jpg'
import slider3 from '../../assets/img/slider-home/slider3.jpg'
import slider4 from '../../assets/img/slider-home/slider4.jpg' 
import "./style.css";

const SliderHome = () => {
  return (
    <div class="slider">
      <div class="images">
        <input type="radio" name="slide" id="img1" checked></input>
        <div class="text"></div>
        <input type="radio" name="slide" id="img2"></input>
        <input type="radio" name="slide" id="img3"></input>
        <input type="radio" name="slide" id="img4"></input>

        <img src={slider1} class="m1" alt="img1"></img>
        <img src={slider2} class="m2" alt="img2"></img>
        <img src={slider3} class="m3" alt="img3"></img>
        <img src={slider4} class="m4" alt="img4"></img>
      </div>

      <div class="dots">
        <label for="img1"></label>
        <label for="img2"></label>
        <label for="img3"></label>
        <label for="img4"></label>
      </div>
      <a class="prev" onclick="plusSlides(-1)">
        &#10094;
      </a>
      <a class="next" onclick="plusSlides(1)">
        &#10095;
      </a>
    </div>
  );
};

export default SliderHome;
