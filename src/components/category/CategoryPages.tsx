
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import { Product, useFetchData } from "../../helper/useFectchApi";
import { useState, useEffect } from "react";
import ProductItems from "../Productitem/ProductItems";

export interface Pageing {
    data: Product[] | undefined;
    items?: number;
}

const Pages = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    const { fakeData, error } = useFetchData<Pageing>(
        `http://localhost:8000/products?_page=${currentPage}&_per_page=${9}`,
        "categories",
        currentPage
    );

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const totalPages = Math.ceil(fakeData?.items ? fakeData.items / 9 : 1);

    const nextPage = () => {
        currentPage < totalPages && setCurrentPage((next: number) => next + 1);
    };

    const previusPage = () => {
        if (currentPage > 1) {
            setCurrentPage((pre: number) => pre - 1);
        }
    };

    const pages = (page: number) => {
        setCurrentPage(page);
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    if (error) return `There was an error : ${error.message}`;
    
    return (
        <>
            <div className="grid xLarge:pl-[10px]">
                <ProductItems products={fakeData?.data} className="w-64 xLarge:w-64 large:w-56"/>

                <div className="col-span-3 xLarge:col-span-2 small:col-span-1 flex justify-around small:justify-end small:pr-8">
                    <button onClick={previusPage} className="border p-1 rounded-lg hover:bg-secondory hover:text-primary transition-all"> <LuArrowLeft className="inline-block" size={24} />PREVIOUS</button>
                    <div className="mx-4">
                        {screenWidth > 650 &&
                            pageNumbers.map((page) => (
                                <button onClick={() => pages(page)} key={page} className={`p-2 border rounded-lg mr-3 ${currentPage === page ? 'bg-red-500 text-white' : ''}`}>
                                    {page}
                                </button>
                            ))}
                          {screenWidth < 650 && 
                          <div className="p-2 border rounded-lg bg-red-500">{currentPage}</div>
                          }
                    </div>
                    <button onClick={nextPage} className="border p-1  rounded-lg hover:bg-secondory hover:text-primary transition-all">NEXT <LuArrowRight className="inline-block" size={24} /></button>
                </div>
            </div>
        </>
    );
};

export default Pages;
