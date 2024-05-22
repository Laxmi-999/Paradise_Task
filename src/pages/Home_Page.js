import React from "react";
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import ExclusiveList from '../Components/ExclusiveList';
import  IphoneImg from '../Components/IphoneImg';
import FlashSales from "../Components/FlashSales";
import Products from "../Components/Products";
import Category from "../Components/Category";
import Thismonth from "../Components/ThisMonth";
import BlackBg from "../Components/BlackBg";
import ExploreSection from "../Components/ExploreSection";
import NewArrivalSection from "../Components/NewArrivalSection";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import Banner from "../Components/BlackBg";



const Home_Page = () => {
    return(
    <>  

      <Header />
    <div className="w-full flex flex-col justify-center items ml-auto mr-auto">
                <Navbar />
                <div className = "flex w-[1170px]  ml-auto mr-auto"> 

                    <div className="ml-[5px] justify-left flex align-left">
                        <ExclusiveList />
                    </div> 
                    <div className="w-[15rem]">

                    </div>
                    <div className="ml-auto mr-auto justify-end items-center align-center">
                        <IphoneImg />
                    </div> 
            </div> 
                <FlashSales />
              <Products />
            <Category />
        {/* <div> */}
            <Thismonth />
            <Banner />        {/* </div>      */}
        <ExploreSection />
        <NewArrivalSection/>

        <Services />
        <Footer />
    </div>    

    </>
    )
}
export default Home_Page;