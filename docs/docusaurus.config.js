module.exports = {
  title: 'Muzik OS Docs',
  url: 'https://example.invalid',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [['classic', {
    docs: { path: 'content', routeBasePath: 'docs', sidebarPath: require.resolve('./sidebars.js') },
    blog: false,
  }]],
  themeConfig: { navbar: { title: 'Muzik OS', items: [
    {to: '/docs/intro', label: 'Docs', position: 'left'},
    {to: '/docs/roadmap', label: 'Roadmap', position: 'left'},
    {href: 'https://github.com/fusumivietnam/muzik-os', label: 'GitHub', position: 'right'}
  ]}}
};
