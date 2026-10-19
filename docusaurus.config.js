// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'rescoped.io',
  tagline: 'Advanced solutions for leading engineers',
  url: 'https://rescoped.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fav_re.svg',
  trailingSlash: true, //for GitHub
  organizationName: 'aersosi', // Usually your GitHub org/user name.
  projectName: 'rescoped-site', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  customFields: {
    version: '0.0.1',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: ['**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**'],
          mdxPageComponent: '@theme/MDXPage',
        },
        docs: {
          // To show "Edit this page" button in docs add a valid editUrl. Please change this to your repo.
          // editUrl: 'https://github.com/avodaq/rescoped/rescoped-site/',
        },
        blog: {
          routeBasePath: 'news',
          path: 'news',
          showReadingTime: true,
        },
        theme: {
          customCss: [
            require.resolve('./src/scss/tailwind.css'),
            require.resolve('./src/scss/styles.scss'),
          ],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: '/',
        // editUrl: 'https://github.com/avodaq/rescoped/rescoped-site/',
      },
    ],
    path.resolve(__dirname, 'plugin-tailwind-docusaurus'),
    'docusaurus-plugin-sass',
    // [
    //   'docusaurus-plugin-typedoc',
    //   {
    //     entryPoints: ['node_modules/@aersosi/shared/index.ts'],
    //     tsconfig: 'node_modules/@aersosi/shared/tsconfig.json',
    //     watch: process.env.TYPEDOC_WATCH,
    //     out: '02-datagrid/999-api-reference',
    //     sidebar: {
    //       categoryLabel: 'API refernece',
    //       position: 999,
    //       fullNames: false,
    //     },
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // keywords are not used by google anymore
      // metadata: [
      //   {
      //     name: 'keywords',
      //     content:
      //       'rescoped, datagrid, skygrid, avodaq, avodaq AG,' +
      //       'data grid, interactive grid, angular grid,' +
      //       'data table, interactive table, angular table,' +
      //       'angular, typescript, html, css, scss, node,' +
      //       'monorepo, frontend, backend, client side, server side, web, ui, components, plug-in, ' +
      //       'responsive, accessibility, mobile web, open source, open source software, oss',
      //   },
      // ],
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'rescoped logo short version',
          src: 'img/re_logo_compact.svg',
          srcDark: 'img/re_logo_compact_dark.svg',
          href: '/',
        },
        items: [
          {
            type: 'doc',
            docId: 'datagrid-introduction',
            position: 'right',
            label: 'Docs',
          },

          {
            type: 'dropdown',
            label: 'Guides',
            position: 'right',
            items: [
              {
                docsPluginId: 'guides',
                label: 'Contribution',
                to: 'contribution',
              },
              {
                docsPluginId: 'guides',
                label: 'Code of Conduct',
                to: 'code-of-conduct',
              },
            ],
          },
          { to: 'news', label: 'News', position: 'right' },
          { to: '#section-contact', label: 'Contact', position: 'right' },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Tech',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/avodaq/rescoped',
              },
              {
                label: 'NPM',
                href: 'https://www.npmjs.com/search?q=%40rescoped',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Imprint',
                href: 'https://www.avodaq.com/en/imprint/',
              },
              {
                label: 'License',
                href: '/license',
              },
              {
                label: 'Privacy',
                href: '/privacy',
              },
            ],
          },
        ],
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: lightCodeTheme,
      },
    }),
};

module.exports = config;
