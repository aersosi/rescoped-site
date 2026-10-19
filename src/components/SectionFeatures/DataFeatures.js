const React = require('react');
export const DataFeatures = [
  {
    title: 'Robust & optimized',
    Svg: require('@site/static/img/ico_reliable.svg').default,
    description: (
      <>
        Our goal is to deliver great products and a compelling experience for developers. We ensure
        best code quality, strictly typed and thoroughly tested.
      </>
    ),
  },
  {
    title: 'Scalable',
    Svg: require('@site/static/img/ico_scalable.svg').default,
    description: (
      <>
        With our monorepo we provide centralized management and control that makes it easy to keep
        track of changes, dependencies, and versions. The increased code reusage means less code
        needs to be written from scratch, easy updates and maintenance.
      </>
    ),
  },
  {
    title: 'Versatile & flexible',
    Svg: require('@site/static/img/ico_flexible.svg').default,
    description: (
      <>
        Because our solutions are designed to be data-agnostic, they can be reused in different
        applications. It's easy to switch between different data sources and meet specific
        requirements. We build for small projects, but also for enterprise deployments with multiple
        data sources.
      </>
    ),
  },
];
