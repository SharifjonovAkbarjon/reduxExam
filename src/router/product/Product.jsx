import React from 'react'
import Hero from '../../components/hero/Hero'

const Product = () => {
    return (
        <>
            <Hero />
            <div className='bg-[rgb(213,248,207)]'>
                <div className='container flex items-center justify-between'>
                    <p className='py-[28px] text-[24px] text-[rgb(11,164,45)] font-medium'>Filter by:</p>
                    <select  className='bg-inherit text-[24px] text-[rgb(11,164,45)] font-medium' name="" id="">
                        <option value="">Sort by</option>
                        <option value="">Cheap</option>
                        <option value="">Expensive</option>
                    </select>

                </div>
            </div>
            <div className='container'>
                <div></div>
                <div></div>
            </div>
        </> 
    )
}

export default Product