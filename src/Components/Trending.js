import { useMemo,useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductSlideLoading from '~/Components/ProductSlideLoading';
import ProductThumbnail from '~/Components/ProductThumbnail';
import { GetTrenddingProducts } from '~/redux/Slices/TrendingSlice';

function Trending() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.Trending.data);
    const loading = useSelector((state) => state.Trending.isLoading);
    useEffect(() => {
        dispatch(GetTrenddingProducts());
        // eslint-disable-next-line
    }, []);
    const sliderSettings = useMemo(
        () => ({
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
        }),
        [],
    );

    return (
        <div className="mt-12">
            <div className="flex justify-between items-baseline">
                <p className="relative text-2xl font-semibold pl-2 mb-4 bg-amber-300 section-title">
                    Bán chạy nhất
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
                        {products.map((product) => {
                            return (
                                <div
                                    key={product._id}
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

export default Trending;
