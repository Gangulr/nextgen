'use client';
'use client';

import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-300 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 text-center">
        <span className="text-purple-400">About Us</span>
        </h1>

        <p className="mb-5 text-lg leading-relaxed">
          At <strong className="text-white">NextGen CodeX PVT LTD</strong>, we’re not just building software — we’re crafting{" "}
          <span className="text-white font-medium">digital experiences</span> that ignite growth, spark innovation, and ensure
          lasting impact. Based in Sri Lanka, we specialize in <strong className="text-white">modern website development</strong>,{" "}
          <strong className="text-white">mobile applications</strong>, and <strong className="text-white">business automation solutions</strong> tailored to
          uplift your brand and streamline your processes.
        </p>

        <p className="mb-5 text-lg leading-relaxed">
          Our passionate team of developers, designers, and digital strategists are committed to delivering powerful, user-focused,
          and scalable digital products that fit your unique goals. Whether you’re a rising startup or an established enterprise, we’re
          ready to turn your vision into a stunning reality.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          <span className="text-[#8A2BE2]"></span> What We Do
        </h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Custom Web Development</li>
          <li>Mobile App Development</li>
          <li>E-Commerce Solutions</li>
          <li>POS & Business Management Systems</li>
          <li>UI/UX Design & Branding</li>
          <li>Social Media & Digital Marketing Services</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          <span className="text-[#8A2BE2]"></span> Why Choose Us?
        </h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Innovative, future-ready tech solutions</li>
          <li>Dedicated client support and transparent communication</li>
          <li>Affordable pricing tailored for startups and growing businesses</li>
          <li>A creative and detail-focused development team</li>
        </ul>

        <p className="mt-8 text-lg leading-relaxed">
          At <strong className="text-white">NextGen CodeX</strong>, your success is our mission. Let’s build the{" "}
          <span className="text-[#8A2BE2] font-medium">future</span> — together.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
