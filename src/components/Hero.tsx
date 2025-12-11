import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-slide-up">
            {hero.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 font-light animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {hero.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {hero.tagline}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a href={`mailto:${hero.email}`} className="flex items-center gap-2 hover:text-teal-400 transition-colors">
            <Mail size={18} />
            <span>{hero.email}</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{hero.location}</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href={hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${hero.email}`}
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="pt-8 animate-bounce">
          <a
            href="#about"
            className="inline-block text-slate-400 hover:text-teal-400 transition-colors"
            aria-label="Scroll to about section"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
