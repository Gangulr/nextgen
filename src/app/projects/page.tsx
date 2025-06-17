'use client';

import React from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string
  link?: string;
}


    const recentProjects: Project[] = [
        {
          title: 'Astrological Website',
          description: 'A personal astrological website to share horoscope insights and services using React and Tailwind.',
          imageUrl: '/images/p1.png',
          link: 'https://dinethaastrological.com/' // ✅ link to external site
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
  <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {link && (
        <a href={link} className="text-blue-500 hover:underline mt-2 inline-block">
          View Project
        </a>
      )}
    </div>
  </div>
);

const ProjectsPage = () => {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Our Projects</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Recent Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Ongoing Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ongoingProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
