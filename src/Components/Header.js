import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () =>{
    return(
       <>
          <div className="w-full h-48px bg-black flex justify-center items-center">
            <div className="inline-flex justify-center items-center">
              <p className="text-sm center text-white ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<span className="ml-3 text-bold underline">ShopNow</span></p>
              <div className="flex justify-center ml-40">
                    <span className="text-sm text-white">English</span>
                    <RiArrowDropDownLine className="text-2xl text-white" />
                              
              </div>

            </div>


         </div>
       </>  
      )}
export default Header;