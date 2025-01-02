import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function SuccessStoriesSection() {
  const testimonials = [
    {
      quote: "Max, a playful Labrador, needed a new home when his owner, Emma, had to move overseas. Emma shared Max's story on Adiptify, and within days, Sarah, an experienced pet lover, reached out. After a heartfelt conversation, Emma knew Sarah was the perfect fit. Today, Max enjoys daily hikes and endless belly rubs in his new home.",
      name: "Max's Second Chance",
      designation: "Adoptify Success Story",
      src: "/sucessStories/max.jpg",
    },
    {
      quote: "Luna, a shy Persian cat, was listed by her previous owner, Alex, who wanted a quieter environment for her. The Johnson family instantly connected with Luna's profile. After meeting her, they fell in love with her gentle personality. Luna now spends her days lounging in sunny spots and being pampered by the family's kids.",
      name: "Luna Finds Her Forever Family",
      designation: "Adoptify Success Story",
      src: "/sucessStories/luna.jpg",

    },
    {
      quote:"Rocky, a senior Beagle, was struggling to find a new home due to his age. Adiptify connected him with Maria, who specifically wanted an older dog to care for. Maria and Rocky formed an immediate bond, and now Rocky enjoys peaceful walks and cozy evenings by the fireplace.",
      name: "Rocky's New Beginning",
      designation: "Adoptify Success Story",
      src: "/sucessStories/Rocky.jpg",

    },
  ];
  return (
    <div id="successStories" className="relative py-24 -z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

              <div className="container mx-auto px-4">
 <h2 className="text-4xl font-bold text-center mb-5">Our Success Stories</h2>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true}  />;
        </div>
        </div>
  )
}

export default SuccessStoriesSection;