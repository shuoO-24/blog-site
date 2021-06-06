---
id: idealimage
title: Use ideal-image
---

# 📦 plugin-ideal-image

Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder) **in the production builds**.



## [installation](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image)

- npm: `npm install --save @docusaurus/plugin-ideal-image`
- Yarn: `yarn add @docusaurus/plugin-ideal-image`





## [Configuration](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image)

Modify your `docusaurus.config.js`

```js
module.exports = {

  ...

+ plugins: ['@docusaurus/plugin-ideal-image'],

  ...

}
```



## [Usage](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image)

This plugin supports the PNG, GIF and JPG formats only.

```js
import Image from '@theme/IdealImage';
import thumbnail from './path/to/img.png';


// your React code
<Image img={thumbnail} />


// or
<Image img={require('./path/to/img.png')} />
```



## [Options](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image#options)



| Option    | Type      | Default                                       | Description                                                  |
| --------- | --------- | --------------------------------------------- | ------------------------------------------------------------ |
| `name`    | `string`  | `ideal-img/[name].[hash:hex:7].[width].[ext]` | Filename template for output files.                          |
| `sizes`   | `array`   | *original size*                               | Specify all widths you want to use. If a specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up). |
| `size`    | `integer` | *original size*                               | Specify one width you want to use; if the specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up) |
| `min`     | `integer` |                                               | As an alternative to manually specifying `sizes`, you can specify `min`, `max` and `steps`, and the sizes will be generated for you. |
| `max`     | `integer` |                                               | See `min` above                                              |
| `steps`   | `integer` | `4`                                           | Configure the number of images generated between `min` and `max` (inclusive) |
| `quality` | `integer` | `85`                                          | JPEG compression quality                                     |
