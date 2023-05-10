import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import "./home.css";
//con Outlet me aseguro que en la pagina del home siempre esten el header y el footer y vayan cambiando el body segun la ruta elegida.
function Home() {
    return ( 
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
     );
}

export default Home;