import { GiSmartphone } from "react-icons/gi";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { LuCamera } from "react-icons/lu";
import { LuHeadphones } from "react-icons/lu";
import { GrGamepad } from "react-icons/gr";





const  Category = () =>{
    return (
        <>
        <div className="flex flex-col  w-full mr-auto ml-auto ">
            <div className="flex  flex-col justify-start">
                    <div className="flex justify-start w-[1170px] ml-auto mr-auto  mb-[0]">
                        <TbRectangleVerticalFilled  className="text-[#DB4444] h-[5rem] w-[30px]"/>
                        <span className="font-poppins pt-[2rem] font-bold text-sm text-[#DB4444]">Categories</span>
                    </div>

                 <div className="flex  justify-between   w-[1170px] ml-auto mr-auto relative mt-[0]">
                    <span className=" justify-left align-left text-bold font-poppins text-[36px] mr-auto  font-semibold text-[36px]">Browse Category</span>

                    <div className="inline-flex justify-end align-center items-center">
                        <FiArrowLeft className="bg-gray-300 text-2xl p-2 rounded" />
                        <FiArrowRight className="bg-gray-300 text-2xl p-2 rounded ml-2" />
                    </div>  
            </div>
            </div>
            <div className="flex w-[1170px] ml-auto   mr-auto h-auto justify-between mt-[3rem] mb-[5rem] ">

            <div className="h-[145px] w-[160px] flex flex-col justify-center items-center border-[2px] border-gray-500 rounded-md" >
                <GiSmartphone className="text-2xl" />
                <span className="text-1xl font-poppins">phone</span>
                </div>

                <div className="h-[145px] w-[160px] flex flex-col justify-center items-center border-[2px] border-gray-500 rounded-md" >
                   <HiOutlineDesktopComputer className="text-2xl" />
                    <span className="text-1xl font-poppins">Computers</span>
                </div>

                <div className="h-[145px] w-[160px] flex flex-col justify-center items-center border-[2px] border-gray-500 rounded-md" >
                 <BsSmartwatch className="text-2xl" />
                <span className="text-1xl font-poppins">SmartWatch</span>
                </div>


                <div className="h-[145px] w-[160px] bg-[#DB4444] flex flex-col justify-center items-center border-[2px] border-gray-500 rounded-md" >
                <LuCamera className="text-2xl text-white" />
                <span className="text-1xl font-poppins">Camera</span>
                </div>

                <div className="h-[145px] w-[160px] flex flex-col justify-center items-center border-[2px] border-gray-500 rounded-md" >
                 <LuHeadphones  className="text-2xl" />
                <span className="text-1xl font-poppins">HeadPhone</span>
                </div>

                <div className="h-[145px] w-[160px] flex flex-col justify-center items-center border-[2px] border-gray-500 rounded-md" >
                  <GrGamepad  className="text-2xl" />
                  <span className="text-1xl font-poppins">Gaming</span>
                </div>

            </div>
            <hr  className="w-[1170px]  ml-auto mr-auto text-grey"/>
        </div>

        </>
    )
}
export default Category;