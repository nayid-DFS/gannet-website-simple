"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiBookOpen, FiFileText, FiVideo, FiCpu, FiBox, FiUsers } from 'react-icons/fi';

const resources = [
  {
    name: 'Documentation',
    description: 'Comprehensive guides to help you understand and use our products effectively.',
    icon: FiBookOpen,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    href: '/resources/documentation',
  },
  {
    name: 'API Reference',
    description: 'Detailed API documentation for developers to integrate with our platform.',
    icon: FiFileText,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    href: '/resources/api-reference',
  },
  {
    name: 'Video Tutorials',
    description: 'Step-by-step video guides to help you get up and running quickly.',
    icon: FiVideo,
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    href: '/resources/tutorials',
  },
  {
    name: 'Developer Hub',
    description: 'Resources specifically designed for developers building with our platform.',
    icon: FiCpu,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    href: '/resources/developers',
  },
  {
    name: 'Product Guides',
    description: 'Learn how to maximize your productivity with our products.',
    icon: FiBox,
    image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    href: '/resources/guides',
  },
  {
    name: 'Community Forum',
    description: 'Connect with other users to share ideas, ask questions, and get help.',
    icon: FiUsers,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    href: '/resources/community',
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Resources</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our comprehensive resources designed to help you get the most out of our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.name}
                className="relative overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-60">
                  <Image
                    src={resource.image}
                    alt={resource.name}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="ml-3 text-xl font-semibold text-white">{resource.name}</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-300">{resource.description}</p>
                  </div>
                </div>
                <Link href={resource.href} className="absolute inset-0" aria-label={`View ${resource.name}`} />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/resources"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Browse All Resources
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 