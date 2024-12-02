import React, { useRef, useState } from "react";
const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, SetLoading] = useState(true);
  const [loadedVidoes, setLoadedVideos] = useState(0);
  const totalVideos = 3;
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
  return (
    <div className=" relative h-dvh w-screen overflow-x-auto">
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

        <div className=" absolute left-0 top-0 z-40 size-full">
            <div className=" mt-24 px-10 md:px-5">
                <h1 className="special-font hero-heading text-blue-75">Redefine <b>S</b>h<b>a</b>ring</h1>
                <p className="mb-5 max-w-64 font-robert-regular text-blue-100">Enter the Metagame Here</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
