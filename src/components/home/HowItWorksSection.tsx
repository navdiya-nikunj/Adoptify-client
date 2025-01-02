import React, { useState } from 'react';
import { PawPrint, Search, Users, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
  details?: string;
}

// props type for timelinestep component
interface TimelineStepProps  {
  icon: React.ElementType;
  title: string;
  description: string;
  details?: string;
  isActive: boolean;
  index: number;
  onMouseEnter: () => void;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ icon: Icon, title, description, details, isActive, index, onMouseEnter }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  
  return (
    <div
      className="relative group"
      onMouseEnter={() => {setShowDetails(true); onMouseEnter();}}
      onMouseLeave={() => setShowDetails(false)}
      
    >
      {/* Connection line */}
      {index < 3 && (
        <div className="hidden md:block absolute w-full h-1 top-10 left-1/2 bg-gray-200">
          <div className={`h-full bg-blue-600 transition-all duration-500 ${isActive ? 'w-full' : 'w-0'}`} />
        </div>
      )}
      
      {/* Step circle */}
      <div className={`relative z-10 w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
        isActive ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
      } shadow-lg`}>
        <Icon className="w-8 h-8" />
      </div>
      
      {/* Title and description */}
      <div className="mt-4 text-center">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      
      {/* Popup details */}
      <div className={`absolute -top-28 left-1/2 transform -translate-x-1/2 w-64 bg-white p-4 rounded-lg shadow-xl transition-all duration-300 ${
        showDetails ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <p className="text-sm text-gray-700">{details}</p>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const steps: Step[] = [
    {
      icon: Search,
      title: "Browse Pets",
      description: "Find your perfect match",
      details: "Search through our database of pets using filters for species, age, location, and more"
    },
    {
      icon: Users,
      title: "Connect",
      description: "Meet the current owner",
      details: "Schedule meet and greets with current pet owners through our secure platform"
    },
    {
      icon: Heart,
      title: "Bond",
      description: "Get to know each other",
      details: "Spend time with your potential pet to ensure you're the perfect match"
    },
    {
      icon: PawPrint,
      title: "Adopt",
      description: "Welcome them home",
      details: "Complete the adoption process and give your new friend their forever home"
    }
  ];

  const scroll = (direction:string) => {
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - 1)
      : Math.min(steps.length - 1, scrollPosition + 1);
    setScrollPosition(newPosition);
  };

  return (
    <div id='howItWorks' className="relative py-10">

      <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        </div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-28">How It Works</h2>
        
        <div className="relative">
          {/* Mobile navigation */}
          <div className="md:hidden flex justify-between items-center mb-8">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white shadow-lg disabled:opacity-50"
              disabled={scrollPosition === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white shadow-lg disabled:opacity-50"
              disabled={scrollPosition === steps.length - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Timeline */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <TimelineStep
                key={index}
                {...step}
                index={index}
                isActive={index <= activeStep}
                onMouseEnter={() => setActiveStep(index)}
              />
            ))}
          </div>
          
          {/* Mobile carousel */}
          <div className="md:hidden">
            <TimelineStep {...steps[scrollPosition]} index={scrollPosition} isActive={true} onMouseEnter={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;