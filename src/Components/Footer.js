import { IoSendSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { PiTwitterLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";



const Footer = () =>{
    return(
        <>
        <div className="w-[100%] h-auto bg-black flex flex-col p-[3rem] mr-auto ml-auto  ">

           <div className="inline-flex justify-center space-x-[15rem]" >


                 <div className="flex flex-col justify-start space-y-4">
                      <span className="font-poppins  justify-start text-white font-bold text-[2rem] ">Exclusive</span>
                      <div className="flex flex-col justify-start">

                            <span className="font-poppins text-white font-semibold text-[2rem]">Subscribe</span>
                            <span className="font-poppins  text-white  text-[1rem]">Get 10% off your first order</span>
                            <div className="flex justify-start text-white  p-[1rem]  rounded-md border-4 border-white align-center items-center">
                                <input placeholder="enter your email" className="text-white bg-black"  />
                                <IoSendSharp  className="text-white text-[2rem] ml-[0.5rem]"/>
                     </div>   
                </div>   
            </div>

                 <div className="flex flex-col justify-start space-y-4 ">
                      <span className="font-poppins  justify-start text-white font-bold text-[2rem] ">Support</span>
                 
                        <div className="flex flex-col justify-start ">
                            <span className="font-poppins text-white font-semibold text-[1.5rem]">111,Bijaya sarani, Dhaka</span>
                            <span className="font-poppins text-white font-semibol text-[1.5rem] mb-[6px]">DH1515,Bangladesh.</span>
                            <span className="font-poppins text-white font-semibol text-[1.5rem] mb-[6px]">exclusive@gmail.com</span>
                            <span className="font-poppins text-white font-semibol text-[1.5rem]">+88015-88888-9999</span>
                        </div>
                </div>

                <div className="flex flex-col justify-start space-y-4">
                    <span className="font-poppins  justify-start text-white font-bold text-[2rem] ">Account</span>
                    <div className="flex flex-col   justify-start space-y-4" >
                            <span className="font-poppins text-white text-[1.5rem]">My Account</span>
                            <span className="font-poppins text-white  text-[1.5rem]">Login/Register</span>
                            <span className="font-poppins text-white  text-[1.5rem]">Cart</span>
                            <span className="font-poppins text-white  text-[1.5rem]">WishList</span>
                            <span className="font-poppins text-white  text-[1.5rem]">Shop</span>
                    </div>   
                 </div>

                 <div className="flex flex-col justify-start space-y-4">
                    <span className="font-poppins  justify-start text-white font-bold text-[2rem] " >Quick Link</span>
                       <div className="flex flex-col justify-start space-y-4">
                            <span className="font-poppins text-white text-[1.5rem]">Privac Policy </span>
                            <span className="font-poppins text-white text-[1.5rem]">Terms of Use</span>
                            <span className="font-poppins text-white text-[1.5rem]">FAQ</span>
                            <span className="font-poppins text-white text-[1.5rem]">Contacts</span>
                      </div>
                 </div>


             <div className="flex flex-col justify-start space-y-4 ">
                 <span className="font-poppins  justify-start text-white font-bold text-[2rem]" >Download App</span>
                 <div className="flex flex-col justify-start ">
                        <span className="font-poppins text-[1rem] text-white ">Save $3 with App New User Only</span>
                        <div className="flex justify-start space-x-4 align-center items-center">
                            <div className="flex">
                                <img src = "/img/Qrcode 1@2x.jpg" className="w-[80px] h-[80px]" />
                            </div>

                            <div className="flex" >
                                <img src = "/img/Frame 718.jpg"  className="w-[130px] h-[84px]"/>

                            </div>
                        </div>
                   </div>
                   <div className="flex justify-start align-center items-center space-x-6 mt-[2rem]">

                       <FaFacebookF className="text-white text-[2rem]" />
                       <PiTwitterLogoBold className="text-white text-[2rem]"/>
                       <FaInstagram className="text-white text-[2rem]"/>
                       <TiSocialLinkedin  className="text-white text-[2rem]" />

                   </div> 
                 </div>  
            </div>
            <hr  className="w-full text-grey-100"/>

             <div className="flex ml-auto mr-auto mt-[2rem] mb-[2rem]">
                <span className="font-poppins h-[2rem] text-[2rem] text-white">copyright@gmail.com</span>
             </div>
</div>
   
        </>
    );
}

export default Footer;