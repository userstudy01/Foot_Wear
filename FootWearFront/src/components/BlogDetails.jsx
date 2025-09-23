// import React, { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { allBlogs } from "./Blog";
// import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";

// const BlogDetails = () => {

//     const { id } = useParams();
//     const blog = allBlogs.find((b) => b.id === parseInt(id));

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [id]);

//     if (!blog) return <p className="text-center mt-20">Blog not found</p>;


//     return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
//             {/* Main Content */}
//             <div className="lg:col-span-2">
//                 <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-96 object-cover rounded-lg"
//                 />
//                 <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
//                 <p className="text-gray-700 mt-4 leading-relaxed whitespace-pre-line">
//                     {blog.content}
//                 </p>

//                 {/* Share Section */}
//                 <div className="flex items-center gap-4 mt-8">
//                     <span className="font-medium">Share</span>
//                     <a href="#" className="p-2 rounded-full border hover:bg-black hover:text-white">
//                         <FaFacebookF />
//                     </a>
//                     <a href="#" className="p-2 rounded-full border hover:bg-black hover:text-white">
//                         <FaTwitter />
//                     </a>
//                     <a href="#" className="p-2 rounded-full border hover:bg-black hover:text-white">
//                         <FaPinterest />
//                     </a>
//                 </div>
//             </div>

//             {/* Sidebar */}
//             <div>
//                 <h3 className="text-2xl font-semibold border-b pb-4 mb-4">Recent Post</h3>
//                 <div className="space-y-6">
//                     {allBlogs.slice(0, 3).map((item) => (
//                         <Link
//                             to={`/blog/${item.id}`}
//                             key={item.id}
//                             className="flex items-center gap-4 group"
//                         >
//                             <img
//                                 src={item.image}
//                                 alt={item.title}
//                                 className="w-24 h-20 object-cover rounded"
//                             />
//                             <div>
//                                 <span className="text-xs bg-gray-200 px-2 py-1 rounded">
//                                     {item.tag}
//                                 </span>
//                                 <h4 className="text-sm font-medium mt-1 group-hover:text-pink-500">
//                                     {item.title}
//                                 </h4>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default BlogDetails

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { allBlogs } from "./Blog";
// import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";

// // Dummy data for comments
// const initialComments = [
//     {
//         id: 1,
//         author: "Abc",
//         date: "September 13, 2025",
//         text: "abc",
//         avatar: "https://via.placeholder.com/150",
//     },
//     {
//         id: 2,
//         author: "Abc",
//         date: "December 3, 2024",
//         text: "nice post",
//         avatar: "https://via.placeholder.com/150",
//     },
//     {
//         id: 3,
//         author: "Abc",
//         date: "December 3, 2024",
//         text: "nice post",
//         avatar: "https://via.placeholder.com/150",
//     },
// ];

// const BlogDetails = () => {
//     const { id } = useParams();
//     const blog = allBlogs.find((b) => b.id === parseInt(id));

//     const [comments, setComments] = useState(initialComments);
//     const [authorName, setAuthorName] = useState("");
//     const [authorEmail, setAuthorEmail] = useState("");
//     const [newComment, setNewComment] = useState("");

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [id]);

//     if (!blog) return <p className="text-center mt-20">Blog not found</p>;

//     const handleCommentSubmit = (e) => {
//         e.preventDefault();
//         if (newComment.trim() && authorName.trim() && authorEmail.trim()) {
//             const comment = {
//                 id: comments.length + 1,
//                 author: authorName,
//                 date: new Date().toLocaleDateString("en-US", {
//                     month: "long",
//                     day: "numeric",
//                     year: "numeric",
//                 }),
//                 text: newComment,
//                 avatar: "https://via.placeholder.com/150",
//             };
//             setComments([...comments, comment]);
//             setNewComment("");
//             setAuthorName("");
//             setAuthorEmail("");
//         }
//     };

//     return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
//             {/* Main Content */}
//             <div className="lg:col-span-2">
//                 <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-96 object-cover rounded-lg"
//                 />
//                 <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
//                 <p className="text-gray-700 mt-4 leading-relaxed whitespace-pre-line">
//                     {blog.content}
//                 </p>

//                 {/* Share Section */}
//                 <div className="flex items-center gap-4 mt-8 pb-8 border-b">
//                     <span className="font-medium">Share</span>
//                     <a
//                         href="#"
//                         className="p-2 rounded-full border hover:bg-black hover:text-white"
//                     >
//                         <FaFacebookF />
//                     </a>
//                     <a
//                         href="#"
//                         className="p-2 rounded-full border hover:bg-black hover:text-white"
//                     >
//                         <FaTwitter />
//                     </a>
//                     <a
//                         href="#"
//                         className="p-2 rounded-full border hover:bg-black hover:text-white"
//                     >
//                         <FaPinterest />
//                     </a>
//                 </div>

//                 {/* Comments Section */}
//                 <div className="mt-10">
//                     <h2 className="text-3xl font-bold mb-6">
//                         {comments.length} comments
//                     </h2>
//                     <div className="space-y-6">
//                         {comments.map((comment) => (
//                             <div
//                                 key={comment.id}
//                                 className="flex items-start gap-4 p-4 border rounded-lg"
//                             >
//                                 <img
//                                     src={comment.avatar}
//                                     alt={comment.author}
//                                     className="w-12 h-12 rounded-full bg-gray-200"
//                                 />
//                                 <div className="flex-1">
//                                     <div className="flex flex-col">
//                                         <h4 className="font-semibold text-gray-800">
//                                             {comment.author}
//                                         </h4>
//                                         <span className="text-sm text-gray-500">
//                                             {comment.date}
//                                         </span>
//                                     </div>
//                                     <p className="mt-1 text-gray-700">
//                                         {comment.text}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="mt-10">
//                         <h3 className="text-3xl font-bold mb-4">
//                             Leave a Comment
//                         </h3>
//                         <form
//                             onSubmit={handleCommentSubmit}
//                             className="space-y-4 p-6 border rounded-lg"
//                         >
//                             <input
//                                 type="text"
//                                 placeholder="Name"
//                                 value={authorName}
//                                 onChange={(e) => setAuthorName(e.target.value)}
//                                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//                                 required
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 value={authorEmail}
//                                 onChange={(e) => setAuthorEmail(e.target.value)}
//                                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//                                 required
//                             />
//                             <textarea
//                                 placeholder="Message"
//                                 value={newComment}
//                                 onChange={(e) => setNewComment(e.target.value)}
//                                 rows="5"
//                                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//                                 required
//                             ></textarea>
//                             <button
//                                 type="submit"
//                                 className="w-full px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
//                             >
//                                 Post Comment
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//             {/* Sidebar */}
//             <div>
//                 <h3 className="text-2xl font-semibold border-b pb-4 mb-4">
//                     Recent Post
//                 </h3>
//                 <div className="space-y-6">
//                     {allBlogs.slice(0, 3).map((item) => (
//                         <Link
//                             to={`/blog/${item.id}`}
//                             key={item.id}
//                             className="flex items-center gap-4 group"
//                         >
//                             <img
//                                 src={item.image}
//                                 alt={item.title}
//                                 className="w-24 h-20 object-cover rounded"
//                             />
//                             <div>
//                                 <span className="text-xs bg-gray-200 px-2 py-1 rounded">
//                                     {item.tag}
//                                 </span>
//                                 <h4 className="text-sm font-medium mt-1 group-hover:text-pink-500">
//                                     {item.title}
//                                 </h4>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogDetails;


// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { allBlogs } from "./Blog";
// import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";

// // Dummy data for comments
// const initialComments = [
//     {
//         id: 1,
//         author: "Abc",
//         date: "September 13, 2025",
//         text: "abc",
//         avatar: "https://via.placeholder.com/150",
//     },
//     {
//         id: 2,
//         author: "Abc",
//         date: "December 3, 2024",
//         text: "nice post",
//         avatar: "https://via.placeholder.com/150",
//     },
//     {
//         id: 3,
//         author: "Abc",
//         date: "December 3, 2024",
//         text: "nice post",
//         avatar: "https://via.placeholder.com/150",
//     },
// ];

// const BlogDetails = () => {
//     const { id } = useParams();
//     const blog = allBlogs.find((b) => b.id === parseInt(id));

//     const [comments, setComments] = useState(initialComments);
//     const [authorName, setAuthorName] = useState("");
//     const [authorEmail, setAuthorEmail] = useState("");
//     const [newComment, setNewComment] = useState("");

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [id]);

//     if (!blog) return <p className="text-center mt-20">Blog not found</p>;

//     const handleCommentSubmit = (e) => {
//         e.preventDefault();
//         if (newComment.trim() && authorName.trim() && authorEmail.trim()) {
//             const comment = {
//                 id: comments.length + 1,
//                 author: authorName,
//                 date: new Date().toLocaleDateString("en-US", {
//                     month: "long",
//                     day: "numeric",
//                     year: "numeric",
//                 }),
//                 text: newComment,
//                 avatar: "https://via.placeholder.com/150",
//             };
//             setComments([...comments, comment]);
//             setNewComment("");
//             setAuthorName("");
//             setAuthorEmail("");
//         }
//     };

//     return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
//             {/* Main Content */}
//             <div className="lg:col-span-2">
//                 <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-96 object-cover rounded-lg"
//                 />
//                 <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
//                 <p className="text-gray-700 mt-4 leading-relaxed whitespace-pre-line">
//                     {blog.content}
//                 </p>

//                 {/* Share Section */}
//                 <div className="flex items-center gap-4 mt-8 pb-8 border-b">
//                     <span className="font-medium">Share</span>
//                     <a
//                         href="#"
//                         className="p-2 rounded-full border hover:bg-black hover:text-white"
//                     >
//                         <FaFacebookF />
//                     </a>
//                     <a
//                         href="#"
//                         className="p-2 rounded-full border hover:bg-black hover:text-white"
//                     >
//                         <FaTwitter />
//                     </a>
//                     <a
//                         href="#"
//                         className="p-2 rounded-full border hover:bg-black hover:text-white"
//                     >
//                         <FaPinterest />
//                     </a>
//                 </div>
//             </div>

//             {/* Sidebar */}
//             <div className="space-y-10">
//                 {/* Recent Post Section */}
//                 <div className="space-y-6">
//                     <h3 className="text-2xl font-semibold border-b pb-4 mb-4">
//                         Recent Post
//                     </h3>
//                     {allBlogs.slice(0, 3).map((item) => (
//                         <Link
//                             to={`/blog/${item.id}`}
//                             key={item.id}
//                             className="flex items-center gap-4 group"
//                         >
//                             <img
//                                 src={item.image}
//                                 alt={item.title}
//                                 className="w-24 h-20 object-cover rounded"
//                             />
//                             <div>
//                                 <span className="text-xs bg-gray-200 px-2 py-1 rounded">
//                                     {item.tag}
//                                 </span>
//                                 <h4 className="text-sm font-medium mt-1 group-hover:text-pink-500">
//                                     {item.title}
//                                 </h4>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>

//                 {/* Comments Section */}
//                 <div className="space-y-6">
//                     <h2 className="text-3xl font-bold">
//                         {comments.length} comments
//                     </h2>
//                     <div className="space-y-6">
//                         {comments.map((comment) => (
//                             <div
//                                 key={comment.id}
//                                 className="flex items-start gap-4 p-4 border rounded-lg"
//                             >
//                                 <img
//                                     src={comment.avatar}
//                                     alt={comment.author}
//                                     className="w-12 h-12 rounded-full bg-gray-200"
//                                 />
//                                 <div className="flex-1">
//                                     <h4 className="font-semibold text-gray-800">
//                                         {comment.author}
//                                     </h4>
//                                     <span className="text-sm text-gray-500">
//                                         {comment.date}
//                                     </span>
//                                     <p className="mt-1 text-gray-700">
//                                         {comment.text}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="mt-10">
//                         <h3 className="text-3xl font-bold mb-4">
//                             Leave a Comment
//                         </h3>
//                         <form
//                             onSubmit={handleCommentSubmit}
//                             className="space-y-4 p-6 border rounded-lg"
//                         >
//                             <input
//                                 type="text"
//                                 placeholder="Name"
//                                 value={authorName}
//                                 onChange={(e) => setAuthorName(e.target.value)}
//                                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//                                 required
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 value={authorEmail}
//                                 onChange={(e) => setAuthorEmail(e.target.value)}
//                                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//                                 required
//                             />
//                             <textarea
//                                 placeholder="Message"
//                                 value={newComment}
//                                 onChange={(e) => setNewComment(e.target.value)}
//                                 rows="5"
//                                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//                                 required
//                             ></textarea>
//                             <button
//                                 type="submit"
//                                 className="w-full px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
//                             >
//                                 Post Comment
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogDetails;


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { allBlogs } from "./Blog";
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";

// Dummy data for comments
const allComments = [
    { id: 1, author: "Abc", date: "September 13, 2025", text: "abc", avatar: "https://via.placeholder.com/150" },
    { id: 2, author: "Abc", date: "December 3, 2024", text: "nice post", avatar: "https://via.placeholder.com/150" },
    { id: 3, author: "Abc", date: "December 3, 2024", text: "nice post", avatar: "https://via.placeholder.com/150" },
    { id: 4, author: "Abc", date: "September 13, 2025", text: "another great comment!", avatar: "https://via.placeholder.com/150" },
    { id: 5, author: "Abc", date: "December 3, 2024", text: "i love this!", avatar: "https://via.placeholder.com/150" },
    { id: 6, author: "Abc", date: "December 3, 2024", text: "amazing", avatar: "https://via.placeholder.com/150" },
];

const BlogDetails = () => {
    const { id } = useParams();
    const blog = allBlogs.find((b) => b.id === parseInt(id));

    const initialVisibleComments = 3;
    const [visibleComments, setVisibleComments] = useState(initialVisibleComments);
    const [comments, setComments] = useState(allComments.slice(0, initialVisibleComments));

    const [authorName, setAuthorName] = useState("");
    const [authorEmail, setAuthorEmail] = useState("");
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!blog) return <p className="text-center mt-20">Blog not found</p>;

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() && authorName.trim() && authorEmail.trim()) {
            const newCommentObj = {
                id: allComments.length + 1,
                author: authorName,
                date: new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                }),
                text: newComment,
                avatar: "https://via.placeholder.com/150",
            };
            setComments([...comments, newCommentObj]);
            setNewComment("");
            setAuthorName("");
            setAuthorEmail("");
        }
    };

    const handleViewMore = () => {
        const nextVisibleComments = visibleComments + 3;
        setVisibleComments(nextVisibleComments);
        setComments(allComments.slice(0, nextVisibleComments));
    };


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-96 object-cover rounded-lg"
                />
                <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
                <p className="text-gray-700 mt-4 leading-relaxed whitespace-pre-line">
                    {blog.content}
                </p>

                {/* Share Section */}
                <div className="flex items-center gap-4 mt-8 pb-8 border-b">
                    <span className="font-medium">Share</span>
                    <a
                        href="#"
                        className="p-2 rounded-full border hover:bg-black hover:text-white"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="#"
                        className="p-2 rounded-full border hover:bg-black hover:text-white"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="#"
                        className="p-2 rounded-full border hover:bg-black hover:text-white"
                    >
                        <FaPinterest />
                    </a>
                </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
                {/* Recent Post Section */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold border-b pb-4 mb-4">
                        Recent Post
                    </h3>
                    {allBlogs.slice(0, 3).map((item) => (
                        <Link
                            to={`/blog/${item.id}`}
                            key={item.id}
                            className="flex items-center gap-4 group"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-24 h-20 object-cover rounded"
                            />
                            <div>
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                                    {item.tag}
                                </span>
                                <h4 className="text-sm font-medium mt-1 group-hover:text-pink-500">
                                    {item.title}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Comments Section */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">
                        {allComments.length} comments
                    </h2>
                    <div className="space-y-6">
                        {comments.map((comment) => (
                            <div
                                key={comment.id}
                                className="flex items-start gap-4 p-4 border rounded-lg"
                            >
                                <img
                                    src={comment.avatar}
                                    alt={comment.author}
                                    className="w-12 h-12 rounded-full bg-gray-200"
                                />
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-800">
                                        {comment.author}
                                    </h4>
                                    <span className="text-sm text-gray-500">
                                        {comment.date}
                                    </span>
                                    <p className="mt-1 text-gray-700">
                                        {comment.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {allComments.length > comments.length && (
                        <div className="text-center">
                            <button
                                onClick={handleViewMore}
                                className="px-6 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-300"
                            >
                                View More Comments
                            </button>
                        </div>
                    )}


                    <div className="mt-10">
                        <h3 className="text-3xl font-bold mb-4">
                            Leave a Comment
                        </h3>
                        <form
                            onSubmit={handleCommentSubmit}
                            className="space-y-4 p-6 border rounded-lg"
                        >
                            <input
                                type="text"
                                placeholder="Name"
                                value={authorName}
                                onChange={(e) => setAuthorName(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={authorEmail}
                                onChange={(e) => setAuthorEmail(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                required
                            />
                            <textarea
                                placeholder="Message"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                rows="5"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
                            >
                                Post Comment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;