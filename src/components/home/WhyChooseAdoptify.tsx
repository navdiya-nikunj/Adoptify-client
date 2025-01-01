"use client";
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { Heart,  Shield, MessageCircle, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const WhyChooseAdoptify: React.FC = () => {
    const features: Feature[] = [
    {
      icon: Heart,
      title: "Post Easily",
      description: "Share your pet's story in minutes with our simple posting process",
      delay: 0
    },
    {
      icon: Shield,
      title: "Verified Adopters",
      description: "Every adopter goes through our thorough verification process",
      delay: 200
    },
    {
      icon: MessageCircle,
      title: "Safe Connections",
      description: "Connect securely with potential adopters through our platform",
      delay: 400
    },
    {
      icon: CheckCircle,
      title: "Smooth Process",
      description: "Guided adoption journey from start to finish",
      delay: 600
    }
  ];
    return (
        <div className="relative overflow-hidden py-16">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Why Choose Adoptify?
        </h2>

        <div className="grid lg:grid-cols-2  gap-16 items-center">
          {/* Features Column */}
          <div className="space-y-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 transform transition-all duration-700 hover:translate-x-2"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Illustration Column */}
          <div className="relative transform transition-all duration-700 hover:scale-105">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-100 rounded-full opacity-50"></div>
            
            {/* Main image */}
            <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
       
        
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/features.jpg"
            height="600"
            width="500"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        
        
      </CardBody>
    </CardContainer>
          </div>
        </div>
      </div>
    </div>
      
    )
}
export default WhyChooseAdoptify;