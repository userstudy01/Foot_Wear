import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

const NewBlogDetails = () => {

    const relatedPosts = [
        {
            title: "Unique Places",
            date: "02.02.2017",
            image: "https://picsum.photos/id/1015/400/250",
        },
        {
            title: "Our Talent Is Finding Yours",
            date: "02.02.2017",
            image: "https://picsum.photos/id/1016/400/250",
        },
        {
            title: "Unique Places for Coffee",
            date: "02.02.2017",
            image: "https://picsum.photos/id/1018/400/250",
        },
        {
            title: "Marketing Strategy",
            date: "02.02.2017",
            image: "https://picsum.photos/id/1020/400/250",
        },
    ];

    const comments = [
        {
            name: "Ralph Jackson",
            time: "9 years ago",
            text: "Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Olivia Schmidt",
            time: "9 years ago",
            text: "Cum sociis natoque penatibus et magnis dis parturient montes.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
    ];

    return (

        <>
            <Header />
            <section className="bg-white text-gray-800 py-12 px-4 sm:px-8 lg:px-24">
                {/* Featured Video */}
                <div className="mb-10">
                    <iframe
                        className="w-full h-96"
                        src="https://player.vimeo.com/video/76979871?h=8272103f6e"
                        title="Blog video"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Title + Meta */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold mb-3">SUCCESS HAS IT’S ADVANTAGE</h1>
                    <div className="text-sm text-gray-500 flex flex-wrap gap-4">
                        <span>02.02.2017</span>
                        <span>By <strong className="text-black">Billy</strong></span>
                        <span>2 Comments</span>
                        <span>Artistic, Creative, Home Decor</span>
                    </div>
                </div>

                {/* Blog Content */}
                <div className="space-y-6 leading-relaxed text-gray-600">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fuga laborum iure quam minus eos neque repellat quisquam eius dolore ut, obcaecati fugiat reiciendis cumque cupiditate asperiores itaque temporibus delectus voluptatum maxime dolorum hic odit quae perferendis! Sunt odio dolor iusto quia ducimus nemo dignissimos nisi illo perspiciatis labore ullam nostrum laborum cum sit ad, ratione, esse explicabo! Cumque nihil molestiae nisi nemo beatae voluptatem impedit, repellendus id totam velit porro ea asperiores quae labore, delectus voluptates corporis ducimus temporibus deserunt harum ipsa ipsum consequatur animi error? Ad minus quis vero quisquam vitae fuga, aperiam alias perferendis deleniti aspernatur inventore magnam nisi aliquid dolore libero, maxime dignissimos? Veniam eveniet alias est voluptates assumenda ipsam animi libero nemo quam quis fuga iure distinctio eos, placeat eaque voluptatem voluptatibus. Ipsum, ducimus, magni tempore impedit corporis, eligendi repudiandae dolor accusamus esse exercitationem totam! Veritatis blanditiis possimus quas minima architecto fugit eveniet, praesentium ullam totam tenetur ipsam, pariatur corrupti suscipit magni, consectetur accusamus harum eius labore dicta aut! Odio provident, harum molestias error dolorem doloribus possimus. Aperiam dolorum corporis incidunt ex sed laboriosam doloremque, et sapiente culpa! Numquam fugiat distinctio, labore enim, cum atque nam, corporis laboriosam molestias placeat pariatur sed sunt? Consectetur, voluptatibus?
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        ultricies aliquam convallis. Maecenas ut tellus mi...
                    </p>

                    {/* Highlighted Block */}
                    <div className="bg-gray-50 py-6 px-4 text-center text-xl font-bold text-black">
                        “WAR AND MARKETING ARE SAME.”
                    </div>

                    <p>
                        Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit
                        ultrices nunc. Donec facilisis nisi eu vestibulum dapibus.
                    </p>
                </div>
                {/* Related Posts */}
                <div className="mt-16">
                    <h2 className="text-xl font-bold mb-6">Related Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedPosts.map((post, i) => (
                            <div key={i}>
                                <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                                <p className="text-xs text-gray-500 mt-2">{post.date}</p>
                                <h3 className="text-sm font-semibold mt-1">{post.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Comments */}
                <div className="mt-16">
                    <h2 className="text-xl font-bold mb-6">2 Comments</h2>
                    <div className="space-y-8">
                        {comments.map((c, i) => (
                            <div key={i} className="flex gap-4">
                                <img src={c.avatar} alt={c.name} className="w-14 h-14 rounded-full" />
                                <div>
                                    <h4 className="font-bold text-sm">
                                        {c.name}{" "}
                                        <span className="text-gray-400 font-normal ml-2">{c.time}</span>
                                    </h4>
                                    <p className="text-gray-600 text-sm mt-1">{c.text}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Comment Form */}
                <div className="mt-16">
                    <h2 className="text-xl font-bold mb-6">Leave a Comment</h2>
                    <form className="space-y-4">
                        <textarea placeholder="Write a comment..." className="w-full border p-3 rounded" rows="4"></textarea>
                        <input type="text" placeholder="Full Name*" className="w-full border p-3 rounded" />
                        <input type="email" placeholder="Email Address*" className="w-full border p-3 rounded" />
                        <input type="text" placeholder="Website" className="w-full border p-3 rounded" />

                        <button type="submit" className="bg-black text-white px-6 py-3 font-bold uppercase text-sm">
                            Post Comment
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};
export default NewBlogDetails

