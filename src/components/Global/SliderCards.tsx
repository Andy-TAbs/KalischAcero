    import React, { useState } from 'react';
    import FlipCard2 from './FlipCard2';
    import { Carousel } from 'react-bootstrap';

        function SliderCards () {
            const [index, setIndex] = useState(0);

            const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
                setIndex(selectedIndex);
            };
            return (
                <div>
                <div className="flex items-center justify-center">
                    <p className="font-normal my-14 text-3xl">Industrias</p>
                </div>
                <div className='flex justify-center items-center '>
                <Carousel activeIndex={index} onSelect={handleSelect} className='w-screen'>
                    <Carousel.Item className='pt-3'>
                    <div className="flex flex-col mb-16  items-center">
                        <div className="flex lg:flex-row xs:flex-col ">
                    <div className="xl:mr-6 lg:mr-3 lg:ml-3 xs:mb-10">
                    <FlipCard2
                        image="https://via.placeholder.com/150"
                        title="Título 1"
                        text="Texto adicional 1"
                        link="#link1"
                    />
                    </div>
                    <div className="xl:mr-6 lg:mr-3 lg:ml-3 xs:mb-10">
                    <FlipCard2
                        image="https://via.placeholder.com/150"
                        title="Título 1"
                        text="Texto adicional 1"
                        link="#link1"
                    />
                    </div>
                    <div className="xl:mr-6 lg:mr-3 lg:ml-3 xs:mb-10">
                    <FlipCard2
                        image="https://via.placeholder.com/150"
                        title="Título 1"
                        text="Texto adicional 1"
                        link="#link1"
                    />
                    </div>
                    <div className="xl:mr-6 lg:mr-3 lg:ml-3 xs:mb-10">
                    <FlipCard2
                        image="https://via.placeholder.com/150"
                        title="Título 1"
                        text="Texto adicional 1"
                        link="#link1"
                    />
                    </div>
                </div>
                </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='pt-3'>
                    <div className="flex flex-col mb-16  items-center">
                        <div className="flex lg:flex-row xs:flex-col ">
                    <div className="xl:mr-6 lg:mr-3 xs:mb-10">
                    <FlipCard2
                        image="https://via.placeholder.com/150"
                        title="Título 5"
                        text="Texto adicional 5"
                        link="#link5"
                    />
                    </div>
                    <div className="xl:mr-6 lg:mr-3 lg:ml-3 xs:mb-10">
                    <FlipCard2
                        image="https://via.placeholder.com/150"
                        title="Título 1"
                        text="Texto adicional 6"
                        link="#link1"
                    />
                    </div>
                    <div className="xl:mr-6 lg:mr-3 lg:ml-3 xs:mb-10">
                    <FlipCard2
                        image="https://via.placeholder.com/150"
                        title="Título 1"
                        text="Texto adicional 7"
                        link="#link1"
                    />
                    </div>
                    <div className="xl:mr-6 lg:mr-3 lg:ml-3 xs:mb-10">
                    <FlipCard2
                        image="https://via.placeholder.com/150"
                        title="Título 1"
                        text="Texto adicional 8"
                        link="#link1"
                    />
                    </div>
                    </div>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
                </div>
                );
            }

    export default SliderCards;
