import React from 'react';
import PixiComp from '@site/src/components/PixiComp';
import BGimg from '@site/static/img/BGimg_04_upscaled.webp';
import cloudDisplace from '@site/static/img/DP_03.webp';

export default function DividerImage() {
  return (
    <div className="px-4 sm:px-8 md:px-16 mx-auto">
      <div className="flex flex-col -mx-4 sm:-mx-[2rem] md:-mx-[4rem]">
        <div className="hidden sm:flex sm:h-16">
          <div className="w-full sm:w-4/12 bg-avo-green-green" />
          <div className="sm:w-9/12" />
        </div>
        <div className="flex h-60 md:h-80 bg-theme-dark">
          <div className="sm:w-4/12" />
          <div className="w-full sm:w-9/12 relative pixiParentSelector">
            <PixiComp
              extraStyles="absolute inset-0 w-full opacity-90 bg-avo-pink-pink"
              bgImg={BGimg}
              dispImg={cloudDisplace}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
