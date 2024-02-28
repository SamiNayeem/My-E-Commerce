import React from "react";
import Marquee from "react-fast-marquee";


const Body = () => {
  return (
    <div className="">
      <section className="bg-amber-400 h-20 text-center py-8 text-white font-bold">
        <Marquee>
          <span>Get 20% off on all products. Use code: <span className="text-black">SALE20 &nbsp;&nbsp; </span></span>
          <span>Get 20% off on all products. Use code: <span className="text-black">SALE20 &nbsp; &nbsp; </span></span>
          <span>Get 20% off on all products. Use code: <span className="text-black">SALE20 &nbsp; &nbsp; </span></span>
          <span>Get 20% off on all products. Use code: <span className="text-black">SALE20 &nbsp; &nbsp; </span></span>
        </Marquee>
      </section>
      
    </div>
  );
}
export default Body;