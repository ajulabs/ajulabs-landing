'use client';

import { useAbout } from './useAbout';

export function AboutView() {
    const {
        about,
        headlineRef,
        letterRefs,
        handleMouseMove,
        handleMouseLeave,
    } = useAbout();

    return (
        <section id="about" className="relative w-full bg-white pt-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div>
                    <div className="flex items-center gap-3 pt-2 mb-6 lg:mb-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        <h2 className="text-gray-800 text-sm font-medium tracking-wider uppercase services-font">
                            {about.sectionTitle}
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 mt-2">
                        <div>
                            <h3
                                ref={headlineRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="text-2xl md:text-2xl xl:text-3xl services-font font-medium leading-tight mb-2 md:mb-4 relative cursor-default inline-block"
                                style={{ pointerEvents: 'auto', zIndex: 2 }}
                            >
                                {about.headline.line1.split('').map((char, index) => (
                                    <span
                                        key={`line1-${index}`}
                                        ref={(el) => {
                                            letterRefs.current[index] = el;
                                        }}
                                        className="inline-block"
                                        style={{ color: '#1f2937', pointerEvents: 'none' }}
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </span>
                                ))}
                                <br />
                                {about.headline.line2.split('').map((char, index) => (
                                    <span
                                        key={`line2-${index}`}
                                        ref={(el) => {
                                            letterRefs.current[about.headline.line1.length + index] = el;
                                        }}
                                        className="inline-block"
                                        style={{ color: '#1f2937', pointerEvents: 'none' }}
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </span>
                                ))}
                            </h3>
                            <p className="text-gray-500 text-base md:text-lg leading-relaxed services-font">
                                {about.subtitle.line1}
                                <br />
                                {about.subtitle.line2}
                            </p>
                        </div>
                        <div className='text-left '>
                            <h2 className='text-[#3E3E40]'>{about.paragraphs.line1}</h2>
                            <h2 className='text-[#3E3E40]'>{about.paragraphs.line2}</h2>
                            <h2 className='text-[#3E3E40]'>{about.paragraphs.line3}</h2>
                            <h2 className='text-[#3E3E40]'>{about.paragraphs.line4}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}