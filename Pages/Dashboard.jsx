
import { Outlet } from "react-router";
import Header from "../Component/Header";
import Footer from "../Component/Footer";



function Dashboard(){
    return(

        <div>

            <Header/>

            <Outlet/>

            <Footer/>
        </div>

    )
}
export default Dashboard;