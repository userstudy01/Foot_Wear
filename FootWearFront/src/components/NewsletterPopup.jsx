







// import React, { useEffect, useState } from "react";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import newslatter from "../assets/bg.jpg";

// const NewsletterPopup = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShow(true);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleClose = () => setShow(false);

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
//           // 👆 bg-black/50 = semi-dark overlay, backdrop-blur-md = blur effect
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           <motion.div
//             className="bg-white/90 backdrop-blur-xl w-[95%] max-w-[600px] rounded-2xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ type: "spring", stiffness: 120, damping: 15 }}
//           >
//             {/* Left Image - Drop from top */}
//             <motion.div
//               className="md:w-1/2 w-full flex items-center justify-center bg-orange-50"
//               initial={{ y: -150, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ type: "spring", stiffness: 120, damping: 12 }}
//             >
//               <img
//                 src={newslatter}
//                 alt="Sneaker"
//                 className="h-full w-full object-cover"
//               />
//             </motion.div>

//             {/* Right Content */}
//             <motion.div
//               className="md:w-1/2 w-full p-6 flex flex-col justify-center relative"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={handleClose}
//                 className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
//               >
//                 ×
//               </button>

//               <h2 className="text-3xl font-bold mb-3 tracking-wider">
//                 ALWAYS <br /> FIRST.
//               </h2>
//               <p className="text-gray-600 text-sm mb-4">
//                 Nulla tincidunt convallis bibendum. Duis sed risus cipit justo.
//                 Integer neque felis, egestas a euismod in pulvinar.
//               </p>

//               {/* Email input */}
//               <motion.div
//                 className="flex items-center border border-gray-300 rounded-full px-4 py-2 mb-3 bg-white/70 backdrop-blur-sm"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 <input
//                   type="email"
//                   placeholder="email"
//                   className="flex-grow outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
//                 />
//               </motion.div>

//               {/* Subscribe button */}
//               <motion.button
//                 className="w-full bg-orange-500 text-white py-2.5 rounded-full font-semibold hover:bg-orange-600 transition"
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
//               >
//                 Subscribe
//               </motion.button>

//               {/* Social icons */}
//               <motion.div
//                 className="flex space-x-5 mt-5 text-gray-700"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.9 }}
//               >
//                 <a href="#" className="hover:text-orange-500">
//                   <FaTwitter size={18} />
//                 </a>
//                 <a href="#" className="hover:text-orange-500">
//                   <FaFacebookF size={18} />
//                 </a>
//                 <a href="#" className="hover:text-orange-500">
//                   <FaInstagram size={18} />
//                 </a>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default NewsletterPopup;

import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import newslatter from "../assets/bg.jpg";

const NewsletterPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white/80 backdrop-blur-xl w-[90%] max-w-[650px] rounded-2xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row border border-white/40"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            <motion.div
              className="md:w-1/2 w-full flex items-center justify-center bg-orange-50"
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <img
                src={newslatter}
                alt="Sneaker"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* <motion.div
              className="md:w-1/2 w-full flex items-center justify-center bg-orange-50"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <img
                src={newslatter}
                alt="Sneaker"
                className="h-full w-full object-cover"
              />
            </motion.div> */}

            <motion.div
              className="md:w-1/2 w-full p-8 flex flex-col justify-center relative"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="absolute top-3 right-3 text-gray-600 text-2xl text-4xl"
                whileHover={{
                  scale: 1.2,
                  textShadow: "rgba(255,0,0,0.8)",
                  color: "#ef4444",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                ×
              </motion.button>

              <h2 className="text-3xl font-bold mb-4 tracking-wider">
                ALWAYS <br /> FIRST.
              </h2>
              <p className="text-gray-700 text-sm mb-5">
                Nulla tincidunt convallis bibendum. Duis sed risus cipit justo.
                Integer neque felis, egestas a euismod in pulvinar.
              </p>

              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 mb-4 bg-white/70 shadow-inner focus-within:ring-2 focus-within:ring-orange-400 transition">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent px-2 py-1"
                />
              </div>

              {/* <motion.button
                className="w-full relative bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-full font-semibold overflow-hidden group"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              >
                <span className="relative z-10">Subscribe</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-60 blur-2xl transition duration-500"></span>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </motion.button> */}

              <motion.button
                className="w-full relative bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-full font-semibold overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(255,100,50,0.7)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Subscribe</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-60 blur-2xl transition duration-500"></span>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </motion.button>

              <motion.div
                className="flex justify-center space-x-6 mt-6 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {[FaTwitter, FaFacebookF, FaInstagram].map((Icon, idx) => (
                  //   <motion.a
                  //     key={idx}
                  //     href="#"
                  //     className="relative group w-12 h-12 flex items-center justify-center rounded-full bg-white overflow-hidden shadow-md"
                  //     whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                  //     transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  //   >
                  //     {/* Background glow on hover */}
                  //     <span className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-red-500 opacity-0 group-hover:opacity-30 rounded-full transition duration-300 blur-md"></span>

                  //     {/* Icon */}
                  //     <Icon
                  //       className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300 drop-shadow-lg"
                  //       size={20}
                  //     />
                  //   </motion.a>

                  <motion.a
                    key={idx}
                    href="#"
                    className="relative group w-12 h-12 flex items-center justify-center rounded-full bg-white overflow-hidden shadow-md"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 250, damping: 12 }}
                  >
                    <Icon
                      className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300"
                      size={20}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;


{/* <motion.div
  className="bg-white/80 backdrop-blur-xl w-[90%] max-w-[480px] rounded-xl shadow-xl overflow-hidden relative flex flex-col md:flex-row border border-white/40"
  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
  transition={{ type: "spring", stiffness: 120, damping: 12 }}
> */}
{/* Image Section */ }
//   <motion.div
//     className="md:w-1/2 w-full flex items-center justify-center bg-orange-50"
//     initial={{ y: -200, opacity: 0 }}
//     animate={{ y: 0, opacity: 1 }}
//     transition={{ type: "spring", stiffness: 100, damping: 15 }}
//   >
//     <img
//       src={newslatter}
//       alt="Sneaker"
//       className="h-full w-full object-cover"
//     />
//   </motion.div>

{/* Text Section */ }
//   <motion.div
//     className="md:w-1/2 w-full p-6 flex flex-col justify-center relative"
//     initial={{ x: 100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
//   >
{/* Close Button */ }
// <motion.button
//   onClick={handleClose}
//   className="absolute top-2 right-2 text-gray-600 text-2xl"
//   whileHover={{
//     scale: 1.2,
//     color: "#ef4444",
//   }}
//   whileTap={{ scale: 0.9 }}
//   transition={{ duration: 0.3 }}
// >
//   ×
// </motion.button>

// <h2 className="text-2xl font-bold mb-3 tracking-wider">
//   ALWAYS <br /> FIRST.
// </h2>
// <p className="text-gray-700 text-sm mb-4">
//   Nulla tincidunt convallis bibendum. Duis sed risus cipit justo.
//   Integer neque felis, egestas a euismod in pulvinar.
// </p>

// <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 mb-3 bg-white/70 shadow-inner">
//   <input
//     type="email"
//     placeholder="Enter your email"
//     className="flex-grow outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent px-1"
//   />
// </div>

//     <motion.button
//       className="w-full relative bg-gradient-to-r from-orange-500 to-red-500 text-white py-2.5 rounded-full font-semibold overflow-hidden group text-sm"
//       whileHover={{
//         scale: 1.05,
//         boxShadow: "0px 0px 15px rgba(255,100,50,0.6)",
//       }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <span className="relative z-10">Subscribe</span>
//       <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-60 blur-2xl transition duration-500"></span>
//       <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
//     </motion.button>

//     <motion.div
//       className="flex justify-center space-x-5 mt-5 text-gray-700"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.8 }}
//     >
//       {[FaTwitter, FaFacebookF, FaInstagram].map((Icon, idx) => (
//         <motion.a
//           key={idx}
//           href="#"
//           className="relative group w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md"
//           whileHover={{ scale: 1.2, rotate: 10 }}
//           transition={{ type: "spring", stiffness: 250, damping: 12 }}
//         >
//           <Icon
//             className="text-gray-700 group-hover:text-orange-500 transition-colors duration-300"
//             size={18}
//           />
//         </motion.a>
//       ))}
//     </motion.div>
//   </motion.div>
// </motion.div>

