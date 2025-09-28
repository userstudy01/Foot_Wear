// import React from "react";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// const NewBlogDetails = () => {

//     const relatedPosts = [
//         {
//             title: "Unique Places",
//             date: "02.02.2017",
//             image: "https://picsum.photos/id/1011/400/250",
//         },
//         {
//             title: "Our Talent Is Finding Yours",
//             date: "02.02.2017",
//             image: "https://picsum.photos/id/1012/400/250",
//         },
//         {
//             title: "Unique Places for Coffee",
//             date: "02.02.2017",
//             image: "https://picsum.photos/id/1013/400/250",
//         },
//         {
//             title: "Marketing Strategy",
//             date: "02.02.2017",
//             image: "https://picsum.photos/id/1014/400/250",
//         },
//     ];

//     const comments = [
//         {
//             name: "Olivia Schmidt",
//             time: "9 years ago",
//             text: "Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci.",
//             avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//         },
//         {
//             name: "Nikole Burke",
//             time: "9 years ago",
//             text: "Cum sociis natoque penatibus et magnis dis parturient montes.",
//             avatar: "https://randomuser.me/api/portraits/women/65.jpg",
//         },
//         {
//             name: "Ralph Jackson",
//             time: "9 years ago",
//             text: "Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi.",
//             avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//         },
//     ];

//     return (
//         <section className="bg-white text-gray-800 py-12 px-4 sm:px-8 lg:px-16">
//             {/* Title Section */}
//             <div className="mb-10">
//                 <h1 className="text-3xl font-bold mb-4">OUR PERSONAL DEPARTMENT</h1>
//                 <div className="text-sm text-gray-500 flex flex-wrap gap-4">
//                     <span>02.02.2017</span>
//                     <span>By <strong className="text-black">Billy</strong></span>
//                     <span>4 Comments</span>
//                     <span>Artistic, Creative, Home Decor</span>
//                 </div>
//             </div>

//             {/* Content */}
//             <div className="space-y-6 leading-relaxed text-gray-600">
//                 <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
//                     ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et
//                     magnis dis parturient montes, nascetur ridiculus mus.
//                 </p>

//                 <blockquote className="text-2xl font-light text-black italic border-l-4 border-gray-800 pl-4">
//                     The essence of positioning is sacrifice. You must be willing to give up
//                     something in order to establish that position.
//                 </blockquote>

//                 {/* Inline Images */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <img
//                         src="https://picsum.photos/id/1062/600/400"
//                         alt="blog-1"
//                         className="w-full rounded"
//                     />
//                     <img
//                         src="https://picsum.photos/id/1063/600/400"
//                         alt="blog-2"
//                         className="w-full rounded"
//                     />
//                 </div>

//                 <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
//                     ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt,
//                     lectus eu volutpat mattis, ante metus lacinia tellus.
//                 </p>

//                 {/* Highlighted Quote */}
//                 <div className="bg-gray-50 py-6 px-4 text-center text-xl font-bold text-black">
//                     “WAR AND MARKETING ARE SAME.”
//                 </div>

//                 <p>
//                     Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit
//                     ultrices nunc. Donec facilisis nisi eu vestibulum dapibus.
//                 </p>
//             </div>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-3 mt-10">
//                 {["Decor", "Furniture", "Interior", "Modern"].map((tag, i) => (
//                     <span
//                         key={i}
//                         className="px-4 py-2 border border-gray-300 text-sm uppercase tracking-wider"
//                     >
//                         {tag}
//                     </span>
//                 ))}
//             </div>

//             {/* Author Box */}
//             <div className="flex items-center gap-6 mt-16 border-t pt-10">
//                 <img
//                     src="https://randomuser.me/api/portraits/men/41.jpg"
//                     alt="author"
//                     className="w-20 h-20 rounded-full"
//                 />
//                 <div>
//                     <h3 className="font-bold">Billy Hart</h3>
//                     <p className="text-gray-600 text-sm">
//                         Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper
//                         leo.
//                     </p>
//                     <div className="flex gap-4 mt-2 text-gray-800">
//                         <FaFacebookF />
//                         <FaTwitter />
//                         <FaLinkedinIn />
//                     </div>
//                 </div>
//             </div>

//             {/* Related Posts */}
//             <div className="mt-16">
//                 <h2 className="text-xl font-bold mb-6">Related Posts</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {relatedPosts.map((post, i) => (
//                         <div key={i}>
//                             <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
//                             <p className="text-xs text-gray-500 mt-2">{post.date}</p>
//                             <h3 className="text-sm font-semibold mt-1">{post.title}</h3>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Comments */}
//             <div className="mt-16">
//                 <h2 className="text-xl font-bold mb-6">4 Comments</h2>
//                 <div className="space-y-8">
//                     {comments.map((c, i) => (
//                         <div key={i} className="flex gap-4">
//                             <img
//                                 src={c.avatar}
//                                 alt={c.name}
//                                 className="w-14 h-14 rounded-full"
//                             />
//                             <div>
//                                 <h4 className="font-bold text-sm">
//                                     {c.name}{" "}
//                                     <span className="text-gray-400 font-normal ml-2">
//                                         {c.time}
//                                     </span>
//                                 </h4>
//                                 <p className="text-gray-600 text-sm mt-1">{c.text}</p>
//                                 <a href="#" className="text-sm font-medium text-black mt-2 inline-block">
//                                     Reply →
//                                 </a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Comment Form */}
//             <div className="mt-16">
//                 <h2 className="text-xl font-bold mb-6">Leave a Comment</h2>
//                 <form className="space-y-4">
//                     <textarea
//                         placeholder="Write a comment..."
//                         className="w-full border p-3 rounded"
//                         rows="4"
//                     ></textarea>
//                     <input
//                         type="text"
//                         placeholder="Full Name*"
//                         className="w-full border p-3 rounded"
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email Address*"
//                         className="w-full border p-3 rounded"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Website"
//                         className="w-full border p-3 rounded"
//                     />
//                     <div className="flex items-center gap-2">
//                         <input type="checkbox" id="save" />
//                         <label htmlFor="save" className="text-sm text-gray-600">
//                             Save my name, email, and website for next time
//                         </label>
//                     </div>
//                     <button
//                         type="submit"
//                         className="bg-black text-white px-6 py-3 font-bold uppercase text-sm"
//                     >
//                         Post Comment
//                     </button>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default NewBlogDetails


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

