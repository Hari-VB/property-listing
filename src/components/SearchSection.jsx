import { useState } from "react";
import { Search, MapPin, Building, ChevronDown, Locate } from "lucide-react"; // Ensure lucide-react is installed

export default function SearchSection() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("Price");

  return (
    <div className="w-full bg-white px-6 py-4 flex flex-col md:flex-row items-center gap-4">
      {/* Buy & Rent Toggle */}
      <div className="flex bg-gray-100 p-1 rounded-md w-full md:w-auto justify-center">
        <button className="px-4 py-2 rounded-md">Buy</button>
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white">Rent</button>
      </div>

      {/* Search Input */}
      <div className="relative flex-1 w-full md:w-auto">
        <div
          className="flex items-center border border-gray-300 bg-white rounded-md px-4 py-2 cursor-pointer w-full"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <Search className="text-orange-500" size={18} />
          <input type="text" placeholder="Search property" className="flex-1 ml-2 outline-none bg-transparent" readOnly />
          <Locate className="text-gray-500" size={20} />
        </div>
        {searchOpen && (
          <div className="absolute mt-1 bg-white shadow-md rounded-md p-4 w-full z-10 border">
            <div className="flex items-center gap-2 text-gray-700 py-2 cursor-pointer">
              <MapPin className="text-orange-400" size={18} /> City, Towns, Texas
            </div>
            <div className="flex items-center gap-2 text-gray-700 py-2 cursor-pointer">
              <Building className="text-orange-400" size={18} /> Areas
            </div>
            <div className="flex items-center gap-2 text-gray-700 py-2 cursor-pointer">
              <Building className="text-orange-400" size={18} /> Commercial, Rental
            </div>
          </div>
        )}
      </div>

      {/* Price Dropdown */}
      <div className="relative w-full md:w-auto">
        <button
          onClick={() => setPriceOpen(!priceOpen)}
          className="p-2 border rounded-md flex items-center justify-between w-full md:w-32 bg-white"
        >
          {selectedPrice} <ChevronDown size={16} className="ml-2" />
        </button>
        {priceOpen && (
          <div className="absolute mt-1 bg-white shadow-md rounded-md p-4 w-full md:w-56 z-10 border">
            <p className="text-center font-semibold text-gray-700">{selectedPrice}</p>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span className="text-blue-500">Min</span>
              <span className="text-red-500">Max</span>
            </div>
            <input
              type="range"
              className="w-full mt-2"
              min="0"
              max="1000000"
              step="50000"
              value={parseInt(selectedPrice.replace(/,/g, ""), 10)}
              onChange={(e) => setSelectedPrice(Number(e.target.value).toLocaleString())}
            />
            <input
              type="text"
              placeholder="Enter Amount in AED"
              className="w-full p-2 mt-2 border rounded-md text-center text-gray-700"
            />
          </div>
        )}
      </div>

      {/* Find Button */}
      <button className="bg-orange-500 text-white px-4 py-2 rounded-md w-full md:w-auto">Find</button>
    </div>
  );
}
