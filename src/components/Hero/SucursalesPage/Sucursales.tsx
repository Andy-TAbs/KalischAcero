import React from 'react';

interface Contenido{
    Lugar: String;
    Direccion: String;
    Telefono: String;
    Whatsapp: String;
}

const Sucursales: React.FC<Contenido> = ({Lugar, Direccion, Telefono, Whatsapp}) => {
    return (
        <div>
            <p>{Lugar}</p>
        </div>
    );
};

export default Sucursales;