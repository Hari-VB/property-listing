const AdditionalInfo = () => {
    return (
      <div className="mt-10 flex flex-wrap md:flex-nowrap justify-between items-stretch gap-6 pl-6">
        {/* Left Card - Popular Searches (Same size as Property Cards) */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-[1100px] h-[300px] border flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900">Still not found?</h3>
          <p className="text-gray-600">Tell us what you are looking for</p>
          <hr className="my-4 border-gray-300" />
          <div className="grid grid-cols-2 gap-4 flex-grow">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-full">
                  🏡
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dubai - Marina</h4>
                  <a href="#" className="text-orange-500 text-sm">
                    View all Listings →
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-full">
                  🌆
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Downtown Area</h4>
                  <a href="#" className="text-orange-500 text-sm">
                    View all Listings →
                  </a>
                </div>
              </div>
            </div>
            <div>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Flats for Rent in Whitefield</li>
                <li>• Flats for Rent in Sarjapur Road</li>
                <li>• Flats for Rent in Koramangala</li>
                <li>• Flats for Rent in Dubai</li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Right Card - Buyer's Guide (Same height as left card) */}
        <div className="bg-orange-400 text-white shadow-md rounded-lg p-6 w-full md:w-[400px] h-[300px] flex flex-col justify-between">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full">
              🧭
            </div>
            <h3 className="text-xl font-semibold text-center mt-4">Buyer’s guide</h3>
            <p className="text-center text-sm mt-2">
              The complete guide to locating and purchasing a home in Dubai
            </p>
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg shadow-md">
            Download PDF file
          </button>
        </div>
      </div>
    );
  };
  
  export default AdditionalInfo;
  