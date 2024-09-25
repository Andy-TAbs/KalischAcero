import { getServerSession } from "next-auth"
import Image from 'next/image'
import ButtonSignOut from '../../components/Dashboard/ButtonSignOut';
import MainHeroDashboard from "@/components/Dashboard/HeroDashboard/MainHeroDashboard";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import SideMenuDashboard from "@/components/Dashboard/SideMenuDashboard";
import { Hero } from "@/components/Hero/HeroLandingPage/Hero";

async function Home() {

    const session = await getServerSession();
    console.log(session);
return (
<div>
    <HeaderDashboard />

    <div className="flex flex-col md:flex-row">
        <SideMenuDashboard />
    </div>
    <div>
    <MainHeroDashboard />
    </div>
</div>
  )
}

export default Home
