// BackToTopButton.tsx
import React, { useEffect, useState } from 'react';

const ScrollTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Función para mostrar u ocultar el botón basado en la posición del scroll
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Agregar el evento de scroll
        window.addEventListener('scroll', handleScroll);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Función para hacer scroll hacia arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Scroll suave
        });
    };

    // Renderizar el botón solo si isVisible es true
    return (
        <>
            {isVisible && (
                <button className={`button ${isVisible ? 'visible' : ''}`} title="Button" onClick={scrollToTop}>
                <svg className="svgIcon" viewBox="0 0 384 512">
                    <path
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>
            )}
        </>
    );
};

export default ScrollTopButton;
