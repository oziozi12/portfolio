import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div 
      className="min-h-screen bg-neutral-950 text-white overflow-x-hidden max-w-full w-full"
      style={{ overscrollBehaviorX: 'none', touchAction: 'pan-y' }}
    >
      <Navigation />
      <Hero />
      <Portfolio />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}