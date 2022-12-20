import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetColors } from '~/redux/Slices/ProductsSlice';

function ColorFilter({ filters, onChange }) {
    const dispatch = useDispatch();
    const colors = useSelector((state) => state.Products.colors);
    const [colorIds, setColorIds] = useState([]);
    const hanldeChangeColor = (color) => {
        setColorIds((prev) => {
            if (colorIds.includes(color)) {
                return prev.filter((x) => x !== color);
            } else {
                return [...prev, color];
            }
        });
    };

    useEffect(() => {
        dispatch(GetColors());
    }, []);

    useEffect(() => {
        onChange(colorIds);
    }, [colorIds]);
    useEffect(() => {
        setColorIds([]);
    }, [filters.active]);

    return (
        <div className="mb-8">
            <h6 className="text-xl font-medium mt-3">MÀU SẮC</h6>
            <div>
                {colors.map((color) => {
                    return (
                        <label key={color._id} className="checkbox-container">
                            <input
                                type="checkbox"
                                onChange={() => hanldeChangeColor(color._id)}
                                checked={colorIds.includes(color._id)}
                            />
                            <span className="checkmark"></span>
                            {` ${color.name}`}
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

export default ColorFilter;
