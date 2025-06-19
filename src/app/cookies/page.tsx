"use client";

import React from "react";

const CookiesPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-10 pt-20 sm:pt-24 text-white">
    <h1 className="text-4xl font-bold mb-8 text-indigo-200">Cookies Policy</h1>
    <div className="max-w-3xl mx-auto bg-[#1f1c2c] bg-opacity-80 rounded-xl p-8 shadow-lg">
      <p className="mb-4">This Cookies Policy explains what cookies are, how we use them, and your choices regarding cookies when you visit our website.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">What Are Cookies?</h2>
      <p className="mb-4">Cookies are small text files stored on your device by your web browser. They help us improve your experience and understand how you use our site.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Cookies</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To remember your preferences and settings</li>
        <li>To analyze site traffic and usage</li>
        <li>To enhance site functionality</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Your Choices</h2>
      <p className="mb-4">You can choose to accept or decline cookies through your browser settings. Disabling cookies may affect your experience on our site.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>If you have any questions about our Cookies Policy, please contact us through our contact page.</p>
    </div>
  </div>
);

export default CookiesPage; 