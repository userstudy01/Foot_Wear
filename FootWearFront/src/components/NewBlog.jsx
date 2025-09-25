import React from 'react'

const NewBlog = () => {
    const posts = [
        {
            title: "OUR PERSONAL DEPARTMENT",
            date: "02.02.2017",
            image: "https://picsum.photos/id/1018/600/400",
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo...",
        },
        {
            title: "SUCCESS HAS IT’S ADVANTAGE",
            date: "02.02.2017",
            image: "https://picsum.photos/id/1025/600/400",
            excerpt:
                "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...",
        },
        {
            title: "SKY IS THE LIMIT",
            date: "02.02.2017",
            image: "https://picsum.photos/id/1040/600/400",
            excerpt:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...",
        },
        {
            title: "PLANTS AREN’T GREEN",
            date: "02.02.2017",
            image: "https://picsum.photos/id/1062/600/400",
            excerpt:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat...",
        },
        {
            title: "TO BE DIFFERENT",
            date: "02.02.2017",
            image: "https://picsum.photos/id/1074/600/400",
            excerpt:
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...",
        },
        {
            title: "OUR TALENT IS FINDING YOURS",
            date: "02.02.2017",
            image: "https://picsum.photos/id/1084/600/400",
            excerpt:
                "Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis...",
        },
    ];

    return (
        <section className="bg-white min-h-screen py-12 px-4 sm:px-8 lg:px-16">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="uppercase text-xs tracking-widest text-gray-500">
                    Welcome to Depot
                </p>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mt-2">
                    The best way to make news is to announce a new <br />
                    category, not a new product.
                </h1>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {posts.map((post, idx) => (
                    <div key={idx} className="group">
                        {/* Blog Image */}
                        <div className="overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* Blog Content */}
                        <div className="mt-4">
                            <p className="text-xs uppercase text-gray-500">{post.date}</p>
                            <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-orange-500 transition">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
                            <a
                                href="#"
                                className="mt-3 inline-block text-sm font-medium text-gray-900 group-hover:text-orange-500 transition"
                            >
                                Learn More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewBlog