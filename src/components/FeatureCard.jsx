import { FaCheck } from "react-icons/fa";

export default function FeatureCard() {
    return (
        <div className="w-full bg-[#6B85A7] p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center md:items-start shadow-md text-white space-y-6 md:space-y-0 md:space-x-8">
            {/* Left Side - Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-semibold">Luxury Apartments</h2>
                <p className="mt-2 text-sm md:text-base text-gray-200 leading-relaxed">
                    Situated in prestigious and desirable locations, offering breathtaking views, 
                    proximity to upscale neighborhoods, and convenient access 
                    to amenities such as shopping, dining, and cultural attractions.
                </p>
                <ul className="mt-3 space-y-2">
                    <li className="flex justify-center md:justify-start items-center gap-2">
                        <FaCheck className="text-white bg-[#5A748F] p-1 rounded-full" size={16} />
                        Designer Finishes
                    </li>
                    <li className="flex justify-center md:justify-start items-center gap-2">
                        <FaCheck className="text-white bg-[#5A748F] p-1 rounded-full" size={16} />
                        Spacious Layouts
                    </li>
                </ul>
                <div className="mt-5 flex justify-center md:justify-start">
                    <button className="px-6 py-3 bg-white text-gray-800 font-medium rounded-md shadow-md hover:bg-gray-100 transition">
                        Explore Apartments
                    </button>
                </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img 
                    src="/lux.png" 
                    alt="Luxury Apartment" 
                    className="w-3/4 md:w-full max-w-sm md:max-w-lg rounded-lg"
                />
            </div>
        </div>
    );
}
