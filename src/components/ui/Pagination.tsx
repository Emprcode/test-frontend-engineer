import { useListProductsQuery } from "@/redux/api/shopAPISlice";
import { Shop } from "@/types";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { Icons } from "../Icons";

interface PaginationProps {
  filteredProducts: Shop.ProductType[] | undefined;
}

const Pagination: React.FC<PaginationProps> = ({ filteredProducts }) => {
  const { isLoading, refetch } = useListProductsQuery();
  const itemsPerPage = 8;

  const totalPages = filteredProducts
    ? Math.ceil(filteredProducts.length / itemsPerPage)
    : 0;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = filteredProducts?.slice(startIndex, endIndex);
  return (
    <div className="">
      <div className="container flex flex-wrap gap-4 sm:gap-8 justify-center">
        {isLoading ? (
          <Loader2 className=" h-4 w-4 animate-spin" />
        ) : (
          <>
            {currentPageItems?.map((item: any, idx: number) => (
              <div key={idx}>
                <ProductCard {...item} />
              </div>
            ))}
          </>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center bg-white px-4 py-9 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
          <div>
            <nav
              aria-label="Pagination"
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            >
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <Icons.chevronLeft className="ml-2 h-4 w-4 text-black " />
              </button>

              {/* Dynamically generate page numbers */}
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                      currentPage === pageNum
                        ? "bg-indigo-600 text-white"
                        : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <Icons.chevronRight className="ml-2 h-4 w-4 text-black " />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
