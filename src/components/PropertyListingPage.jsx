import { useState } from "react";

import Sidebar from "./Sidebar";
import PropertyCard from "./PropertyCard";
import HeaderSection from "./HeaderSection";
import FeatureCard from "./FeatureCard";
import MapSupportCard from "./MapSupportCard";
import Pagination from "./Pagination";
import AdditionalInfo from "./AdditionalInfo";
import Footer from "./Footer";

const sampleProperty = {
    title: "VILLA 370 MIRA OASIS 1",
    price: "2,50,190",
    location: "118, Dubailand, Dubai, UAE",
    status: "Vacant now",
    listingType: "Atharid Premium",
    area: "1800.00",
    bedrooms: 3,
    bathrooms: 2,
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBiDPJzxcMqsE2-CMWBqR6Hnv08tfThQgDw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBiDPJzxcMqsE2-CMWBqR6Hnv08tfThQgDw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBiDPJzxcMqsE2-CMWBqR6Hnv08tfThQgDw&s",
    ],
    listedDays: 5,
};

export default function PropertyListingPage() {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <div>
            {/* Header Section Centered */}
            <div className="max-w-7xl mx-auto px-4 py-6 mb-6">
                <HeaderSection />
            </div>
            {/* Main Content */}
            <div className="container mx-auto px-6 py-8 flex gap-6">
                {/* Property Listings (Same Layout) */}
                <div className="flex-1 grid gap-6">
                    <PropertyCard property={sampleProperty} />
                    <PropertyCard property={sampleProperty} />
                    <PropertyCard property={sampleProperty} />
                    <PropertyCard property={sampleProperty} />
                    <PropertyCard property={sampleProperty} />
                </div>

                {/* Sidebar */}
                <Sidebar />

            </div>
            <div className="container mx-auto px-6">
                <FeatureCard />
            </div>

            <div className="container mx-auto px-6 py-8 flex gap-6">
                {/* Property Listings (Same Layout) */}
                <div className="flex-1 grid gap-6">
                    <PropertyCard property={sampleProperty} />
                    <PropertyCard property={sampleProperty} />
                    <PropertyCard property={sampleProperty} />
                    <PropertyCard property={sampleProperty} />
                    <PropertyCard property={sampleProperty} />
                </div>

                <MapSupportCard />
            </div>
            <Pagination totalPages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <AdditionalInfo/>
            <Footer/>
        </div>
    );
}
