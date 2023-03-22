// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LASP',
  url: 'https://lasp-ucl.github.io',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'lasp-ucl',
  projectName: 'lasp-ucl.github.io',
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
                docId: 'research/research',
                label: 'Overview',
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
            ],
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Laura Toni',
            items: [
              {
                type: 'doc',
                docId: 'team/laura-toni',
                label: 'Bio',
              },
              {
                type: 'doc',
                docId: 'talks/graph-and-online-learning',
                label: 'Talks on Graph and Online Learning',
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
            to: '/blog/tags/event/',
            position: 'left',
            label: 'Events',
          },
          {
            type: 'doc',
            docId: 'fun',
            position: 'left',
            label: 'Lab Fun',
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
