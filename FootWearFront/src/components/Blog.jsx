// import React, { useState, useEffect } from "react";

// const allBlogs = Array.from({ length: 30 }, (_, i) => ({
//     id: i + 1,
//     title:
//         i % 2 === 0
//             ? "Sed et quam quis"
//             : "The Variety Of Styles And Prices Are Endless",
//     description:
//         "A recent study has found that sleep aromatherapy may notably enhance memory.",
//     image: `https://picsum.photos/seed/${i + 1}/600/400`,
//     tag: "NEWS",
// }));

// const Blog = () => {
//     const [blogs, setBlogs] = useState([]);
//     const [visibleCount, setVisibleCount] = useState(6);

//     // Load initial blogs
//     useEffect(() => {
//         setBlogs(allBlogs.slice(0, visibleCount));
//     }, [visibleCount]);

//     const loadMoreBlogs = () => {
//         if (visibleCount < allBlogs.length) {
//             setVisibleCount((prev) => prev + 6);
//         }
//     };

//     return (
//         <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {blogs.map((blog) => (
//                     <div
//                         key={blog.id}
//                         className="flex flex-col border-b pb-6"
//                     >
//                         {/* Blog Image */}
//                         <img
//                             src={blog.image}
//                             alt={blog.title}
//                             className="w-full h-64 object-cover rounded-lg mb-4"
//                         />

//                         {/* Blog Content */}
//                         <div className="flex flex-col justify-between flex-grow">
//                             <div>
//                                 <h2 className="text-xl font-semibold mb-2">
//                                     {blog.title}
//                                 </h2>
//                                 <p className="text-gray-600 mb-4">{blog.description}</p>
//                             </div>
//                             <button className="border border-black px-5 py-2 rounded-md hover:bg-black hover:text-white transition self-start">
//                                 Read More
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* View More Button */}
//             {visibleCount < allBlogs.length && (
//                 <div className="flex justify-center mt-10">
//                     <button
//                         onClick={loadMoreBlogs}
//                         className="px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white transition"
//                     >
//                         View More
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Blog;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Header from "./Header";
// import Footer from "./Footer";

// const allBlogs = Array.from({ length: 10 }, (_, i) => ({
//   id: i + 1,
//   title:
//     i % 2 === 0
//       ? "Sed et quam quis"
//       : "The Variety Of Styles And Prices Are Endless",
//   description:
//     "A recent study has found that sleep aromatherapy may notably enhance memory.",
//   image: `https://picsum.photos/seed/${i + 1}/800/500`,
//   tag: "NEWS",
//   content: `Full blog content for ${i + 1}. This is a longer text...`,
// }));

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(6);

//   useEffect(() => {
//     setBlogs(allBlogs.slice(0, visibleCount));
//   }, [visibleCount]);

//   const loadMoreBlogs = () => {
//     if (visibleCount < allBlogs.length) {
//       setVisibleCount((prev) => prev + 3);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <AnimatePresence>
//             {blogs.map((blog, index) => (
//               <motion.div
//                 key={blog.id}
//                 className="flex flex-col border-b pb-6"
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5, delay: index * 0.15 }} // stagger effect
//               >
//                 <motion.img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-64 object-cover rounded-lg mb-4"
//                   initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
//                   animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                 />

//                 <div className="flex flex-col justify-between flex-grow">
//                   <div>
//                     <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
//                     <motion.p
//                       className="text-gray-600 mb-4"
//                       initial={{ opacity: 0.7 }}
//                       whileHover={{ opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       {blog.description}
//                     </motion.p>
//                   </div>
//                   <motion.div whileHover={{ x: 5 }}>
//                     <Link
//                       to={`/blog/${blog.id}`}
//                       className="border border-black px-5 py-2 rounded-md hover:bg-black hover:text-white transition self-start inline-block"
//                     >
//                       Read More
//                     </Link>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {visibleCount < allBlogs.length && (
//           <div className="flex justify-center mt-10">
//             <motion.button
//               onClick={loadMoreBlogs}
//               className="px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white transition"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//             >
//               View More
//             </motion.button>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Blog;
// export { allBlogs };

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Header from "./Header";
// import Footer from "./Footer";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const allBlogs = Array.from({ length: 10 }, (_, i) => ({
//   id: i + 1,
//   title:
//     i % 2 === 0
//       ? "Sed et quam quis"
//       : "The Variety Of Styles And Prices Are Endless",
//   description:
//     "A recent study has found that sleep aromatherapy may notably enhance memory.",
//   image: `https://picsum.photos/seed/${i + 1}/800/500`,
//   tag: "NEWS",
//   content: `Full blog content for ${i + 1}. This is a longer text...`,
// }));

// const Blog = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
//   }, []);

//   const [blogs, setBlogs] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(6);
//   const [selectedImage, setSelectedImage] = useState(null); // ✅ clicked image state

//   useEffect(() => {
//     setBlogs(allBlogs.slice(0, visibleCount));
//   }, [visibleCount]);

//   const loadMoreBlogs = () => {
//     if (visibleCount < allBlogs.length) {
//       setVisibleCount((prev) => prev + 3);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <AnimatePresence>
//             {blogs.map((blog) => (
//               <div
//                 key={blog.id}
//                 className="flex flex-col border-b pb-6"
//                 data-aos="fade-up"
//                 data-aos-delay={blog.id * 100}
//               >
//                 {/* Image with click handler */}
//                 <motion.img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer"
//                   data-aos="zoom-in"
//                   whileHover={{ scale: 1.05 }}
//                   onClick={() => setSelectedImage(blog.image)}
//                 />

//                 <div>
//                   <h2
//                     className="text-xl font-semibold mb-2"
//                     data-aos="fade-right"
//                   >
//                     {blog.title}
//                   </h2>
//                   <p className="text-gray-600 mb-4" data-aos="fade-left">
//                     {blog.description}
//                   </p>
//                   <Link
//                     to={`/blog/${blog.id}`}
//                     className="border border-black px-5 py-2 rounded-md hover:bg-black hover:text-white transition self-start"
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* View More Button */}
//         {visibleCount < allBlogs.length && (
//           <div className="flex justify-center mt-10">
//             <motion.button
//               onClick={loadMoreBlogs}
//               className="px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white transition"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//             >
//               View More
//             </motion.button>
//           </div>
//         )}
//       </div>

//       {/* ✅ Fullscreen Modal for Image */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)} // click background to close
//           >
//             <motion.img
//               src={selectedImage}
//               alt="Expanded view"
//               className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.5, opacity: 0 }}
//               transition={{ duration: 0.4 }}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <Footer />
//     </>
//   );
// };

// export default Blog;
// export { allBlogs };

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const allBlogs = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title:
    i % 2 === 0
      ? "Sed et quam quis"
      : "The Variety Of Styles And Prices Are Endless",
  description:
    "A recent study has found that sleep aromatherapy may notably enhance memory.",
  image: `https://picsum.photos/seed/${i + 1}/800/500`,
  tag: "NEWS",
  content: `Full blog content for ${i + 1}. This is a longer text...`,
}));

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
};

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "OUR PERSONAL DEPARTMENT",
      date: "02.02.2017",
      image: "https://picsum.photos/id/1018/600/400",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo...",
    },
    {
      id: 2,
      title: "SUCCESS HAS IT’S ADVANTAGE",
      date: "02.02.2017",
      image: "https://picsum.photos/id/1025/600/400",
      excerpt:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...",
    },
    {
      id: 3,
      title: "SKY IS THE LIMIT",
      date: "02.02.2017",
      image: "https://picsum.photos/id/1040/600/400",
      excerpt:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...",
    },
    {
      id: 4,
      title: "PLANTS AREN’T GREEN",
      date: "02.02.2017",
      image: "https://picsum.photos/id/1062/600/400",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat...",
    },
    {
      id: 5,
      title: "TO BE DIFFERENT",
      date: "02.02.2017",
      image: "https://picsum.photos/id/1074/600/400",
      excerpt:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...",
    },
    {
      id: 6,
      title: "OUR TALENT IS FINDING YOURS",
      date: "02.02.2017",
      image: "https://picsum.photos/id/1084/600/400",
      excerpt:
        "Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis...",
    },
  ];
  return (
    <>
      <Header />
      <section className="bg-white min-h-screen py-12 px-4 sm:px-8 lg:px-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="uppercase text-xs tracking-widest text-gray-900">
            Welcome to Our Blog
          </h1>
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
                {/* Learn More Link with ID */}
                {/* <Link
                                    to={`/blog/${post.id}`}
                                    className="mt-3 inline-block text-sm font-medium text-gray-900 group-hover:text-orange-500 transition"
                                >
                                    Learn More →
                                </Link> */}
                <a
                  href={`/blogDetails/${idx + 1}`}   // 👈 add index+1 as id
                  className="mt-3 inline-block text-sm font-medium text-gray-900 group-hover:text-orange-500 transition"
                >
                  Learn More →
                </a>

              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>

  );
};

export default Blog;
export { allBlogs };
