import React from 'react'
import slide1 from '../assets/slide-1.jpg'
import slide2 from '../assets/slide-2.jpg'
import slide3 from '../assets/slide-3.jpg'
import slide4 from '../assets/slide-4.jpg'
import slide5 from '../assets/slide-5.jpg'

const firstRow = [
  {
    subtitle: "COMFORT MEETS FASHION",
    title: "Discover shoes that look great",
    img: slide1,
  },
  {
    subtitle: "ELEVATE YOUR LOOK",
    title: "Find the perfect pair of shoes",
    img: slide2,
  },
  {
    subtitle: "STEP INTO STYLE",
    title: "The latest trends in footwear",
    img: slide3,
  },
]

const secondRow = [
  {
    subtitle: "SHOP BY BRAND",
    title: "Find your favorite brands and styles",
    img: slide4,
  },
  {
    subtitle: "SALE AND CLEARANCE",
    title: "Shop our latest deals and discounts",
    img: slide5,
  },
]

const Card = ({ img, subtitle, title }) => (
  <div className="relative rounded-md overflow-hidden group">
    <img
      src={img}
      alt={title}
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6">
      <p className="text-xs uppercase tracking-widest text-gray-300">{subtitle}</p>
      <h3 className="text-lg md:text-xl font-bold leading-snug text-white mt-1">
        {title}
      </h3>
      <button
        className="mt-3 text-white font-semibold text-base underline underline-offset-4 decoration-2 hover:text-white hover:decoration-white focus:outline-none transition-all px-0 py-0"
        style={{ border: 'none', background: 'none' }}
      >
        SHOP NOW
      </button>

    </div>
  </div>
)

// import { motion } from "framer-motion";


// const Card = ({ img, subtitle, title }) => (
//   <motion.div
//     className="relative rounded-md overflow-hidden group max-w-full"
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, ease: "easeOut" }}
//     viewport={{ once: true }}
//   >
//     {/* Image */}
//     <motion.img
//       src={img}
//       alt={title}
//       className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
//     />

//     {/* Overlay with animated gradient */}
//     <motion.div
//       className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-700"
//       initial={{ background: "rgba(0,0,0,0.6)" }}
//       whileHover={{
//         background:
//           "linear-gradient(to top, rgba(185,28,28,0.85), rgba(30,58,138,0.85))",
//       }}
//       transition={{ duration: 0.8, ease: "easeInOut" }}
//     >
//       {/* Subtitle */}
//       <motion.p
//         className="text-xs uppercase tracking-widest text-gray-300"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         viewport={{ once: true }}
//       >
//         {subtitle}
//       </motion.p>

//       {/* Title */}
//       <motion.h3
//         className="text-lg md:text-xl font-bold leading-snug text-white mt-1"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         viewport={{ once: true }}
//       >
//         {title}
//       </motion.h3>

//       {/* SHOP NOW Button */}
//       <motion.button
//         className="mt-3 text-white font-semibold text-base relative focus:outline-none self-start"
//         style={{ border: "none", background: "none" }}
//         whileHover={{ scale: 1.1, color: "#facc15" }}
//         transition={{ type: "spring", stiffness: 200 }}
//       >
//         SHOP NOW
//         {/* underline animation */}
//         <motion.span
//           className="absolute left-0 -bottom-1 h-[2px] bg-yellow-400"
//           initial={{ width: 0 }}
//           whileHover={{ width: "100%" }}
//           transition={{ duration: 0.4 }}
//         />
//       </motion.button>
//     </motion.div>
//   </motion.div>
// );



const Categoreis = () => {
  return (
    <div className="bg-[#2d2d2d] text-white py-16 px-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm tracking-widest uppercase text-gray-300">
          Fashion Sneakers
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Timeless styles for everyday wear
        </h2>
        <p className="text-gray-400 mt-3">
          High-performance footwear for sports and workouts
        </p>
      </div>
      {/* First row - 3 images */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {firstRow.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>

      {/* Second row - 2 images */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 gap-6">
        {secondRow.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Categoreis
