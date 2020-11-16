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
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Substrate by Example',
      logo: {
        alt: 'Substrate by Example',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
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
              label: 'Welcome',
              to: 'docs/',
            },
            {
              label: 'Demo',
              to: 'docs/demo',
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
              label: 'Twitter',
              href: 'https://twitter.com/shawntabrizi',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/shawntabrizi/substrate-by-example',
            },
            {
              label: 'Shawn Tabrizi',
              href: 'https://shawntabrizi.com',
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
  plugins: [
    path.resolve(__dirname, './plugins/polkadot-js'),
    path.resolve(__dirname, './plugins/monaco-editor')
  ],
};
