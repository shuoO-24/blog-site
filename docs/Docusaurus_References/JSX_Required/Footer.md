---
id: mdFooter
title: Add Footer
parse_number_prefixes: true
---

# Add Footer

## Footer
You can add logo and a copyright to the footer via `themeConfig.footer`. Logo can be placed in [static folder](https://docusaurus.io/docs/static-assets). Logo URL works in the same way of the navbar logo.

```jsx title="docusaurus.config.js"
  // ...
  footer: {
    logo: {
      alt: 'Facebook Open Source Logo',
      src: 'img/oss_logo.png',
      href: 'https://opensource.facebook.com',
    },
    copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
  }
```

## Footer Links[](https://docusaurus.io/docs/api/themes/configuration#footer-links)

You can add links to the footer via `themeConfig.footer.links`:


```jsx title="docusaurus.config.js"
module.exports = {
  // ...
  footer: {
    links: [
      {
        // Label of the section of these links
        title: 'Docs',
        items: [
          {
            // Label of the link
            label: 'Style Guide',
            // Client-side routing, used for navigating within the website.
            // The baseUrl will be automatically prepended to this value.
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
            // A full-page navigation, used for navigating outside of the website.
            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          },
          {
            label: 'Discord',
            href: 'https://discordapp.com/invite/docusaurus',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/docusaurus',
          },
          {
            //Renders the html pass-through instead of a simple link
            html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                </a>
              `,
          },
        ],
      },
    ],
  },
};
```