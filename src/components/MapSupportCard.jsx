export default function MapSupportCard() {
    return (
        <div className="hidden md:block bg-blue-100 shadow-md rounded-lg p-4 w-[380px] h-[350px] flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold text-gray-900">Map Support</h3>
            <p className="text-gray-600 mt-2">
                Use our map support to find the property.
            </p>
            
            {/* Centered Image */}
            <img 
                src="/travel-concept.png"
                alt="Map Illustration"
                className="w-[200px] h-[150px] mt-4 rounded-lg object-cover"
            />
            
            {/* Full-width Button */}
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 w-full">
                Explore
            </button>
        </div>
    );
}
