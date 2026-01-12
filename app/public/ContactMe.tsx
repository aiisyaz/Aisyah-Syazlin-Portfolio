"use client";

import { i } from "framer-motion/client";
import { useState } from "react";
import { motion } from "framer-motion";
export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    const message = `Hi Aisyah Syazlin!

Name: ${name}
Email: ${email}
Company: ${company}
Reason: ${reason}

Sent from your portfolio website`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/601155073223?text=${encodedMessage}`, "_blank");
  };

  return (
        <section className="w-full min-h-screen bg-[#f6faff] pt-30 pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-tight">
                Reach Me ✨
              </h1>

              <p className="text-lg text-gray-600 max-w-md">
                Have a project in mind, a collaboration idea, or just want to say
                hello? I’d love to hear from you 💙
              </p>

              <p className="text-gray-500">
                Fill in the form and your message will be sent directly to my
                WhatsApp. I usually reply pretty fast!
              </p>
            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
          {/* Heading */}
          <div className="text-center mb-10">

            <p className="text-lg md:text-xl font-medium text-gray-700">
              Let’s bring your ideas to life together.
            </p>
          </div>

          {/* Form Card */}
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-blue-200">

            {/* Name */}
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full mb-4 p-3 rounded-lg bg-gray-100 text-gray-800 outline-none border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Email */}
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full mb-4 p-3 rounded-lg bg-gray-100 text-gray-800 outline-none border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Company */}
            <label className="block text-gray-700 font-semibold mb-1">
              Company
            </label>
            <input
              type="text"
              className="w-full mb-4 p-3 rounded-lg bg-gray-100 text-gray-800 outline-none border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            {/* Reason */}
            <label className="block text-gray-700 font-semibold mb-1">
              Reason for Contact
            </label>
            <textarea
              className="w-full mb-6 p-3 rounded-lg bg-gray-100 text-gray-800 outline-none border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition h-32"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>

          {/* Button */}
          <div className="flex justify-center">
            <button onClick={handleSubmit} className="btn-primary">
              💌 Send to WhatsApp
            </button>
          </div>
        </div>
        </motion.div>

      </div>
    </section>
  );
}
