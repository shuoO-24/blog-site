---
id: blogsetup
title: Start Blogging
---
## Initial setup[](https://docusaurus.io/docs/blog#initial-setup)

To setup your site's blog, start by creating a `blog` directory.

Then, add an item link to your blog within `docusaurus.config.js`:
```jsx title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    // ...
    navbar: {
      items: [
        // ...
        {to: 'blog', label: 'Blog', position: 'left'}, // or position: 'right'
      ],
    },
  },
};
```

## Adding posts[](https://docusaurus.io/docs/blog#adding-posts)

To publish in the blog, create a file within the blog directory with a formatted name of `YYYY-MM-DD-my-blog-post-title.md`. The post date is extracted from the file name.

For example, at `my-website/blog/2019-09-05-hello-docusaurus-v2.md`:
```jsx
---
title: Welcome Docusaurus v2
author: Joel Marcey
author_title: Co-creator of Docusaurus 1
author_url: https://github.com/JoelMarcey
author_image_url: https://graph.facebook.com/611217057/picture/?height=200&width=200
tags: [hello, docusaurus-v2]
description: This is my first post on Docusaurus 2.
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---
Welcome to this blog. This blog is created with [**Docusaurus 2 alpha**](https://docusaurus.io/).

<!--truncate-->

This is my first post on Docusaurus 2.

A whole bunch of exploration to follow.
```

## Header options[](https://docusaurus.io/docs/blog#header-options)

The only required field is `title`; however, we provide options to add author information to your blog post as well along with other options.

-   `author` - The author name to be displayed.
-   `author_url` - The URL that the author's name will be linked to. This could be a GitHub, Twitter, Facebook profile URL, etc.
-   `author_image_url` - The URL to the author's thumbnail image.
-   `author_title` - A description of the author.
-   `title` - The blog post title.
-   `tags` - A list of strings to tag to your post.
-   `draft` - A boolean flag to indicate that the blog post is work-in-progress and therefore should not be published yet. However, draft blog posts will be displayed during development.
-   `description`: The description of your post, which will become the `<meta name="description" content="..."/>` and `<meta property="og:description" content="..."/>` in `<head>`, used by search engines. If this field is not present, it will default to the first line of the contents.
-   `image`: Cover or thumbnail image that will be used when displaying the link to your post.
-   `hide_table_of_contents`: Whether to hide the table of contents to the right. By default it is `false`.

## Summary truncation[](https://docusaurus.io/docs/blog#summary-truncation)

Use the `<!--truncate-->` marker in your blog post to represent what will be shown as the summary when viewing all published blog posts. Anything above `<!--truncate-->` will be part of the summary. For example:
```jsx
---
title: Truncation Example
---
All these will be part of the blog post summary.

Even this.

<!--truncate-->

But anything from here on down will not be.

Not this.

Or this.
```

## Feed[](https://docusaurus.io/docs/blog#feed)

You can generate RSS/Atom feed by passing feedOptions. By default, RSS and Atom feeds are generated. To disable feed generation, set `feedOptions.type` to `null`.

Example usage:
```jsx
feedOptions?: {
  type?: 'rss' | 'atom' | 'all' | null;
  title?: string;
  description?: string;
  copyright: string;
  language?: string; // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
};
```

Accessing the feed:
```jsx title="docusaurus.config.js"
module.exports = {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
          },
        },
      },
    ],
  ],
};
```

The feed for RSS can be found at: `https://{your-domain}/blog/rss.xml` and for Atom: `https://{your-domain}/blog/atom.xml`

## Advanced topics[](https://docusaurus.io/docs/blog#advanced-topics)

### Blog-only mode[](https://docusaurus.io/docs/blog#blog-only-mode)

You can run your Docusaurus 2 site without a landing page and instead have your blog's post list page as the index page. Set the `routeBasePath` to be `'/'` to indicate it's the root path.
```jsx title="docusaurus.config.js`
module.exports = {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/', // Set this value to '/'.
        },
      },
    ],
  ],
};
```

:::warning caution

Don't forget to delete the existing homepage at `./src/pages/index.js` or else there will be two files mapping to the same route!

:::

You can also add meta description to the blog list page for better SEO:
```jsx title="docusaurus.config.js"
module.exports = {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A docusaurus powered blog!',
        },
      },
    ],
  ],
};
```

### Multiple blogs[](https://docusaurus.io/docs/blog#multiple-blogs)

By default, the classic theme assumes only one blog per website and hence includes only one instance of the blog plugin. If you would like to have multiple blogs on a single website, it's possible too! You can add another blog by specifying another blog plugin in the `plugins` option for `docusaurus.config.js`.

Set the `routeBasePath` to the URL route that you want your second blog to be accessed on. Note that the `routeBasePath` here has to be different from the first blog or else there could be a collision of paths! Also, set `path` to the path to the directory containing your second blog's entries.

As documented for [multi-instance plugins](https://docusaurus.io/docs/using-plugins#multi-instance-plugins-and-plugin-ids), you need to assign a unique id to the plugins.

```jsx title="docusaurus.config.js"
module.exports = {
  // ...
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'second-blog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'my-second-blog',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './my-second-blog',
      },
    ],
  ],
};
```

As an example, we host a second blog [here](https://docusaurus.io/second-blog).