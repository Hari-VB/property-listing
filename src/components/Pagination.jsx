import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Pagination({ totalPages = 10, currentPage, setCurrentPage }) {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-3 mt-6 p-2">
            {/* Left Arrows */}
            <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="pagination-btn"
            >
                <ChevronsLeft size={18} />
            </button>

            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-btn"
            >
                <ChevronLeft size={18} />
            </button>

            {/* Page Numbers (Desktop Only) */}
            <div className="hidden sm:flex space-x-2">
                <button
                    className={`pagination-btn ${currentPage === 1 ? "bg-orange-400 text-white" : "bg-gray-200"}`}
                    onClick={() => handlePageChange(1)}
                >
                    1
                </button>
                {totalPages > 1 && (
                    <button
                        className={`pagination-btn ${currentPage === 2 ? "bg-orange-400 text-white" : "bg-gray-200"}`}
                        onClick={() => handlePageChange(2)}
                    >
                        2
                    </button>
                )}
                {totalPages > 2 && (
                    <button className="pagination-btn bg-gray-200" onClick={() => handlePageChange(3)}>3</button>
                )}
                <span className="text-gray-500">...</span>
                <button className="pagination-btn bg-gray-200" onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
            </div>

            {/* Mobile Page Selector */}
            <div className="sm:hidden">
                <select
                    value={currentPage}
                    onChange={(e) => handlePageChange(Number(e.target.value))}
                    className="border border-gray-300 rounded-md px-2 py-1"
                >
                    {Array.from({ length: totalPages }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
            </div>

            {/* Right Arrows */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-btn"
            >
                <ChevronRight size={18} />
            </button>

            <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="pagination-btn"
            >
                <ChevronsRight size={18} />
            </button>
        </div>
    );
}
