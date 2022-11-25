import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import ProductsFilters from '~/Components/ProductFilters/ProductsFilters';
import ProductlistLoading from '~/Components/ProductlistLoading';
import ProductThumbnail from '~/Components/ProductThumbnail';

function Products() {
    const [filters, setFilters] = useState({
        categoryIds: [],
        size: [],
        colors: [],
        active: false,
    });
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState('asc');
    const [filterProductList, setFilterProductList] = useState([]);
    const [totalPage, setTotalPage] = useState(6);
    const handleChangePage = (e, value) => {
        setPage(value);
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
        setLoading(false);
        setFilterProductList([
            {
                id: 7,
                title: 'Giày Converse Chuck Taylor All Star Classic - Navy',
                description:
                    'Để nói về một sản phẩm vừa đơn giản, vừa thanh lịch, vừa chất lượng và cực kỳ dễ sử dụng, phù hợp với nhiều hoàn cảnh, độ tuổi và các phong cách thời trang khác nhau, không thể nào không nhắc tới dòng sản phẩm giày Converse Classic - Chuck Taylor All được. Dòng sản phẩm này được những tín đồ thời trang trên khắp thế giới đánh giá là must-have item đáng sở hữu nhất mọi thời đại. ',
                category: 1,
                image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/127440-2.png',
                originalPrice: 3000000,
                salePrice: 2700000,
                isPromotion: false,
                promotionPercent: 30,
                isFreeShip: true,
                rating: {
                    rate: 4.8,
                    count: 12,
                },
                color: 'xanh',
                size: 39,
            },
            {
                id: 7,
                title: 'Giày Converse Chuck Taylor All Star Classic - Navy',
                description:
                    'Để nói về một sản phẩm vừa đơn giản, vừa thanh lịch, vừa chất lượng và cực kỳ dễ sử dụng, phù hợp với nhiều hoàn cảnh, độ tuổi và các phong cách thời trang khác nhau, không thể nào không nhắc tới dòng sản phẩm giày Converse Classic - Chuck Taylor All được. Dòng sản phẩm này được những tín đồ thời trang trên khắp thế giới đánh giá là must-have item đáng sở hữu nhất mọi thời đại. ',
                category: 1,
                image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/127440-2.png',
                originalPrice: 3000000,
                salePrice: 2700000,
                isPromotion: false,
                promotionPercent: 30,
                isFreeShip: true,
                rating: {
                    rate: 4.8,
                    count: 12,
                },
                color: 'xanh',
                size: 39,
            },
            {
                id: 7,
                title: 'Giày Converse Chuck Taylor All Star Classic - Navy',
                description:
                    'Để nói về một sản phẩm vừa đơn giản, vừa thanh lịch, vừa chất lượng và cực kỳ dễ sử dụng, phù hợp với nhiều hoàn cảnh, độ tuổi và các phong cách thời trang khác nhau, không thể nào không nhắc tới dòng sản phẩm giày Converse Classic - Chuck Taylor All được. Dòng sản phẩm này được những tín đồ thời trang trên khắp thế giới đánh giá là must-have item đáng sở hữu nhất mọi thời đại. ',
                category: 1,
                image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/127440-2.png',
                originalPrice: 3000000,
                salePrice: 2700000,
                isPromotion: false,
                promotionPercent: 30,
                isFreeShip: true,
                rating: {
                    rate: 4.8,
                    count: 12,
                },
                color: 'xanh',
                size: 39,
            },
            {
                id: 7,
                title: 'Giày Converse Chuck Taylor All Star Classic - Navy',
                description:
                    'Để nói về một sản phẩm vừa đơn giản, vừa thanh lịch, vừa chất lượng và cực kỳ dễ sử dụng, phù hợp với nhiều hoàn cảnh, độ tuổi và các phong cách thời trang khác nhau, không thể nào không nhắc tới dòng sản phẩm giày Converse Classic - Chuck Taylor All được. Dòng sản phẩm này được những tín đồ thời trang trên khắp thế giới đánh giá là must-have item đáng sở hữu nhất mọi thời đại. ',
                category: 1,
                image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/127440-2.png',
                originalPrice: 3000000,
                salePrice: 2700000,
                isPromotion: false,
                promotionPercent: 30,
                isFreeShip: true,
                rating: {
                    rate: 4.8,
                    count: 12,
                },
                color: 'xanh',
                size: 39,
            },
        ]);
        setTotalPage(6);
    }, []);

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
                            {filterProductList.length ? (
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
                            {loading ? (
                                <ProductlistLoading />
                            ) : (
                                filterProductList.map((product) => {
                                    return (
                                        <div
                                            key={product.id}
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
                            {loading === false && !filterProductList.length && (
                                <p>Sorry ! Không tìm được sản phẩm phù hợp</p>
                            )}
                        </div>
                        <div className="flex justify-center">
                            {filterProductList.length ? (
                                <Pagination
                                    count={totalPage}
                                    page={page}
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
