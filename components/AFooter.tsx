import React from "react"

const AFooter = () => {

  return <div>
    <div className="w-container m-auto mo:w-full mo:px-4  mo:h-[62px] mo:flex mo:items-center   mx-auto md:w-full md:px-[70px]">

      <div className="  flex  text-2xl leading-[30px] font-normal my-7 mo:my-0 items-end mo:justify-center mo:w-full">
        <div className=" justify-between flex  items-center w-full ml-[104px] mo:ml-0 mo:mx-4" >
          <div className=" cursor-pointer" >
            <img src="./logo.svg" className="mo:w-[68px] mo:h-[25px] h-[47.7px]" />
          </div>
          <div className="w-full justify-center mo:justify-end  text-[#EEEEEECC] quattrocento mo:text-[10px] font-normal  text-2xl leading-[22.22px] mo:leading-[11px] mo:text-right text-center  ">
            A Base Layer for Real-World Multimodal GenAI Apps
          </div>
        </div>

      </div>
    </div>



  </div >

}

export default AFooter