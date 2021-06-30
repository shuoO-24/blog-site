export default {
  "title": "Lavender Spacecraft🪐✨",
  "tagline": "世界献我以歌",
  "url": "https://blog-test-lavender.netlify.app/",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/logos/brain_2.svg",
  "organizationName": "shuoO-24",
  "projectName": "docusaurus-site",
  "plugins": [
    "@docusaurus/plugin-ideal-image"
  ],
  "themeConfig": {
    "googleAnalytics": {
      "trackingID": "UA-141789564-1",
      "anonymizeIP": true
    },
    "prism": {
      "additionalLanguages": [
        "matlab"
      ]
    },
    "navbar": {
      "title": "Home🌟",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/my_comic-removebg.PNG"
      },
      "hideOnScroll": true,
      "items": [
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/shuoO-24",
          "label": "GitHub",
          "position": "right"
        },
        {
          "to": "/docs/intro",
          "position": "left",
          "label": "Notes",
          "docsPluginId": "default",
          "activeSidebarClassName": "navbar__link--active"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Start from there",
              "to": "/docs/intro"
            },
            {
              "label": "SQL Review Notes",
              "to": "/docs/SQL Notes/sqlintro"
            },
            {
              "label": "Algo Novice",
              "to": "/docs/Dynamic Programming/algointro"
            },
            {
              "label": "UCB 61C Notes",
              "to": "/docs/Computer Architecture/61c_intro"
            },
            {
              "label": "SQL Review Notes",
              "to": "/docs/SQL Notes/sqlintro"
            },
            {
              "label": "Multivariable Calculus",
              "to": "/docs/Multivariable Calculus/multcalc_cheatsheet"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌙",
        "darkIconStyle": {
          "marginLeft": "2px"
        },
        "lightIcon": "🌞",
        "lightIconStyle": {
          "marginLeft": "1px"
        }
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/shuoO/docusaurus-tutorial/sidebars.js",
          "editUrl": "https://github.com/shuoO-24/blog-site/tree/main/docs"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/shuoO-24/blog-site/tree/main/blog"
        },
        "theme": {
          "customCss": "/Users/shuoO/docusaurus-tutorial/src/css/custom.css"
        },
        "sitemap": {}
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};