"use client";

import React from "react";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

const recentProjects: Project[] = [
  {
    title: "Astrological Website",
    description:
      "A personal astrological website to share horoscope insights and services using React and Tailwind.",
    imageUrl: "/images/p1.png",
    link: "https://dinethaastrological.com/",
  },
  {
    title: "E-Commerce Store",
    description:
      "An online store with payment integration and product management.",
    imageUrl: "/images/ecommerce.jpg",
    link: "#",
  },
  {
    title: "Tourism Website",
    description:
      "A travel agency site built with animations, blogs, and booking features.",
    imageUrl: "/images/tourism.jpg",
    link: "#",
  },
  {
    title: "Restaurant Menu App",
    description:
      "Digital restaurant menu system with admin dashboard and QR code menus.",
    imageUrl: "/images/restaurant.jpg",
    link: "#",
  },
];

const ongoingProjects: Project[] = [
    {
        title: "Ceylonbliss Website",
        description:
          "A travel agency site built with animations, blogs, and booking features.",
        imageUrl: "/images/p2.png",
        link: "https://ceylon-bliss.vercel.app/",
      },
  {
    title: "FundGenius",
    description:
      "A finance management system with income and expense tracking.",
    imageUrl: "/images/fundgenius.jpg",
    link: "#",
  },
  {
    title: "CraftMind",
    description: "A skill-sharing platform for handmade crafts and tutorials.",
    imageUrl: "/images/craftmind.jpg",
    link: "#",
  },
  {
    title: "WhatsApp Chatbot",
    description:
      "A business chatbot that responds to customer queries using AI.",
    imageUrl: "/images/whatsappbot.jpg",
    link: "#",
  },
];

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  imageUrl,
  link,
}) => (
  <div className="bg-gradient-to-br from-[#1f1c2c] to-[#928dab] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition"
    />
    <div className="p-4 text-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-200 text-sm">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-300 hover:text-indigo-400 hover:underline mt-3 inline-block"
        >
          View Project →
        </a>
      )}
    </div>
  </div>
);

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-10 pt-20 sm:pt-24 text-white">
      <h1 className="text-5xl font-bold text-center mb-14 text-indigo-200 drop-shadow-lg">
      <span className="text-purple-400">Our Projects</span>
      </h1>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-white">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-white">
          Ongoing Projects
        </h2>
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
