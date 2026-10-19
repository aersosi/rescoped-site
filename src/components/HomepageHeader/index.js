import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

import { Reveal, Fade } from 'react-awesome-reveal';
import { fadeUpProps, fadeProps, customKeyframes } from '@aersosi/shared/doku_libs/props/fadeAnimation';

import PixiComp from '@site/src/components/PixiComp';
import Button from '@site/src/components/Button';
import Dots2 from '@site/static/img/DOTS_02.svg';
import ReLogoAdapt from '@aersosi/shared/doku_libs/static/img/rescoped_logo_adapt.svg';
import cloudDisplace from '@site/static/img/DP_03.webp';
import abstractBG from '@site/static/img/BGimg_04_upscaled.webp';
import maskBorder from '@site/static/img/MaskImg.webp';
// import abstractBG from '@site/static/img/BGimg_04_upscaled_01.webp';
// import abstractBG from '@site/static/img/BGimg_04_upscaled_02.webp';

export default function HomepageHeader() {
  return (
    <>
      <header
        id="section-header"
        className="relative px-4 sm:px-8 md:px-16 pt-8 md:pt-24 pb-8 md:pb-24 overflow-hidden bg-theme"
      >
        {/*<img src={abstractBG} alt="" className="absolute inset-16"/>*/}

        <Fade {...fadeProps} delay={750} className={styles.pixiRef}>
          <PixiComp
            bgImg={abstractBG}
            dispImg={cloudDisplace}
            // maskImg={maskBorder}
            extraStyles={
              'min-w-[1024px] sm:!inset-0 md:!inset-y-[4rem] md:!inset-x-[7rem] opacity-90'
            }
            separateRGB="true"
          />
        </Fade>

        <div className="flex flex-col gap-12 relative">
          <Reveal keyframes={customKeyframes} {...fadeUpProps}>
            <div className="flex justify-between -mb-8">
              <div>
                <p className="text-lg font-bold mb-4 text-avo-pink-pink">
                  Let’s make good even better
                </p>
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl !leading-tight font-normal font-light pr-8 sm:pr-16">
              Advanced solutions <br className="hidden md:block" /> for leading engineers.
            </h1>
            <div className="flex flex-col sm:flex-row gap-8 text-center sm:text-left">
              <Button text={'About Datagrid'} link={'#section-solutions'} />
              <Button text={'Get started'} link={'/docs/datagrid/datagrid-introduction/'} />
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 md:mt-24">
            <Fade {...fadeProps} delay={1000}>
              <Dots2 className="hidden sm:block h-[4rem] md:h-[5.75rem] w-auto absolute bottom-[0.35rem] right-0 md:left-0 rotate-[270deg] md:rotate-0" />
              <div className="w-[14rem] sm:w-[18rem] md:w-[24rem] md:absolute md:bottom-0 md:right-0">
                <ReLogoAdapt title="rescoped Logo" className="relogo mt-auto" />
              </div>
              <p
                className={clsx(
                  'font-bold text-md md:text-base absolute bottom-5 sm:top-2 right-0 sm:-mr-3',
                  styles.md_verticalLR,
                )}
              >
                <span>Find us on </span>
                <a href="https://github.com/avodaq/rescoped" target="_blank">
                  GitHub
                </a>
                <span> – MIT licensed</span>
              </p>
            </Fade>
          </div>
        </div>
      </header>
    </>
  );
}
