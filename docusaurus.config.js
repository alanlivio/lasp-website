// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LASP',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // url: 'https://lasp-ucl.github.io',
  // baseUrl: '/',
  // organizationName: 'lasp-ucl',
  // projectName: 'lasp-ucl.github.io',
  url: 'https://alanlivio.github.io/',
  baseUrl: '/lasp-website/',
  organizationName: 'alanlivio',
  projectName: 'lasp-website',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: false,
          routeBasePath: '/',
          remarkPlugins: []
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        sitemap: false
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.jpg',
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'LASP website',
        logo: {
          src: 'img/logo.jpg',
        },
        items: [
          {
            to: '/blog',
            label: 'News',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'team',
            position: 'left',
            label: 'Our Team',
          },
          {
            type: 'dropdown',
            label: 'Research',
            items: [
              {
                type: 'doc',
                docId: 'research/research-topics',
                label: 'Research Topics',
              },
              {
                type: 'doc',
                docId: 'research/posters',
                label: 'Posters',
              },
              {
                type: 'doc',
                docId: 'research/partners',
                label: 'Partners',
              },
              {
                type: 'doc',
                docId: 'research/publications',
                label: 'Publications',
              },
              {
                to: '/blog/tags/event/',
                label: 'Events',
              },
              {
                type: 'doc',
                docId: 'talks/graph-learning',
                label: 'Talks on Graph Learning',
              },
              {
                type: 'doc',
                docId: 'talks/immersive-communication',
                label: 'Talks on Immersive Communication',
              },
              {
                type: 'doc',
                docId: 'talks/pointcloud',
                label: 'Talks on Point Cloud',
              },
              {
                type: 'doc',
                docId: 'talks/reinforcement-learning',
                label: 'Talks on Reinforcement Learning',
              },
            ],
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'New members',
            items: [
              {
                type: 'doc',
                docId: 'new-member/github',
                label: 'Github',
              },
              {
                type: 'doc',
                docId: 'new-member/students-projects',
                label: 'Students projects',
              },
              {
                type: 'doc',
                docId: 'new-member/get-started-on-graphs',
                label: 'Get started on Graphs',
              },
            ],
          },
          {
            type: 'doc',
            docId: 'contact',
            position: 'left',
            label: 'Contact us',
          },
          {
            href: 'https://github.com/lasp-ucl',
            label: 'GitHub',
            position: 'right',
          },
        ]
      },
      blog: {
        // routeBasePath: 'news',
        // path: 'news',
        postsPerPage: 5,
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} LASP, UCL.`,
        },
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'All our posts',
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} LASP, UCL. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
