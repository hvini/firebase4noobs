// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const organizationName = 'hvini';
const projectName = 'firebase4noobs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'firebase4noobs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: organizationName, // Usually your GitHub org/user name.
  projectName: projectName, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hvini/firebase4noobs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      algolia: {
        apiKey: 'a7eaaf91ebf0ef8cd31759109132f99c',
        indexName: 'firebase4noobs',
        contextualSearch: true,
        placeholder: 'Pesquisar',
        appId: 'GOF23NU8S9'
      },
      navbar: {
        title: 'firebase4noobs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            position: 'right',
            type: 'localeDropdown',
          },
          {
            href: 'https://github.com/hvini',
            position: 'right',
            className: 'header-github-link',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introdução',
                to: '/',
              },
              {
                label: 'Utilização e faturamento',
                to: '/billing',
              },
              {
                label: 'Firebase CLI',
                to: '/category/firebase-cli',
              },
              {
                label: 'Autenticação',
                to: '/category/auth',
              },
              {
                label: 'Firestore',
                to: '/category/firestore',
              },
            ],
          },
          {
            items: [
              {
                label: 'Cloud Storage',
                to: '/category/cloud-storage',
              },
              {
                label: 'Hosting',
                to: '/hosting',
              },
              {
                label: 'Cloud Functions',
                to: '/category/cloud-functions',
              },
              {
                label: 'Extensões',
                to: '/extensions',
              },
              {
                label: 'App Distribution',
                to: '/app-distribution',
              },
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vinícius Henrique. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
