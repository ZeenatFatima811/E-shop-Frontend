import React from "react";
import styles from "../../../styles/styles";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={`relative min-h-[60vh] 800px:min-h-[80vh] w-full bg-cover bg-center ${styles.normalFlex}`}
    style={{
        backgroundImage: "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)"
    }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h3
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Collection for <br /> home decoration
        </h3>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-black ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni esse
          eaque <br/> tenetur ut, commodi nemo pariatur alias unde nulla cum optio
          expedita <br/> facilis, deleniti molestias ducimus earum, itaque inventore!
          Quod.
        </p>
        <Link to="/products" className="inline-block">
        <div className={`${styles.button} mt-5`}>
          <span className="text-[#fff] font-[Poppins] text-[18]">
            Shop Now
          </span>
        </div>
        </Link>
      </div>
    </div>    
    
  );
};

export default Hero;





      
