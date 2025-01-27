import { getServerSession } from "next-auth"
import MainHeroDashboard from "@/components/Dashboard/HeroDashboard/MainHeroDashboard";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import SideMenuDashboard from "@/components/Dashboard/SideMenuDashboard";

async function Home() {

    const session = await getServerSession();
    console.log(session);
return (
<div>
        <HeaderDashboard />
    <div className="">
        <SideMenuDashboard />
    </div>
    <div>
        <MainHeroDashboard />
    </div>
</div>
    )
}

export default Home
