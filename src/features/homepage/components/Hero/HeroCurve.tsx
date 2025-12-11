'use client';

import Image from 'next/image';
import heroCurve from '../../../../../public/curve.png';

export const HeroCurve = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
      <Image src={heroCurve} alt="Hero Curve"/>        
    </div>
  );
};