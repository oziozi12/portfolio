import { Award, Users, Clock, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { icon: Award, value: '90+', label: 'Projects Completed' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Clock, value: '1+', label: 'Years Experience' },
  { icon: Heart, value: '100%', label: 'Satisfaction Rate' },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW98ZW58MXx8fHwxNzY1MjYzMTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-[#525252]/20 to-[#D4D4D4]/20 rounded-2xl blur-3xl -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#D4D4D4]">
              About Me
            </h2>
            
            <p className="text-xl text-neutral-300 mb-6">
              I'm a passionate creative professional specializing in video editing and graphic design. With over 1 year of experience, I transform ideas into compelling visual stories that engage and inspire.
            </p>
            
            <p className="text-lg text-neutral-400 mb-8">
              My approach combines technical expertise with artistic vision, ensuring every project not only meets but exceeds expectations. From corporate videos to brand identities, I bring dedication and creativity to everything I create.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="p-6 bg-neutral-800 rounded-xl border border-neutral-700">
                    <Icon size={32} className="text-[#D4D4D4] mb-3" />
                    <div className="text-3xl mb-1">{stat.value}</div>
                    <div className="text-neutral-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}