import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiEye } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ imageSrc, productName, rating, discountRate, actualPrice, discountPrice, reviewCount }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar key={i} className={`h-[20px] w-[20px] ml-[1px] ${i < rating ? 'text-[#FFAD33]' : 'text-[#E0E0E0]'}`} />
      );
    }
    return stars;
  };

  return (
    <div className="w-[240px] h-[350px] flex flex-col ml-auto mr-auto">
      <div className="bg-[#F5F5F5] p-[0.5rem] pb-[1rem]">
        <div className="flex justify-end items-center">
          <AiOutlineHeart className="text-2xl rounded bg-white" />
        </div>
        <div className="flex justify-between mt-[3px]">
          <div className="w-[35px]"></div>
          <div>
            <img src={imageSrc} alt={productName} className="w-[90px] h-[100px] bg-[#F5F5F5]" />
          </div>
          <div>
            <FiEye className="text-2xl rounded bg-white ml-[2px]" />
          </div>
        </div>
      </div>
      <div>
        <span className="text-[16px] font-bold font-poppins">{productName}</span>
        <div className="flex space-x-2">
          <span className="text-[16px] font-poppins text-[#DB4444] font-bold">${discountPrice}</span>
          <span className="text-[16px] font-poppins text-[#000000] font-bold line-through">${actualPrice}</span>
        </div>
        <div className="flex">
          {renderStars()}
          <span className="ml-[1px]">({reviewCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
