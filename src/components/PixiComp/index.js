import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function PixiComp({
  bgImg,
  dispImg,
  // maskImg,
  extraStyles,
  separateRGB,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const PIXI = require('pixi.js');
      const gsap = require('gsap');
      let dataRGB = ref.current.getAttribute('data-rgb');

      let rt = [],
        bg,
        bgs = [],
        rts = [],
        containers = [],
        channelsContainer = [],
        displacementFilters = [],
        brushes = [];

      // CHANNEL FILTERS
      if (dataRGB) {
        let redChannelFilter = new PIXI.filters.ColorMatrixFilter();
        redChannelFilter.matrix = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        let greenChannelFilter = new PIXI.filters.ColorMatrixFilter();
        greenChannelFilter.matrix = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        let blueChannelFilter = new PIXI.filters.ColorMatrixFilter();
        blueChannelFilter.matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        channelsContainer.push(redChannelFilter, greenChannelFilter, blueChannelFilter);
      } else {
        let redChannelFilter = new PIXI.filters.ColorMatrixFilter();
        channelsContainer.push(redChannelFilter);
      }

      // On first render create application
      const app = new PIXI.Application({
        autoResize: true,
        backgroundAlpha: 0,
        width: 1440,
        height: 960,
      });

      let renderTexture = PIXI.RenderTexture.create({
        width: app.screen.width,
        height: app.screen.height,
      });

      for (let i = 0; i < 3; i++) {
        rt.push(renderTexture);
        rts.push(rt);
      }

      // CONTAINERS

      if (dataRGB) {
        let containerRed = new PIXI.Container();
        containerRed.position.x = 0;
        let containerGreen = new PIXI.Container();
        containerGreen.position.x = 0;
        let containerBlue = new PIXI.Container();
        containerBlue.position.x = 0;
        containers.push(containerRed, containerGreen, containerBlue);
      } else {
        let containerRed = new PIXI.Container();
        containerRed.position.x = 0;
        containers.push(containerRed);
      }

      // LOAD TEXTURES
      app.loader.add('bg', ref.current.getAttribute('data-img'));
      app.loader.add('displacement', ref.current.getAttribute('data-displace'));
      // app.loader.add('maskImg', ref.current.getAttribute('data-mask'));

      // LOADER
      app.loader.load((loader, resources) => {
        let tempBg = new PIXI.Sprite(resources.bg.texture);
        tempBg.anchor.set(0.5);
        tempBg.x = app.screen.width / 2; // position at center
        tempBg.y = app.screen.height / 2; // position at center
        // tempBg.width = app.screen.width * 0.95;
        // tempBg.height = app.screen.height * 0.95;

        tempBg.width = app.screen.width;
        tempBg.height = app.screen.height;

        // mask stage
        // let maskImg = new PIXI.Sprite(resources.maskImg.texture);
        // maskImg.width = app.screen.width;
        // maskImg.height = app.screen.height;
        // app.stage.addChild(maskImg)
        // app.stage.mask = maskImg;

        app.renderer.render(tempBg, { renderTexture });

        for (let i = 0, len = containers.length; i < len; i++) {
          app.stage.addChild(containers[i]);
          let tempBrush = new PIXI.Sprite(resources.displacement.texture);
          brushes.push(tempBrush);

          let displacementFilter = new PIXI.filters.DisplacementFilter(brushes[i]);
          displacementFilters.push(displacementFilter);

          bg = new PIXI.Sprite(rts[0][0]);
          bgs.push(bg);
          containers[i].filters = [channelsContainer[i], displacementFilters[i]];
          containers[i].addChild(bgs[i], brushes[i]);
        }

        if (dataRGB) {
          brushes[0].anchor.set(0.5);
          brushes[1].anchor.set(0.6);
          brushes[2].anchor.set(0.4);

          app.ticker.add(function (delta) {
            brushes[0].rotation -= 0.005 * delta;
            brushes[1].rotation -= 0.005 * delta;
            brushes[2].rotation -= 0.005 * delta;
          });

          containers[1].filters[1].blendMode = PIXI.BLEND_MODES.ADD;
          containers[2].filters[1].blendMode = PIXI.BLEND_MODES.ADD;
        } else {
          brushes[0].anchor.set(0.8);

          app.ticker.add(function (delta) {
            brushes[0].rotation -= 0.005 * delta;
          });
        }

        app.stage.interactive = true;

        const mouseMove = () => {
          app.stage.on('pointermove', ev => {
            for (let i = 0, len = containers.length; i < len; i++) {
              gsap.gsap.to(displacementFilters[i].scale, {
                duration: 1,
                x: 80,
                y: 80,
                ease: 'power2.easeInOut',
              });
              gsap.gsap.to(brushes[i].position, {
                duration: 1.5,
                x: ev.data.global.x.toFixed(0),
                y: ev.data.global.y.toFixed(0),
                ease: 'power2.easeInOut',
              });
            }
          });
        };

        let pixiElms = document.querySelectorAll('.pixiParentSelector [class^="pixiRef"]');
        pixiElms.forEach(elm => elm.addEventListener('mouseenter', mouseMove));
        pixiElms.forEach(elm => mouseMove(elm));

        const headerElm = document.querySelector('#section-header');
        headerElm.addEventListener('mouseenter', mouseMove);
        mouseMove(headerElm);
      });

      // Add app to DOM
      ref.current.appendChild(app.view);
      app.start();

      return () => {
        app.destroy(true, true);
      };
    }
  }, [ref]);

  return (
    <div className="">
      <div
        ref={ref}
        className={clsx('', styles.pixiRef, extraStyles)}
        data-img={bgImg}
        data-displace={dispImg}
        // data-mask={maskImg}
        data-rgb={separateRGB}
      />

      {/*<div className={clsx('absolute min-w-[1024px] sm:!inset-0 md:!inset-y-[4rem] md:!inset-x-[7rem]', styles.hallo22)}></div>*/}
    </div>
  );
}
