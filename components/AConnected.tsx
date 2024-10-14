import { useState } from "react";
import Icon from "./images";
import React from "react";
import useMobileDetect from "../hooks/useMobileDetect";
const AConnected = () => {
  const [dealHover, setDealHover] = useState<any>(null);
  const isMobile = useMobileDetect();

  const apps = [
    { url: "https://discord.gg/xh8vR6JVzM", name: "Discord" },
    { url: "https://x.com/PrismaXai", name: "Twitter" },
    { url: "https://t.me/PrismaX_News", name: "Telegram" },
  ];
  return (
    <div
      className=" aos-init aos-animate   w-full ">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-container bg-[#04070D] pb-[125px] mo:pb-[44px]  m-auto mo:w-full  mo:pl-[28px]  mx-auto md:w-full   flex justify-between  ">
        <div className="flex bf flex-col justify-center mt-[194px] mo:mt-[20px] px-5 font-semibold text-[76px] smd:text-[70px] mo:text-2xl leading-[100px] montserrat">
          <div className="  text-center  mo:w-[140px] mo:text-left text-white">
            Let’s Stay Connected
          </div>
          <div className=" lg:mx-10 lg:px-10 flex gap-[55.35px]  smd:gap-[25px] mo:gap-0 md:ml-[55px] justify-center  ml-[35px] mo:ml-0 mo:flex-col pt-[89px] mo:pt-[30px]  font-normal text-[25px]  mo:text-[8px] leading-7 text-[#EEEEEEB2]">
            {apps.map((item, index) => {
              return (
                <div
                  onClick={() => item.url && window.open(item.url, "_blank")}
                  key={`app_${index}`}
                  onMouseOver={() => {
                    setDealHover({ index, isHover: true });
                  }}
                  onMouseLeave={() => {
                    setDealHover({ index, isHover: false });
                  }}
                  className={`flex gap-2 cursor-pointer     mo:h-[22px] hover:font-medium  group w-auto hover-link pb-3 flex-row items-center ${dealHover?.isHover && dealHover.index === index
                    ? "text-[#FFFFFF]"
                    : " text-[#EEEEEE70]"
                    }`}
                >
                  <Icon
                    name={item.name}
                    size={`${isMobile ? "14" : "22"}`}
                    color={`${dealHover?.isHover && dealHover.index === index
                      ? "#FFFFFF"
                      : " #EEEEEE70"
                      }`}
                  />
                  {item.name}
                  <div className="mo:hidden  ">
                    <Icon
                      name={"IconArrow"}
                      // className="group-hover:rotate-45 transition-500 group-hover:text-red"
                      color={`${dealHover?.isHover && dealHover.index === index

                        ? "#FFFFFF"
                        : " #EEEEEE70"
                        }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex  lg:h-[690px] lg:w-[49vh] md:w-[50vh]  ">
          <img
            src={isMobile ? "./mo-connected.png" : "./stayConnected.png"}
            className="object-cover bg-cover   "

          />
        </div>
      </div>
    </div>
  );
};

export default AConnected;
