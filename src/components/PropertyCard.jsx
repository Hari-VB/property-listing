import { useState } from "react";
import Slider from "react-slick";
import { Phone, Mail, CheckCircle, MapPin, Bed, Bath, Car, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

export default function PropertyCard({ property }) {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="bg-gray-200 shadow-md rounded-2xl overflow-hidden flex flex-col sm:flex-row p-5 gap-6 relative items-start sm:h-[290px] max-w-[1100px] w-full">
            {/* Left Side - Image Slider */}
            <div className="relative w-full sm:w-100 sm:min-w-[250px]">
                <Slider {...settings}>
                    {property.images.map((img, index) => (
                        <img key={index} src={img} alt={`Property ${index}`} className="w-full h-[220px] object-cover rounded-lg" />
                    ))}
                </Slider>

                {/* Labels */}
                <div className="absolute top-3 left-3 bg-gray-900/80 text-white text-xs px-3 py-1 rounded-md">
                    Listed 5 Days Ago
                </div>
                <div className="absolute top-3 right-3 bg-yellow-400 text-gray-800 text-xs px-3 py-1 rounded-md flex items-center gap-1">
                    <CheckCircle size={14} /> Verified by Atharid
                </div>
            </div>

            {/* Right Side - Details */}
            <div className="flex-1 flex flex-col justify-between w-full">
                {/* Top Section - Title, Price, and Buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    {/* Title & Price */}
                    <div>
                        <h2 className="text-lg font-semibold">{property.title}</h2>
                        <p className="text-orange-500 text-2xl font-bold">
                            {property.price} <span className="text-sm font-normal">AED YEARLY</span>
                        </p>
                        <p className="text-gray-600 flex items-center gap-1 mt-1">
                            <MapPin size={16} /> {property.location}
                        </p>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
                        <button className="bg-green-500 text-white flex items-center gap-2 px-4 py-2 sm:py-3 rounded-md font-medium 
                                           hover:bg-green-600 active:bg-blue-500 transition-all duration-200">
                            <MessageCircle size={16} /> WhatsApp
                        </button>
                        <button className="bg-white text-gray-700 flex items-center gap-2 p-3 sm:p-4 rounded-md border border-gray-300 
                                           hover:border-orange-400 hover:text-orange-400 active:bg-orange-400 active:text-white 
                                           transition-all duration-200">
                            <Phone size={16} />
                        </button>
                        <button className="bg-white text-gray-700 flex items-center gap-2 p-3 sm:p-4 rounded-md border border-gray-300 
                                           hover:border-orange-400 hover:text-orange-400 active:bg-orange-400 active:text-white 
                                           transition-all duration-200">
                            <Mail size={16} />
                        </button>
                    </div>
                </div>

                {/* Status Information */}
                <div className="text-gray-500 text-sm mt-2 flex flex-wrap gap-3">
                    <span>For Rent</span> | <span>Vacant now</span> | <span>Atharid Premium</span>
                </div>

                {/* Features & Size */}
                <div className="flex flex-wrap gap-4 my-3 text-sm">
                    <p className="flex items-center gap-1 text-gray-700">
                        <CheckCircle size={16} className="text-green-500" /> Ready to move
                    </p>
                    <p className="flex items-center gap-1 text-gray-700">
                        <CheckCircle size={16} className="text-green-500" /> Premium customer support
                    </p>
                    <p className="flex items-center gap-1 text-green-500 font-medium">
                        {property.size} square ft
                    </p>
                </div>

                {/* Property Specifications */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-7 bg-gray-200 p-3 rounded-xl text-sm font-medium">
                    <div className="flex items-center gap-2 bg-white px-4 py-3 sm:py-4 rounded-lg w-full sm:w-auto justify-center">
                        <Bed size={18} className="text-gray-600" />
                        <span className="text-gray-700">{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-3 sm:py-4 rounded-lg w-full sm:w-auto justify-center">
                        <Bath size={18} className="text-gray-600" />
                        <span className="text-gray-700">{property.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-3 sm:py-4 rounded-lg w-full sm:w-auto justify-center">
                        <Car size={18} className="text-gray-600" />
                        <span className="text-gray-700">Parking available</span>
                    </div>
                    <div className="flex items-center justify-center px-4 py-3 sm:py-4 bg-white rounded-lg cursor-pointer w-full sm:w-auto">
                        <ChevronRight size={20} className="text-gray-600" />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Custom Navigation Buttons
function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10" onClick={onClick}>
            <ChevronLeft size={20} />
        </button>
    );
}

function CustomNextArrow(props) {
    const { onClick } = props;
    return (
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10" onClick={onClick}>
            <ChevronRight size={20} />
        </button>
    );
}
