"use client"

import { Fragment } from 'react';
import Image from 'next/image';

import { Dialog, Transition } from '@headlessui/react';

import { WineProps } from '@/types';
import CustomButton from './CustomButton';

interface WineDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    wine: WineProps
}

const WineDetails = ({ isOpen, closeModal, wine }: WineDetailsProps) => {
  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opcaity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opcaity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25'/>
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opcaity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opcaity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel 
                                className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white
                                p-6 text-left shadow-xl transition-all flex flex-col gap-5'
                            >
                                <button
                                    type='button'
                                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                                    onClick={closeModal}
                                >
                                    <Image
                                        src='/close.svg'
                                        alt='close'
                                        width={20}
                                        height={20}
                                        className='object-contain'
                                    />
                                </button>

                                <div className='flex-1 flex flex-col gap-3'>
                                    <div className='relative w-full h-40 bg-cover bg-center rounded-lg'>
                                        <Image 
                                            src={`/images/${wine.image_filename}`}
                                            alt='Wine Model'
                                            fill priority
                                            className='object-contain'
                                        />  
                                    </div>
                                </div>

                                <div className='flex-1 flex flex-col gap-2'>
                                    <h2 className='font-semibold text-xl capitalize'> {wine.appellation} </h2>

                                    <div className='mt-3 flex flex-wrap gap-4'>
                                        {Object.entries(wine)
                                            .filter(([key]) => key !== '_id' && key !== 'wine_id' && key !== 'image_filename' 
                                                            && key !== 'appellation' && key !== 'price')
                                            .map(([key, value]) => (
                                            <div className='flex justify-between gap-5 w-full text-right' key={key}>
                                                <h4 className='text-grey capitalize'>{key.split('_').join(" ")}</h4>
                                                <p className='text-black-100 font-semibold'>{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <CustomButton
                                    title='Add to Cart'
                                    containerStyles='py-[16px] rounded-full bg-primary-blue'
                                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                                />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default WineDetails