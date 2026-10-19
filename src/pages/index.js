import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomepageHeader from '@site/src/components/HomepageHeader';
import Main from '@site/src/components/Main';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const consoleLogStyle = [
    'background-color: #000000',
    'color: white',
    'display: block',
    'line-height: 24px',
    'text-align: center',
    'border: 1px solid #ffffff',
    'font-weight: bold',
  ].join(';');

  console.info('dev by: %c Arthur Ersosi ', consoleLogStyle);

  return (
    <Layout
      description="Don't miss our new rescoped datagrid. It's feature-rich, free, open source, and performs even
    with over 100,000 datasets. Join our talented team to develop the tools you want."
    >
      <HomepageHeader />
      <Main />
    </Layout>
  );
}
