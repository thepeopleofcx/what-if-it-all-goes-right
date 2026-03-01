'use client';

import Image from 'next/image';
import ScrollFadeIn from './ScrollFadeIn';

interface DialogueBlockProps {
  speaker: 'william' | 'mary';
  children: React.ReactNode;
}

export default function DialogueBlock({ speaker, children }: DialogueBlockProps) {
  const isWilliam = speaker === 'william';
  
  return (
    <ScrollFadeIn 
      direction={isWilliam ? 'left' : 'right'}
      className="my-12"
    >
      <div className={`flex gap-8 items-start ${!isWilliam ? 'flex-row-reverse' : ''} max-w-4xl ${!isWilliam ? 'ml-auto' : ''}`}>
        {/* Portrait */}
        <div className="flex-shrink-0 w-20 md:w-24 lg:w-32">
          <div className="rounded-full overflow-hidden border-2 border-gold/30 p-1 bg-dark-bg-alt">
            <Image
              src={`/images/${speaker}.jpg`}
              alt={speaker === 'william' ? 'William' : 'Mary'}
              width={128}
              height={128}
              className="w-full h-full object-cover rounded-full"
              style={{ filter: 'invert(1) brightness(0.95) sepia(0.2) hue-rotate(15deg)' }}
            />
          </div>
        </div>

        {/* Content */}
        <div className={`flex-1 ${isWilliam ? 'border-l-2 border-gold/40 pl-6' : 'border-r-2 border-gold/40 pr-6 text-right'}`}>
          <p className="font-cormorant text-sm md:text-base text-gold mb-3 tracking-widest uppercase">
            {speaker === 'william' ? 'William' : 'Mary'}
          </p>
          <div className="prose prose-invert prose-lg max-w-none">
            {children}
          </div>
        </div>
      </div>
    </ScrollFadeIn>
  );
}
