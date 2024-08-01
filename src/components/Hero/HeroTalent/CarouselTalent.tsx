/* eslint-disable @next/next/no-img-element */
import Carousel from 'react-bootstrap/Carousel';

function CarouselTalent() {
    return (
        <Carousel>
        <Carousel.Item interval={15000}>
                        <div className='flex flex-col items-center justify-center mt-10'>
                            <img className='w-36 h-36 rounded-full mb-16' src="/testimonios1.png" alt="testimonios"/>
                            <div className=' xs:mx-20 sm:mx-32 md:mx-60  xl:mx-96 2xl:mx-144 w-fit'>
                                <p className='text-justify text-neutral-600'>El proceso es realmente transparente y cada etapa tiene algo nuevo que nos lleva a conocer nuestras verdaderas aspiraciones, además de un acompañamiento siempre presente. Tenemos la oportunidad ver hacia adelante y las puertas abiertas para hacerlo, es decisión propia el tomar el riesgo.</p>
                            </div>
                            <div className=' xs:20 sm:mx-32 md:mx-60 xl:mx-96 2xl:mx-128 mt-10 text-right w-fit'>
                                <p className=' w-fit relative xs:ml-20 md:ml-28 lg:ml-32 2xl:ml-80 text-right text-neutral-600'>-Fernanda Valdez</p>
                            </div>
                        </div>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={15000}>
                        <div className='flex flex-col items-center justify-center mt-10 '>
                            <img className='w-36 h-36 rounded-full mb-16' src="/testimonios2.png" alt="testimonios"/>
                            <div className=' xs:mx-20 sm:mx-32 md:mx-60  xl:mx-96 2xl:mx-144 w-fit'>
                                <p className='text-justify text-neutral-600'>Mi aplicación en Postúlate se manejó con mucha comunicación, recibí bastante información durante el proceso y el final del mismo. La apertura que tuvo mi jefe anterior en su momento fue muy grata y al comunicarle mi intención de postularme al nuevo puesto, recibí bastante apoyo para que fuera parte de él. Las entrevistas fueron rápidas y nada engorrosas. El final del proceso fue muy dinámico, rápido y transparente. Gracias a esta oportunidad he logrado desarrollarme profesionalmente aún más dentro de la empresa, con nuevas actividades y responsabilidades que me permiten seguir avanzando en mi plan de carrera y sobre todo seguir aportando a la empresa mis conocimientos.</p>
                            </div>
                            <div className=' xs:20 sm:mx-32 md:mx-60 xl:mx-96 2xl:mx-128 mt-10 text-right w-fit'>
                                <p className=' w-fit relative xs:ml-20 md:ml-28 lg:ml-32 2xl:ml-80 text-right text-neutral-600'>-Luis Villanueva</p>
                            </div>
                        </div>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default CarouselTalent;