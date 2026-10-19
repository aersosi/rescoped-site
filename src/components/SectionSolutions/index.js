import React, { useState } from 'react';
import { Reveal } from 'react-awesome-reveal';
import { fadeUpProps, customKeyframes } from '@aersosi/shared/doku_libs/props/fadeAnimation';
import Button from '@site/src/components/Button';
import LightBox from '@site/src/components/LightBox';
import SkygridImg from '@site/static/img/skygrid_screenshot_dark.webp';
import IconCheck from '@aersosi/shared/doku_libs/static/img/check_box.svg';
import styles from './styles.module.scss';
import clsx from 'clsx';

function Pill({ text }) {
  return (
    <p
      className={
        'flex items-center justify-center text-center text-xs font-bold rounded-full px-4 py-1 pt-[6px] border-2 border-avo-pink-pink'
      }
    >
      {text}
    </p>
  );
}

export default function SectionSolutions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="flex flex-col gap-4 sm:gap-16" id={'section-solutions'}>
        {isOpen && <LightBox setIsOpen={setIsOpen} />}
        <Reveal keyframes={customKeyframes} {...fadeUpProps} className={'ease-out'}>
          <h2 className="text-3xl !leading-tight font-normal sm:font-light pr-8 sm:pr-16">
            Our first
            <br />
            release
          </h2>
          <h3 className="font-medium text-lg mt-8 sm:mt-0 mb-8 text-avo-pink-pink">
            The rescoped datagrid
          </h3>
          <div className="flex flex-col md:flex-row gap-20">
            <div className="flex flex-col w-full lg:max-w-[55%]">
              <p className="text-md md:text-base  mb-16">
                Our datagrid is the
                <span className="font-bold"> CDK (Component Development Kit)</span> for your next
                Angular project. Why? Because you only{' '}
                <span className="font-bold">define your rules</span>, and the
                <span className="font-bold"> datagrid does the rest</span>.
              </p>
              <div className="flex flex-col gap-6 mb-12 leading-6	text-md md:text-base">
                <div>
                  <IconCheck className="w-[32px] h-full mr-2 inline" />
                  <p className="inline">Based on Angular-Material and Angular-CDK.</p>
                </div>
                <div>
                  <IconCheck className="w-[32px] h-full mr-2 inline" />
                  <p className="inline">
                    Performs well with large data sets, even with 100,000+ rows.
                  </p>
                </div>
                <div>
                  <IconCheck className="w-[32px] h-full mr-2 inline" />
                  <p className="inline">Easy setup through central configuration as JS Object.</p>
                </div>
                <div>
                  <IconCheck className="w-[32px] h-full mr-2 inline" />
                  <p className="inline">Plugin architecture enables full customisation.</p>
                </div>
                <div>
                  <IconCheck className="w-[32px] h-full mr-2 inline" />
                  <p className="inline">Themed out of the box.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 text-center sm:text-left">
                <Button
                  text={'Datagrid documentation'}
                  link={'/docs/datagrid/datagrid-introduction/'}
                />
                <Button text={'Skygrid App'} link={'https://rescoped.io/skygrid-app/'} />
              </div>
            </div>

            <div className="flex flex-col gap-8 w-full lg:max-w-[65%]">
              <div className={clsx('relative rounded-lg', styles.DatagridImg)}>
                <img
                  className="rounded-lg"
                  alt="Skygrid screenshot"
                  loading="lazy"
                  src={SkygridImg}
                  onClick={() => setIsOpen(true)}
                />
                <div
                  className={clsx(
                    'absolute inset-0 flex justify-center items-center bg-avo-green-green/30 rounded-lg pointer-events-none',
                    styles.overlay,
                  )}
                >
                  <span className="p-6 bg-black/30 h-content rounded-full">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className={'flex gap-4 flex-wrap justify-center'}>
                <Pill text={'Angular-Material'} />
                <Pill text={'Angular CDK'} />
                <Pill text={'TypeScript'} />
                <Pill text={'SCSS'} />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
