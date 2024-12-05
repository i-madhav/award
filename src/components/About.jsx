import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import  {ScrollTrigger} from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger:"#clip",
                start:'center center',
                end:'+=800 center',
                scrub:0.5,
                pin:true,
                pinSpacing:true
            }
        });

        clipAnimation.to('.mask-clip-path',{
            width:'100vw',
            height:'100vh',
            borderRadius:0
        })
    })
  return (
    <div className=" min-h-screen w-screen" id="about">
      <div className=" relative mb-8  mt-36 flex flex-col items-center gap-5">
        <h2 className=" font-general text-sm uppercase md:text-[10px]">
          Welcome to Madhav
        </h2>

        <div className=" mt-5 text-center text-4xl uppercase leading-[.8] md:text-[6rem]">
          Discover the world's largest shared collborative world
        </div>
        <div className="about-subtext">
          <p>the game of games begin , now your life MMA</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
            <img src="img/about.webp" alt="image" className=" absolute left-0 top-0 size-full object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default About;
