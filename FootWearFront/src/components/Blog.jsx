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
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  // ✅ Modal states
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setBlogs(allBlogs.slice(0, visibleCount));
  }, [visibleCount]);

  const loadMoreBlogs = () => {
    if (visibleCount < allBlogs.length) {
      setVisibleCount((prev) => prev + 3);
    }
  };

  const closeModal = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : blogs.length - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setDirection(1);
    setSelectedIndex((prev) => (prev < blogs.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      <Header />
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col border-b pb-6"
                data-aos="fade-up"
                data-aos-delay={blog.id * 100}
              >
                {/* Blog Image */}
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer"
                  data-aos="zoom-in"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setSelectedIndex(blog.id - 1);
                    setDirection(0);
                  }}
                />

                <div>
                  <h2
                    className="text-xl font-semibold mb-2"
                    data-aos="fade-right"
                  >
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4" data-aos="fade-left">
                    {blog.description}
                  </p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="border border-black px-5 py-2 rounded-md hover:bg-black hover:text-white transition self-start"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        {visibleCount < allBlogs.length && (
          <div className="flex justify-center mt-10">
            <motion.button
              onClick={loadMoreBlogs}
              className="px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              View More
            </motion.button>
          </div>
        )}
      </div>

      {/* ✅ Fullscreen Modal with Navigation + Slide Animation */}
      {/* ✅ Fullscreen Modal with Navigation + Slide Animation */}
      <AnimatePresence custom={direction}>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={blogs[selectedIndex]?.id}
                src={blogs[selectedIndex]?.image}
                alt="Expanded view"
                className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              />
            </AnimatePresence>

            {/* ⟵ Prev Button */}
            <button
              onClick={showPrev}
              className="absolute left-6 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* ⟶ Next Button */}
            <button
              onClick={showNext}
              className="absolute right-6 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* ✅ Number Pagination (3 / 10 style) */}
            <div className="absolute bottom-6 text-white text-lg font-medium bg-black bg-opacity-50 px-4 py-1 rounded-full">
              {selectedIndex + 1} / {blogs.length}
            </div>

            {/* ❌ Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Pagination Dots */}
      {/* <div className="absolute bottom-6 flex gap-2">
        {blogs.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setDirection(i > selectedIndex ? 1 : -1);
              setSelectedIndex(i);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              i === selectedIndex
                ? "bg-white scale-110"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div> */}
      <Footer />
    </>
  );
};

export default Blog;
export { allBlogs };
