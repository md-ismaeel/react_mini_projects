import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const PaginatedNumbers = ({
    totalPages,
    currentPage,
    changePage,
    maxPageNumberLimit,
    minPageNumberLimit,
}) =>
    Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        if (pageNumber > minPageNumberLimit && pageNumber <= maxPageNumberLimit) {
            return (
                <button
                    key={pageNumber}
                    onClick={() => changePage(pageNumber)}
                    className={`border-gray-300 inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md transition-colors duration-200 
                        ${currentPage === pageNumber
                            ? "bg-indigo-600 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                    aria-label={`Page ${pageNumber}`}
                >
                    {pageNumber}
                </button>
            );
        }
        return null;
    });

const Pagination = ({
    totalPages,
    pageSize,
    currentPage,
    changePage,
    minPageNumberLimit,
    maxPageNumberLimit,
}) => (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-8">
        <div className="flex-1 flex justify-between sm:hidden">
            <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>
            <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
                <p className="text-sm text-gray-700">
                    Showing{" "}
                    <span className="font-medium">
                        {(currentPage - 1) * pageSize + 1}
                    </span>{" "}
                    to{" "}
                    <span className="font-medium">
                        {Math.min(currentPage * pageSize, totalPages * pageSize)}
                    </span>{" "}
                    of <span className="font-medium">{totalPages * pageSize}</span>{" "}
                    results
                </p>
            </div>
            <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
            >
                <button
                    disabled={currentPage === 1}
                    onClick={() => changePage(currentPage - 1)}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <PaginatedNumbers
                    totalPages={totalPages}
                    currentPage={currentPage}
                    changePage={changePage}
                    minPageNumberLimit={minPageNumberLimit}
                    maxPageNumberLimit={maxPageNumberLimit}
                />
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => changePage(currentPage + 1)}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
            </nav>
        </div>
    </div>
);

export default Pagination;
