import { useState } from 'react';
import { Play, Image } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Category = 'all' | 'video' | 'design';

interface PortfolioItem {
  id: number;
  title: string;
  category: 'video' | 'design';
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Cinematic Short Film',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1742578005824-4c473753445d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtfGVufDF8fHx8MTc2NTI4MzMzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Color grading & post-production',
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1664520132859-727fc515fc8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzY1MjQ5MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Complete brand package',
  },
  {
    id: 3,
    title: 'Abstract Motion Graphics',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0fGVufDF8fHx8MTc2NTE4OTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Digital art & design',
  },
  {
    id: 4,
    title: 'Corporate Video Edit',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1761818645908-25523b8df309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjUyMzYzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Professional storytelling',
  },
  {
    id: 5,
    title: 'Creative Studio Setup',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW98ZW58MXx8fHwxNzY1MjYzMTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Workspace design concept',
  },
  {
    id: 6,
    title: 'Product Showcase Video',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1MjA2NzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Dynamic editing & effects',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 bg-[#D4D4D4] bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            A showcase of recent projects in video editing and graphic design
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full transition-all duration-200 ${
              activeCategory === 'all'
                  ? 'bg-[#D4D4D4] text-black'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveCategory('video')}
            className={`px-6 py-3 rounded-full transition-all duration-200 flex items-center gap-2 ${
              activeCategory === 'video'
                  ? 'bg-[#D4D4D4] text-black'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700' 
            }`}
          >
            <Play size={18} />
            Video Editing
          </button>
          <button
            onClick={() => setActiveCategory('design')}
            className={`px-6 py-3 rounded-full transition-all duration-200 flex items-center gap-2 ${
              activeCategory === 'design'
                  ? 'bg-[#D4D4D4] text-black'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'    
            }`}
          >
            <Image size={18} />
            Graphic Design
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-neutral-800 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex items-center gap-2 mb-2">
                    {item.category === 'video' ? (
                      <Play size={20} className="text-grey-400" />
                    ) : (
                      <Image size={20} className="text-grey-400" />
                    )}
                    <span className="text-sm text-neutral-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-neutral-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}