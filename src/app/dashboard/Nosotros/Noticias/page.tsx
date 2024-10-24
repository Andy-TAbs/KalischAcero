import { getServerSession } from "next-auth"
import NewsHeroDashboard from "@/components/Dashboard/HeroDashboard/Nosotros/NewsHeroDashboard";
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
        <NewsHeroDashboard  />
    </div>
</div>
    )
}

export default Home