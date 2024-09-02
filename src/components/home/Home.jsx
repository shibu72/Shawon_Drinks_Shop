import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Products from "../products/Products";
import logo from "../../assets/logo.png"
const Home = () => {
    return (
        <>
        <div className="relative bg-[#f5f0e8db] home ">
            <Navbar/>
            <div className="w-full h-[90vh] relative pt-[20rem]">
            <div className="m-auto w-fit grid justify-items-center gap-4 text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={logo} className="" alt="logo" />
                <h1 className="text-white text-5xl leading-relaxed font-bold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">Welcome! to Shawon Drinks Shop</h1>
                <h2 className="text-orange-500 text-4xl leading-normal font-bold ">Discover Our Cold Drinks</h2>
                <p className="text-green-500 text-lg">Weve got everything you need to enjoy a refreshing drink</p>
            </div>
            </div>
            <div className="py-40">
                <Products/>
            </div>
            <Footer/>
        </div>
        </>
    );
};

export default Home;