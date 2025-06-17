'use client';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">
          About <span className="text-indigo-600">NextGen CodeX</span>
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
          At <strong className="text-indigo-600">NextGen CodeX PVT LTD</strong>, we don’t just build software — we create immersive digital experiences that inspire growth, drive innovation, and ensure long-term success.
        </p>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center">
          From <strong className="text-indigo-600">modern websites</strong> and <strong className="text-indigo-600">mobile applications</strong> to complete <strong className="text-indigo-600">business automation solutions</strong>, we specialize in helping businesses elevate their presence and streamline operations.
        </p>

        {/* What We Do Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-2 border-indigo-200">
            What We Do
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            <li>Custom Web Development</li>
            <li>Mobile App Development</li>
            <li>E-Commerce Solutions</li>
            <li>POS & Business Management Systems</li>
            <li>UI/UX Design & Branding</li>
            <li>Social Media & Digital Marketing Services</li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-indigo-50 rounded-2xl shadow-md p-8 mb-10">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6 border-b pb-2 border-indigo-300">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-indigo-900">
            <li>Innovative, future-ready tech solutions</li>
            <li>Dedicated client support and transparent communication</li>
            <li>Affordable pricing tailored for startups and growing businesses</li>
            <li>A creative and detail-focused development team</li>
          </ul>
        </div>

        {/* Closing Statement */}
        <p className="text-xl text-center text-gray-800 font-medium">
          At <strong className="text-indigo-600">NextGen CodeX</strong>, your success is our mission.<br />
          <span className="text-indigo-800 font-semibold">Let’s build the future — together.</span>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
