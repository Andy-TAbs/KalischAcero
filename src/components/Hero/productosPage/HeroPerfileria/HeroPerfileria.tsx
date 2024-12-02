import SocialButtons from '@/components/Global/SocialButtons';
import ScrollTopButton from '@/components/Global/ScrollTopButton';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

interface Props {
    // Define las propiedades del componente aquí
}

const Hero: React.FC<Props> = () => {
    return (
        <div className="w-screen">
        <div className='h-70 relative '>
            <Image src='/productos/estructura.jpeg' alt='productos' width={1000} height={1000} className="absolute inset-0 z-0 w-full h-full object-cover" quality={100} />
            <div className='absolute inset-0 flex items-center justify-center  lg:top-28 md:top-14 sm:top-14 xs:top-14 xsm:top-14  z-10'>
                <p className='md:text-8xl xs:text-7xl sm:text-7xl font-Bebas_Neue text-white font-extrabold select-none'>Estructurales</p>
            </div>
        </div>
        <div>
            <SocialButtons />
        </div>
        <div className='bg-white h-auto py-24'>
            <div className="fixed z-50 items-end bottom-5 right-8">
                <div className="sticky-position xs:hidden md:block">
                    <ScrollTopButton />
                </div>
            </div>

            <div className='flex flex-col justify-around w-screen'>
                <p className='text-neutral-600 text-justify font-light text-mg  mx-40'>Ofrecemos perfiles con diferentes formas y acabados en calibres 20 al 14. Perfiles para la fabricación de ventanas corredizas y abatibles. Perfiles para fabricación de Puertas de herrería. Rieles para closets y portones. Pasamanos para escaleras de herrería.</p>
                <p className='text-neutral-600 text-justify font-light text-mg  mx-40'><strong className='font-semibold'>Características:</strong> Es sencillo de soldar y cortar. Por su gran variedad de dimensiones y espesores puede adaptarse a cualquier proyecto.  Regularmente, el PTR se fabrica con lámina rolada en caliente por lo que cuenta con una mayor solidez para usos estructurales.  Proporciona resistencia y solidez en las estructuras en las que es usado.</p>
            </div>

            <div className="grid md:grid-cols-4 mx-32 items-center justify-center gap-0 select-none mt-10">
                <a className='flex flex-col items-center justify-center' href='/productos/Perfileria/PTR'>
                    <div className='flex flex-col h-66 w-66 transition-all duration-300 hover:bg-neutral-800/40 justify-center items-center content-center'>
                            <Image src='/productos/PERFILERIA.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 hover:opacity-85" />
                    </div>
                    <p className='text-neutral-600 text-2xl '>PTR</p>
                </a>

                <a className='flex flex-col items-center justify-center' href='/productos/Perfileria/Perfil-Galvanizado'>
                    <div className='flex flex-col h-66 w-66 transition-all duration-300 hover:bg-neutral-800/40 justify-center items-center content-center'>
                            <Image src='/productos/Perfil-Galvanizado-1.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 hover:opacity-85" />
                    </div>
                    <p className='text-neutral-600 text-2xl '>Perfil Galvanizado</p>
                </a>

                <a className='flex flex-col items-center justify-center' href='/productos/Perfileria/Perfil-Pintado'>
                    <div className='flex flex-col h-66 w-66 transition-all duration-300 hover:bg-neutral-800/40 justify-center items-center content-center'>
                            <Image src='/productos/Perfil-Pintado-1.jpg' alt='productos' width={250} height={250} className="transition-opacity duration-300 hover:opacity-85" />
                    </div>
                    <p className='text-neutral-600 text-2xl '>Perfil Pintado</p>
                </a>
            </div>
        </div>
        <div className='flex lg:flex-row xs:flex-col w-screen h-auto py-14 bg-neutral-200  items-center justify-center '>
                <p className='w-224 text-neutral-600 '>Contamos con una amplia gama de productos de acero como de insumos, por lo que ¡te invitamos a que contactes a un asesor para que te cotice todo el material que necesites para tu obra!</p>
                <a className='flex flex-row bg-white rounded-lg w-56 py-7 items-center justify-evenly hover:bg-green-800' href='#'>
                    <p className=' text-neutral-500  '>Contacta a un asesor</p>
                    <FaWhatsapp className='text-neutral-500 text-3xl h-6 w-6' />
                </a>
            </div>
    </div>
    );
};

export default Hero;