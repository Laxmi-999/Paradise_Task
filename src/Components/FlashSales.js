import { TbRectangleVerticalFilled } from "react-icons/tb";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

const FlashSales = () =>{
    return(
        <>
         <div className=" flex flex-col relative  mt-[3rem] mb-[1rem] w-[1170px] ml-auto mr-auto  space-y-0">
            <div className="flex justify-start  mb-[0]">
                <TbRectangleVerticalFilled  className="text-[#DB4444] h-[5rem] w-[30px]"/>
                <span className="font-poppins pt-[2rem] font-bold text-sm text-[#DB4444]">Today’s</span>
            </div>
            <div className="flex  justify-start w-[1170px] items-center relative mt-[0]">
                 <span className=" justify-left  align-left text-bold font-poppins text-[36px] mr-auto  font-semibold text-[36px]">Flash Sales</span>
                 <div className="flex absolute ml-[20rem] ">
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-[0.75rem] text-black font-poppins font-bold">Days</span>
                        <span className="font-poppins text-[2rem] text-black font-extrabold">03</span>
                    </div>
                    <span className="text-[2rem] text-[#DB4444] font-bold mt-[1rem] mx-[0.25rem]">:</span>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-[0.75rem] text-black font-poppins font-bold">Hours</span>
                        <span className="font-poppins text-[2rem] text-black font-extrabold">23</span>
                    </div>
                    <span className="text-[2rem] text-[#DB4444] font-bold mt-[1rem] mx-[0.25rem]">:</span>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-[0.75rem] text-black font-poppins font-bold">Minutes</span>
                        <span className="font-poppins text-[2rem] text-black font-extrabold">19</span>
                    </div>
                    <span className="text-[2rem] text-[#DB4444] font-bold mt-[1rem] mx-[0.25rem]">:</span>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-[0.75rem] text-black font-poppins font-bold">Seconds</span>
                        <span className="font-poppins text-[2rem] text-black font-extrabold">56</span>
               </div>
               </div>

                 <div className="inline-flex justify-end items-center">
                    <FiArrowLeft className="bg-gray-300 text-2xl p-2 rounded" />
                    <FiArrowRight className="bg-gray-300 text-2xl p-2 rounded ml-2" />
                </div>  
            </div>
         </div>

        </>
    )
}
export default FlashSales;