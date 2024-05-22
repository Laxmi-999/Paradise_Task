import ExploreProduct1 from "./ExploreProduct1";
import ExploreProduct2 from "./ExploreProduct2";
import { TbRectangleVerticalFilled } from "react-icons/tb";


const ExploreSection = () =>{
    return(
        <>
        <div className="flex flex-col mr-auto ml-auto w-[1170px] h-auto ">


             <div className="flex flex-col w-[1170px] ml-auto mr-auto space-y-0 mb-[2rem]">
                    <div className="flex justify-start ">
                        <TbRectangleVerticalFilled className="text-[#DB4444] h-[5rem] w-[30px]" />
                        <span className="font-poppins pt-[2rem] font-bold text-sm text-[#DB4444]">Our Products</span>
                    </div>
                    <div className="flex w-[1170px] h-auto p-0 justify-between ml-auto mr-auto">
                        <span className=" justify-left  align-left text-bold font-poppins text-[36px] mr-auto  font-semibold text-[36px]">Explore Our Products
                        </span>

                        <div className="justify-end items-center align-center mt-[1rem]  bg-[#DB4444]">
                            <button className="text-center justify-center pl-[1rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem] text-white">View All</button>
                        </div>
                    </div>
                </div>

           <div className="flex ml-auto mr-auto w-[1170px] mt-[1rem]"> 
                <ExploreProduct1 />
           </div>

           <div className="flex ml-auto mr-auto w-[1170px] mt-[1rem]"> 
                <ExploreProduct2 />
              </div>
        </div>
        <div className="w-[200px] relative [5rem] mb-[2rem] h-auto ml-auto mr-auto items-center justify-center align-center  p-[0.5rem] bg-[#DB4444] ml-auto mr-auto">
            <button className="text-center ml-[1.5rem] align-center justify-center text-white">View All Products</button>
        </div>

        </>
    )
}
export default ExploreSection;