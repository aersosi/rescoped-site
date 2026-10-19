import React from 'react';
import styles from './styles.module.scss';
import SkygridImg from '@site/static/img/skygrid_screenshot_dark.webp';

export default function LightBox({ setIsOpen }) {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <img src={SkygridImg} className="rounded-lg" alt="Skygrid screenshot" loading="lazy" />
      </div>
      <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 2.41714L21.5829 0L12 9.58286L2.41714 0L0 2.41714L9.58286 12L0 21.5829L2.41714 24L12 14.4171L21.5829 24L24 21.5829L14.4171 12L24 2.41714Z"
            fill="black"
          />
        </svg>
      </button>
    </>
  );
}
