// import React, { useState } from "react";
// import { Mail, Phone, MapPin, Clock } from "lucide-react";
// import Header from "./Header";
// import Footer from "./Footer";

// const Contact_US = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("✅ Message Sent Successfully!");
//     setFormData({ name: "", email: "", phone: "", message: "" });
//   };

//   return (
//     <>
//       <Header />

//       {/* 🔸 Hero Section */}
//       <section
//         className="relative w-full min-h-[38vh] flex items-center justify-center
//         bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 text-white text-center"
//       >
//         <div className="px-6">
//           <h1 className="text-3xl md:text-5xl font-extrabold uppercase">
//             Contact Us
//           </h1>
//           <p className="mt-3 text-base md:text-lg max-w-2xl mx-auto text-white/90">
//             We’d love to hear from you! Whether you have a question about
//             products, services, or anything else — our team is ready to help.
//           </p>
//         </div>
//       </section>

//       {/* 🔸 Info + Form */}
//       <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Info Cards */}
//           <div className="space-y-6">
//             {[
//               { Icon: Mail, title: "Email Us", value: "support@shoessite.com" },
//               { Icon: Phone, title: "Call Us", value: "(+91) 98765-43210" },
//               {
//                 Icon: MapPin,
//                 title: "Visit Us",
//                 value: "1245 North Western Street, Anand, Gujarat",
//               },
//               {
//                 Icon: Clock,
//                 title: "Working Hours",
//                 value: (
//                   <>
//                     <p>Mon - Fri: 09:00 AM - 07:00 PM</p>
//                     <p>Sat: 10:00 AM - 04:00 PM</p>
//                     <p>Sun: Closed</p>
//                   </>
//                 ),
//               },
//             ].map(({ Icon, title, value }, i) => (
//               <div
//                 key={i}
//                 className="flex items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
//               >
//                 <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl mr-4">
//                   <Icon size={28} />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800">{title}</h4>
//                   <div className="text-gray-600 text-sm">{value}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white rounded-2xl shadow-xl p-8 space-y-5"
//           >
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase">
//               Send a Message
//             </h2>

//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none"
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none"
//               required
//             />

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none"
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="5"
//               className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none"
//               required
//             ></textarea>

//             <button
//               type="submit"
//               className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:opacity-90 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* 🔸 Map with Floating Card */}
//       <section className="relative w-full h-[500px]">
//         <iframe
//           title="Our Store Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.197456188322!2d72.57136281539672!3d23.026578121489206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f8f62f6c4b%3A0x6a66d82d7b6b58a3!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1692269921564!5m2!1sen!2sin"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           className="absolute inset-0"
//         ></iframe>

//         <div className="absolute top-10 left-10 bg-white rounded-2xl shadow-2xl p-6 w-80">
//           <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Store</h3>
//           <p className="text-gray-600">Copley, South Australia 5732</p>
//           <div className="mt-4 text-sm text-gray-700 space-y-1">
//             <p>Mon - Fri: 10am - 9pm</p>
//             <p>Saturday: 11am - 9pm</p>
//             <p>Sunday: 11am - 5pm</p>
//           </div>
//           <a
//             href="https://www.google.com/maps/dir//Ahmedabad,+Gujarat"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-6 flex items-center justify-center gap-2 w-full text-center
//               bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold
//               hover:opacity-90 transition"
//           >
//             <MapPin size={18} />
//             Get Directions
//           </a>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Contact_US;

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import cotactPage from "../assets/slide-2.jpg";

const Contact_US = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message Sent!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Header />

      {/* 🔹 Hero Section (Image + Text) */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
        <div className="bg-gray-100">
          <img
            // src="/assets/slide-2.jpg"
            src={cotactPage}
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center bg-gray-50 px-10 py-12">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
              Timeless Elegance, Modern Charm
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Indulge in Timeless Classics with a Modern Twist
            </h2>
            <p className="mt-4 text-gray-600 max-w-lg">
              Embrace the allure of timeless fashion with our collection of
              modern classics. From essentials to statement pieces, redefine
              elegance with a contemporary touch.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 text-center">
          {/* Address */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-200 shadow-sm mb-4 bg-white">
              <MapPin className="text-red-600" size={28} />
            </div>
            <h4 className="font-semibold text-xl text-gray-900">Address</h4>
            <p className="text-gray-600 text-sm mt-2 max-w-xs">
              Copley, South Australia 5732, Australia
            </p>
          </div>

          {/* Call */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-200 shadow-sm mb-4 bg-white">
              <Phone className="text-red-600" size={28} />
            </div>
            <h4 className="font-semibold text-xl text-gray-900">Call Us</h4>
            <p className="text-gray-600 text-sm mt-2">+ (02) 6171 3859</p>
            <p className="text-gray-600 text-sm">+ (07) 4088 1324</p>
          </div>

          {/* Emails */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-200 shadow-sm mb-4 bg-white">
              <Mail className="text-red-600" size={28} />
            </div>
            <h4 className="font-semibold text-xl text-gray-900">Emails</h4>
            <p className="text-gray-600 text-sm mt-2">example@example.com</p>
            <p className="text-gray-600 text-sm">support@example.com</p>
          </div>
        </div>
      </section>

      {/* 🔹 Contact Form */}
      <section className="py-16 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Got Any Questions?
        </h2>
        <p className="text-gray-600 mb-10">
          Use the form below to get in touch with our sales team.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-black outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-black outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-black outline-none md:col-span-2"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-black outline-none md:col-span-2"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-orange-700 hover:bg-red-800 text-white py-3 px-8 rounded-md font-semibold md:col-span-2"
          >
            Send →
          </button>
        </form>
      </section>

      {/* 🔹 Google Map with Floating Card */}
      <section className="relative w-full h-[500px]">
        <iframe
          title="Our Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.197456188322!2d72.57136281539672!3d23.026578121489206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f8f62f6c4b%3A0x6a66d82d7b6b58a3!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1692269921564!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="absolute inset-0"
        ></iframe>

        <div className="absolute top-10 left-10 bg-white rounded-xl shadow-lg p-6 w-80">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Store</h3>
          <p className="text-gray-600">Copley, South Australia 5732</p>
          <div className="mt-4 text-sm text-gray-700 space-y-1">
            <p>Mon - Fri: 10am - 9pm</p>
            <p>Saturday: 11am - 9pm</p>
            <p>Sunday: 11am - 5pm</p>
          </div>
          <a
            href="https://www.google.com/maps/dir//Ahmedabad,+Gujarat"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-full text-center bg-orange-700 text-white py-3 rounded-md font-semibold hover:bg-red-800"
          >
            📍 Get Directions
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact_US;
