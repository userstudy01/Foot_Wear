import React from "react";

const CartPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cart Items */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow p-4 md:p-6">
                    <div className="grid grid-cols-4 font-semibold text-gray-700 border-b pb-3 mb-4">
                        <span className="col-span-2">Product</span>
                        <span className="text-center">Price</span>
                        <span className="text-center">Quantity</span>
                        <span className="text-right">Total</span>
                    </div>

                    {/* Item */}
                    {[
                        {
                            name: "Mantu smart watch",
                            price: 516,
                            image: "https://via.placeholder.com/80",
                        },
                        {
                            name: "Leather bag",
                            price: 75,
                            image: "https://via.placeholder.com/80",
                        },
                        {
                            name: "Cotton fabric T-shirt",
                            price: 48,
                            image: "https://via.placeholder.com/80",
                        },
                        {
                            name: "Special sport shoes",
                            price: 95,
                            image: "https://via.placeholder.com/80",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="grid grid-cols-4 items-center border-b py-3 text-gray-600"
                        >
                            <div className="col-span-2 flex items-center gap-3">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 rounded object-cover"
                                />
                                <span>{item.name}</span>
                            </div>
                            <span className="text-center">${item.price}.00</span>
                            <div className="flex justify-center">
                                <input
                                    type="number"
                                    defaultValue={1}
                                    min={1}
                                    className="w-16 border rounded text-center"
                                />
                            </div>
                            <span className="text-right">${item.price}.00</span>
                        </div>
                    ))}

                    <div className="flex justify-between items-center mt-4">
                        <a href="#" className="text-blue-600 font-medium">
                            Continue Shopping
                        </a>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                            Check Out
                        </button>
                    </div>
                </div>

                {/* Summary */}
                <div className="bg-white rounded-2xl shadow p-4 md:p-6">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                    <p className="text-sm text-gray-500 mb-3">
                        Enter your destination to get a shipping estimate
                    </p>

                    <label className="block mb-3">
                        <span className="text-sm font-medium">Country *</span>
                        <select className="mt-1 w-full border rounded-lg p-2">
                            <option>United States</option>
                            <option>India</option>
                            <option>Canada</option>
                        </select>
                    </label>

                    <label className="block mb-3">
                        <span className="text-sm font-medium">State/Province</span>
                        <select className="mt-1 w-full border rounded-lg p-2">
                            <option>Please Select a region, state</option>
                        </select>
                    </label>

                    <label className="block mb-3">
                        <span className="text-sm font-medium">Zip/Postal Code</span>
                        <input
                            type="text"
                            placeholder="Zip/Postal Code"
                            className="mt-1 w-full border rounded-lg p-2"
                        />
                    </label>

                    <div className="flex justify-between py-2 border-b">
                        <span>Sub-Total</span>
                        <span>$734.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <span>Delivery Charges</span>
                        <span>$80.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <span>Coupon Discount</span>
                        <button className="text-blue-600">Apply Coupon</button>
                    </div>
                    <div className="flex justify-between py-3 font-semibold text-lg">
                        <span>Total Amount</span>
                        <span>$814.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
