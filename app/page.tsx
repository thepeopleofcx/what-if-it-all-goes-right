import Hero from '@/components/Hero';
import DialogueBlock from '@/components/DialogueBlock';
import StatCallout from '@/components/StatCallout';
import Timeline from '@/components/Timeline';
import SectionDivider from '@/components/SectionDivider';
import FurtherReading from '@/components/FurtherReading';
import ProgressBar from '@/components/ProgressBar';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-cream">
      <ProgressBar />
      <Hero />

      {/* Essay Content */}
      <article className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Preface */}
        <ScrollFadeIn>
          <h2 className="font-cormorant text-3xl md:text-4xl text-gold mb-6">
            Preface — The Reason We Wrote This
          </h2>
          <p className="mb-6 text-cream/90 leading-relaxed">
            People like to say crazy shit on the Internet. This isn't that.
          </p>
          <p className="mb-6 text-cream/90 leading-relaxed">
            Over the past several weeks, our collective discourse on the possibilities of an AI-shaped future has been shaken by speculative fiction in several forms.
          </p>
          <p className="mb-6 text-cream/90 leading-relaxed">
            The recent piece from Citrini Research imagining a "2028 Global Intelligence Crisis" rocked financial markets, wiped hundreds of billions in market capitalization from software and payments stocks, and was signal-boosted by everyone from Michael Burry to TechCrunch. Before that, Matt Shumer's viral essay "Something Big Is Happening"—now likely north of 100 million views—compared the AI moment to the weeks before COVID lockdowns and warned that virtually all knowledge work could be automated within one to five years. And before that, we had "AI 2027," a doomer take so bleak it likely inspired a surge in orders for end-of-the-world bunkers.
          </p>
          <p className="mb-6 text-cream/90 leading-relaxed">
            The discourse has been wild and, frankly, ungrounded. These essays and the "AI is all hype" response from others, offer a false binary in which either AI is about to annihilate the economy, or it's all a bubble and nothing will change.
          </p>
          <p className="mb-6 text-cream/90 leading-relaxed">
            We believe both framings are dangerously wrong, and the discussion leaves too many of us ill-prepared for what is actually happening.
          </p>
          <p className="mb-6 text-cream/90 leading-relaxed font-semibold">
            We are, in our view from the frontlines, entering a profound paradigm shift that will touch every aspect of how we structure ourselves as a species. But the outcome doesn't need to be doom. There are real signs that a lot of it—not all of it, but a lot of it—might go very, very right.
          </p>
        </ScrollFadeIn>

        <StatCallout 
          number="78%" 
          label="of organizations used AI in 2024, up from 55% in 2023"
        />

        <ScrollFadeIn>
          <p className="mb-6 text-cream/90 leading-relaxed">
            And with a little forethought, and a lot of action, the biggest beneficiaries of this shift might just be arts and culture. That's our hot take. While many creators are bemoaning or even protesting the transition, we want to invite you to consider the opposite view.
          </p>
        </ScrollFadeIn>

        <SectionDivider />

        {/* Why Anonymous */}
        <ScrollFadeIn>
          <h2 className="font-cormorant text-3xl md:text-4xl text-gold mb-6">
            Why We Are Releasing This Anonymously (For Now)
          </h2>
          <p className="mb-6 text-cream/90 leading-relaxed">
            This document is signed by "William & Mary," which conveniently, are the two authors' real first names. Our signature is also a nod to the Glorious Revolution of 1688, when authoritarian power gave way to a more balanced constitution. A permanent reframing of power without the blood of a civil war.
          </p>
          <p className="mb-6 text-cream/90 leading-relaxed">
            This article is presented as a dialogue between the two of us, with the hope of inspiring more discussion, debate, and action from the artists, musicians, and culture creators we serve—as well as the AI industry and the policymakers we are calling on to work together to drive better policy.
          </p>
        </ScrollFadeIn>

        <SectionDivider />

        {/* Part One */}
        <ScrollFadeIn>
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold mb-8 text-center">
            Part One — The World Has Changed
          </h2>
        </ScrollFadeIn>

        <DialogueBlock speaker="william">
          <p className="mb-4">
            For the past two years, in stealth, our team has been building a technology-enabled, culture-first company with the simple mission to "connect people meaningfully."
          </p>
          <p className="mb-4">
            We work with local restaurants, nightclubs, galleries, and bars to bring more people and energy into their establishments—enlivening their spaces with artists and performers from our network while simultaneously bringing the audience. We specialize in reawakening distressed spaces and forgotten locations that just need some love.
          </p>
        </DialogueBlock>

        <DialogueBlock speaker="mary">
          <p className="mb-4">
            In the previous era, we'd be a classic seed-stage startup. We have real revenue, real customers, and an early product. This is the stage when small companies like ours typically go on the VC tour, looking to raise a few million dollars.
          </p>
          <p>
            We aren't doing that. The tools available to us have made the company so much more efficient, and the venture capital model is so far out of sync with our goals and the culture of the communities we serve, that we feel confident we can scale the business to profitability without ever jumping on the venture hamster wheel.
          </p>
        </DialogueBlock>

        <StatCallout 
          number="100M" 
          label="tokens per day—our current usage, up from hundreds of thousands per week six months ago"
          suffix=" tokens/day"
        />

        <ScrollFadeIn>
          <h3 className="font-cormorant text-2xl md:text-3xl text-gold mb-6 mt-16">
            How We Built Our Company from the Ground Up with AI
          </h3>
        </ScrollFadeIn>

        <DialogueBlock speaker="mary">
          <p className="mb-4">
            As of now, all of our low-level knowledge work is handled by agents: answering member emails, designing decks, managing ticketing, handling bookkeeping, the first tier of legal, sales, and publicity, and—most significantly—developing and connecting various technology tools to our custom platform.
          </p>
          <p>
            The jump in capability over the past four months has enabled us to cover the full span of this work with roughly 80% fewer knowledge workers than we would have needed even twelve months ago.
          </p>
        </DialogueBlock>

        <StatCallout 
          number="80-95%" 
          label="of our back-office and knowledge work operations are now handled by agents"
        />

        <DialogueBlock speaker="william">
          <p className="mb-4">
            This year, we will save hundreds of thousands of dollars on developers, low-level writers, designers, back-office workers, and customer service representatives. In the years to come, we expect those savings to increase to millions and, eventually, we hope, tens of millions.
          </p>
          <p>
            I'm certain that we aren't an outlier, we are an early indicator of the massive shift that is coming.
          </p>
        </DialogueBlock>

        <DialogueBlock speaker="mary">
          <p className="mb-4">
            But contrary to the assumptions of many concerned commentators, we aren't putting that money into a vault. We're putting it directly into the communities we activate—in a way that we believe will be more economically, culturally, and locally productive than the centralized, salaried knowledge work of the past era.
          </p>
        </DialogueBlock>

        <StatCallout 
          number="$1.17T" 
          label="arts and cultural economic activity in 2023—roughly 4.2% of GDP"
        />

        <ScrollFadeIn>
          <p className="mb-6 text-cream/90 leading-relaxed mt-12">
            The demand for culture, experience, and human presence isn't shrinking. It's growing, with the potential of explosive growth in the years to come. And the savings from AI are letting us feed that demand directly.
          </p>
        </ScrollFadeIn>

        <SectionDivider />

        {/* Part Two */}
        <ScrollFadeIn>
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold mb-8 text-center">
            Part Two — The End of Bullshit Jobs
          </h2>
        </ScrollFadeIn>

        <DialogueBlock speaker="william">
          <p className="mb-4">
            Early in my time on the East Coast, I got to meet and become friends with the late, great David Graeber. His writings on Bullshit Jobs constitute one of the more important takes on work, employment, economics, and sociology of our time.
          </p>
          <p>
            Graeber's core argument was simple and devastating: a huge proportion of the modern workforce is employed in jobs that even the workers themselves secretly believe are pointless.
          </p>
        </DialogueBlock>

        <StatCallout 
          number="37%" 
          label="of British workers felt their jobs didn't contribute meaningfully to the world"
        />

        <DialogueBlock speaker="mary">
          <p className="mb-4">
            The thing is, it's not like these bullshit jobs—the email forwarding, the meeting scheduling for meetings that should have been emails—are what we're supposed to be doing. They are not our natural state.
          </p>
          <p>
            What AI is doing—right now, in our company, and in thousands of others—is not eliminating meaningful work. It's eliminating the busywork that accreted around meaningful work like barnacles on a hull.
          </p>
        </DialogueBlock>

        <StatCallout 
          number="57%" 
          label="of time spent communicating (meetings, email, chat) vs. 43% actually creating"
        />

        <SectionDivider />

        {/* Part Three - Timeline */}
        <Timeline />

        <SectionDivider />

        {/* Part Five - Predictions */}
        <ScrollFadeIn>
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold mb-8 text-center">
            Part Five — What Might Come Next
          </h2>
          <p className="text-center text-cream/70 mb-12 italic">
            Since everyone is making predictions, we'll add our fuel to the fire.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="space-y-8 mb-12">
            <div className="border-l-4 border-gold/40 pl-6">
              <h3 className="font-cormorant text-2xl text-gold mb-2">Venture Capital disrupts itself</h3>
              <p className="text-cream/80 leading-relaxed">
                Deep tech will always need capital, but the rest of us? Maybe not. Consumer-facing companies can leave that hamster wheel behind.
              </p>
            </div>

            <div className="border-l-4 border-gold/40 pl-6">
              <h3 className="font-cormorant text-2xl text-gold mb-2">A Million Start-ups Bloom</h3>
              <p className="text-cream/80 leading-relaxed">
                The next decade might be a fertile garden of people starting companies to solve problems big and small, with small teams empowered by agents.
              </p>
            </div>

            <div className="border-l-4 border-gold/40 pl-6">
              <h3 className="font-cormorant text-2xl text-gold mb-2">People Pursue Passions (Again)</h3>
              <p className="text-cream/80 leading-relaxed">
                If deflationary effects take hold, a huge amount of previously "uneconomic work" might become viable—music, arts, local businesses, even parenthood.
              </p>
            </div>

            <div className="border-l-4 border-gold/40 pl-6">
              <h3 className="font-cormorant text-2xl text-gold mb-2">Deep Research Becomes a Core Pillar</h3>
              <p className="text-cream/80 leading-relaxed">
                If ad-targeting work can be turned over to AI, deep research can attract hearts, minds and financing, supported by frontier tools.
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <p className="text-cream/90 leading-relaxed text-center italic mb-12">
            We believe there is a greater chance of this positive cycle outcome than a negative one.
          </p>
        </ScrollFadeIn>

        <SectionDivider />

        {/* Part Six - What to Do */}
        <ScrollFadeIn>
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold mb-8 text-center">
            A Better World is Possible<br/>but Transition Will Be Rough
          </h2>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <h3 className="font-cormorant text-2xl md:text-3xl text-gold mb-6 mt-12">
            What Government Needs to Do
          </h3>
          <ul className="space-y-4 mb-12 list-disc list-inside text-cream/90">
            <li className="leading-relaxed">
              <strong className="text-gold">Extend and strengthen unemployment insurance</strong> — Maximum eligibility to 12 months with significantly increased payouts
            </li>
            <li className="leading-relaxed">
              <strong className="text-gold">Consider wage insurance</strong> — Pays workers a supplement if they take a new job at lower pay
            </li>
            <li className="leading-relaxed">
              <strong className="text-gold">Invest in education and retraining</strong> — Continue to provide and decrease the cost of education
            </li>
          </ul>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <h3 className="font-cormorant text-2xl md:text-3xl text-gold mb-6">
            What Private Enterprise Needs to Do
          </h3>
          <p className="mb-6 text-cream/90 leading-relaxed">
            As AI saturates our working systems, productivity will rise and profits will follow. But we need to find a way for those gains to translate into deflation in consumer prices, not just margin expansion for shareholders.
          </p>
          <p className="mb-12 text-cream/90 leading-relaxed">
            The best thing large companies can do is not lobby for regulatory moats that protect them from the very disruption that would benefit consumers.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <h3 className="font-cormorant text-2xl md:text-3xl text-gold mb-6">
            What Individuals Can Do
          </h3>
          <div className="space-y-6 mb-12">
            <div>
              <h4 className="text-gold font-semibold mb-2">First, learn these tools</h4>
              <p className="text-cream/80 leading-relaxed">
                No matter what, fluency with AI is going to be essential. Don't just use it as a search engine. Push it into your actual work.
              </p>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-2">Second, meet your neighbors</h4>
              <p className="text-cream/80 leading-relaxed">
                This is a time to build community. If AI is going to make more things efficient, the inefficient, irreplaceable warmth of human connection becomes more valuable, not less.
              </p>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-2">Third, follow your passions</h4>
              <p className="text-cream/80 leading-relaxed">
                This is a time when you can create things at a level and at a scale that was never before possible in human history. Take advantage of it early and often.
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        <SectionDivider />

        {/* Conclusion */}
        <ScrollFadeIn>
          <h2 className="font-cormorant text-4xl md:text-5xl text-gold mb-8 text-center">
            Conclusion
          </h2>
          <p className="mb-6 text-cream/90 leading-relaxed">
            We are not techno-evangelists, nor are we doomers. We are just relating what we are seeing in real life, right in front of us.
          </p>
          <p className="mb-6 text-cream/90 leading-relaxed">
            What we see is, without question, one of the greatest shifts humanity is going to experience. Life on the other side of this will be profoundly different from life before—whether that's a 5-, 10-, or 50-year transition, we're not sure. But it's happening now, and it's accelerating.
          </p>
          <p className="mb-6 text-cream/90 leading-relaxed font-semibold text-lg">
            We firmly believe this transition can be a net positive.
          </p>
          <p className="mb-6 text-cream/90 leading-relaxed">
            And this is most true for artists and creators who embrace the shift instead of fearing it. We believe we're going to see an era of opportunity unlike anything in human history.
          </p>
          <p className="mb-12 text-cream/90 leading-relaxed">
            But the structural transitional challenges are real too, and there's a good chance they're going to be dramatic. Let's dial back the hyperventilation. Let's resist the urge to make reactionary policy out of speculative Substack fiction. And let's get to work—the new kind of work—because these next few years might be defining for many, many generations to come.
          </p>
        </ScrollFadeIn>

        <SectionDivider />

        {/* Further Reading */}
        <FurtherReading />

        {/* Closing signature */}
        <ScrollFadeIn delay={0.3}>
          <div className="py-20 text-center">
            <div className="flex justify-center gap-12 mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold/40">
                <Image
                  src="/images/william.jpg"
                  alt="William"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  style={{ filter: 'invert(1) brightness(0.95) sepia(0.2) hue-rotate(15deg)' }}
                />
              </div>
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold/40">
                <Image
                  src="/images/mary.jpg"
                  alt="Mary"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  style={{ filter: 'invert(1) brightness(0.95) sepia(0.2) hue-rotate(15deg)' }}
                />
              </div>
            </div>
            <p className="font-cormorant text-3xl text-gold italic">
              — William & Mary
            </p>
          </div>
        </ScrollFadeIn>

      </article>
    </main>
  );
}
