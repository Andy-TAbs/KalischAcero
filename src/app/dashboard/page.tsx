import { getServerSession } from "next-auth"
import Image from 'next/image'
import ButtonSignOut from './ButtonSignOut';

async function Home() {

    const session = await getServerSession();
    console.log(session);
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className="flex flex-col items-center justify-center bg-black p-4 rounded-xl">
      <h1 className=" text-lg text-white font-semibold">Dashboard de {session?.user?.name}</h1>
      <Image src={session?.user?.image || ""} alt={session?.user?.name || ""} width={200} height={200} />
        <ButtonSignOut />
      </div>
    </div>
  )
}

export default Home
