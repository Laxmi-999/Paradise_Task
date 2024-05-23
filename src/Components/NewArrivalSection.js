import { TbRectangleVerticalFilled } from "react-icons/tb";


const NewArrivalSection = () => {
    return(
        <>
        <div className="flex w-[1170px] ml-auto  mr-auto flex-col">
                <div className="flex flex-col w-[1170px] ml-auto mr-auto space-y-0 mb-[2rem]">
                            <div className="flex justify-start ">
                                <TbRectangleVerticalFilled className="text-[#DB4444] h-[5rem] w-[30px]" />
                                <span className="font-poppins pt-[2rem] font-bold text-sm text-[#DB4444]">Featured</span>
                            </div>
                            <div className="flex w-[1170px] h-auto p-0 justify-between ml-auto mr-auto">
                                <span className=" justify-left  align-left text-bold font-poppins text-[36px] mr-auto  font-semibold text-[36px]">Explore Our Products
                                </span>

                                <div className="justify-end items-center align-center mt-[1rem]  bg-[#DB4444]">
                                    <button className="text-center justify-center pl-[1rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem] text-white">View All</button>
                                </div>
                            </div>
                    </div>

            {/* first column */}
          <div className="flex justify-between align-center items-center">
            <div className="flex justify-center items-center align-center">
               <img  src = "img/explore1.jpg" className="h-[500px] w-[570px]" alt = "pic-1"/>
            </div>

            {/* second column */}
            <div className="flex flex-col justify-start  align-center items-center">
                <div className="flex justify-center align-center items-center">
                    <img  src= "/img/explore2.jpg" className = "w-[570px] h-[250px]"alt ="pic-2"/>
                </div>
                <div className="flex flex-row justify-between space-x-4  mt-[1rem] align-center items-center">
                    <div className="flex justify-center align-center items-center">
                        <img src = "img/explore3.jpg" className="w-[270px] h-[240px]" alt = "pic-3" />
                    </div>

                    <div className="flex justify-center align-center items-center">
                         <img src = "img/explore4.jpg"   className="w-[270px] h-[240px]" alt = "pic-4" />
                    </div>
                </div>
            </div>

          </div>

        </div>
</>
    );
}
export default  NewArrivalSection;