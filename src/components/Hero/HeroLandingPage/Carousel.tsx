/* eslint-disable @next/next/no-img-element */
import Carousel from 'react-bootstrap/Carousel';

function CarouselLP() {
    return (
        <Carousel>
        <Carousel.Item interval={3000}>
                <img src="/Banner_HH-1980-x-300-px-1920x300.jpg" alt="Kalisch_Logo"/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img src="/WP_KALISCH_Mineria.png"  alt="Kalisch_Logo"/>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default CarouselLP;