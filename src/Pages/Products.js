import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '@mui/material/Pagination';
import ProductsFilters from '~/Components/ProductFilters/ProductsFilters';
import ProductlistLoading from '~/Components/ProductlistLoading';
import ProductThumbnail from '~/Components/ProductThumbnail';
import { GetProducts } from '~/redux/Slices/ProductsSlice';

function Products() {
    const disaptch = useDispatch();
    const data = useSelector((state) => state.Products.result);
    const [filters, setFilters] = useState({
        categories: [],
        colors: [],
    });
    const [order, setOrder] = useState('asc');
    const handleChangePage = (e, value) => {
        const params = {
            categories:
                filters.categories.length > 0 ? filters.categories : null,
            colors: filters.colors.length > 0 ? filters.colors : null,
            order: order,
            page: value,
        };
        disaptch(GetProducts(params));
    };
    const handleOrderChangeAsc = () => {
        setOrder('asc');
    };
    const handleOrderChangeDesc = () => {
        setOrder('desc');
    };
    const handleFiltersChange = (newFilters) => {
        setFilters((prev) => {
            return { ...prev, ...newFilters };
        });
    };
    const [isFilterBarOpen, setIsFilterbarOpen] = useState(false);
    const handleOpenFilter = () => {
        setIsFilterbarOpen(true);
    };

    useEffect(() => {
        const param = { page: 1 };
        disaptch(GetProducts(param));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const params = {
            categories:
                filters.categories.length > 0 ? filters.categories : null,
            colors: filters.colors.length > 0 ? filters.colors : null,
            order: order,
            page: 1,
        };
        disaptch(GetProducts(params));
        // eslint-disable-next-line
    }, [filters, order]);

    return (
        <div className="my-20 lg:my-28">
            <div className="container px-4 lg:px-8 mx-auto">
                <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-3">FOR YOU</h4>
                    <p className="text-base font-light">
                        Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán
                        Hàng Tuần sẽ được cập nhật liên tục tại đây. Chắc chắn
                        bạn sẽ tìm thấy những sản phẩm Đẹp Nhất - Vừa Vặn Nhất -
                        Phù Hợp nhất với phong cách của mình.
                    </p>
                </div>
                <div
                    className="fixed bottom-4 right-4 z-30 text-sm font-medium px-4 py-1 mb-4 inline-block border border-solid border-gray-500  text-white bg-black hover:text-black hover:bg-white hover:cursor-pointer lg:hidden animate-pulse"
                    onClick={handleOpenFilter}
                >
                    BỘ LỌC
                </div>

                <div className="flex justify-between">
                    <div className="h-full w-1/4 hidden lg:flex flex-col">
                        <ProductsFilters
                            filters={filters}
                            onChange={handleFiltersChange}
                        />
                    </div>
                    <div
                        className={`lg:hidden fixed inset-y-0 left-0 z-40 h-full px-4 py-7 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 ${
                            isFilterBarOpen
                                ? 'ease-out translate-x-0'
                                : 'ease-in -translate-x-full'
                        }`}
                    >
                        <div className="mb-2 flex justify-end">
                            <FontAwesomeIcon
                                icon="fa-solid fa-arrow-left"
                                className="opacity-70 hover:opacity-100 hover:cursor-pointer"
                                onClick={() => setIsFilterbarOpen(false)}
                            />
                        </div>
                        <ProductsFilters
                            filters={filters}
                            onChange={handleFiltersChange}
                        />
                    </div>
                    <div className="w-full lg:w-3/4">
                        <div className="flex  justify-center md:justify-end">
                            {data.data?.length ? (
                                <div className="flex border border-solid border-gray-500  ">
                                    <p
                                        className={
                                            order === 'asc'
                                                ? 'text-sm font-medium px-4 py-1 hover:cursor-pointer text-white bg-black '
                                                : 'text-sm font-medium px-4 py-1 hover:cursor-pointer hover:text-white hover:bg-black '
                                        }
                                        onClick={handleOrderChangeAsc}
                                    >
                                        Giá tăng dần
                                    </p>
                                    <p
                                        onClick={handleOrderChangeDesc}
                                        className={
                                            order === 'desc'
                                                ? 'text-sm font-medium px-4 py-1 hover:cursor-pointer text-white bg-black'
                                                : 'text-sm font-medium px-4 py-1 hover:cursor-pointer hover:text-white hover:bg-black'
                                        }
                                    >
                                        Giá giảm dần
                                    </p>
                                </div>
                            ) : null}
                        </div>
                        <div className="flex flex-wrap my-8 sm:-mx-2 md:-mx-2 lg:-mx-2.5">
                            {data.isLoading ? (
                                <ProductlistLoading />
                            ) : (
                                data.data.map((product) => {
                                    return (
                                        <div
                                            key={product._id}
                                            className="sm:px-2 md:px-2 lg:px-2 mb-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3"
                                        >
                                            <ProductThumbnail
                                                product={product}
                                            />
                                        </div>
                                    );
                                })
                            )}
                        </div>
                        <div className="flex justify-center">
                            {data.isLoading === false && !data.data?.length && (
                                <p>Sorry ! Không tìm được sản phẩm phù hợp</p>
                            )}
                        </div>
                        <div className="flex justify-center">
                            {data.data?.length ? (
                                <Pagination
                                    count={data.totalPage}
                                    page={data.page}
                                    onChange={handleChangePage}
                                />
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
