"use client";
import React from 'react';
import { Heart, PawPrint, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";



const HeroSection: React.FC = () => {
    return (
        <div className='pt-20'>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 z-10">
              <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium mb-6 animate-fade-in">
                🐾 Find Your Perfect Companion Today
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Pets</span> Find Their
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Forever Home</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with loving families and help pets find their forever homes. Every tail has a story, and every home needs a furry friend.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 transform transition hover:scale-105">
                  Adopt a Pet <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6 hover:bg-gray-50 transform transition hover:scale-105">
                  List for Adoption <PawPrint className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-12 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white rounded-full shadow-lg">
                    <Heart className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <p className="font-semibold">5000+</p>
                    <p className="text-sm text-gray-600">Happy Adoptions</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white rounded-full shadow-lg">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold">2000+</p>
                    <p className="text-sm text-gray-600">Active Users</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              {/* Main image with floating effect */}
              <div className="relative z-10 transform transition-transform hover:scale-105 duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-6 scale-95 md:scale-105 opacity-20"></div>
                <Image 
                  src="/heroImg.jpg"
                  alt="Happy pets with their new families"
                  className="rounded-3xl shadow-2xl relative z-10 scale-90 md:scale-1"
                    width={600}
                    height={400}
                />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-6 -left-4 md:-left-6 bg-white p-4 rounded-xl shadow-lg transform -rotate-6 animate-float z-20">
                <div className="flex items-center gap-3">
                  <PawPrint className="h-8 w-8 text-purple-500" />
                  <div>
                    <p className="font-semibold">Adopt Now!</p>
                    <p className="text-sm text-gray-600">Get your furry friend</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-white p-4 rounded-xl shadow-lg transform rotate-6 animate-float animation-delay-2000 z-20">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-red-500" />
                  <div>
                    <p className="font-semibold">Success Story!</p>
                    <p className="text-sm text-gray-600">Luna found a home</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HeroSection;