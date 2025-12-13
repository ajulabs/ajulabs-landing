"use client";
import { useHomeViewModel } from '@/features/homepage/viewModels/useHomeViewModel';
import { AnimatedCountUp } from '@/shared/CountUp';

export function AboutCards() {
    const { about } = useHomeViewModel();

    return (
        <div className='relative flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-6 w-full xl:w-auto xl:max-w-[1300px] xl:[&:has(.last-card:hover)>*:not(.last-card)]:-translate-x-[40px] 2xl:[&:has(.second-card:hover)>.first-card]:-translate-x-[20px] '>
                {about.cards.map((card, index) => {
                    const isLast = index === about.cards.length - 1;
            
                    return (
                        <div
                            key={index}
                            className={`
                                group relative flex flex-col 
                                bg-white p-6 md:p-8
                                border border-gray-100 rounded-4xl shadow-lg
                                min-h-[240px] md:min-h-[260px]
                                gap-6 md:gap-8
                                justify-evenly xl:justify-between items-center xl:items-end 
                                hover:bg-black hover:text-white
                                transition-all duration-700 ease-in-out xl:duration-700
                                ${index === 0 ? 'first-card  hover:scale-[1.08] ' : ''}
                                ${index === 1 ? `
                                second-card
                                2xl:relative
                                2xl:z-10
                                2xl:overflow-visible
                                2xl:min-w-[320px]

                                2xl:transition-all
                                2xl:duration-1000
                                2xl:ease-[cubic-bezier(0.16,1,0.3,1)]

                                2xl:hover:-translate-x-[0px]
                                2xl:hover:min-w-[420px]

                                2xl:before:content-['']
                                2xl:before:absolute
                                2xl:before:-inset-[1px]
                                2xl:before:bg-inherit
                                2xl:before:rounded-4xl
                                2xl:before:z-[-1]

                                2xl:before:translate-x-[356px]
                                2xl:before:transition-all
                                2xl:before:duration-1000
                                2xl:before:ease-[cubic-bezier(0.16,1,0.3,1)]

                                2xl:hover:before:translate-x-0

                                2xl:after:content-['']
                                2xl:after:absolute
                                2xl:after:top-0
                                2xl:after:right-[-60px]
                                2xl:after:w-[60px]
                                2xl:after:h-full
                                2xl:after:pointer-events-auto
                                2xl:after:bg-transparent
                            ` : ''}

                                ${isLast
                                    ? 'last-card relative overflow-hidden xl:z-50 md:col-span-2 xl:col-span-1 xl:w-[430px] xl:origin-right xl:hover:scale-x-[1.10]'
                                    : 'xl:w-[320px]'
                                }
                            `}
                        >
                            <h3 className={`
                                relative z-10 xl:text-right antialiased
                                services-font font-light group-hover:font-medium
                                transition-all duration-500 ease-in-out
                                text-4xl md:text-5xl xl:text-5xl 2xl:text-5xl
                            `}>
                                <AnimatedCountUp end={card.value} prefix={card.prefix} suffix={card.suffix} duration={2.5} />
                            </h3>
                            <p className="
                                relative z-10 xl:text-right
                                text-sm max-w-[350px] text-center
                                text-[#676767] group-hover:text-white
                                services-font
                                transition-all duration-500 ease-in-out
                            ">
                                {card.description}
                            </p>
                        </div>
                    );
                })}
            </div>
    );
}