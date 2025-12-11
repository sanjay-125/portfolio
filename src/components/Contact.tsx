import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { hero } = portfolioData;

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto text-lg">
          I'm always open to discussing new opportunities, innovative projects, or potential collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href={`mailto:${hero.email}`}
            className="flex items-center gap-4 p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all hover:scale-105 group"
          >
            <div className="p-3 bg-teal-500 rounded-lg group-hover:bg-teal-400 transition-colors">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="text-slate-300 text-sm">{hero.email}</p>
            </div>
          </a>

          <a
            href={`tel:${hero.phone}`}
            className="flex items-center gap-4 p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all hover:scale-105 group"
          >
            <div className="p-3 bg-teal-500 rounded-lg group-hover:bg-teal-400 transition-colors">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p className="text-slate-300 text-sm">{hero.phone}</p>
            </div>
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-105"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href={hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-105"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-400 mb-4">
            <MapPin size={16} />
            <span>{hero.location}</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {hero.name}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
