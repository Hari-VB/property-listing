import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full">
            {/* Top Alert Bar */}
            <div className="bg-orange-400 text-white text-sm py-2 px-6 flex justify-center items-center text-center gap-4">
                <p className="flex-1 flex items-center justify-center">
                    Usage of Illegal Property Images to upload content showing area in non-standard/Illegal units is prohibited
                    <button className="bg-white text-orange-500 font-semibold ml-2 px-4 py-2 rounded-full text-xs shadow-md">
                        Learn More
                    </button>
                </p>
            </div>




            {/* Navbar with Bottom Shadow */}
            <nav className="bg-white px-6 py-4 flex justify-between items-center relative shadow-md">
                {/* Logo */}
                <div className="text-xl font-bold text-gray-800">ABC PROPERTIES</div>

                {/* Nav Links (Desktop) */}
                <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <a href="#">Buy</a>
                    <a href="#" className="text-orange-500 font-semibold">Rent</a>
                    <a href="#">Navigator's Edge</a>
                    <a href="#">Our Agents</a>
                    <a href="#">Blogs & Insights</a>
                    <a href="#">New Launches</a>
                    <a href="#">About Us</a>
                    <a href="#">Help & Support</a>
                </div>

                {/* Sell Property Button (Desktop) */}
                <button className="hidden md:block bg-orange-100 text-orange-500 px-4 py-2 rounded-md font-medium">
                    Sell Property
                </button>

                {/* Mobile Menu Button (☰) */}
                <button className="md:hidden ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white px-6 py-4 flex flex-col space-y-4 text-gray-700 font-medium shadow-md w-full">
                    <a href="#">Buy</a>
                    <a href="#" className="text-orange-500 font-semibold">Rent</a>
                    <a href="#">Navigator's Edge</a>
                    <a href="#">Our Agents</a>
                    <a href="#">Blogs & Insights</a>
                    <a href="#">New Launches</a>
                    <a href="#">About Us</a>
                    <a href="#">Help & Support</a>
                </div>
            )}
        </header>
    );
}
