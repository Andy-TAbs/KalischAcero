"use client";
import React from 'react';
import Image from 'next/image';
import { Accordion } from 'react-bootstrap';
import ScrollTopButton from '@/components/Global/ScrollTopButton';
import SocialButtons from '@/components/Global/SocialButtons';
import AccordionItem from '@/components/Global/AccordionItem';
interface HeroProps {
}

const accordionItems = [
    {
      header: 'Accordion Item #1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      header: 'Accordion Item #2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        header: 'Accordion Item #2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        header: 'Accordion Item #2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
  ];

const Hero: React.FC<HeroProps> = () => {
    return (
    <div className="w-screen">
        <div className='flex flex-row h-auto w-auto bg-black'>
            <div className='bg-black h-204'>

            </div>
            <div>
                <SocialButtons />
            </div>
        </div>
            <div className='bg-white h-auto pb-24 w-auto'>
            <div className="fixed z-50 items-end bottom-5 right-8">
                <div className="sticky-position xs:hidden md:block">
                    <ScrollTopButton />
                </div>
            </div>
                <div className='flex flex-col mx-20 h-full items-center'>
                    <div className='mx-32 md:mx-12  mt-20 h-auto w-auto items-center justify-start flex flex-row '>
                    <div className="p-4 w-256">
                                <AccordionItem items={accordionItems} />
                            </div>
                        <div className="h-auto w-auto mx-7 mb-8">
                            <img src="/mision-valores-etc.png" className="h-72 w-auto" alt="Kalisch_Logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;