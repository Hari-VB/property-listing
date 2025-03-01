import { useState } from "react";
import Switch from "@mui/material/Switch";
import { FaChevronDown } from "react-icons/fa";

export default function HeaderSection() {
    const [isMapView, setIsMapView] = useState(false);
    const [sortOption, setSortOption] = useState("Newest First");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const sortOptions = ["Newest First", "Oldest First", "Price: Low to High", "Price: High to Low"];

    return (
        <div className="max-w-7xl px-4 py-3 flex flex-col md:flex-row md:justify-between md:items-center rounded-lg gap-4">
            {/* Left Section - Title & Listing Count */}
            <div className="flex flex-col items-start">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 text-center md:text-left">
                    Properties for Rent in United Arab Emirates
                </h1>
                <p className="text-gray-500 text-sm text-center md:text-left">10 listings</p>
            </div>

            {/* Right Section - Controls (Only shown on desktop) */}
            <div className="hidden md:flex items-center gap-3">
                {/* Map View Toggle */}
                <label className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 cursor-pointer shadow-sm bg-white w-48 h-12">
                    <span className="text-sm">Map View</span>
                    <Switch checked={isMapView} onChange={(e) => setIsMapView(e.target.checked)} />
                </label>

                {/* Sort Dropdown */}
                <div className="relative w-48">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 text-gray-700 cursor-pointer shadow-sm bg-white w-full h-12 hover:bg-gray-100"
                    >
                        <span className="text-sm">{sortOption}</span>
                        <FaChevronDown className="text-gray-500" />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                            {sortOptions.map((option, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setSortOption(option);
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
