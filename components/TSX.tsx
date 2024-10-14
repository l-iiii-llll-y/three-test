import useMobileDetect from "@/hooks/useMobileDetect";
import Icon from "@/images";
import { useCallback, useEffect, useRef, useState } from "react";
import ATest from "./ATest";
import ParticleCircle from "./test";

const ABanner = () => {
  // const videos = ["./1.mp4", "./2.mp4", ""];
  const videos = ["./walk1.mp4", "./walk3.mp4", "./cicle.mov"];
  const texts = [
    "<div>High-quality data can only come from Real people……<div><div>and real human effort will always have real value.</div>",
    `<div>PrismaX envisions a world where AI achieves human-</div>
     <div>level comprehension of the real world, recognizing the</div>
     <div>invaluable role of human effort in this endeavor.</div>`,
    `<div>This is PrismaX, a base layer for Gen AI models <div>
     <div> No videos are required for this scene </div>
    `,
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoSrc, setVideoSrc] = useState(videos[0]);
  const [textContent, setTextContent] = useState(texts[0]);
  const [fade, setFade] = useState(true);
  const [textAnimation, setTextAnimation] = useState("text-slide-in");
  const lastScrollTime = useRef(0);
  const [isScroll, setIsScroll] = useState(false);
  const isMobile = useMobileDetect();
  const [hasLooped, setHasLooped] = useState(false);
  const [dealHover, setDealHover] = useState<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null)


  useEffect(() => {
    if (hasLooped) return;
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => {
          setTextAnimation("text-slide-out");
          const nextIndex = (prevIndex + 1) % videos.length;

          setTextAnimation("text-slide-in");

          setVideoSrc(videos[nextIndex]);
          setTextContent(texts[nextIndex]);

          setTimeout(() => {
            setFade(true);
          }, 100);
          if (nextIndex === videos.length - 1) {
            setHasLooped(true);
            clearInterval(interval);
          }
          return nextIndex;
        });
      }, 1000);


    }, 7000);

    if (currentVideoIndex !== videos.length - 1) {
      setTextAnimation("text-slide-out");

      videoRef.current!.addEventListener('ended', (e) => {
        videoRef.current!.src = './cicle.mov'
      })
    }

    return () => clearInterval(interval);
  }, []);

  const handleWheel = useCallback(
    (event: { deltaY: number; }) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 1000) return;
      lastScrollTime.current = now;

      setIsScroll(event.deltaY > 0);
      setFade(false);
      if (event.deltaY > 0) {
        const wrapper = document.querySelectorAll(".particle");
        wrapper.forEach((element) => {
          element.remove();
        });
        setCurrentVideoIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % videos.length;
          setVideoSrc(videos[nextIndex]);
          setTextContent(texts[nextIndex]);
          setTextAnimation("text-slide-in");
          setFade(true);

          return nextIndex;
        });
      }

      setTimeout(() => {
        setIsScroll(false);
      }, 500);
    },
    [videos, texts]
  );

  console.log('currentVideoIndex', currentVideoIndex);


  // useEffect(() => {
  //   const container = document.getElementById("particle-container");


  //   if (currentVideoIndex === 2) {
  //     const numParticles = 300;
  //     const centerX = window.innerWidth / 2;
  //     const centerY = window.innerHeight / 2;
  //     const radius = isMobile ? 100 : 200;
  //     const particles = [];

  //     container!.style.width = "100%";
  //     container!.style.height = "100%";
  //     container!.style.display = "flex";


  //     for (let i = 0; i < numParticles; i++) {
  //       const particle = document.createElement("div");
  //       particle.classList.add(`particle`);
  //       particle.id = ` particle${i + 1}`;

  //       const randomX = Math.random() * window.innerWidth;
  //       const randomY = Math.random() * window.innerHeight;
  //       particle.style.left = `${randomX}px`;
  //       particle.style.top = `${randomY}px`;
  //       particle.style.opacity = "0.2";

  //       container!.appendChild(particle);
  //       particles.push(particle);

  //       setTimeout(() => {
  //         const angle = Math.random() * 2 * Math.PI;
  //         const r = Math.sqrt(Math.random()) * radius;
  //         const x = centerX + r * Math.cos(angle);
  //         const y = centerY + r * Math.sin(angle);
  //         particle.style.left = `${x}px`;
  //         particle.style.top = `${y - (isMobile ? 150 : 210)}px`;
  //         particle.style.position = "absolute";
  //         particle.style.opacity = "0.5";

  //       }, 1000);

  //     }

  //   } else {
  //     container!.style.width = "0px";
  //     container!.style.height = "0px";
  //     container!.style.display = "inline-block";

  //     const wrapper = document.querySelectorAll(".particle");
  //     wrapper.forEach((element) => {
  //       element.remove();
  //     });
  //   }
  // }, [currentVideoIndex]);


  useEffect(() => {

  }, [])



  return (
    <div>
      <div
        onWheel={handleWheel}
        className="w-container  m-auto mo:w-full  mo:px-[30px]  h-[calc(750px)] mo:h-[calc(480px)] mx-auto md:w-full md:px-[70px]  pb-5 mo:pb-0"
      >
        <div className="mt-[98px] mo:mt-[50px]">
          <div className="bannder-container  ">
            <div className="video-wrapper  mo:!w-full  mo:flex mo:justify-center">
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                muted
                playsInline
                className={`${fade ? "fade-in" : "fade-out"
                  } b-video mo:w-[250px] mo:h-[250px] rounded-[50%]`}
              />
            </div>
          </div>
          {/* <div id="particle-container" className="   mt-10"></div> */}
        </div>
        <div
          // className={`text-wrapper flex  justify-between flex-row bf  h-[100px] ${currentVideoIndex === 2 ? ' mt-[148px]  mo:mt-[120px]' : 'mt-[100px]'}
          className={`text-wrapper flex  justify-between flex-row bf  h-[100px] mt-[100px]  w-full   px-[120px] mo:px-0 md:px-[60px]  `}
          key={currentVideoIndex}
        >

          <div
            className={`text-line font-normal !text-xl  md:text-base mo:!text-[10px]   montserrat text-[#FFFFFF] ${fade ? "text-slide-in" : "text-slide-out"}  ${textAnimation}`}
            dangerouslySetInnerHTML={{ __html: textContent }}
          ></div>
          <div
            onMouseOver={() => {
              setDealHover(true);
            }}
            onMouseLeave={() => {
              setDealHover(false);
            }}
            className={` mo:hidden flex items-center gap-[18px] cursor-default  quattrocento text-xl text-[#EEEEEEB2]  ${isScroll || dealHover ? "text-[#FFFFFF]" : "text-[#EEEEEEB2]"
              } `}
          >
            <Icon
              name={"IconScroll"}
              color={isScroll || dealHover ? "#FFFFFF" : "#EEEEEE70"}
            />
            Scroll Down
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABanner;
