import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../context/api/product-api';
import { IoCartOutline } from "react-icons/io5";
import { PiVanBold } from "react-icons/pi";
import { IoIosArchive } from "react-icons/io";


const Detail = () => {
    const { id } = useParams();
    const { data } = useGetProductByIdQuery(id);
    console.log(data);


    // if (isLoading) return <p>Loading...</p>;

    return (
        <div className='bg-white'>
            <div className="container flex flex-col gap-[42px]">
                <div className='flex flex-col gap-[90px]'>
                    <div className='w-full h-[1px] bg-black opacity-15'></div>
                    <p>Products  /  Gaming Headsets & Audio  /  <span className='font-bold'>{data?.name}</span> </p>
                </div>
                <div className='flex mb-[50px]'>
                    <div>
                        <div>
                            <img src={data?.image_url} alt="" />

                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>{data?.name}</h2>
                            <p>{data?.description}</p>
                            <p>{data?.ratings_stars}</p>
                            <p>$ {data?.price} or 99/mont</p>
                            <p>Suggested payments with 6 month  special financing</p>
                            <div>
                                <p>Choose a color</p>
                                <div className='flex gap-[12px] mt-[32px] mb-[12px]'>
                                    {data?.color_options.map((color, index) => (
                                        <p key={index} className='w-[30px] h-[30px] border  rounded-[50%]' style={{ backgroundColor: color }}>
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <button className='flex gap-[10px] bg-[rgb(11,164,45)] items-center mt-[10px] text-white text-[22px] font-medium rounded-[10px] px-[33px] py-[16px]'><IoCartOutline /> Add to Cart </button>

                        </div>
                        <div className='border-dashed border-[4px] rounded-[15px] '>
                            <div className='flex items-center gap-[28px] p-[15px]'>
                                <div>
                                    <PiVanBold className='text-[rgb(11,164,45)]' />
                                </div>
                                <div>
                                    <p className='text-[18px] font-bold'>Free delivery</p>
                                    <p className='text-[16px] border-b-[1px] border-black  w-[340px]'>Enter your Postal Code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className='w-full h-[1px] border-dashed border-[3px] '></div>
                            <div className='flex items-center gap-[28px] p-[15px]'>
                                <div>
                                    <IoIosArchive className='text-[rgb(11,164,45)]' />
                                </div>
                                <div>
                                    <p className='text-[18px] font-bold'>Return Delivery</p>
                                    <p className='text-[16px] border-b-[1px] border-black  w-[340px]'>Free delivery 30 Days return</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Detail;

