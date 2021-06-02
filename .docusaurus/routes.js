
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','364'),
  exact: true,
},
{
  path: '/blog/greetings',
  component: ComponentCreator('/blog/greetings','60c'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','c06'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','f28'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','728'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','77d'),
  exact: true,
},
{
  path: '/blog/tags/greetings',
  component: ComponentCreator('/blog/tags/greetings','64a'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','a19'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','156'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','bba'),
  
  routes: [
{
  path: '/docs/Docusaurus_References/Add Table of Content',
  component: ComponentCreator('/docs/Docusaurus_References/Add Table of Content','4d6'),
  exact: true,
},
{
  path: '/docs/Docusaurus_References/Admonitions',
  component: ComponentCreator('/docs/Docusaurus_References/Admonitions','e5e'),
  exact: true,
},
{
  path: '/docs/Docusaurus_References/Code Block',
  component: ComponentCreator('/docs/Docusaurus_References/Code Block','698'),
  exact: true,
},
{
  path: '/docs/Docusaurus_References/Front-matter',
  component: ComponentCreator('/docs/Docusaurus_References/Front-matter','0ef'),
  exact: true,
},
{
  path: '/docs/Docusaurus_References/Markdown Basics',
  component: ComponentCreator('/docs/Docusaurus_References/Markdown Basics','a1b'),
  exact: true,
},
{
  path: '/docs/Docusaurus_References/markdown-features',
  component: ComponentCreator('/docs/Docusaurus_References/markdown-features','bd3'),
  exact: true,
},
{
  path: '/docs/Docusaurus_References/Nav-bar',
  component: ComponentCreator('/docs/Docusaurus_References/Nav-bar','2f9'),
  exact: true,
},
{
  path: '/docs/Docusaurus_References/Tabs',
  component: ComponentCreator('/docs/Docusaurus_References/Tabs','b63'),
  exact: true,
},
{
  path: '/docs/Docusaurus_References/translate-your-site',
  component: ComponentCreator('/docs/Docusaurus_References/translate-your-site','9a0'),
  exact: true,
},
{
  path: '/docs/Dynamic Programming/最长子序列',
  component: ComponentCreator('/docs/Dynamic Programming/最长子序列','fc9'),
  exact: true,
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
{
  path: '/docs/SQL Notes/sqlintro',
  component: ComponentCreator('/docs/SQL Notes/sqlintro','a14'),
  exact: true,
},
{
  path: '/docs/SQL Notes/sqlnorm',
  component: ComponentCreator('/docs/SQL Notes/sqlnorm','438'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
