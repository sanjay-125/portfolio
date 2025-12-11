import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Skills & Technologies
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit spanning full-stack development, data science, and emerging technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-teal-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-teal-500">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-white text-slate-700 text-sm rounded-lg border border-slate-200 hover:border-teal-400 hover:shadow-sm transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
