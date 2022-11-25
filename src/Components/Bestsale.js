import React, { useMemo } from 'react';
import { useState, useEffect } from 'react';
import ProductSlideLoading from '~/Components/ProductSlideLoading';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import ProductThumbnail from '~/Components/ProductThumbnail';

function Bestsale() {
    const [products, setProducts] = useState([
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
    const [loading, setLoading] = useState(false);
    const sliderSettings =useMemo(()=>({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    }));

    const saleProduct = products.filter((product) => {
        return product.promotionPercent >= 25;
    });

    return (
        <div className="mt-12">
            <div className="flex justify-between items-baseline">
                <p className="relative text-2xl font-semibold pl-2 mb-4 bg-amber-300 section-title">
                    Giảm giá sốc
                </p>
                <Link
                    to="/products"
                    className="text-sm font-medium hover:cursor-pointer hover:opacity-70 "
                >
                    ...xem tất cả
                </Link>
            </div>
            <div className=" sm:-mx-2 md:-mx-2 lg:-mx-2">
                {loading ? (
                    <ProductSlideLoading />
                ) : (
                    <Slider {...sliderSettings}>
                        {saleProduct.map((product) => {
                            return (
                                <div
                                    key={product.id}
                                    className="sm:px-2 md:px-2 lg:px-2"
                                >
                                    <ProductThumbnail product={product} />
                                </div>
                            );
                        })}
                    </Slider>
                )}
            </div>
        </div>
    );
}

export default Bestsale;
