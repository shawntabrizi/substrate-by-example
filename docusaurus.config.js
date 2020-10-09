const path = require('path');

module.exports = {
  title: 'Substrate by Example',
  tagline: 'Learn Substrate by Example!',
  url: 'https://shawntabrizi.github.io',
  baseUrl: '/substrate-by-example/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'shawntabrizi', // Usually your GitHub org/user name.
  projectName: 'substrate-by-example', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/shawntabrizi/substrate-by-example',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/substrate',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/rEfv8tJ',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/shawntabrizi',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/shawntabrizi/substrate-by-example',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shawn Tabrizi`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/shawntabrizi/substrate-by-example/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/shawntabrizi/substrate-by-example/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, './plugins/docusaurus-plugin-polkadot-js')],
};
