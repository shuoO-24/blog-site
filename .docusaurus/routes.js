
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
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
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','f28'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','ac0'),
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
  component: ComponentCreator('/blog/tags/hello','ea1'),
  exact: true,
},
{
  path: '/blog/tags/杂思',
  component: ComponentCreator('/blog/tags/杂思','67c'),
  exact: true,
},
{
  path: '/blog/tags/生活',
  component: ComponentCreator('/blog/tags/生活','cba'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','156'),
  exact: true,
},
{
  path: '/blog/摘抄',
  component: ComponentCreator('/blog/摘抄','191'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','b58'),
  
  routes: [
{
  path: '/docs/Docusaurus_References/Admonitions',
  component: ComponentCreator('/docs/Docusaurus_References/Admonitions','e5e'),
  exact: true,
},
{
  path: '/docs/Docusaurus_References/blogsetup',
  component: ComponentCreator('/docs/Docusaurus_References/blogsetup','fbc'),
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
  path: '/docs/Docusaurus_References/Infima Powered/infima',
  component: ComponentCreator('/docs/Docusaurus_References/Infima Powered/infima','43c'),
  exact: true,
},
{
  path: '/docs/Docusaurus_References/Infima Powered/navbar',
  component: ComponentCreator('/docs/Docusaurus_References/Infima Powered/navbar','9ab'),
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
  path: '/docs/Docusaurus_References/mdFooter',
  component: ComponentCreator('/docs/Docusaurus_References/mdFooter','d70'),
  exact: true,
},
{
  path: '/docs/Docusaurus_References/sidebar',
  component: ComponentCreator('/docs/Docusaurus_References/sidebar','397'),
  exact: true,
},
{
  path: '/docs/Docusaurus_References/Tabs',
  component: ComponentCreator('/docs/Docusaurus_References/Tabs','b63'),
  exact: true,
},
{
  path: '/docs/Docusaurus_References/toc',
  component: ComponentCreator('/docs/Docusaurus_References/toc','b4c'),
  exact: true,
},
{
  path: '/docs/Docusaurus_References/translate-your-site',
  component: ComponentCreator('/docs/Docusaurus_References/translate-your-site','9a0'),
  exact: true,
},
{
  path: '/docs/Dynamic Programming/algointro',
  component: ComponentCreator('/docs/Dynamic Programming/algointro','57c'),
  exact: true,
},
{
  path: '/docs/Dynamic Programming/LeetCode300',
  component: ComponentCreator('/docs/Dynamic Programming/LeetCode300','7fe'),
  exact: true,
},
{
  path: '/docs/Dynamic Programming/LeetCode64',
  component: ComponentCreator('/docs/Dynamic Programming/LeetCode64','2a5'),
  exact: true,
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
{
  path: '/docs/SQL Notes/Important Concepts',
  component: ComponentCreator('/docs/SQL Notes/Important Concepts','51f'),
  exact: true,
},
{
  path: '/docs/SQL Notes/sqlgroup',
  component: ComponentCreator('/docs/SQL Notes/sqlgroup','9c5'),
  exact: true,
},
{
  path: '/docs/SQL Notes/sqlintro',
  component: ComponentCreator('/docs/SQL Notes/sqlintro','a14'),
  exact: true,
},
{
  path: '/docs/SQL Notes/sqljoin',
  component: ComponentCreator('/docs/SQL Notes/sqljoin','1e8'),
  exact: true,
},
{
  path: '/docs/SQL Notes/sqlnorm',
  component: ComponentCreator('/docs/SQL Notes/sqlnorm','438'),
  exact: true,
},
{
  path: '/docs/SQL Notes/sqlorder',
  component: ComponentCreator('/docs/SQL Notes/sqlorder','f85'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
