// app/about/page.tsx

import React from 'react';

const AboutPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="mb-4 text-lg">
        At <strong>NextGen CodeX PVT LTD</strong>, we’re not just building software — we’re building digital experiences
        that drive growth, innovation, and success. Based in Sri Lanka, we specialize in <strong>modern website development</strong>,
        <strong> mobile applications</strong>, and <strong>business automation solutions</strong> designed to elevate your brand and streamline your operations.
      </p>
      <p className="mb-4 text-lg">
        Our team of passionate developers, designers, and strategists are dedicated to delivering powerful, user-friendly, and scalable
        digital products that meet the unique needs of our clients. Whether you&apos;re a startup looking to make your mark or an established
        business ready to level up your digital presence, we have the expertise to bring your vision to life.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">What We Do</h2>
      <ul className="list-disc pl-6 text-lg mb-6">
        <li>Custom Web Development</li>
        <li>Mobile App Development</li>
        <li>E-Commerce Solutions</li>
        <li>POS & Business Management Systems</li>
        <li>UI/UX Design & Branding</li>
        <li>Social Media & Digital Marketing Services</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-3">Why Choose Us?</h2>
      <ul className="list-disc pl-6 text-lg">
        <li>Innovative, future-ready tech solutions</li>
        <li>Dedicated client support and transparent communication</li>
        <li>Affordable pricing tailored for startups and growing businesses</li>
        <li>A creative and detail-focused development team</li>
      </ul>
      <p className="mt-6 text-lg">
        At <strong>NextGen CodeX</strong>, your success is our mission. Let’s build the future — together.
      </p>
    </div>
  );
};

export default AboutPage;
