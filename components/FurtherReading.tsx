'use client';

import ScrollFadeIn from './ScrollFadeIn';

const readings = [
  "David Graeber — Bullshit Jobs: A Theory (Simon & Schuster, 2018)",
  "David Autor — "Why Are There Still So Many Jobs?" (Journal of Economic Perspectives, 2015)",
  "Acemoglu & Restrepo — "Automation and New Tasks" (Journal of Economic Perspectives, 2019)",
  "Brynjolfsson, Li, Raymond — "Generative AI at Work" (Quarterly Journal of Economics, 2025)",
  "Card, Kluve, Weber — "What Works?" meta-analysis of labor market programs (NBER Working Paper)",
  "Baumol — The Cost Disease (Yale University Press, 2012)",
  "Stanford HAI — AI Index 2025 (Stanford University)",
  "IMF — Gen-AI: Artificial Intelligence and the Future of Work (Staff Discussion Note, 2024)",
  "OECD — The Effects of Generative AI on Productivity, Innovation, and Entrepreneurship (2025)"
];

export default function FurtherReading() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <ScrollFadeIn>
        <h2 className="font-cormorant text-3xl md:text-4xl text-gold mb-8">
          Further Reading
        </h2>
        <p className="text-cream/70 mb-8">
          A compact reading list for those who want to go deeper:
        </p>
      </ScrollFadeIn>

      <ul className="space-y-4">
        {readings.map((reading, index) => (
          <ScrollFadeIn key={index} delay={index * 0.05}>
            <li className="text-cream/80 leading-relaxed border-l-2 border-gold/30 pl-4 hover:border-gold transition-colors">
              {reading}
            </li>
          </ScrollFadeIn>
        ))}
      </ul>

      <ScrollFadeIn delay={0.5}>
        <p className="text-cream/60 text-sm mt-12 italic border-t border-gold/20 pt-8">
          The authors are cofounders of a cultural technology company operating in multiple U.S. cities. 
          This essay reflects personal experiences and opinions, and is not investment advice.
        </p>
      </ScrollFadeIn>
    </section>
  );
}
