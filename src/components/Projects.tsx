import { Code2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Projects
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my expertise in full-stack development, machine learning, and blockchain technology.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-teal-500 group"
            >
              <div className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-teal-100 rounded-lg group-hover:bg-teal-500 transition-colors">
                    <Code2 className="text-teal-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 flex-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <CheckCircle2 size={18} className="text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
