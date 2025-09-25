// import React, { useState, useEffect } from "react";

// const allBlogs = Array.from({ length: 30 }, (_, i) => ({
//   id: i + 1,
//   title:
//     i % 2 === 0
//       ? "Sed et quam quis"
//       : "The Variety Of Styles And Prices Are Endless",
//   description:
//     "A recent study has found that sleep aromatherapy may notably enhance memory.",
//   image: `https://picsum.photos/seed/${i + 1}/600/400`,
//   tag: "NEWS",
// }));

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(6);

//   // Load initial blogs
//   useEffect(() => {
//     setBlogs(allBlogs.slice(0, visibleCount));
//   }, [visibleCount]);

//   const loadMoreBlogs = () => {
//     if (visibleCount < allBlogs.length) {
//       setVisibleCount((prev) => prev + 6);
//     }
//   };

//   return (
//     <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="flex flex-col border-b pb-6"
//           >
//             {/* Blog Image */}
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="w-full h-64 object-cover rounded-lg mb-4"
//             />

//             {/* Blog Content */}
//             <div className="flex flex-col justify-between flex-grow">
//               <div>
//                 <h2 className="text-xl font-semibold mb-2">
//                   {blog.title}
//                 </h2>
//                 <p className="text-gray-600 mb-4">{blog.description}</p>
//               </div>
//               <button className="border border-black px-5 py-2 rounded-md hover:bg-black hover:text-white transition self-start">
//                 Read More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View More Button */}
//       {visibleCount < allBlogs.length && (
//         <div className="flex justify-center mt-10">
//           <button
//             onClick={loadMoreBlogs}
//             className="px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white transition"
//           >
//             View More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Blog;
// export { allBlogs };
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

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

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setBlogs(allBlogs.slice(0, visibleCount));
  }, [visibleCount]);

  const loadMoreBlogs = () => {
    if (visibleCount < allBlogs.length) {
      setVisibleCount((prev) => prev + 3);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                className="flex flex-col border-b pb-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.15 }} // stagger effect
              >
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                  initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                    <motion.p
                      className="text-gray-600 mb-4"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {blog.description}
                    </motion.p>
                  </div>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={`/blog/${blog.id}`}
                      className="border border-black px-5 py-2 rounded-md hover:bg-black hover:text-white transition self-start inline-block"
                    >
                      Read More
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

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
      <Footer />
    </>
  );
};

export default Blog;
export { allBlogs };
