module.exports = {
  title: 'Muzik OS Hub',
  url: 'https://example.invalid',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [['classic', {
    docs: { path: 'content', routeBasePath: 'docs', sidebarPath: require.resolve('./sidebars.js') },
    blog: false,
    theme: { customCss: require.resolve('./src/css/custom.css') },
  }]],
  themeConfig: { navbar: { title: 'Muzik OS', items: [
    {to: '/', label: 'Overview', position: 'left'},
    {to: '/docs/intro', label: 'Docs', position: 'left'},
    {href: 'https://github.com/fusumivietnam/muzik-os', label: 'GitHub', position: 'right'}
  ]}}
};
