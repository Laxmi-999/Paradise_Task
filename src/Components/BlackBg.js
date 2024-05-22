const BlackBg = () =>{
    return (
        <>
        <div className="flex w-[1170px] mr-auto h-[500px] ml-auto mb-[4rem] bg-black" >

                    <div className="flex flex-col justify-start bg-red-500 ml-[4rem] items-center align-center">
                        <div className="flex flex-col justify-start space-y-4">
                            <span className="text-green-500 font-poppins font-sm mb-[1rem] ">Categories</span>
                            <span className="text-white font-poppins font-md ">Enhance Your</span>
                            <span className="text-white font-poppins font-lg">Music Experience</span>
                        </div>
                        <div className="flex justify-start space-x-5">

                            <div className="justify-center  flex flex-col rounded-full bg-white">
                                <span className=" text-sm text-black">23</span>
                                <span className="text-black">Hours</span>
                            </div>


                            <div className="justify-center  flex flex-col rounded-full bg-white">
                                <span className=" text-sm text-black">23</span>
                                <span className="text-black">Hours</span>
                            </div>


                            <div className="justify-center  flex flex-col rounded-full bg-white">
                                <span className=" text-sm text-black">23</span>
                                <span className="text-black">Hours</span>
                            </div>


                            <div className="justify-center  flex flex-col rounded-full bg-white">
                                <span className=" text-sm text-black">23</span>
                                <span className="text-black">Hours</span>
                            </div>

                        </div>
                    </div>
                    {/* <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black to-white">
                        <div className="p-4 bg-white rounded-lg shadow-lg">
                            <img src="/img/speaker.jpg" alt="JBL Speaker" className="w-full h-auto" />
                        </div>
                    </div> */}
                </div>

        </>
    )
}
export default  BlackBg;