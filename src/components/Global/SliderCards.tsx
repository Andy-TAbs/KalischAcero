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
                        image="/construccion.jpg"
                        title="Construcción"
                        text="Nuestros materiales tienen una vida útil muy alta, por eso son perfectos en la industria de la construcción."
                        link=""
                        textlink=''
                    />
                    </div>
                    <div className="xl:mr-6 lg:mr-3 lg:ml-3 xs:mb-10">
                    <FlipCard2
                        image="/herreria.jpg"
                        title="Herreria"
                        text="Expertos en la herrería Industrial, en estructuras metálicas y también en materiales hechos a la medida para equipos"
                        link=""
                        textlink=''
                    />
                    </div>
                    <div className="xl:mr-6 lg:mr-3 lg:ml-3 xs:mb-10">
                    <FlipCard2
                        image="/estructura.jpg"
                        title="Estructura"
                        text="Contamos con los elementos que forman la parte resistente del sistema estructural en una construcción."
                        link=""
                        textlink=''
                    />
                    </div>
                    <div className="xl:mr-6 lg:mr-3 lg:ml-3 xs:mb-10">
                    <FlipCard2
                        image="/manufactura.jpg"
                        title="Manufactura"
                        text="Cubrimos la industria encargada de transformar la materia prima en productos finales."
                        link=""
                        textlink=''
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
                        image="/Automotriz.jpg"
                        title="Automotriz"
                        text="Materiales fundamentales en la industria automotriz. Haciendo función de soporte, revestimiento y estructura."
                        link=""
                        textlink=''
                    />
                    </div>
                    <div className="xl:mr-6 lg:mr-3 lg:ml-3 xs:mb-10">
                    <FlipCard2
                        image="/Ferreteria.jpg"
                        title="Ferreteria"
                        text="Portafolio de insumos y herramientas que son útiles para la construcción de empresas, viviendas y otros."
                        link=""
                        textlink=''
                    />
                    </div>
                    <div className="xl:mr-6 lg:mr-3 lg:ml-3 xs:mb-10">
                    <FlipCard2
                        image="/sectorprimario.jpg"
                        title="Sector primario"
                        text="Gracias a la versatilidad de nuestros productos que se ocupen en el ramo ganadero y agrícola, como abrevaderos, corrales, cercas, entre otros."
                        link=""
                        textlink=''
                    />
                    </div>
                    <div className="xl:mr-6 lg:mr-3 lg:ml-3 xs:mb-10">
                    <FlipCard2
                        image="/Hojalateria.jpg"
                        title="Hojalateria"
                        text="Presentes en el ramo de la hojalatería con acero inoxidable y láminas de distintos tipos para la fabricación de canales para naves industriales, plataformas, entre otros."
                        link=""
                        textlink=''
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
