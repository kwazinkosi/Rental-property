import Navbar from "../components/navBar";
import Image from "../assets/images/city-1.jpg";
import Hero from "../components/hero";

export default function Home() {
    return (
        <div className=" min-h-screen bg-neutral">
            <Navbar />
            <div className="main relative mx-auto flex flex-col justify-center items-end bg-cover bg-center bg-no-repeat " 
                style={{ backgroundImage: `url(${Image})` }}>

                <div className="absolute inset-0 bg-secondary opacity-70">
                </div>
                <Hero />
            </div>
        </div>
    );  
};
