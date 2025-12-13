import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navigation />
      <Hero />
      <Portfolio />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
