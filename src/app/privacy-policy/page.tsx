"use client";

import React from "react";

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-10 pt-20 sm:pt-24 text-white">
    <h1 className="text-4xl font-bold mb-8 text-indigo-200">Privacy Policy</h1>
    <div className="max-w-3xl mx-auto bg-[#1f1c2c] bg-opacity-80 rounded-xl p-8 shadow-lg">
      <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal Data: Name, email address, etc. (only if you provide it to us)</li>
        <li>Usage Data: Pages visited, time spent, browser type, etc.</li>
        <li>Cookies and Tracking Technologies</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To operate and maintain our website</li>
        <li>To improve user experience</li>
        <li>To communicate with you (if you contact us)</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">We use cookies to enhance your experience. You can choose to disable cookies through your browser settings, but some features of the site may not function properly.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us through our contact page.</p>
    </div>
  </div>
);

export default PrivacyPolicyPage; 