import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from './images/Portfolio-logo.png'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={logo}
          alt="Creative workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#141414]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <ImageWithFallback
                src={logo}
                alt="Profile"
                className="w-full h-auto rounded-none shadow-none"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-block mb-3 px-3 py-2 bg-[#525252] border border-[#8A8A8A] rounded-full">
              <span className="text-sm text-white-300">
                Video Editor & Graphic Designer
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold bg-gradient-to-r from-[#8A8A8A] to-[#A3A3A3] bg-clip-text text-transparent">
              Hi, it’s Abdirahman
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 mb-8">
              Professional video editing and graphic design
              services that transform ideas into stunning visual
              experiences
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#525252] to-[#D4D4D4] rounded-full hover:from-[#5a5a5a] hover:to-[#e0e0e0] transition-all duration-200 shadow-lg shadow-neutral-500/50"
              >
                View My Work
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 border border-neutral-700 rounded-full hover:bg-neutral-700 transition-all duration-200"
              >
                <Play size={18} />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-neutral-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}