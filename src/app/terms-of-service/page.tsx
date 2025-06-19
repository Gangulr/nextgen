"use client";

import React from "react";

const TermsOfServicePage = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-10 pt-20 sm:pt-24 text-white">
    <h1 className="text-4xl font-bold mb-8 text-indigo-200">Terms of Service</h1>
    <div className="max-w-3xl mx-auto bg-[#1f1c2c] bg-opacity-80 rounded-xl p-8 shadow-lg">
      <p className="mb-4">By accessing or using our website, you agree to be bound by these Terms of Service. Please read them carefully.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Use of Site</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>You must be at least 13 years old to use this site.</li>
        <li>You agree not to misuse the site or its content.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Intellectual Property</h2>
      <p className="mb-4">All content on this site is the property of the site owner and protected by copyright laws. You may not use, reproduce, or distribute any content without permission.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Disclaimer</h2>
      <p className="mb-4">This site is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use of this site.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to Terms</h2>
      <p className="mb-4">We reserve the right to update these Terms at any time. Continued use of the site constitutes acceptance of the new Terms.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
      <p>If you have any questions about these Terms, please contact us through our contact page.</p>
    </div>
  </div>
);

export default TermsOfServicePage; 