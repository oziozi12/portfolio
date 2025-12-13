import { Film, Palette, Sparkles, Layers, Monitor, Zap } from 'lucide-react';

const skills = [
  {
    icon: Film,
    title: 'Video Editing',
    description: 'Professional editing with Premiere Pro, Final Cut Pro, and DaVinci Resolve',
    skills: ['Color Grading', 'Motion Graphics', 'Audio Mixing', 'VFX Integration'],
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative design solutions using industry-standard tools',
    skills: ['Adobe Photoshop', 'Illustrator', 'Figma', 'Brand Identity'],
  },
  {
    icon: Sparkles,
    title: 'Motion Graphics',
    description: 'Eye-catching animations and dynamic visual effects',
    skills: ['After Effects', '2D Animation', '3D Elements', 'Kinetic Typography'],
  },
  {
    icon: Layers,
    title: 'Post-Production',
    description: 'Complete post-production workflow management',
    skills: ['Color Correction', 'Sound Design', 'Compositing', 'Finishing'],
  },
  {
    icon: Monitor,
    title: 'UI/UX Design',
    description: 'User-centered design for digital products',
    skills: ['Wireframing', 'Prototyping', 'User Testing', 'Responsive Design'],
  },
  {
    icon: Zap,
    title: 'Creative Direction',
    description: 'Strategic vision and creative leadership',
    skills: ['Concept Development', 'Storyboarding', 'Art Direction', 'Brand Strategy'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-[#D4D4D4]">
            Skills & Expertise
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Comprehensive creative services with cutting-edge tools and techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-grey-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#525252] to-[#D4D4D4] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-white" />
                </div>
                
                <h3 className="text-2xl mb-3">{skill.title}</h3>
                <p className="text-neutral-400 mb-6">{skill.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm border border-neutral-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}