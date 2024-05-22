import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadphones } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";


const Services = () =>{
    return(
        <>
        <div className="w-auto flex  ml-auto mr-auto justify-center space-x-[10rem]  mt-[5rem] mb-[10rem] align-center items-center">



          <div className="flex flex-col">
            <div class="flex justify-center items-center">
                <div class="flex justify-center items-center w-auto h-auto rounded-full bg-gray-400 p-[10px]">
                    <div class="flex justify-center items-center w-auto h-auto p-[5px] rounded-full bg-black ">
                        <TbTruckDelivery className="text-white text-center font-medium" />
                    </div>
                </div>
            </div>
                
            <div  className="flex flex-col">
                <span className="font-poppins text-black text-[20px] font-bold">FREE AND FAST DELIVERY</span>
                <span className="font-poppins text-black text-[14px]">Free delivery for all orders over $140</span>     
            </div>

        </div>



        <div className="flex flex-col">
            <div class="flex justify-center items-center">
                <div class="flex justify-center items-center w-auto h-auto rounded-full bg-gray-400 p-[10px]">
                    <div class="flex justify-center items-center w-auto h-auto p-[5px] rounded-full bg-black ">
                        <FaHeadphones className="text-white text-center font-medium" />
                    </div>
                </div>
            </div>
                
            <div  className="flex flex-col">
                <span className="font-poppins text-black text-[20px] font-bold">24/7 CUSTOMER SERVICE</span>
                <span className="font-poppins text-black text-[14px]">Friendly 24/7 customer support</span>     
            </div>

        </div>


        <div className="flex flex-col">
            <div class="flex justify-center items-center">
                <div class="flex justify-center items-center w-auto h-auto rounded-full bg-gray-400 p-[10px]">
                    <div class="flex justify-center items-center w-auto h-auto p-[5px] rounded-full bg-black ">
                        <SiTicktick  className="text-white text-center font-medium" />
                    </div>
                </div>
            </div>
                
            <div  className="flex flex-col">
                <span className="font-poppins text-black text-[20px] font-bold">MONEY BACK GUARANTEE</span>
                <span className="font-poppins text-black text-[14px]">We reurn money within 30 days</span>     
            </div>

        </div>


    </div>

        </>
    )
}
export default Services;