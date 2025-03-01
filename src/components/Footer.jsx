import { FaInstagram, FaTwitter, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { ChevronDown } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10 px-6">
            {/* Top Section */}
            <div className="container mx-auto flex flex-wrap justify-between items-start gap-10">
                {/* Connect With Us */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">
                        Connect With Us
                    </h3>
                    <div className="flex space-x-4 text-gray-500 text-2xl">
                        <a href="#" className="hover:text-gray-700">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-gray-700">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-gray-700">
                            <FaDiscord />
                        </a>
                    </div>
                </div>

                {/* Get In Touch */}
                <div className="flex flex-col w-full max-w-sm items-start text-left">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">
                        Get In Touch
                    </h3>
                    <p className="text-gray-700 flex items-start gap-1">
                        <IoHomeSharp className="text-xl text-gray-500 mt-1" />
                        DAMAC Smart Heights - Office No. 1501 - Barsha Heights - Dubai, UAE
                        (Head Office)
                    </p>
                    <p className="text-gray-700 mt-3 flex items-center gap-2">
                        <FiPhoneCall className="text-xl text-gray-500" /> +971 52 975 8969
                    </p>
                </div>


                {/* Services */}
                <div className="flex flex-col items-start text-left w-full max-w-sm">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Services</h3>
                    <ul className="text-gray-700 space-y-2">
                        <li>Rent Services</li>
                        <li>Buy/Sell Property</li>
                        <li>Home Services</li>
                        <li>Property Lawyers</li>
                        <li>Design & Decor</li>
                        <li>Property Services</li>
                        <li>Agents</li>
                    </ul>
                </div>


                {/* Chat With Us */}
                <div className=" p-6 rounded-lg  flex flex-col items-start w-full max-w-sm ">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <FaWhatsapp className="text-green-500 text-xl" /> Chat with us
                    </h3>
                    <p className="text-gray-700 text-sm">
                        We provide the most accurate information about the homes that you are looking for
                    </p>
                    <button className="mt-4 bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600">
                        Chat now
                    </button>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-6 border-gray-300" />

            {/* Bottom Section */}
            <div className="container mx-auto flex flex-col items-center text-gray-600 text-sm space-y-4">
                {/* Links: About Us, Terms & Conditions, Privacy Policy */}
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-gray-800">
                        About us
                    </a>
                    <a href="#" className="hover:text-gray-800">
                        Terms & Conditions
                    </a>
                    <a href="#" className="hover:text-gray-800">
                        Private policy
                    </a>
                </div>
                <hr className="my-6 border-gray-300" />
                {/* Country Selector & Countries */}
                <div className="flex flex-col items-center space-y-3">
                    <button className="bg-gray-200 px-5 py-2 rounded-lg flex items-center gap-2 text-gray-700">
                        CHOOSE <ChevronDown className="w-5 h-5 text-gray-500" />
                    </button>
                    <div className="flex flex-wrap justify-center gap-6 font-semibold text-gray-800">
                        <span>DUBAI</span>
                        <span>BAHRAIN</span>
                        <span>USA</span>
                        <span>UAE</span>
                        <span>UK</span>
                        <span>SAUDI</span>
                        <span>QATAR</span>
                        <span>INDIA</span>
                        <span>OMAN</span>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
