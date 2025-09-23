// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Autoplay } from "swiper/modules";
// import Images from "../assets/images";

// // Products for left-side images
// const products = [
//     { id: 1, image: Images.Slide1 },
//     { id: 2, image: Images.Slide2 },
//     { id: 3, image: Images.Slide3 },
//     { id: 4, image: Images.Slide1 }, // Example: repeating images to match review count
//     { id: 5, image: Images.Slide2 },
//     { id: 6, image: Images.Slide3 },
//     { id: 7, image: Images.Slide1 },
//     { id: 8, image: Images.Slide2 },
//     { id: 9, image: Images.Slide3 },
//     { id: 10, image: Images.Slide1 },
//     { id: 11, image: Images.Slide2 },
//     { id: 12, image: Images.Slide3 },
// ];

// // Reviews (12 total)
// const reviews = [
//     { title: "Ancient Pyramids", stars: 5, text: "Lorem ipsum dolor sit amet. Praesent vulputate at enim sit amet mattis.", author: "Roman Paolera", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
//     { title: "Great Wall", stars: 5, text: "Vestibulum nisi odio, rutrum eu convallis vel.", author: "John Smith", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
//     { title: "Eiffel Tower", stars: 4, text: "Phasellus sed augue ac odio tincidunt posuere.", author: "Sophia Lee", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
//     { title: "Machu Picchu", stars: 5, text: "Mauris ornare sapien at dolor pretium.", author: "David Kim", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
//     { title: "Taj Mahal", stars: 5, text: "Integer facilisis orci at arcu egestas ultricies.", author: "Emily Clark", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
//     { title: "Colosseum", stars: 4, text: "Sed faucibus mi non purus suscipit aliquet.", author: "Chris Brown", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
//     { title: "Niagara Falls", stars: 5, text: "Cras vehicula metus sit amet erat gravida.", author: "Laura Green", avatar: "https://randomuser.me/api/portraits/women/36.jpg" },
//     { title: "Sydney Opera", stars: 5, text: "Nulla facilisi. Aliquam erat volutpat.", author: "Mark Evans", avatar: "https://randomuser.me/api/portraits/men/61.jpg" },
//     { title: "Santorini", stars: 4, text: "Etiam imperdiet sem vel turpis malesuada.", author: "Isabella Rossi", avatar: "https://randomuser.me/api/portraits/women/18.jpg" },
//     { title: "Petra", stars: 5, text: "Ut gravida risus at tincidunt viverra.", author: "Ali Hassan", avatar: "https://randomuser.me/api/portraits/men/71.jpg" },
//     { title: "Statue of Liberty", stars: 5, text: "Sed a mi quis nulla scelerisque malesuada.", author: "Rachel Adams", avatar: "https://randomuser.me/api/portraits/women/53.jpg" },
//     { title: "Mount Fuji", stars: 5, text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.", author: "Kenji Tanaka", avatar: "https://randomuser.me/api/portraits/men/82.jpg" },
// ];

// const ReviewCard = ({ review }) => (
//     <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-6 rounded-xl shadow-md h-full">
//         <h3 className="text-xl font-bold mb-2">{review.title}</h3>
//         <div className="flex mb-2">
//             {Array(review.stars).fill(0).map((_, i) => (
//                 <span key={i} className="text-yellow-400 text-lg">★</span>
//             ))}
//         </div>
//         <p className="text-center text-gray-300 text-sm mb-3 line-clamp-3">{review.text}</p>
//         <div className="flex flex-col items-center">
//             <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full border-2 border-yellow-400 mb-1" />
//             <span className="font-semibold text-sm">{review.author}</span>
//         </div>
//     </div>
// );

// const ReviewsSlider = () => {
//     const swiperReviewRef = useRef(null);
//     const swiperImageRef = useRef(null);

//     // This function ensures both Swipers move together
//     const handleReviewSlideChange = (swiper) => {
//         if (swiperImageRef.current && swiperImageRef.current.swiper) {
//             swiperImageRef.current.swiper.slideToLoop(swiper.realIndex);
//         }
//     };

//     return (
//         <div className="w-full max-w-7xl mx-auto px-4 my-10" style={{ background: 'linear-gradient(to right, #f3f4f6 50%, #1f2937 50%)' }}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 <div>
//                     <Swiper
//                         ref={swiperImageRef}
//                         modules={[Autoplay]}
//                         autoplay={{ delay: 3000 }} // Matching the review slider's delay
//                         loop={true}
//                         className="w-full h-[400px] md:h-[500px]"
//                     >
//                         {products.map((product, index) => (
//                             <SwiperSlide key={index}>
//                                 <img
//                                     src={product.image}
//                                     alt="review-section"
//                                     className="w-full h-full object-cover rounded-lg shadow-lg"
//                                 />
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>

//                 <div className="flex flex-col items-center">
//                     <h2 className="text-4xl font-serif text-gray-800 dark:text-gray-100 mb-6">Our Top Reviews</h2>
//                     <Swiper
//                         ref={swiperReviewRef}
//                         modules={[Navigation, Autoplay]}
//                         navigation
//                         autoplay={{ delay: 3000 }}
//                         loop={true}
//                         spaceBetween={20}
//                         slidesPerView={1}
//                         onSlideChange={handleReviewSlideChange}
//                         className="w-full"
//                     >
//                         {reviews.map((review, index) => (
//                             <SwiperSlide key={index}>
//                                 <ReviewCard review={review} />
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ReviewsSlider;

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Autoplay } from "swiper/modules";
// import Images from "../assets/images";

// // Products for left-side images
// const products = [
//     { id: 1, image: Images.Slide1 },
//     { id: 2, image: Images.Slide2 },
//     { id: 3, image: Images.Slide3 },
//     // Only three images are needed as we loop through them
// ];

// // Reviews (12 total)
// const reviews = [
//     { title: "Ancient Pyramids", stars: 5, text: "Lorem ipsum dolor sit amet. Praesent vulputate at enim sit amet mattis.", author: "Roman Paolera", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
//     { title: "Great Wall", stars: 5, text: "Vestibulum nisi odio, rutrum eu convallis vel.", author: "John Smith", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
//     { title: "Eiffel Tower", stars: 4, text: "Phasellus sed augue ac odio tincidunt posuere.", author: "Sophia Lee", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
//     { title: "Machu Picchu", stars: 5, text: "Mauris ornare sapien at dolor pretium.", author: "David Kim", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
//     { title: "Taj Mahal", stars: 5, text: "Integer facilisis orci at arcu egestas ultricies.", author: "Emily Clark", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
//     { title: "Colosseum", stars: 4, text: "Sed faucibus mi non purus suscipit aliquet.", author: "Chris Brown", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
//     { title: "Niagara Falls", stars: 5, text: "Cras vehicula metus sit amet erat gravida.", author: "Laura Green", avatar: "https://randomuser.me/api/portraits/women/36.jpg" },
//     { title: "Sydney Opera", stars: 5, text: "Nulla facilisi. Aliquam erat volutpat.", author: "Mark Evans", avatar: "https://randomuser.me/api/portraits/men/61.jpg" },
//     { title: "Santorini", stars: 4, text: "Etiam imperdiet sem vel turpis malesuada.", author: "Isabella Rossi", avatar: "https://randomuser.me/api/portraits/women/18.jpg" },
//     { title: "Petra", stars: 5, text: "Ut gravida risus at tincidunt viverra.", author: "Ali Hassan", avatar: "https://randomuser.me/api/portraits/men/71.jpg" },
//     { title: "Statue of Liberty", stars: 5, text: "Sed a mi quis nulla scelerisque malesuada.", author: "Rachel Adams", avatar: "https://randomuser.me/api/portraits/women/53.jpg" },
//     { title: "Mount Fuji", stars: 5, text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.", author: "Kenji Tanaka", avatar: "https://randomuser.me/api/portraits/men/82.jpg" },
// ];

// const ReviewCard = ({ review }) => (
//     <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-6 rounded-xl shadow-md h-full">
//         <h3 className="text-xl font-bold mb-2">{review.title}</h3>
//         <div className="flex mb-2">
//             {Array(review.stars).fill(0).map((_, i) => (
//                 <span key={i} className="text-yellow-400 text-lg">★</span>
//             ))}
//         </div>
//         <p className="text-center text-gray-300 text-sm mb-3 line-clamp-3">{review.text}</p>
//         <div className="flex flex-col items-center">
//             <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full border-2 border-yellow-400 mb-1" />
//             <span className="font-semibold text-sm">{review.author}</span>
//         </div>
//     </div>
// );

// const ReviewsSlider = () => {
//     const swiperReviewRef = useRef(null);
//     const swiperImageRef = useRef(null);

//     // This function changes the image only after every 3 reviews
//     const handleReviewSlideChange = (swiper) => {
//         // Check if the current slide index is a multiple of 3 (0, 3, 6, 9...)
//         if (swiper.realIndex % 3 === 0) {
//             // Calculate the new image index
//             const newImageIndex = Math.floor(swiper.realIndex / 3);

//             // Slide the image Swiper to the new index
//             swiperImageRef.current.swiper.slideToLoop(newImageIndex);
//         }
//     };

//     return (
//         <div className="w-full max-w-7xl mx-auto px-4 my-10" style={{ background: 'linear-gradient(to right, #f3f4f6 50%, #1f2937 50%)' }}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 <div>
//                     <Swiper
//                         ref={swiperImageRef}
//                         modules={[Autoplay]}
//                         autoplay={{ delay: 9000 }} // 3 reviews * 3 seconds each = 9 seconds
//                         loop={true}
//                         className="w-full h-[400px] md:h-[500px]"
//                     >
//                         {products.map((product, index) => (
//                             <SwiperSlide key={index}>
//                                 <img
//                                     src={product.image}
//                                     alt="review-section"
//                                     className="w-full h-full object-cover rounded-lg shadow-lg"
//                                 />
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>

//                 <div className="flex flex-col items-center">
//                     <h2 className="text-4xl font-serif text-gray-800 dark:text-gray-100 mb-6">Our Top Reviews</h2>
//                     <Swiper
//                         ref={swiperReviewRef}
//                         modules={[Navigation, Autoplay]}
//                         navigation
//                         autoplay={{ delay: 3000 }} // Change review every 3 seconds
//                         loop={true}
//                         spaceBetween={20}
//                         slidesPerView={1}
//                         onSlideChange={handleReviewSlideChange}
//                         className="w-full"
//                     >
//                         {reviews.map((review, index) => (
//                             <SwiperSlide key={index}>
//                                 <ReviewCard review={review} />
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ReviewsSlider;

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation, Autoplay } from "swiper/modules";
// import Images from "../assets/images";

// // Products for left-side images
// const products = [
//     { id: 1, image: Images.Slide1 },
//     { id: 2, image: Images.Slide2 },
//     { id: 3, image: Images.Slide3 },
// ];

// // Reviews (12 total)
// const reviews = [
//     { title: "Ancient Pyramids", stars: 5, text: "Lorem ipsum dolor sit amet.", author: "Roman Paolera", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
//     { title: "Great Wall", stars: 5, text: "Vestibulum nisi odio, rutrum eu convallis vel.", author: "John Smith", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
//     { title: "Eiffel Tower", stars: 4, text: "Phasellus sed augue ac odio tincidunt posuere.", author: "Sophia Lee", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
//     { title: "Machu Picchu", stars: 5, text: "Mauris ornare sapien at dolor pretium.", author: "David Kim", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
//     { title: "Taj Mahal", stars: 5, text: "Integer facilisis orci at arcu egestas ultricies.", author: "Emily Clark", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
//     { title: "Colosseum", stars: 4, text: "Sed faucibus mi non purus suscipit aliquet.", author: "Chris Brown", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
//     { title: "Niagara Falls", stars: 5, text: "Cras vehicula metus sit amet erat gravida.", author: "Laura Green", avatar: "https://randomuser.me/api/portraits/women/36.jpg" },
//     { title: "Sydney Opera", stars: 5, text: "Nulla facilisi. Aliquam erat volutpat.", author: "Mark Evans", avatar: "https://randomuser.me/api/portraits/men/61.jpg" },
//     { title: "Santorini", stars: 4, text: "Etiam imperdiet sem vel turpis malesuada.", author: "Isabella Rossi", avatar: "https://randomuser.me/api/portraits/women/18.jpg" },
//     { title: "Petra", stars: 5, text: "Ut gravida risus at tincidunt viverra.", author: "Ali Hassan", avatar: "https://randomuser.me/api/portraits/men/71.jpg" },
//     { title: "Statue of Liberty", stars: 5, text: "Sed a mi quis nulla scelerisque malesuada.", author: "Rachel Adams", avatar: "https://randomuser.me/api/portraits/women/53.jpg" },
//     { title: "Mount Fuji", stars: 5, text: "Vestibulum ante ipsum primis in faucibus orci luctus.", author: "Kenji Tanaka", avatar: "https://randomuser.me/api/portraits/men/82.jpg" },
// ];

// const ReviewCard = ({ review }) => (
//     <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-6 rounded-xl shadow-md h-full">
//         <h3 className="text-xl font-bold mb-2">{review.title}</h3>
//         <div className="flex mb-2">
//             {Array(review.stars).fill(0).map((_, i) => (
//                 <span key={i} className="text-yellow-400 text-lg">★</span>
//             ))}
//         </div>
//         <p className="text-center text-gray-300 text-sm mb-3 line-clamp-3">{review.text}</p>
//         <div className="flex flex-col items-center">
//             <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full border-2 border-yellow-400 mb-1" />
//             <span className="font-semibold text-sm">{review.author}</span>
//         </div>
//     </div>
// );

// const ReviewsSlider = () => {
//     const swiperReviewRef = useRef(null);
//     const swiperImageRef = useRef(null);

//     const handleReviewSlideChange = (swiper) => {
//         // Defensive check — avoid null crash
//         if (!swiperImageRef.current || swiperImageRef.current.destroyed) return;

//         const newImageIndex = Math.floor(swiper.realIndex / 3);

//         if (typeof swiperImageRef.current.slideToLoop === "function") {
//             swiperImageRef.current.slideToLoop(newImageIndex);
//         }
//     };

//     return (
//         <div
//             className="w-full max-w-7xl mx-auto px-4 my-10"
//             style={{ background: "linear-gradient(to right, #f3f4f6 50%, #1f2937 50%)" }}
//         >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 {/* Left: Product Images */}
//                 <div>
//                     <Swiper
//                         onSwiper={(swiper) => (swiperImageRef.current = swiper)}
//                         modules={[Autoplay]}
//                         autoplay={{ delay: 9000 }}
//                         loop={true}
//                         className="w-full h-[400px] md:h-[500px]"
//                     >
//                         {products.map((product, index) => (
//                             <SwiperSlide key={index}>
//                                 <img
//                                     src={product.image}
//                                     alt="review-section"
//                                     className="w-full h-full object-cover rounded-lg shadow-lg"
//                                 />
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>

//                 {/* Right: Reviews */}
//                 <div className="flex flex-col items-center">
//                     <h2 className="text-4xl font-serif text-gray-800 dark:text-gray-100 mb-6">
//                         Our Top Reviews
//                     </h2>
//                     <Swiper
//                         onSwiper={(swiper) => (swiperReviewRef.current = swiper)}
//                         modules={[Navigation, Autoplay]}
//                         navigation
//                         autoplay={{ delay: 3000 }}
//                         loop={true}
//                         spaceBetween={20}
//                         slidesPerView={1}
//                         onSlideChange={handleReviewSlideChange}
//                         className="w-full"
//                     >
//                         {reviews.map((review, index) => (
//                             <SwiperSlide key={index}>
//                                 {/* <ReviewCard review={review} /> */}
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ReviewsSlider;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const reviews = [
//     {
//         id: 1,
//         name: "John Doe",
//         title: "Great experience!",
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 2,
//         name: "Sarah Smith",
//         title: "Amazing service!",
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 3,
//         name: "Michael Lee",
//         title: "Loved the product!",
//         image: "https://via.placeholder.com/150",
//     },
//     {
//         id: 4,
//         name: "Emma Brown",
//         title: "Professional and reliable!",
//         image: "https://via.placeholder.com/150",
//     },
// ];

// const ReviewsSection = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     // Auto change every 3 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//         }, 3000);
//         return () => clearInterval(interval);
//     }, []);

//     // Get the 3 reviews to display (center one active)
//     const getVisibleReviews = () => {
//         const prev = (activeIndex - 1 + reviews.length) % reviews.length;
//         const next = (activeIndex + 1) % reviews.length;
//         return [prev, activeIndex, next];
//     };

//     const visible = getVisibleReviews();

//     return (
//         <section className="bg-white py-12">
//             <div className="max-w-6xl mx-auto px-4">
//                 <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
//                     What Our Clients Say
//                 </h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//                     {visible.map((index, position) => {
//                         const review = reviews[index];
//                         const isCenter = index === activeIndex;

//                         return (
//                             <motion.div
//                                 key={review.id}
//                                 className={`bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer shadow-md`}
//                                 initial={{ opacity: 0, scale: 0.8 }}
//                                 animate={{
//                                     opacity: isCenter ? 1 : 0.4,
//                                     scale: isCenter ? 1 : 0.9,
//                                 }}
//                                 transition={{ duration: 0.5 }}
//                                 whileHover={{ scale: 1.05, opacity: 1, boxShadow: "0px 8px 20px rgba(0,0,0,0.1)" }}
//                             >
//                                 <img
//                                     src={review.image}
//                                     alt={review.name}
//                                     className="w-24 h-24 object-cover rounded-full mb-4"
//                                 />
//                                 <h3 className="text-lg font-semibold text-gray-900">
//                                     {review.name}
//                                 </h3>
//                                 <p className="text-gray-600 text-sm">{review.title}</p>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ReviewsSection;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Quote } from "lucide-react";

// const reviews = [
//     {
//         id: 1,
//         name: "John Doe",
//         designation: "CEO, Agency",
//         title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//         image: "https://via.placeholder.com/150",
//         rating: 5,
//     },
//     {
//         id: 2,
//         name: "Sarah Smith",
//         designation: "Marketing Head",
//         title: "Amazing service! Highly professional and helpful.",
//         image: "https://via.placeholder.com/150",
//         rating: 4,
//     },
//     {
//         id: 3,
//         name: "Michael Lee",
//         designation: "CTO, Company",
//         title: "Loved the product! Definitely recommend it to others.",
//         image: "https://via.placeholder.com/150",
//         rating: 5,
//     },
// ];

// const ReviewsSection = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         if (reviews.length > 0) {
//             const interval = setInterval(() => {
//                 setActiveIndex((prev) => (prev + 1) % reviews.length);
//             }, 3000);
//             return () => clearInterval(interval);
//         }
//     }, []);

//     const getVisibleReviews = () => {
//         if (reviews.length < 3) return reviews; // fallback
//         const prev = (activeIndex - 1 + reviews.length) % reviews.length;
//         const next = (activeIndex + 1) % reviews.length;
//         return [reviews[prev], reviews[activeIndex], reviews[next]];
//     };

//     const visible = getVisibleReviews();

//     return (
//         <section className="bg-gray-100 py-12">
//             <div className="max-w-6xl mx-auto px-4">
//                 <h2 className="text-4xl font-bold text-center text-gray-900">
//                     WHAT CLIENT SAY{" "}
//                     <span className="text-orange-500 italic font-serif">About Us</span>
//                 </h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
//                     {visible.map((review, i) => {
//                         if (!review) return null; // safeguard

//                         const isCenter = review.id === reviews[activeIndex].id;

//                         return (
//                             <motion.div
//                                 key={review.id}
//                                 className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center relative"
//                                 initial={{ opacity: 0, scale: 0.85 }}
//                                 animate={{
//                                     opacity: isCenter ? 1 : 0.4,
//                                     scale: isCenter ? 1 : 0.9,
//                                 }}
//                                 transition={{ duration: 0.5 }}
//                                 whileHover={{ scale: 1.03, opacity: 1 }}
//                             >
//                                 {/* Profile Image */}
//                                 <div className="absolute -top-10">
//                                     <img
//                                         src={review.image}
//                                         alt={review.name}
//                                         className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md"
//                                     />
//                                 </div>

//                                 {/* Speech Bubble */}
//                                 <div className="bg-orange-500 text-white rounded-xl p-4 mt-10 relative">
//                                     <Quote className="absolute -top-3 left-4 w-8 h-12 opacity-80" />
//                                     <p className="text-sm leading-relaxed">{review.title}</p>
//                                     <div className="absolute left-1/2 -bottom-3 w-4 h-4 bg-orange-500 rotate-45 -translate-x-1/2"></div>
//                                 </div>

//                                 {/* Name + Designation + Rating */}
//                                 <div className="mt-6">
//                                     <h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
//                                     <p className="text-gray-500 text-sm">{review.designation}</p>
//                                     <div className="flex justify-center mt-1">
//                                         {"★".repeat(review.rating)}
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ReviewsSection;



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "John Doe",
        designation: "CEO, Agency",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: "https://via.placeholder.com/150",
        rating: 5,
    },
    {
        id: 2,
        name: "Sarah Smith",
        designation: "Marketing Head",
        title: "Amazing service! The team was highly professional and incredibly helpful. We are very happy with the results and would definitely work with them again.",
        image: "https://via.placeholder.com/150",
        rating: 4,
    },
    {
        id: 3,
        name: "Michael Lee",
        designation: "CTO, Company",
        title: "Loved the product! It's easy to use and provides great value. I definitely recommend it to others looking for a reliable solution.",
        image: "https://via.placeholder.com/150",
        rating: 5,
    },
    {
        id: 4,
        name: "Emily White",
        designation: "Freelance Designer",
        title: "Excellent support and a fantastic community. I learned a lot from their resources and my productivity has significantly improved.",
        image: "https://via.placeholder.com/150",
        rating: 5,
    },
    {
        id: 5,
        name: "David Chen",
        designation: "Product Manager",
        title: "The features are well-thought-out and integrate seamlessly with our existing workflow. A truly powerful tool that saves us time and effort.",
        image: "https://via.placeholder.com/150",
        rating: 4,
    },
];

const ReviewsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (reviews.length > 0) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % reviews.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [reviews.length]);

    const getVisibleReviews = () => {
        if (reviews.length < 3) return reviews; // fallback for less than 3 reviews
        const prev = (activeIndex - 1 + reviews.length) % reviews.length;
        const next = (activeIndex + 1) % reviews.length;
        return [reviews[prev], reviews[activeIndex], reviews[next]];
    };

    const visible = getVisibleReviews();

    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-900">
                    WHAT CLIENT SAY{" "}
                    <span className="text-orange-500 italic font-serif">About Us</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
                    {visible.map((review, i) => {
                        if (!review) return null; // safeguard for undefined reviews

                        const isCenter = review.id === reviews[activeIndex].id;

                        return (
                            <motion.div
                                key={review.id}
                                className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center relative"
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{
                                    opacity: isCenter ? 1 : 0.4,
                                    scale: isCenter ? 1 : 0.9,
                                }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.03, opacity: 1 }}
                            >
                                {/* Profile Image */}
                                <div className="absolute -top-10">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md"
                                    />
                                </div>

                                {/* Speech Bubble */}
                                <div className="bg-orange-500 text-white rounded-xl p-4 mt-10 relative">
                                    <Quote className="absolute -top-3 left-4 w-8 h-12 opacity-80" />
                                    <p className="text-sm leading-relaxed">{review.title}</p>
                                    <div className="absolute left-1/2 -bottom-3 w-4 h-4 bg-orange-500 rotate-45 -translate-x-1/2"></div>
                                </div>

                                {/* Name + Designation + Rating */}
                                <div className="mt-6">
                                    <h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
                                    <p className="text-gray-500 text-sm">{review.designation}</p>
                                    <div className="flex justify-center mt-1 text-orange-400">
                                        {"★".repeat(review.rating)}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;