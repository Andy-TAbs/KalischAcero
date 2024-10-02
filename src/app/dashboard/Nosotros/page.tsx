import { getServerSession } from "next-auth"
import NosotrosHeroDashboard from "@/components/Dashboard/HeroDashboard/Nosotros/NosotrosHeroDashboard";
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
        <NosotrosHeroDashboard />
    </div>
</div>
    )
}

export default Home