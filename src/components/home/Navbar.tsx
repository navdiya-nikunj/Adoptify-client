"use client";
import { Heart, Menu, PawPrint, Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {

      const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string | null>("");

  const navItems = [
    { name: 'Find Pets', icon: Search , link: '/'},
    { name: 'How it Works', icon: PawPrint, link: '#howItWorks' },
    { name: 'Success Stories', icon: Heart, link: '#successStories' },
  ];

    // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return(
        
         <nav className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-300 pt-4 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-2">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200">
              <Image src={"/AdoptifyLogo.png"} alt="Adoptify Logo" width={130} height={130} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setActiveItem(item.name)}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                      <Icon className={`h-4 w-4 transition-all duration-300 ${
                        activeItem === item.name ? 'text-blue-600 scale-110' : ''
                      }`} />
                      <Link href={item.link}>
                      <span>{item.name}</span>
                      </Link>
                    </button>
                    {/* Animated underline */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                );
              })}
              
              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline"
                  className="border-2 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
                >
                  Sign In
                </Button>
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 hover:shadow-lg"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="container mx-auto px-4 pb-6 space-y-4 bg-white/80 backdrop-blur-lg">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <Icon className="h-5 w-5" />
                  <Link href={item.link}>
                  <span>{item.name}</span>
                  </Link>
                </button>
              );
            })}
            <div className="space-y-2 pt-4">
              <Button variant="outline" className="w-full border-2">
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;