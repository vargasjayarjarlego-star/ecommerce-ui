import React, { useState } from 'react';

const ShoppingCartPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
        { id: 2, name: 'Product 2', price: 49.99, quantity: 2 },
    ]);

    const handleQuantityChange = (id, quantity) => {
        setCartItems(cartItems.map(item => (item.id === id ? { ...item, quantity } : item)));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const calculateShipping = () => {
        return (calculateSubtotal() > 50 ? 0 : 5).toFixed(2);
    };

    const calculateTax = (subtotal) => {
        return (subtotal * 0.07).toFixed(2);
    };

    const subtotal = calculateSubtotal();
    const shipping = calculateShipping();
    const tax = calculateTax(subtotal);
    const total = (parseFloat(subtotal) + parseFloat(shipping) + parseFloat(tax)).toFixed(2);

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>${item.price.toFixed(2)}</span>
                        <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        />
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h2>Order Summary</h2>
            <p>Subtotal: ${subtotal}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Total: ${total}</h3>
        </div>
    );
};

export default ShoppingCartPage;