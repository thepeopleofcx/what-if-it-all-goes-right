'use client';

import ScrollFadeIn from './ScrollFadeIn';

interface TimelineEra {
  name: string;
  duration: string;
  description: string;
  stats?: string;
}

const eras: TimelineEra[] = [
  {
    name: "Hunter-Gatherers",
    duration: "~300,000 years",
    description: "Foraging, hunting, and occasional warfare. 15–20 hours per week of 'work' in the subsistence sense.",
    stats: "15-20 hours/week"
  },
  {
    name: "Agrarian Society",
    duration: "~10,000 years",
    description: "Agriculture produced enormous gains in population and cooperation. 80–90% of people engaged in food production.",
    stats: "80-90% in farming"
  },
  {
    name: "Industrial Revolution",
    duration: "~250 years",
    description: "Movement into cities and factories. Life expectancy doubled from ~32 to 71 years. Working hours fell dramatically.",
    stats: "Life expectancy: 32→71 years"
  },
  {
    name: "Knowledge Work",
    duration: "~50-70 years",
    description: "Professional, managerial, clerical work grew from 1/4 to 3/4 of employment. Services now 77% of GDP.",
    stats: "77% services sector"
  },
  {
    name: "The Unknown",
    duration: "Beginning now",
    description: "AI-augmented work. The shape is unclear, but the pattern suggests another upgrade for humanity.",
    stats: "?"
  }
];

export default function Timeline() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <ScrollFadeIn>
        <h2 className="font-cormorant text-4xl md:text-5xl text-gold text-center mb-4">
          A Brief History of Work
        </h2>
        <p className="text-center text-cream/70 mb-16 max-w-2xl mx-auto">
          Every era of human labor has felt like the natural order—right until it was replaced by the next one.
        </p>
      </ScrollFadeIn>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 hidden md:block" />

        {eras.map((era, index) => (
          <ScrollFadeIn 
            key={era.name} 
            delay={index * 0.1}
            direction={index % 2 === 0 ? 'left' : 'right'}
          >
            <div className={`mb-16 flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="font-cormorant text-2xl md:text-3xl text-gold mb-2">
                  {era.name}
                </h3>
                <p className="text-cream/60 text-sm mb-3 italic">
                  {era.duration}
                </p>
                <p className="text-cream/80 leading-relaxed mb-2">
                  {era.description}
                </p>
                {era.stats && (
                  <p className="text-gold/80 text-sm font-mono">
                    {era.stats}
                  </p>
                )}
              </div>

              {/* Timeline dot */}
              <div className="hidden md:flex flex-shrink-0 w-4 h-4 rounded-full bg-gold border-4 border-dark-bg" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  );
}
