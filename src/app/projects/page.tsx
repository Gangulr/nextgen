'use client';

import React from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

const recentProjects: Project[] = [
  {
    title: 'Astrological Website',
    description: 'A personal astrological website to share horoscope insights and services using React and Tailwind.',
    imageUrl: '/images/p1.png',
    link: 'https://dinethaastrological.com/'
  },
  {
    title: 'E-Commerce Store',
    description: 'An online store with payment integration and product management.',
    imageUrl: '/images/ecommerce.jpg',
    link: '#'
  },
  {
    title: 'Tourism Website',
    description: 'A travel agency site built with animations, blogs, and booking features.',
    imageUrl: '/images/tourism.jpg',
    link: '#'
  },
  {
    title: 'Restaurant Menu App',
    description: 'Digital restaurant menu system with admin dashboard and QR code menus.',
    imageUrl: '/images/restaurant.jpg',
    link: '#'
  }
];

const ongoingProjects: Project[] = [
  {
    title: 'Photography App',
    description: 'A photo-sharing app with likes, comments, and notifications.',
    imageUrl: '/images/photography.jpg',
    link: '#'
  },
  {
    title: 'FundGenius',
    description: 'A finance management system with income and expense tracking.',
    imageUrl: '/images/fundgenius.jpg',
    link: '#'
  },
  {
    title: 'CraftMind',
    description: 'A skill-sharing platform for handmade crafts and tutorials.',
    imageUrl: '/images/craftmind.jpg',
    link: '#'
  },
  {
    title: 'WhatsApp Chatbot',
    description: 'A business chatbot that responds to customer queries using AI.',
    imageUrl: '/images/whatsappbot.jpg',
    link: '#'
  }
];

const ProjectCard: React.FC<Project> = ({ title, description, imageUrl, link }) => (
  <div className="bg-gradient-to-b from-[#24194a] via-[#2d225a] to-[#0a0a23] shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition border border-blue-900">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-5">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-blue-200 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 font-medium inline-block transition"
        >
          View Project &rarr;
        </a>
      )}
    </div>
  </div>
);

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1333] via-[#2d225a] to-[#0a0a23] px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-white mb-12 tracking-tight">
        Our Projects
      </h1>

      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-blue-200">Recent Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recentProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-blue-200">Ongoing Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ongoingProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
