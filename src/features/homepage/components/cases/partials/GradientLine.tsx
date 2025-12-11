'use client';

interface GradientLineProps {
  text: string;
  startIndex: number;
  setRef: (index: number) => (el: HTMLSpanElement | null) => void;
}

export function GradientLine({ text, startIndex, setRef }: GradientLineProps) {
  return (
    <>
      {text.split('').map((char, i) => (
        <span
          key={`${startIndex}-${i}`}
          ref={setRef(startIndex + i)}
          className="inline-block pointer-events-none cases-font"
          style={{ color: '#1f2937' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
}

