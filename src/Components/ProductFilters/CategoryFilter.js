import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCategories } from '~/redux/Slices/ProductsSlice';

function CategoryFilter({ filters, onChange }) {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.Products.categories);
    const [categoryIds, setCategoryIds] = useState([]);
    const hanldeChangeCategory = (category) => {
        setCategoryIds((prev) => {
            if (categoryIds.includes(category._id)) {
                return prev.filter((x) => x !== category._id);
            } else {
                return [...prev, category._id];
            }
        });
    };
    useEffect(() => {
        dispatch(GetCategories());
    }, []);

    useEffect(() => {
        onChange(categoryIds);
    }, [categoryIds]);
    useEffect(() => {
        setCategoryIds([]);
    }, [filters.active]);

    return (
        <div className="mb-8">
            <h6 className="text-xl font-medium">DANH MỤC</h6>
            {categories.map((category) => {
                return (
                    <label key={category._id} className="checkbox-container">
                        <input
                            type="checkbox"
                            onChange={() => hanldeChangeCategory(category)}
                            checked={categoryIds.includes(category._id)}
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
