import { defineConfig } from 'vitepress';
import { version } from '../../package.json';
import { contributing, font, github, ogImage, ogUrl, releases, description, name } from './meta';

export default defineConfig({
  lang: 'en-US',
  title: name,
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#729b1a' }],
    ['link', { rel: 'icon', href: '/logo_transparent.png', type: 'image/png' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'runnable, workflow, admin',
      },
    ],
    ['meta', { property: 'og:title', content: name }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: name }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { href: font, rel: 'stylesheet' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
  ],
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'light-plus',
      dark: 'dark-plus',
    },
  },
  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/kineticio/actions/tree/main/docs/:path',
      text: 'Suggest changes to this page',
    },

    socialLinks: [{ icon: 'github', link: github }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 Myles Scolnick',
    },

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes ',
            link: releases,
          },
          {
            text: 'Contributing ',
            link: contributing,
          },
        ],
      },
    ],

    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Getting Started',
              link: '/guide/',
            },
            {
              text: 'Actions',
              link: '/guide/actions',
            },
            {
              text: 'Authentication',
              link: '/guide/auth',
            },
            {
              text: 'Input/Output',
              link: '/guide/input-output',
            },
          ],
        },
        {
          text: 'API',
          items: [
            {
              text: 'API Reference',
              link: '/api/',
            },
          ],
        },
      ],
    },
  },
});
