import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () =>{
    return(
        <>
        <div className="w-[1170px] inline-flex  justify-between items-center mr-auto ml-auto pt-[3rem] pb-[2rem]">
            <span className="ml-20 align-left font-bold text-lg">Exclusive</span>
             <div className="flex justify-center items-center ml-[10rem]">
                <ul className="flex list-none space-x-20 justify-center text-sm ">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign Up</li>
                </ul>
             </div>
            <div className="inline-flex items-center ml-[4rem]">
                <div className="flex items-center mr-3 bg-grey">
                    <input className = "text-sm " placeholder="what are you looking for"/>
                    <CiSearch className="text-sm"/>
                </div>
                <div className="flex items-center ml-4 space-x-3">
                <FaHeart className="text-grey-500"/>
                <CiShoppingCart />
                </div>

            </div> 
             
             
        </div>

        </>
    )
}
export default Navbar;