// import React, { useEffect, useState } from "react";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// const NewsletterPopup = () => {

//     const [show, setShow] = useState(false);

//     useEffect(() => {
//         const isClosed = localStorage.getItem("newsletter_closed");
//         if (!isClosed) {
//             const timer = setTimeout(() => {
//                 setShow(true);
//             }, 10000); // 10 seconds
//             return () => clearTimeout(timer);
//         }
//     }, []);

//     const handleClose = () => {
//         setShow(false);
//         localStorage.setItem("newsletter_closed", "true");
//     };

//     if (!show) return null;
//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//             <div className="bg-white w-[90%] md:w-[800px] rounded-md shadow-lg overflow-hidden relative flex flex-col md:flex-row">

//                 {/* Left Image */}
//                 <div className="md:w-1/2 w-full">
//                     <img
//                         src="https://images.unsplash.com/photo-1600185365227-7c2cfdd51f48?auto=format&fit=crop&w=800&q=80"
//                         alt="Sneaker"
//                         className="h-full w-full object-cover"
//                     />
//                 </div>

//                 {/* Right Content */}
//                 <div className="md:w-1/2 w-full p-8 flex flex-col justify-center relative">
//                     {/* Close Button */}
//                     <button
//                         onClick={handleClose}
//                         className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
//                     >
//                         ×
//                     </button>

//                     <h2 className="text-4xl font-bold mb-4 tracking-wider">
//                         ALWAYS <br /> FIRST.
//                     </h2>
//                     <p className="text-gray-600 text-sm mb-5">
//                         Nulla tincidunt convallis bibendum. Duis sed risus cipit justo.
//                         Integer neque felis, egestas a euismod in pulvinar.
//                     </p>

//                     {/* Email input */}
//                     <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 mb-4">
//                         <input
//                             type="email"
//                             placeholder="email"
//                             className="flex-grow outline-none text-sm text-gray-700 placeholder-gray-400"
//                         />
//                     </div>

//                     {/* Subscribe button */}
//                     <button className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition">
//                         Subscribe
//                     </button>

//                     {/* Social icons */}
//                     <div className="flex space-x-5 mt-6 text-gray-700">
//                         <a href="#" className="hover:text-orange-500">
//                             <FaTwitter size={18} />
//                         </a>
//                         <a href="#" className="hover:text-orange-500">
//                             <FaFacebookF size={18} />
//                         </a>
//                         <a href="#" className="hover:text-orange-500">
//                             <FaInstagram size={18} />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default NewsletterPopup
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import newslatter from '../assets/bg.jpg'

const NewsletterPopup = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log("🔄 useEffect running...");
        const timer = setTimeout(() => {
            console.log("✅ Showing popup now!");
            setShow(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);


    const handleClose = () => {
        console.log("❌ Popup closed by user");
        setShow(false);
    };

    if (!show) {
        console.log("🙈 Popup hidden");
        return null;
    }

    console.log("👀 Popup is visible now!");
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] md:w-[800px] rounded-md shadow-lg overflow-hidden relative flex flex-col md:flex-row">
                {/* Left Image */}
                <div className="md:w-1/2 w-full">
                    <img
                        src={newslatter}
                        alt="Sneaker"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="md:w-1/2 w-full p-8 flex flex-col justify-center relative">
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
                    >
                        ×
                    </button>

                    <h2 className="text-4xl font-bold mb-4 tracking-wider">
                        ALWAYS <br /> FIRST.
                    </h2>
                    <p className="text-gray-600 text-sm mb-5">
                        Nulla tincidunt convallis bibendum. Duis sed risus cipit justo.
                        Integer neque felis, egestas a euismod in pulvinar.
                    </p>

                    {/* Email input */}
                    <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 mb-4">
                        <input
                            type="email"
                            placeholder="email"
                            className="flex-grow outline-none text-sm text-gray-700 placeholder-gray-400"
                        />
                    </div>

                    {/* Subscribe button */}
                    <button className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                        Subscribe
                    </button>

                    {/* Social icons */}
                    <div className="flex space-x-5 mt-6 text-gray-700">
                        <a href="#" className="hover:text-orange-500">
                            <FaTwitter size={18} />
                        </a>
                        <a href="#" className="hover:text-orange-500">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="hover:text-orange-500">
                            <FaInstagram size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterPopup;

