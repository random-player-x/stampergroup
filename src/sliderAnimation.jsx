import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample team member data (replace with actual team members)
const teamMembers = [
  {
    name: "Emma Rodriguez",
    title: "CEO & Founder",
    image: "/api/placeholder/400/400",
    bio: "Visionary leader with 15 years of experience in tech innovation."
  },
  {
    name: "Michael Chen",
    title: "CTO",
    image: "/api/placeholder/400/400",
    bio: "Technical genius driving our product development strategy."
  },
  {
    name: "Sophia Kim",
    title: "Creative Director",
    image: "/api/placeholder/400/400",
    bio: "Design mastermind transforming ideas into visual experiences."
  },
  {
    name: "David Okonkwo",
    title: "Head of Marketing",
    image: "/api/placeholder/400/400",
    bio: "Strategic thinker connecting our brand with global audiences."
  },
  {
    name: "Aisha Patel",
    title: "Chief Operations Officer",
    image: "/api/placeholder/400/400",
    bio: "Operational expert ensuring smooth company-wide execution."
  },
  {
    name: "Carlos Mendoza",
    title: "Senior Product Manager",
    image: "/api/placeholder/400/400",
    bio: "Product visionary turning complex challenges into elegant solutions."
  },
  {
    name: "Laura Thompson",
    title: "Head of People & Culture",
    image: "/api/placeholder/400/400",
    bio: "Human capital strategist building an exceptional team culture."
  }
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % teamMembers.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="relative w-full max-w-4xl">
        {/* Carousel Navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 z-20 w-full flex justify-between px-4">
          <button 
            onClick={handlePrev}
            className="bg-white/30 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white/50 transition-all"
          >
            <ChevronLeft className="text-gray-800" size={24} />
          </button>
          <button 
            onClick={handleNext}
            className="bg-white/30 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white/50 transition-all"
          >
            <ChevronRight className="text-gray-800" size={24} />
          </button>
        </div>

        {/* Main Carousel Card */}
        <div className="relative overflow-hidden">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className={`
                absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out
                ${index === currentIndex 
                  ? 'opacity-100 translate-x-0 z-10' 
                  : index < currentIndex 
                    ? 'opacity-0 -translate-x-full -z-10' 
                    : 'opacity-0 translate-x-full -z-10'
                }
              `}
            >
              <div className="w-full h-[80vh] flex items-center justify-center">
                <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 w-full max-w-3xl flex overflow-hidden">
                  {/* Image Section */}
                  <div className="w-1/3 relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="w-2/3 p-8 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h2>
                    <h3 className="text-xl text-gray-600 mb-4">
                      {member.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                w-3 h-3 rounded-full transition-all
                ${index === currentIndex 
                  ? 'bg-blue-600 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;