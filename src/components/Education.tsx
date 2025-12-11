import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Education
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Academic foundation in computer science and data science.
        </p>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl shadow-sm p-8 border border-slate-200 hover:border-teal-500 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <GraduationCap className="text-teal-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {edu.degree}
                      </h3>
                      {edu.specialization && (
                        <p className="text-teal-600 font-medium mb-2">
                          Specialization: {edu.specialization}
                        </p>
                      )}
                      <p className="text-slate-700 font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 ml-9">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                <div className="md:text-right">
                  <div className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-semibold rounded-lg">
                    {edu.grade}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
