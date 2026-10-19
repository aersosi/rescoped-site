import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import ArrowMD from '@site/static/img/arrow_md.svg';

export default function Button({
  text,
  link,
  colorOverride = 'shadow-avo-pink-pink/20 bg-avo-pink-pink',
}) {
  return (
    <button className="overflow-hidden w-fit">
      <Link
        to={link}
        className={clsx(
          'relative inline-flex items-center justify-center px-10 py-4 leading-4 overflow-hidden transition rounded-full group shadow-md',
          colorOverride,
        )}
      >
        <span
          className={clsx(
            'absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease',
            colorOverride,
          )}
        >
          <ArrowMD className="h-6 w-auto" />
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-white	font-medium text-md md:text-base transition duration-300 group-hover:opacity-0 ease">
          {text}
        </span>
        <span className="relative invisible">{text}</span>
      </Link>
    </button>
  );
}
