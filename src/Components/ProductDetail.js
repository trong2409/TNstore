import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import { incrementByAmount } from '../redux/Slices/cartSlice';
import ProductQuantity from './ProductQuantity';
import ProductDetailLoading from '../Components/ProductDetailLoading';
import { GetProductDetail } from '~/redux/Slices/ProductDetailSlice';

function ProductDetail(props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.ProductDetail.data);
    const loading = useSelector((state) => state.ProductDetail.isLoading);
    const [quantity, setQuantity] = useState(1);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        dispatch(GetProductDetail({ id: id }));
        // eslint-disable-next-line
    }, []);

    const handleUpdateValue = (value) => {
        setQuantity(value);
    };
    const handleIncreValue = () => {
        setQuantity((value) => value + 1);
    };
    const handleDecreValue = () => {
        setQuantity((value) => value - 1);
    };
    const handleSubmit = (product, quantity) => {
        dispatch(incrementByAmount({ product, quantity }));
        successNoti('success');
    };
    const successNoti = (variant) => {
        enqueueSnackbar('Thêm thành công sản phẩm!', {
            variant: 'success',
        });
    };

    return (
        <div className="my-16">
            <div className="container px-4 lg:px-8 mx-auto">
                {loading ? (
                    <ProductDetailLoading />
                ) : (
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                className="block"
                                src={product.image}
                                alt={product.title}
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-lg font-medium">
                                {' '}
                                {product.title}
                            </h3>
                            <p className="text-sm font-light mt-4">
                                {product.description}
                            </p>
                            <p className="mt-4 ">
                                <span className="text-base font-medium">
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(
                                        Math.floor(
                                            product.originalPrice -
                                                (product.originalPrice *
                                                    product.promotionPercent) /
                                                    100,
                                        ),
                                    )}
                                </span>
                                {product.promotionPercent === 0 ? null : (
                                    <span className="text-sm mx-2 bg-yellow-200 line-through">
                                        {new Intl.NumberFormat('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND',
                                        }).format(product.originalPrice)}
                                    </span>
                                )}
                            </p>
                            <div className="mt-4 w-32 ">
                                <ProductQuantity
                                    quantity={quantity}
                                    onUpdate={handleUpdateValue}
                                    onIncre={handleIncreValue}
                                    onDecre={handleDecreValue}
                                />
                            </div>
                            <div className="mt-5 flex ">
                                <div
                                    className="text-sm font-normal mr-2 px-4 py-1.5 inline-block border border-spacing-2 border-black text-white bg-black hover:cursor-pointer hover:text-black hover:bg-white"
                                    onClick={() =>
                                        handleSubmit(product, quantity)
                                    }
                                >
                                    Thêm vào giỏ hàng
                                </div>
                                <Link
                                    to="/cart"
                                    onClick={() =>
                                        handleSubmit(product, quantity)
                                    }
                                    className="text-sm font-normal px-4 py-1.5 inline-block border border-spacing-2 border-black hover:cursor-pointer hover:text-white hover:bg-black"
                                >
                                    Mua ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductDetail;
