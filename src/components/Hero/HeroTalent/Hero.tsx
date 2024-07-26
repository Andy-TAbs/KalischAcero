"use client";
import React from 'react';
import Image from 'next/image';
import { Accordion } from 'react-bootstrap';
import SocialButtons from '@/components/Global/SocialButtons';
import { REM } from 'next/font/google';

interface HeroProps {
}

const Hero: React.FC<HeroProps> = () => {
    return (
        <div className="w-screen items-center">
            <div className='bg-black h-204'></div>
            <div className='z-50'>
                <SocialButtons />
            </div>
            <div className='bg-white h-auto pb-24 items-center justify-center'>
                <div className='flex flex-col h-full items-center'>
                    <div className='lg:mx-52 md:mx-12 my-12 items-center'>
                        <div className=''>
                            <p className='text-2xl'>Formando Lideres</p>
                        </div>
                        <div className='mt-7 w-auto '>
                            <p className='w-auto text-justify font-light'>En <strong><b>Kalisch Acero</b></strong> ofrecemos programas de desarrollo de competencias de liderazgo para que nuestros colaboradores tengan un plan de vida y carrera dentro de la organización.</p>
                        </div>
                    </div>
                </div>
                    <div className='flex flex-col lg:mx-20 xs:mx-5 h-full before:w-11/12 after:w-11/12 items-start'>
                        <div className='lg:mx-32  my-8 w-fit items-center'>
                            <div className='mb-5'>
                                <p className='text-2xl'>¿Cúales son nuestras  competencias de liderazgo?</p>
                            </div>
                            <Accordion defaultActiveKey="0" className='lg:min-w-full after:xs:w-auto before:xs:w-auto h-80'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='min-w-full'>Misión</Accordion.Header>
                                        <Accordion.Body className='h-auto min-w-full'>
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
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex items-center justify-center mt-5 mb-2">
                            <Image
                                src="/postulate1.png"
                                alt="Descripción de la imagen"
                                width={300}
                                height={100}
                                className=""
                            />
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='lg:mx-52 justify-center md:mx-12 my-12 items-center'>
                                <div className=''>
                                    <p className='text-2xl'>Desarrollo de Talento</p>
                                </div>
                                <div className='my-10 w-auto '>
                                    <p className='w-auto text-justify font-light'>En <strong><b>Kalisch Acero</b></strong> creemos en el potencial de nuestros colaboradores por lo cual ofrecemos oportunidades de desarrollo personal y profesional a través de nuestra plataforma interna “Postúlate”.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Hero;