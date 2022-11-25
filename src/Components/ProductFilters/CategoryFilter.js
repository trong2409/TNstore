import React, { useState, useEffect } from 'react';

function CategoryFilter({ filters, onChange }) {
    const [categories, setCategories] = useState([]);
    const [categoryIds, setCategoryIds] = useState([]);
    const hanldeChangeCategory = (id) => {
        setCategoryIds((prev) => {
            if (categoryIds.includes(id)) {
                return prev.filter((x) => x !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    useEffect(() => {
        setCategories([
            {
                id: 1,
                name: 'Converse',
                searchTerm: 'converse',
                created_by: null,
                updated_by: null,
                created_at: '2020-10-18T06:06:55.456Z',
                updated_at: '2020-10-18T06:06:55.456Z',
                products: [
                    {
                        id: 1,
                        title: 'Giày Converse Chuck Taylor All Star Classic',
                        description:
                            'Nhắc đến tên dòng sản phẩm này - giày Converse classic đã đủ để thấy được sự basic của nó. Và BST Chuck Taylor All Star Classic đã chứng tỏ được vị thế của những đôi giày chất lượng - đơn giản - giá cả phải chăng của mình khi nó lọt top những sản phẩm đáng sở hữu nhất mà ai cũng nên có một đôi',
                        category: 1,
                        image: 'https://product.hstatic.net/200000265619/product/d4ddf079f419dd539b7492a8ac84fd1e_9a82b5ad2072416abd6482e8423b57d7_1024x1024.jpg',
                        originalPrice: 1500000,
                        salePrice: 120000,
                        isPromotion: true,
                        promotionPercent: 20,
                        isFreeShip: false,
                        rating: {
                            rate: 5,
                            count: 120,
                        },
                        color: 'vàng',
                        size: 36,
                    },
                ],
            },
            {
                id: 2,
                name: 'Vans',
                searchTerm: 'vans',
                created_by: null,
                updated_by: null,
                created_at: '2020-10-18T06:06:55.456Z',
                updated_at: '2020-10-18T06:06:55.456Z',
                products: [
                    {
                        id: 11,
                        title: 'Giày Vans Style 36 Classic Sport Dress Blue',
                        description:
                            'Nhắc đến tên dòng sản phẩm này - giày Converse classic đã đủ để thấy được sự basic của nó. Và BST Chuck Taylor All Star Classic đã chứng tỏ được vị thế của những đôi giày chất lượng - đơn giản - giá cả phải chăng của mình khi nó lọt top những sản phẩm đáng sở hữu nhất mà ai cũng nên có một đôi',
                        category: 2,
                        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn0a54f69yg-4.jpg?v=1642342416387',
                        originalPrice: 199000,
                        salePrice: 165000,
                        isPromotion: true,
                        promotionPercent: 18,
                        isFreeShip: false,
                        rating: {
                            rate: 5,
                            count: 95,
                        },
                        color: 'trắng',
                        size: 36,
                    },
                ],
            },
            {
                id: 3,
                name: 'Adidas',
                searchTerm: 'adidas',
                created_by: null,
                updated_by: null,
                created_at: '2020-10-18T06:06:55.456Z',
                updated_at: '2020-10-18T06:06:55.456Z',
                products: [
                    {
                        id: 21,
                        title: 'Giày Sneaker Adidas Supercourt Cloud White',
                        description:
                            'Nhắc đến tên dòng sản phẩm này - giày Converse classic đã đủ để thấy được sự basic của nó. Và BST Chuck Taylor All Star Classic đã chứng tỏ được vị thế của những đôi giày chất lượng - đơn giản - giá cả phải chăng của mình khi nó lọt top những sản phẩm đáng sở hữu nhất mà ai cũng nên có một đôi',
                        category: 3,
                        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/413/756/products/30010004064047251357-1-1658736780431.jpg?v=1658736786620',
                        originalPrice: 1500000,
                        salePrice: 1140000,
                        isPromotion: true,
                        promotionPercent: 24,
                        isFreeShip: false,
                        rating: {
                            rate: 5,
                            count: 120,
                        },
                        color: 'trắng',
                        size: 39,
                    },
                ],
            },
            {
                id: 4,
                name: 'Puma',
                searchTerm: 'puma',
                created_by: null,
                updated_by: null,
                created_at: '2020-10-18T06:06:55.456Z',
                updated_at: '2020-10-18T06:06:55.456Z',
                products: [
                    {
                        id: 31,
                        title: "Giày Slipstream Men's Sneakers",
                        description:
                            'Nhắc đến tên dòng sản phẩm này - giày Puma classic đã đủ để thấy được sự basic của nó. Và BST Chuck Taylor All Star Classic đã chứng tỏ được vị thế của những đôi giày chất lượng - đơn giản - giá cả phải chăng của mình khi nó lọt top những sản phẩm đáng sở hữu nhất mà ai cũng nên có một đôi',
                        category: 4,
                        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/388549/01/sv01/fnd/PNA/fmt/png',
                        originalPrice: 850000,
                        salePrice: 637500,
                        isPromotion: true,
                        promotionPercent: 25,
                        isFreeShip: false,
                        rating: {
                            rate: 5,
                            count: 120,
                        },
                        color: 'trắng',
                        size: 36,
                    },
                ],
            },
            {
                id: 5,
                name: 'MLB',
                searchTerm: 'mlb',
                created_by: null,
                updated_by: null,
                created_at: '2020-10-18T06:06:55.456Z',
                updated_at: '2020-10-18T06:06:55.456Z',
                products: [
                    {
                        id: 41,
                        title: 'Giày MLB NY Chunky High Shoes',
                        description:
                            'Thương hiệu MLB thuộc tập đoàn F&F đã mở cửa hàng MLB Korea đầu tiên vào năm 1997. Thương hiệu chuyên thiết kế và sản xuất trang phục, giày & phụ kiện cho nam, nữ lấy cảm hứng từ logo của những đội bóng chày danh tiếng.',
                        category: 5,
                        image: 'https://en.mlb-korea.com/web/product/big/202201/4307ec6b8a11a1fe4d1bb4865f042fd3.jpg',
                        originalPrice: 1750000,
                        salePrice: 1400000,
                        isPromotion: true,
                        promotionPercent: 20,
                        isFreeShip: true,
                        rating: {
                            rate: 4.3,
                            count: 14,
                        },
                        color: 'trắng',
                        size: 38,
                    },
                ],
            },
        ]);
    }, []);

    // useEffect(() => {
    //     onChange(categoryIds);
    //     // eslint-disable-next-line
    // }, [categoryIds]);

    // useEffect(() => {
    //     setCategoryIds([]);
    //     // eslint-disable-next-line
    // }, [filters.active]);

    return (
        <div className="mb-8">
            <h6 className="text-xl font-medium">DANH MỤC</h6>
            {categories.map((category) => {
                return (
                    <label key={category.id} className="checkbox-container">
                        <input
                            type="checkbox"
                            onChange={() => hanldeChangeCategory(category.id)}
                            checked={categoryIds.includes(category.id)}
                        />
                        <span className="checkmark"></span>
                        {category.name}
                    </label>
                );
            })}
        </div>
    );
}

export default CategoryFilter;
