import { useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function Sidebar() {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <aside className="hidden xl:block bg-gray-100 shadow-md rounded-lg p-4 w-80 h-[1550px]">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Filter</h2>
                <FaFilter className="text-gray-500 cursor-pointer" />
            </div>

            {/* Toggle Options */}
            <div className="mb-6 space-y-3">
                <label className="flex justify-between items-center text-sm font-medium text-gray-700">
                    Mark already seen <input type="checkbox" className="toggle" />
                </label>
                <label className="flex justify-between items-center text-sm font-medium text-gray-700">
                    Properties with photos <input type="checkbox" className="toggle" />
                </label>
            </div>

            {/* Dropdown Sections */}
            {[
                { title: "Completion Status", options: ["Ready", "Off-Plan"], type: "radio", name: "completion" },
                { title: "Property Type", options: ["Premium", "Apartments", "Ready to move", "Individual Homes", "Townhouse", "Penthouse"] },
                { title: "Furnished Status", options: ["Furnished", "Semi-Furnished", "Un-Furnished"] },
                { title: "Amenities", options: ["Parking facility", "Security", "Gas Pipeline", "Lift Facility", "Power backup"] },
                { title: "BHK Facility", options: ["1BHK", "2BHK", "3BHK", "4BHK", "5BHK", "Studio"] },
                { title: "Bathrooms", options: ["1", "2", "3+"] },
            ].map(({ title, options, type, name }) => (
                <div className="mb-6" key={title}>
                    <h3
                        className="text-sm font-medium text-gray-700 mb-3 cursor-pointer flex justify-between border-b pb-2"
                        onClick={() => toggleSection(title)}
                    >
                        {title} <span>{openSections[title] ? "▲" : "▼"}</span>
                    </h3>
                    {openSections[title] && (
                        <div className="flex flex-col gap-3 mt-2">
                            {options.map((option, index) => (
                                <label key={index} className="flex items-center gap-2">
                                    <input type={type || "checkbox"} name={name} className="accent-gray-600" /> {option}
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </aside>
    );
}
