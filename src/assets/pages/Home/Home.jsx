import React from "react";
import { Bio } from "../../data/data";
import profile from "../../images/image-profile/profile.jpg";
import "./style.css";

const Home = () => {
  return (
    <div className="text-white h-screen flex-1 xl:flex">
      <div className="sm:w-full px-10 lg:w-full text-center xl:text-left xl:w-1/2 sm:order-2 xl:order-1 mx-auto mt-16 my xl:my-48 xl:px-5">
        <h2 className="sm:text-[33px] xl:text-[70px] text-glow">
          Hi, <span className=" text-[#676EFF] ">I'm {Bio.nickname}.</span>
        </h2>
        <p className="text-[26px] text-gradient text-glow">
          I’m interested in Frontend Web Developer
        </p>
        <p className="text-[16px] mt-5 text-glow">{Bio.description}</p>
      </div>
      {/* profile */}
      <div className="sm:w-full sm:mx-auto xl:w-1/2 avatar sm:order-1 xl:order-2">
        <div className="sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto sm:my-16 xl:mt-36">
          <img src={profile} />
        </div>
      </div>
    </div>
  );
};

export default Home;
