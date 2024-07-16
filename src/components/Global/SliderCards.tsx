    import React, { useState, useEffect } from 'react';
    import FlipCard from './FlipCard'; 
    import FlipCard2 from './FlipCard2';

    const FlipCardSlider: React.FC = () => {
    const [cardsToShow, setCardsToShow] = useState<"firstSet" | "secondSet">("firstSet");

    useEffect(() => {
        const timer = setTimeout(() => {
        setCardsToShow(cardsToShow === "firstSet" ? "secondSet" : "firstSet");
        }, 8000); // Cambia los cards después de 8 segundos

        return () => clearTimeout(timer);
    }, [cardsToShow]);

    return (
        <div className="flex flex-col mb-16  items-center">
        <div className="">
            <p className="font-normal my-14 text-3xl">Divisiones</p>
        </div>
        <div className="flex lg:flex-row xs:flex-col ">
            {cardsToShow === "firstSet" ? (
            <>
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
                {/* Agrega los otros tres FlipCards del primer set aquí */}
            </>
            ) : (
            <>
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
                {/* Agrega los otros tres FlipCards del segundo set aquí */}
            </>
            )}
        </div>
        </div>
    );
    };

    export default FlipCardSlider;
