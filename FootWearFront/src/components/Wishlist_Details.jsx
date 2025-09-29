import React from 'react'

const wishlistItems = [
    {
        id: 1,
        name: "Lodge Flush Mount",
        price: 144.26,
        date: "September 26, 2025",
        image: "https://picsum.photos/id/1011/100/100",
        stock: "In stock",
    },
    {
        id: 2,
        name: "Forma",
        price: 138.48,
        date: "September 26, 2025",
        image: "https://picsum.photos/id/1012/100/100",
        stock: "In stock",
    },
    {
        id: 3,
        name: "Sentel Pruning Shears",
        price: 141.36,
        date: "September 26, 2025",
        image: "https://picsum.photos/id/1013/100/100",
        stock: "In stock",
    },
    {
        id: 4,
        name: "Discus Floor and Table",
        price: 167.12,
        date: "August 8, 2025",
        image: "https://picsum.photos/id/1014/100/100",
        stock: "In stock",
    },
];

const Wishlist_Details = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                Wishlist
            </h2>

            <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="divide-y divide-gray-200">
                    {wishlistItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col md:flex-row items-center md:items-center justify-between bg-gray-50 hover:bg-gray-100 transition px-4 py-4"
                        >
                            {/* Product Info */}
                            <div className="flex items-center w-full md:w-2/3">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-contain rounded-md border bg-white"
                                />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    <p className="text-sm text-gray-500">{item.date}</p>
                                </div>
                            </div>

                            {/* Stock + Actions */}
                            <div className="flex flex-col items-start md:items-end w-full md:w-1/3 mt-4 md:mt-0">
                                <span className="text-green-600 font-medium">{item.stock}</span>
                                <button className="mt-2 px-4 py-2 text-sm font-medium bg-black text-white rounded hover:bg-gray-800 transition">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Wishlist_Details
