
import { FaStar } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import ProductCard from "./ProductComponent";





const Thismonth = () => {
    return (
        <>

            <div>
                <div className="flex flex-col w-[1170px] ml-auto mr-auto space-y-0 mb-[2rem]">
                    <div className="flex justify-start ">
                        <TbRectangleVerticalFilled className="text-[#DB4444] h-[5rem] w-[30px]" />
                        <span className="font-poppins pt-[2rem] font-bold text-sm text-[#DB4444]">Today’s</span>
                    </div>
                    <div className="flex w-[1170px] h-auto p-0 justify-between ml-auto mr-auto">
                        <span className=" justify-left  align-left text-bold font-poppins text-[36px] mr-auto  font-semibold text-[36px]">Best Selling Products
                        </span>

                        <div className="justify-end items-center align-center mt-[1rem]  bg-[#DB4444]">
                            <button className="text-center justify-center pl-[1rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem] text-white">View All</button>
                        </div>
                    </div>
                </div>






            <div className= "flex w-[1170px]    ml-auto mr-auto justify-between" >

                    <div className="w-[240px] h-[350px] flex flex-col  ">
                        <div className="bg-[#F5F5F5] p-[0.5rem] pb-[2rem] ">
                            <div className="flex justify-end items-center">
                                <AiOutlineHeart className="text-2xl rounded bg-white" />
                            </div>


                            <div className="flex justify-between mt-[0.5rem]">
                                <div className="w-[35px]"></div>
                                <div>
                                    <img src="/img/pinkJacket.jpg" alt="gamepad" className="w-[90px] h-[100px]" />
                                </div>
                                <div className="">
                                    <FiEye className="text-2xl  rounded bg-white ml-[2px]" />
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col space-y-2 mt-[0.5rem] ">
                            <span className="text-[16px] font-bold font-poppins">HAVIT HV-G92 Gamepad</span>
                            <div className="flex space-x-2">
                                <span className="text-[16px] font-poppins text-[#DB4444] font-bold">$120</span>
                                <span className="text-[16px] font-poppins text-[#000000] font-bold">$160</span>
                            </div>
                            <div className="flex">
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px] " />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <span className="ml-[1px]">(88)</span>
                            </div>
                        </div>
                    </div>



                   
                    <div className="w-[240px] h-[350px] flex flex-col  ">
                        <div className="bg-[#F5F5F5] p-[0.5rem] pb-[2rem] ">
                            <div className="flex justify-end items-center">
                                <AiOutlineHeart className="text-2xl rounded bg-white" />
                            </div>


                            <div className="flex justify-between mt-[0.5rem]">
                                <div className="w-[35px]"></div>
                                <div>
                                    <img src="/img/pinkJacket.jpg" alt="gamepad" className="w-[90px] h-[100px]" />
                                </div>
                                <div className="">
                                    <FiEye className="text-2xl  rounded bg-white ml-[2px]" />
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col space-y-2 mt-[0.5rem] ">
                            <span className="text-[16px] font-bold font-poppins">HAVIT HV-G92 Gamepad</span>
                            <div className="flex space-x-2">
                                <span className="text-[16px] font-poppins text-[#DB4444] font-bold">$120</span>
                                <span className="text-[16px] font-poppins text-[#000000] font-bold">$160</span>
                            </div>
                            <div className="flex">
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px] " />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <span className="ml-[1px]">(88)</span>
                            </div>
                        </div>
                    </div>



                    <div className="w-[240px] h-[350px] flex flex-col  ">
                        <div className="bg-[#F5F5F5] p-[0.5rem] pb-[2rem] ">
                            <div className="flex justify-end items-center">
                                <AiOutlineHeart className="text-2xl rounded bg-white" />
                            </div>


                            <div className="flex justify-between mt-[0.5rem]">
                                <div className="w-[35px]"></div>
                                <div>
                                    <img src="/img/gammaxx.jpg" alt="gamepad" className="w-[90px] h-[100px]" />
                                </div>
                                <div className="">
                                    <FiEye className="text-2xl  rounded bg-white ml-[2px]" />
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col space-y-2 mt-[0.5rem] ">
                            <span className="text-[16px] font-bold font-poppins">HAVIT HV-G92 Gamepad</span>
                            <div className="flex space-x-2">
                                <span className="text-[16px] font-poppins text-[#DB4444] font-bold">$120</span>
                                <span className="text-[16px] font-poppins text-[#000000] font-bold">$160</span>
                            </div>
                            <div className="flex">
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px] " />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <span className="ml-[1px]">(88)</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-[240px] h-[350px] flex flex-col  ">
                        <div className="bg-[#F5F5F5] w-[270px] p-[0.5rem] pb-[2rem] ">
                            <div className="flex justify-end items-center">
                                <AiOutlineHeart className="text-2xl rounded bg-white" />
                            </div>


                            <div className="flex justify-between mt-[0.5rem]">
                                <div className="w-[35px]"></div>
                                <div>
                                    <img src="/img/sam-moghadam.jpg" alt="gamepad" className="w-[90px] h-[100px]" />
                                </div>
                                <div className="">
                                    <FiEye className="text-2xl  rounded bg-white ml-[2px]" />
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col space-y-2 mt-[0.5rem] ">
                            <span className="text-[16px] font-bold font-poppins">HAVIT HV-G92 Gamepad</span>
                            <div className="flex space-x-2">
                                <span className="text-[16px] font-poppins text-[#DB4444] font-bold">$120</span>
                                <span className="text-[16px] font-poppins text-[#000000] font-bold">$160</span>
                            </div>
                            <div className="flex">
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px] " />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <FaStar className="h-[20px] w-[20px] text-[#FFAD33] ml-[1px]" />
                                <span className="ml-[1px]">(88)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Thismonth;