import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)
const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, SetLoading] = useState(true);
  const [loadedVidoes, setLoadedVideos] = useState(0);
  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const upcomingVideoIdx = (currentIdx % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIdx(upcomingVideoIdx);
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if(loadedVidoes === totalVideos - 1){
      SetLoading(false);
    }
  },[loadedVidoes])

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center , center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIdx], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: " 0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className=" relative h-dvh w-screen overflow-x-auto">
      {loading && (
        <div className=" flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        className=" relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75"
        id="video-frame"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVideoClick}
              className=" origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                src={getVideoSrc(upcomingVideoIdx)}
                ref={nextVideoRef}
                loop
                muted
                id="current-video"
                className=" size-64 origin-center scale-105 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIdx)}
            loop
            muted
            id="next-video"
            className=" absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(currentIdx === totalVideos - 1 ? 1 : currentIdx)}
            className=" absolute left-0 top-0 object-cover size-full"
            autoPlay
            muted
            loop
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className=" special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          Madhav
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className=" mt-24 px-10 md:px-5">
            <h1 className="special-font hero-heading text-blue-75">
              Redefine <b>S</b>h<b>a</b>ring
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Here
            </p>
            <Button
              id="watch-trailer"
              title={"Watch Trailer"}
              leftIcon={<TiLocationArrow />}
              containerClass={"bg-yellow-300 flex-center gap-1"}
            />
          </div>
        </div>
      </div>
      <h1 className=" special-font hero-heading absolute bottom-5 right-5 text-black">
        Madhav
      </h1>
    </div>
  );
};

export default Hero;
