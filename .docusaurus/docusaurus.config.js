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
  "themeConfig": {
    "gtag": {
      "trackingID": "UA-141789564-1",
      "anonymizeIP": true
    },
    "prism": {
      "additionalLanguages": [
        "matlab"
      ]
    },
    "navbar": {
      "title": "Inbox🌟",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/my_comic-removebg.PNG"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Algo",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/shuoO-24",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
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
      "copyright": "Copyright © 2021. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
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
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/shuoO/docusaurus-tutorial/src/css/custom.css"
        }
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
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};