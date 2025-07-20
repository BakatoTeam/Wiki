import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Bakato Wiki',
  tagline: 'Это твоя история',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://bakato.ru',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bakatoteam', // Usually your GitHub org/user name.
  projectName: 'bakato-wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BakatoTeam/Wiki/blob/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BakatoTeam/Wiki/blob/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Bakato Wiki',
      logo: {
        alt: 'Bakato Logo',
        src: 'img/logo.jpeg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'vanillaSidebar',
          position: 'left',
          label: 'Vanilla',
        },
        {
          type: 'docSidebar',
          sidebarId: 'pluginsSidebar',
          position: 'left',
          label: 'Plugins',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Дополнительно',
          items: [
            {
              label: 'Сайт',
              href: 'https://bakato.ru',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@BakatoMc',
            },
            {
              label: 'Pinterest',
              href: 'https://ru.pinterest.com/bakatoservermc',
            },
          ],
        },
        {
          title: 'Vanilla',
          items: [
            {
              label: 'Wiki',
              to: '/docs/vanilla/info',
            },
            {
              label: 'Boosty',
              href: 'https://boosty.to/bakato',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/bakatoMcNews',
            },
            {
              label: 'Vanilla Discord',
              href: 'https://discord.gg/tDHEEFJPXv',
            },
            {
              label: 'VK',
              href: 'https://vk.com/bakatomc',
            }
          ],
        },
        {
          title: 'Plugins',
          items: [
            {
              label: 'Wiki',
              to: '/docs/plugins/info',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/pluginsbakato',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/ftYXgwYx3E',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bakato. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
