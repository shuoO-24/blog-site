---
id: navbar
title: Nav bar usage
---

Navbar相关的 [官方文档](https://docusaurus.io/docs/api/themes/configuration#navbar)

## Navbar title & logo[](https://docusaurus.io/docs/api/themes/configuration#navbar-title--logo)

You can add a logo and title to the navbar via `themeConfig.navbar`. Logo can be placed in [static folder](https://docusaurus.io/docs/static-assets). Logo URL is set to base URL of your site by default. Although you can specify your own URL for the logo, if it is an external link, it will open in a new tab. In addition, you can override a value for the target attribute of logo link, it can come in handy if you are hosting docs website in a subdirectory of your main website, and in which case you probably do not need a link in the logo to the main website will open in a new tab.

To improve dark mode support, you can also set a different logo for this mode.

## Navbar items[](https://docusaurus.io/docs/api/themes/configuration#navbar-items)

You can add items to the navbar via `themeConfig.navbar.items`.

By default, Navbar items are regular links (internal or external).

React Router should automatically apply active link styling to links, but you can use `activeBasePath` in edge cases. For cases in which a link should be active on several different paths (such as when you have multiple doc folders under the same sidebar), you can use `activeBaseRegex`. `activeBaseRegex` is a more flexible alternative to `activeBasePath` and takes precedence over it -- Docusaurus parses it into a regular expression that is tested against the current URL.

Outbound (external) links automatically get `target="_blank" rel="noopener noreferrer"` attributes.

## Navbar dropdown[](https://docusaurus.io/docs/api/themes/configuration#navbar-dropdown)

Navbar items can also be dropdown items by specifying the `items`, an inner array of navbar items.

### Navbar hoverable dropdown by Infima[](https://infima.dev/docs/components/dropdown)

<div class="dropdown dropdown--hoverable">
  <button class="button button--primary">Hover Me</button>
  <ul class="dropdown__menu">
    <li>
      <a class="dropdown__link" href="#url">
        Home
      </a>
    </li>
    <li>
      <a class="dropdown__link" href="#url">
        Profile
      </a>
    </li>
    <li>
      <a class="dropdown__link" href="#url">
        Settings
      </a>
    </li>
    <li>
      <a class="dropdown__link" href="#url">
        Help
      </a>
    </li>
    <li>
      <a class="dropdown__link" href="#url">
        Logout
      </a>
    </li>
  </ul>
</div>
<p>
</p>

```jsx
<div class="dropdown dropdown--hoverable">
  <button class="button button--primary">Hover Me</button>
  <ul class="dropdown__menu">
    <li>
      <a class="dropdown__link" href="#url">
        Home
      </a>
    </li>
    <li>
      <a class="dropdown__link" href="#url">
        Profile
      </a>
    </li>
    <li>
      <a class="dropdown__link" href="#url">
        Settings
      </a>
    </li>
    <li>
      <a class="dropdown__link" href="#url">
        Help
      </a>
    </li>
    <li>
      <a class="dropdown__link" href="#url">
        Logout
      </a>
    </li>
  </ul>
</div>
```

## Navbar doc link[](https://docusaurus.io/docs/api/themes/configuration#navbar-doc-link)

If you want to link to a specific doc, this special navbar item type will render the link to the doc of the provided `docId`. It will get the class `navbar__link--active` as long as you browse a doc of the same sidebar.

## Navbar docs version dropdown[](https://docusaurus.io/docs/api/themes/configuration#navbar-docs-version-dropdown)

If you use docs with versioning, this special navbar item type that will render a dropdown with all your site's available versions.

The user will be able to switch from one version to another, while staying on the same doc (as long as the doc id is constant across versions).

## Navbar docs version[](https://docusaurus.io/docs/api/themes/configuration#navbar-docs-version)

If you use docs with versioning, this special navbar item type will link to the active/browsed version of your doc (depends on the current url), and fallback to the latest version.

## Navbar locale dropdown[](https://docusaurus.io/docs/api/themes/configuration#navbar-locale-dropdown)

If you use the [i18n feature](https://docusaurus.io/docs/i18n/introduction), this special navbar item type will render a dropdown with all your site's available locales.

The user will be able to switch from one locale to another, while staying on the same page.

## Navbar search[](https://docusaurus.io/docs/api/themes/configuration#navbar-search)

If you use the [search](https://docusaurus.io/docs/search), the search bar will be the rightmost element in the navbar.

However, with this special navbar item type, you can change the default location.

## Auto-hide sticky navbar[](https://docusaurus.io/docs/api/themes/configuration#auto-hide-sticky-navbar)

You can enable this cool UI feature that automatically hides the navbar when a user starts scrolling down the page, and show it again when the user scrolls up.

## Navbar style[](https://docusaurus.io/docs/api/themes/configuration#navbar-style)

You can set the static Navbar style without disabling the theme switching ability. The selected style will always apply no matter which theme user have selected.

Currently, there are two possible style options: `dark` and `primary` (based on the `--ifm-color-primary` color). You can see the styles preview in the [Infima documentation](https://infima.dev/docs/components/navbar/).

