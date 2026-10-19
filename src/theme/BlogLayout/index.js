import React from 'react';
import Layout from '@theme/Layout';
import BlogComp from '@site/src/components/BlogComp';

export default function BlogLayout(props) {
  const { sidebar, toc, children, ...layoutProps } = props;
  return (
    <Layout
      {...layoutProps}
      title="News"
      description="In our news section, you can always stay up to date with our latest news and releases."
    >
      <BlogComp sidebar={props.sidebar} toc={props.toc} children={props.children}></BlogComp>
    </Layout>
  );
}
