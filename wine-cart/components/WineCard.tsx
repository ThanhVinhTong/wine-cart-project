"use client";

import { useState } from 'react'
import Image from 'next/image';
import { WineProps } from '@/types';
import CustomButton from './CustomButton';
import WineDetails from './WineDetails';

interface WineCardProps {
    wine: WineProps;
}

const WineCard = ({ wine }: WineCardProps) => {
    const { wine_id, appellation, producer, region, country, vintage, wine_type, grape_variety, 
        alcohol_content, volume, image_filename, price, description} = wine;
    
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='wine-card group'>
            <div className='wine-card__content'>
                <h2 className='wine-card__content-title'>
                    {appellation}
                </h2>
            </div>

            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'>$</span>
                {Math.round(price * 100) / 100}
            </p>

            <div className='relative w-full h-40 my-3 object-contain'>
                <Image 
                    src={`/images/${image_filename}`}
                    alt='Wine Model'
                    fill priority
                    className='object-contain'
                />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src={"/wine-region.svg"} width={20} height={20} alt='wine region'/>
                        <p className='text-[14px]'>
                            {region}
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src={"/alcohol-content.svg"} width={20} height={20} alt='alcohol content'/>
                        <p className='text-[14px]'>
                            {Math.round(alcohol_content * 1000) / 10}%
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src={"/bottle-volume.svg"} width={20} height={20} alt='bottle volume'/>
                        <p className='text-[14px]'>
                            {volume}
                        </p>
                    </div>
                </div>

                <div className='wine-card__btn-container'>
                    <CustomButton
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <WineDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} wine={wine}/>
        </div>
    )
}

export default WineCard