/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import clsx from 'clsx';
import ReLogoAdapt from '@aersosi/shared/doku_libs/static/img/rescoped_logo_adapt_vert.svg';
import Dots from '@site/static/img/DOTS_01.svg';
import Obfuscate from 'react-obfuscate';

function Footer() {
  const { footer } = useThemeConfig();

  if (!footer) {
    return null;
  }

  const { copyright, links, logo, style } = footer;

  return (
    <>
      <footer
        className={clsx('footer px-4 sm:px-8 md:px-16 py-16 md:py-32 relative', {
          'footer--dark': style === 'dark',
        })}
        id="section-contact"
      >
        <div className="absolute inset-x-4 sm:inset-x-8 md:inset-x-16 inset-y-[4.75rem] md:inset-y-[8.5rem] flex flex-col-reverse md:flex-row gap-32 items-end md:justify-between pointer-events-none">
          <ReLogoAdapt title="rescoped Logo" className="relogo h-full w-24 md:w-auto" />
          <div className="w-20 h-20 mb-auto mr-[1.5rem] md:mr-0">
            <Dots className="h-full w-24 md:w-auto" />
          </div>
        </div>

        <div className="flex flex-col gap-16 md:ml-[calc(33%-3rem)] xl:ml-[calc(33%-4rem)]">
          <h2 className="text-3xl !leading-tight font-normal sm:font-light pr-8 sm:pr-16 text-avo-pink-pink">
            Contact
          </h2>
          <FooterLinks links={links} />
          <div className="flex flex-col gap-4">
            <h3 className="text-md font-light ifm-font-color-base">Contact me via e-mail</h3>
            <span>
              <Obfuscate email="hello@aersosi.com" />
            </span>
          </div>
        </div>
      </footer>
      <div className="flex pb-8 px-4 sm:px-8 md:px-16 relative bg-theme-dark text-center">
        <div className="re-gradient"></div>
      </div>
    </>
  );
}

export default React.memo(Footer);
