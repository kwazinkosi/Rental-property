import Button from "./button";
export default function Hero(){

    return (
        <div className="relative  sm:w-10/12 md:w-8/12 lg:w-7/12  flex flex-col justify-center items-center mx-8 sm:mx-12 md:mx-16 lg:mx-24 ">
            <div className="inset-0 bg-primary opacity-70 container mx-auto rounded-lg text-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 ">
                <h1 className="text-5xl/2 sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">Saluru Properties</h1>
                <h3 className="text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2">Braamfontein</h3>
                <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-xl text-white mb-4">From R2300 pm</p>
                <div className="hero-text justify-items-start">
                    <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-xl text-white py-2">
                        Discover the extraordinary - Dreams are what you make for yourself, so is a home. Welcome to Your Dream Home!
                    </p>
                    <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-xl text-white py-2">
                        Explore the finest properties in the city and discover a home that suits your lifestyle. 
                        Enjoy modern living with amenities like spacious interiors, breathtaking views, 
                        and convenient access to parks, shopping, and more.
                    </p>
                </div>
                <h2 className="text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-tertiary2 my-2">50% off first rent</h2>
                <div className="inset-0 bg-primary opacity-100 rounded-lg py-2 shadow-md">
                    <Button variant="outlined" text="Contact Us Now" onClick={() => {}} />
                </div>
            </div>
        </div>
    );
}