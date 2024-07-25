"use client";
import React from 'react';
import Image from 'next/image';
import { Accordion } from 'react-bootstrap';
import ScrollTopButton from '@/components/Global/ScrollTopButton';
import SocialButtons from '@/components/Global/SocialButtons';
interface HeroProps {
}

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
                        <div>
                            <Accordion defaultActiveKey="0" className='w-128 h-80'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Misión</Accordion.Header>
                                        <Accordion.Body className='h-auto '>
                                            <p className='text-sm text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis amet eius voluptatibus ab magnam quisquam facilis illum doloribus repellat odio similique minima nobis aperiam vitae, esse voluptate dolorum doloremque quae in recusandae neque laborum reiciendis dolores! Voluptate magnam, molestias harum sapiente eligendi optio voluptatibus corporis consequuntur quos accusamus modi architecto fugit commodi, facere laboriosam! Non sequi, sunt labore excepturi dolorem ex. Eveniet consectetur, voluptas et laudantium hic unde laboriosam modi suscipit, nihil magni animi possimus ea eius. Ipsa cum ad vel, placeat culpa, voluptatibus, omnis libero laboriosam repellendus similique esse?</p>
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Visión</Accordion.Header>
                                        <Accordion.Body>
                                            <p className='text-sm text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos inventore, tenetur pariatur delectus maxime assumenda reprehenderit, autem dolor possimus cum velit quidem nobis repellendus eos quos, voluptatibus est suscipit deleniti perferendis officiis nisi veniam quasi veritatis. Laborum quibusdam quia explicabo ad dolores. Temporibus ut in, eligendi inventore quo beatae libero id obcaecati eos doloribus voluptates possimus non explicabo blanditiis voluptatum nemo ab soluta? Perferendis cumque vel impedit placeat provident, doloremque dolorem illum deserunt voluptatum veniam, ex ut nisi fugit officiis laborum odit officia non dolore. Repellendus odit quas laboriosam voluptatum.</p>
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Valores</Accordion.Header>
                                        <Accordion.Body>
                                            <p className='text-sm text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, recusandae, non earum aperiam veniam beatae adipisci architecto at, error ab ea doloremque? Doloribus, aut quasi! Odio fuga, quas nostrum odit mollitia quia? Ducimus doloremque totam consequatur placeat fugit hic dicta enim quibusdam aliquid asperiores modi, aliquam sed beatae? Doloribus tempore aut assumenda nam accusamus expedita, voluptates voluptatibus quisquam minus rem aperiam similique repudiandae quod quibusdam ex labore iusto quas eos eligendi sunt a? Nisi, veritatis vero rem repellendus ut voluptatum atque earum excepturi laudantium iste ullam similique! Commodi, dolorum harum.</p>
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Politica de calidad</Accordion.Header>
                                        <Accordion.Body>
                                            <p className='text-sm text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti neque, beatae exercitationem natus quia quaerat molestias harum possimus, inventore tempore vitae ratione distinctio ea impedit, amet eius excepturi at similique nostrum assumenda? Facere dolore iusto vero quae aliquid minima iste, modi veritatis accusantium tenetur placeat ducimus recusandae iure sint expedita inventore quo sit maiores! Sunt eius optio quas voluptatum dolorem sequi id expedita? Ducimus porro quae perferendis consequatur consequuntur iure eius ullam harum omnis tenetur, voluptas exercitationem optio labore explicabo, deserunt ad inventore aperiam. Sequi sapiente animi dolores voluptates voluptas?</p>
                                        </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
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