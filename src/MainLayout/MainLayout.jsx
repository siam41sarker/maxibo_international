import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
const MainLayout = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default MainLayout;