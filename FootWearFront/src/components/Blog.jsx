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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  content: `Full blog content for ${
    i + 1
  }. This is a longer text that represents the blog details A recent study has found that sleep aromatherapy may notably enhance memory, suggesting a non-invasive method protect against dementia.
A new study by neuroscientists from the University of California, Irvine indicates that exposure to scent during sleep can notably enhance memory. Researchers say the findings indicate a non-invasive method to bolster memory and potentially protect against dementia.
Releasing a scent into the bedrooms of older adults for two hours nightly over a span of six months, was found to be associated with significant memory improvements. According to a media release, study participants experienced a 226% increase in cognitive capacity compared to a control group.
Men and women aged 60 to 85 without memory impairment were divided into two groups and given a diffuser and seven cartridges, each containing a single and different natural oil. The enriched group received full-strength cartridges and the control group received the oils in tiny amounts. Participants put a different cartridge into the diffuser each evening before going to bed, and it activated for two hours as they slept.
The scents they used were rose, orange, eucalyptus, lemon, peppermint, rosemary, and lavender..`,
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
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col border-b pb-6">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                </div>
                <Link
                  to={`/blog/${blog.id}`}
                  className="border border-black px-5 py-2 rounded-md hover:bg-black hover:text-white transition self-start"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < allBlogs.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMoreBlogs}
              className="px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white transition"
            >
              View More
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
export { allBlogs };
