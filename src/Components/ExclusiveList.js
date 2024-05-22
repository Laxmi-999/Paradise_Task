import { MdOutlineNavigateNext } from "react-icons/md";

const ExclusiveList = () =>{
    return(
        <>
        <div className="justify-start items-start">
            <ul className="flex-col space-y-2 font-poppins  text-sm leading-6">
                <li className="flex items-center space-x-2">
                    <span>Woman’s Fashion</span>
                    <MdOutlineNavigateNext />
                </li>
                <li className="flex items-center space-x-2">
                    <span>Men’s Fashion</span>
                    <MdOutlineNavigateNext />
                </li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Outdoor</li>
                <li>Baby’s & Toys</li>
                <li>Pets</li>
                <li>Health & Beauty</li>
            </ul>
        </div>


        </>
    )
}
export default ExclusiveList;