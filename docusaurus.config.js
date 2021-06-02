/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Hi All",
  tagline: "世界献我以歌",
  url: "https://blog-test-lavender.netlify.app/",
  baseUrl: "/",
  // ...
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logos/brain_2.svg",
  organizationName: "shuoO-24", // Usually your GitHub org/user name.
  projectName: "docusaurus-site", // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ["cpp"],
      additionalLanguages: ["java"],
      additionalLanguages: ["javadoc"],
      additionalLanguages: ["json"],
      additionalLanguages: ["css"],
      additionalLanguages: ["html"],
      additionalLanguages: ["r"],
      additionalLanguages: ["latex"],
      additionalLanguages: ["sql"],
      additionalLanguages: ["matlab"],
    },
    navbar: {
      title: "Lavender Spacecraft🪐✨",
      logo: {
        alt: "My Site Logo",
        src: "img/my_comic-removebg.PNG",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Algo",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/shuoO-24",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Study Notes",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
