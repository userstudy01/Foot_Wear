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

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Images from "../assets/images";

// Products for left-side images
const products = [
    { id: 1, image: Images.Slide1 },
    { id: 2, image: Images.Slide2 },
    { id: 3, image: Images.Slide3 },
];

// Reviews (12 total)
const reviews = [
    { title: "Ancient Pyramids", stars: 5, text: "Lorem ipsum dolor sit amet.", author: "Roman Paolera", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { title: "Great Wall", stars: 5, text: "Vestibulum nisi odio, rutrum eu convallis vel.", author: "John Smith", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { title: "Eiffel Tower", stars: 4, text: "Phasellus sed augue ac odio tincidunt posuere.", author: "Sophia Lee", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
    { title: "Machu Picchu", stars: 5, text: "Mauris ornare sapien at dolor pretium.", author: "David Kim", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
    { title: "Taj Mahal", stars: 5, text: "Integer facilisis orci at arcu egestas ultricies.", author: "Emily Clark", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
    { title: "Colosseum", stars: 4, text: "Sed faucibus mi non purus suscipit aliquet.", author: "Chris Brown", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
    { title: "Niagara Falls", stars: 5, text: "Cras vehicula metus sit amet erat gravida.", author: "Laura Green", avatar: "https://randomuser.me/api/portraits/women/36.jpg" },
    { title: "Sydney Opera", stars: 5, text: "Nulla facilisi. Aliquam erat volutpat.", author: "Mark Evans", avatar: "https://randomuser.me/api/portraits/men/61.jpg" },
    { title: "Santorini", stars: 4, text: "Etiam imperdiet sem vel turpis malesuada.", author: "Isabella Rossi", avatar: "https://randomuser.me/api/portraits/women/18.jpg" },
    { title: "Petra", stars: 5, text: "Ut gravida risus at tincidunt viverra.", author: "Ali Hassan", avatar: "https://randomuser.me/api/portraits/men/71.jpg" },
    { title: "Statue of Liberty", stars: 5, text: "Sed a mi quis nulla scelerisque malesuada.", author: "Rachel Adams", avatar: "https://randomuser.me/api/portraits/women/53.jpg" },
    { title: "Mount Fuji", stars: 5, text: "Vestibulum ante ipsum primis in faucibus orci luctus.", author: "Kenji Tanaka", avatar: "https://randomuser.me/api/portraits/men/82.jpg" },
];

const ReviewCard = ({ review }) => (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-6 rounded-xl shadow-md h-full">
        <h3 className="text-xl font-bold mb-2">{review.title}</h3>
        <div className="flex mb-2">
            {Array(review.stars).fill(0).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
        </div>
        <p className="text-center text-gray-300 text-sm mb-3 line-clamp-3">{review.text}</p>
        <div className="flex flex-col items-center">
            <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full border-2 border-yellow-400 mb-1" />
            <span className="font-semibold text-sm">{review.author}</span>
        </div>
    </div>
);

const ReviewsSlider = () => {
    const swiperReviewRef = useRef(null);
    const swiperImageRef = useRef(null);

    const handleReviewSlideChange = (swiper) => {
        // Defensive check — avoid null crash
        if (!swiperImageRef.current || swiperImageRef.current.destroyed) return;

        const newImageIndex = Math.floor(swiper.realIndex / 3);

        if (typeof swiperImageRef.current.slideToLoop === "function") {
            swiperImageRef.current.slideToLoop(newImageIndex);
        }
    };

    return (
        <div
            className="w-full max-w-7xl mx-auto px-4 my-10"
            style={{ background: "linear-gradient(to right, #f3f4f6 50%, #1f2937 50%)" }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: Product Images */}
                <div>
                    <Swiper
                        onSwiper={(swiper) => (swiperImageRef.current = swiper)}
                        modules={[Autoplay]}
                        autoplay={{ delay: 9000 }}
                        loop={true}
                        className="w-full h-[400px] md:h-[500px]"
                    >
                        {products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={product.image}
                                    alt="review-section"
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Right: Reviews */}
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-serif text-gray-800 dark:text-gray-100 mb-6">
                        Our Top Reviews
                    </h2>
                    <Swiper
                        onSwiper={(swiper) => (swiperReviewRef.current = swiper)}
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        onSlideChange={handleReviewSlideChange}
                        className="w-full"
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index}>
                                <ReviewCard review={review} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ReviewsSlider;
