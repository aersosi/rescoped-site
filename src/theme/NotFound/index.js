import React from 'react';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import Obfuscate from 'react-obfuscate';
import { Reveal } from 'react-awesome-reveal';
import { fadeUpProps, customKeyframes } from '@aersosi/shared/doku_libs/props/fadeAnimation';
import PixiComp from '@site/src/components/PixiComp';

import GlobeDots from '@site/static/img/globe_dots.webp';
import GlobeLines from '@site/static/img/globe_lines.svg';
import cloudDisplace from '@site/static/img/DP_03.webp';

export default function NotFound() {
  return (
    <>
      <PageMetadata title="Page Not Found" />
      <Layout>
        <main className="px-4 sm:px-8 md:px-16 mx-auto py-40 lg:py-16 bg-dots flex flex-col gap-4">
          <article className="grid-container place-items-center lg:px-8 xl:px-24">
            <div className="absolute mdlg:relative grid w-full max-w-[calc(18rem+15vw)] lg:max-w-[calc(24rem+15vw)]  h-fit right-0 top-16 mdlg:top-auto">
              <div className="lg:p-[10%] pixiParentSelector">
                <GlobeLines className="opacity-20 mdlg:opacity-50" />
                <PixiComp
                  extraStyles="p-[7%] lg:p-[15%] -translate-x-[2%] opacity-20 mdlg:opacity-100"
                  bgImg={GlobeDots}
                  dispImg={cloudDisplace}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-8 text-center sm:text-left">
              <Reveal keyframes={customKeyframes} {...fadeUpProps} className={'ease-out'}>
                <h1 className="text-3xl sm:text-5xl !leading-tight font-medium text-avo-pink-pink">
                  Error 404
                </h1>
                <h2 className="text-xl leading-normal">
                  Sorry, the page you were looking for could not be found.
                </h2>
                <p className="text-md leading-relaxed	">
                  You can return to our <a href="/">home page</a>, or{' '}
                  <Obfuscate linkText="contact us" email="rescoped@avodaq.com" /> if you can’t find
                  what you are looking for.
                </p>
              </Reveal>
            </div>
          </article>
        </main>
      </Layout>
    </>
  );
}
