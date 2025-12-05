'use client';

import { useHomeViewModel } from '@/features/homepage/viewModels/useHomeViewModel';
import { useHeadlineEffect } from '@/lib/hooks/useHeadlineEffect';

export function useAbout() {
    const { about } = useHomeViewModel();
    const { headlineRef, letterRefs, handleMouseMove, handleMouseLeave } = useHeadlineEffect(about.headline);

    return {
        about,
        headlineRef,
        letterRefs,
        handleMouseMove,
        handleMouseLeave,
    };
}
