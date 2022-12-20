import React from 'react';
import CategoryFilter from './CategoryFilter';
import ColorFilter from './ColorFilter';

function ProductsFilters({ filters, onChange }) {
    const HandleCategoryChange = (newCategoryIds) => {
        if (!onChange) return;
        const newFilters = {
            ...filters,
            categories: newCategoryIds,
            active: true,
        };
        onChange(newFilters);
    };
    const HandleColorChange = (newColors) => {
        if (!onChange) return;
        const newFilters = {
            ...filters,
            colors: newColors,
            active: true,
        };
        onChange(newFilters);
    };
    const handleRemoveFilters = () => {
        const newFilters = {
            categories: [],
            colors: [],
            active: false,
        };
        onChange(newFilters);
    };
    return (
        <div>
            <CategoryFilter onChange={HandleCategoryChange} filters={filters} />
            <ColorFilter onChange={HandleColorChange} filters={filters} />
            <div
                className="text-sm font-medium mt-5 px-4 py-1.5 inline-block border border-solid border-gray-500 hover:cursor-pointer text-white bg-black hover:text-black hover:bg-white "
                onClick={handleRemoveFilters}
            >
                XÓA BỘ LỌC
            </div>
        </div>
    );
}

export default ProductsFilters;
