/* eslint-disable @next/next/no-img-element */
import Carousel from 'react-bootstrap/Carousel';

function CarouselLP() {
    return (
        <Carousel>
        <Carousel.Item interval={3000}>
                <img src="/Banner_HH-1980-x-300-px-1920x300.jpg" alt="Kalisch_Logo"/>
                <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img src="/WP_KALISCH_Mineria.png"  alt="Kalisch_Logo"/>
                <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default CarouselLP;