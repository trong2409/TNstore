export const GetCartLocalStorage = () => {
    return window.localStorage.getItem('cart')
        ? JSON.parse(window.localStorage.getItem('cart'))
        : [];
};

export const setCartLocalStorage = (cart) => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
};
