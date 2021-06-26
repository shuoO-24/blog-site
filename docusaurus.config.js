/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Lavender Spacecraft🪐✨",
  tagline: "世界献我以歌",
  url: "https://blog-test-lavender.netlify.app/",
  baseUrl: "/",
  // ...
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logos/brain_2.svg",
  organizationName: "shuoO-24", // Usually your GitHub org/user name.
  projectName: "docusaurus-site", // Usually your repo name.
  plugins: ['@docusaurus/plugin-ideal-image', '@docusaurus/plugin-google-analytics', '@docusaurus/plugin-google-gtag'],
  themeConfig: {
    googleAnalytics: {
        trackingID: 'UA-141789564-1',
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
    },
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
      title: "Home🌟",
      logo: {
        alt: "My Site Logo",
        src: "img/my_comic-removebg.PNG",
      },
      hideOnScroll: true,
      items: [
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/shuoO-24",
          label: "GitHub",
          position: "right",
        },
        {
          to: '/docs/Dynamic Programming/algointro',

          //// Optional
          position: 'left',
          label: 'Algo',
          docsPluginId: 'default',
          activeSidebarClassName: 'navbar__link--active',
        },
        {
          label: "SQL Review Notes",
          to: "/docs/SQL Notes/sqlintro",
        },
        {
          label: "Multivariable Calculus Cheatsheets & Calculators",
          to: "/docs/Multivariable Calculus/multcalc_cheatsheet",
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
              label: "Start from there",
              to: "/docs/intro",
            },
            {
              label: "SQL Review Notes",
              to: "/docs/SQL Notes/sqlintro",
            },
            // {
            //   label: "我不懂 JavaScript",
            //   to: "/docs/intro"
            // },
            {
              label: "Algo Novice",
              to: "/docs/Dynamic Programming/algointro",
            }
          ],
        },
        // {
        //   title: "Community",
        //   items: [,
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}.`,
    },
    colorMode: {
          // "light" | "dark"
          defaultMode: 'light',

          // Hides the switch in the navbar
          // Useful if you want to support a single color mode
          disableSwitch: false,
    
          // Should we use the prefers-color-scheme media-query,
          // using user system preferences, instead of the hardcoded defaultMode
          respectPrefersColorScheme: false,
    
          // Dark/light switch icon options
          switchConfig: {
            // Icon for the switch while in dark mode
            darkIcon: '🌙',
    
            // CSS to apply to dark icon,
            // React inline style object
            // see https://reactjs.org/docs/dom-elements.html#style
            darkIconStyle: {
              marginLeft: '2px',
            },
    
            // Unicode icons such as '\u2600' will work
            // Unicode with 5 chars require brackets: '\u{1F602}'
            lightIcon: '\u{1F31E}',
    
            lightIconStyle: {
              marginLeft: '1px',
            },
        },
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
            "https://github.com/shuoO-24/blog-site/tree/main/docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/shuoO-24/blog-site/tree/main/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
