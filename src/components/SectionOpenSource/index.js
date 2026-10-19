import React from 'react';
import { Reveal } from 'react-awesome-reveal';
import { fadeUpProps, customKeyframes } from '@aersosi/shared/doku_libs/props/fadeAnimation';
import PixiComp from '@site/src/components/PixiComp';

import Button from '@site/src/components/Button';
import GlobeDots from '@site/static/img/globe_dots.webp';
import GlobeLines from '@site/static/img/globe_lines.svg';
import cloudDisplace from '@site/static/img/DP_03.webp';

export default function SectionOpenSource() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 mx-auto py-32 bg-dots" id="section-open-source">
      <article className="grid-container place-items-center lg:px-8 xl:px-24">
        <div className="absolute mdlg:relative grid w-full max-w-[calc(24rem+15vw)] h-fit right-0 top-16 mdlg:top-auto">
          <div className="lg:p-[10%] pixiParentSelector">
            <GlobeLines className="opacity-20 mdlg:opacity-50" />
            <PixiComp
              extraStyles="p-[7%] lg:p-[15%] -translate-x-[2%] opacity-20 mdlg:opacity-100"
              bgImg={GlobeDots}
              dispImg={cloudDisplace}
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-16 lg:gap-24">
          <Reveal keyframes={customKeyframes} {...fadeUpProps} className={'ease-out'}>
            <h2 className="text-3xl !leading-tight font-normal sm:font-light pr-8 sm:pr-16">
              Open-source is our focus <br />— not a feature
            </h2>
            <div>
              <h3 className="font-medium text-lg mb-24 text-avo-pink-pink">What we stand for</h3>
              <p className="text-md md:text-base max-w-[74ch] mb-4">
                There are so many good things happening in the open source world right now. We want
                to be part of this movement, and we want to promote and support the open source
                community, within our means. We strongly believe in open source and the benefits it
                can bring to organizations and individuals.
              </p>
              <p className="text-md md:text-base max-w-[74ch]">
                Even decision makers and managers have now been convinced and that’s why we
                initiated rescoped from within our company avodaq, an innovative IT service
                provider. The community knows that opening projects to the public is not only
                legitimate and necessary, but also successful. Now is the perfect time to act.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-16 items-center">
              <p className="text-md md:text-base max-w-[28ch]">Want to know more?</p>
              <Button text={'Get to know us'} link={'/news/'} />
            </div>
          </Reveal>
        </div>
      </article>
    </section>
  );
}
