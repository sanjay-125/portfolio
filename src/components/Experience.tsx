import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Experience
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Hands-on professional experience building production-ready applications.
        </p>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 border border-slate-200 hover:border-teal-500 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-teal-600 font-semibold mb-3">
                    <Briefcase size={18} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">Key Achievements:</h4>
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 size={18} className="text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
