import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
          About Me
        </h2>
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed">
            {about.description}
          </p>
        </div>
      </div>
    </section>
  );
}
