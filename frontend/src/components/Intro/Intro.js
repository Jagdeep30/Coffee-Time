import './../../button.css';
import './intro.css';
import IntroCoffee from './../../assets/introCoffee.png';
import IntroDesign from './../../assets/intro Design 3.png';

import Button from './../Button/Button';

const Intro = ()=>{
    return(
        <div className="intro ">
          <div className=" text">
            <h1 className="grand-hotel">Coffee Time</h1>
            <h3 className="montserrat">Awaken Your Senses with Every Sip</h3>
            <p className="montserrat">
            At Coffee Time, we specialize in handcrafted, ethically sourced coffee blends that awaken your taste buds and lift your spirits. Join us for a daily dose of coffee magic!
            </p>
            {/* <button className="button montserrat" onClick={()=>{alert("Order Placed ✅")}}>
              Order Now
              <span></span><span></span><span></span><span></span>
            </button> */}
            <Button/>
          </div>
          <img src={IntroCoffee} alt="" className=" coffee" />
          <img
            src={IntroDesign}
            alt=""
            className="intro-design"
          />
          
        </div>
    )
}

export default Intro;