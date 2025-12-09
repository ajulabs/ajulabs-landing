"use client";
import { useHomeViewModel } from '@/features/homepage/viewModels/useHomeViewModel';

export function AboutCards() {

    const { about } = useHomeViewModel();
    const isLastCard = (index: number) => index === about.cards.length - 1;

    return (
        <div className='flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-6 w-full xl:w-auto xl:max-w-[1200px] xl:[&:has(.last-card:hover)>*:not(.last-card)]:-translate-x-[30px]'>
            {about.cards.map((card, index) => (
                <div 
                    key={index} 
                    className={`
                        relative flex flex-col overflow-visible 
                        ${index === 0 ? `before:content-[''] before:absolute before:inset-0 before:bg-black before:z-0 before:rounded-4xl before:w-[80%] before:h-[80%] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-0  before:transition-all before:duration-800 before:ease-out
                        hover:before:w-[108%] hover:before:h-[108%]   
                        hover:before:opacity-100` : ''}
                        ${index === 1 ? 'flex-col-reverse' : ''} 
                        bg-white p-6 md:p-8 
                        border border-gray-100 rounded-4xl shadow-lg 
                        min-h-[240px] md:min-h-[260px]
                        ${isLastCard(index) ? 'xl:min-h-[290px] xl:min-w-[430px]' : 'xl:min-h-[270px] xl:min-w-[320px]'}
                        gap-6 md:gap-8 
                        justify-evenly xl:justify-between items-center xl:items-end
                        hover:bg-black transition-all duration-500 ease-in-out transform hover:text-white
                        ${isLastCard(index) ? 'md:col-span-2 xl:col-span-1' : ''}
                        ${isLastCard(index) ? "last-card xl:origin-right xl:hover:scale-x-[1.10] xl:transition-all xl:duration-700" : ""}
                        ${!isLastCard(index) ? "xl:transition-all xl:duration-700" : ""}
                    `}
                >
                    <h3 className={` relative z-10 xl:text-right
                        services-font font-normal transition-all duration-500 ease-in-out text-center 
                        ${isLastCard(index) ? 'text-4xl md:text-5xl xl:text-6xl 2xl:text-5xl' : 'text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl'}
                    `}>
                        {card.title}
                    </h3>
                    <p className={` relative z-10 xl:text-right
                        services-font transition-all duration-500 ease-in-out text-center
                        ${isLastCard(index) ? 'text-sm md:text-base xl:text-lg' : 'text-sm md:text-base'}
                    `}>
                        {card.description}
                    </p>
                </div>
            ))}
        </div>
    )
}