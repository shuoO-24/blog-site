(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3341],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(b,s(s({ref:t},c),{},{components:a})):n.createElement(b,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8814:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),s=["components"],o={id:"sidebar"},l={unversionedId:"Docusaurus_References/sidebar",id:"Docusaurus_References/sidebar",isDocsHomePage:!1,title:"Sidebar",description:"Creating a sidebar is useful to:",source:"@site/docs/Docusaurus_References/side_bar.md",sourceDirName:"Docusaurus_References",slug:"/Docusaurus_References/sidebar",permalink:"/docs/Docusaurus_References/sidebar",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Docusaurus_References/side_bar.md",version:"current",frontMatter:{id:"sidebar"},sidebar:"tutorialSidebar",previous:{title:"Start Blogging",permalink:"/docs/Docusaurus_References/blogsetup"}},d=[{value:"Default sidebar",id:"default-sidebar",children:[]},{value:"Sidebar objects",id:"sidebar-objects",children:[]},{value:"Sidebar Items",id:"sidebar-items",children:[{value:"Doc: link to a doc",id:"doc-link-to-a-doc",children:[]},{value:"Ref: link to a doc, without sidebar",id:"ref-link-to-a-doc-without-sidebar",children:[]},{value:"Link: link to any page",id:"link-link-to-any-page",children:[]},{value:"Category: create a hierarchy",id:"category-create-a-hierarchy",children:[]}]}],c={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Creating a sidebar is useful to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Group multiple related documents"),(0,i.kt)("li",{parentName:"ul"},"Display a sidebar on each of those documents"),(0,i.kt)("li",{parentName:"ul"},"Provide a paginated navigation, with next/previous button")),(0,i.kt)("p",null,"To use sidebars on your Docusaurus site:"),(0,i.kt)("p",null,"Define a file that exports a sidebar object.\nPass this object into the ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-docs")," plugin directly or via ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='docusaurus.config.js'",title:"'docusaurus.config.js'"},"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("h2",{id:"default-sidebar"},"Default sidebar"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"module.exports = {\n  mySidebar: [\n    {\n      type: 'autogenerated',\n      dirName: '.', // generate sidebar slice from the docs folder (or versioned_docs/<version>)\n    },\n  ],\n};\n")),(0,i.kt)("p",null,"You can also define your sidebars explicitly."),(0,i.kt)("h2",{id:"sidebar-objects"},"Sidebar objects"),(0,i.kt)("p",null,"Sidebar object#\nA sidebar is a tree of sidebar items."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"type Sidebar =\n  // Normal syntax\n  | SidebarItem[]\n\n  // Shorthand syntax\n  | Record<\n      string, // category label\n      SidebarItem[] // category items\n    >;\n")),(0,i.kt)("p",null,"A sidebars file can contain multiple sidebar objects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"type SidebarsFile = Record<\n  string, // sidebar id\n  Sidebar\n>;\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='sidebars.js'",title:"'sidebars.js'"},"module.exports = {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: ['doc1'],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: ['doc2', 'doc3'],\n    },\n  ],\n};\n")),(0,i.kt)("p",null,"Notice the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There is a single sidebar mySidebar, containing 5 sidebar items"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Getting Started")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Docusaurus")," are sidebar categories"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"doc1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"doc2")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"doc3")," are sidebar documents")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"TIP")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use the shorthand syntax to express this sidebar more concisely:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='sidebars.js'",title:"'sidebars.js'"},"module.exports = {\n  mySidebar: {\n    'Getting started': ['doc1'],\n    Docusaurus: ['doc2', 'doc3'],\n  },\n};\n")),(0,i.kt)("h2",{parentName:"div",id:"using-multiple-sidebars"},"Using multiple sidebars"),(0,i.kt)("p",{parentName:"div"},"You can create a sidebar for each set of markdown files that you want to group together."))),(0,i.kt)("p",null,"The Docusaurus site is a good example of using multiple sidebars:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docs"),(0,i.kt)("li",{parentName:"ul"},"API")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='sidebars.js'",title:"'sidebars.js'"},"module.exports = {\n  tutorialSidebar: {\n    'Category A': ['doc1', 'doc2'],\n  },\n  apiSidebar: ['doc3', 'doc4'],\n};\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The keys ",(0,i.kt)("inlineCode",{parentName:"p"},"tutorialSidebar")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"apiSidebar")," are sidebar technical ids and do not matter much."))),(0,i.kt)("p",null,"When browsing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"doc1 or doc2: the ",(0,i.kt)("inlineCode",{parentName:"li"},"tutorialSidebar")," will be displayed"),(0,i.kt)("li",{parentName:"ul"},"doc3 or doc4: the ",(0,i.kt)("inlineCode",{parentName:"li"},"apiSidebar")," will be displayed\nA ",(0,i.kt)("strong",{parentName:"li"},"paginated navigation")," link documents inside the same sidebar with ",(0,i.kt)("strong",{parentName:"li"},"next and previous buttons"),".")),(0,i.kt)("h2",{id:"sidebar-items"},"Sidebar Items"),(0,i.kt)("p",null,"SidebarItem is an item defined in a Sidebar tree."),(0,i.kt)("p",null,"There are different types of sidebar items:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#sidebar-item-doc"},"Doc")),": link to a doc page, assigning it to the sidebar"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#sidebar-item-ref"},"Ref")),": link to a doc page, without assigning it to the sidebar"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#sidebar-item-link"},"Link")),": link to any internal or external page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#sidebar-item-category"},"Category")),": create a hierarchy of sidebar items"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#sidebar-item-autogenerated"},"Autogenerated")),": generate a sidebar slice automatically")),(0,i.kt)("h3",{id:"doc-link-to-a-doc"},"Doc: link to a doc",(0,i.kt)("a",{parentName:"h3",href:"#sidebar-item-doc"})),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"doc")," type to link to a doc page and assign that doc to a sidebar:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"type SidebarItemDoc =\n  // Normal syntax\n  | {\n      type: 'doc';\n      id: string;\n      label: string; // Sidebar label text\n    }\n\n  // Shorthand syntax\n  | string; // docId shortcut\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='sidebars.js'",title:"'sidebars.js'"},"module.exports = {\n  mySidebar: [\n    // Normal syntax:\n    {\n      type: 'doc',\n      id: 'doc1', // document id\n      label: 'Getting started', // sidebar label\n    },\n\n    // Shorthand syntax:\n    'doc2', // document id\n  ],\n};\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sidebar_label")," markdown frontmatter has a higher precedence over the ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," key in ",(0,i.kt)("inlineCode",{parentName:"p"},"SidebarItemDoc"),"."),(0,i.kt)("p",null,":::into note"),(0,i.kt)("p",null,"Don't assign the same doc to multiple sidebars: use a ",(0,i.kt)("a",{parentName:"p",href:"#sidebar-item-ref"},"ref")," instead.\n:::"),(0,i.kt)("h3",{id:"ref-link-to-a-doc-without-sidebar"},"Ref: link to a doc, without sidebar",(0,i.kt)("a",{parentName:"h3",href:"#sidebar-item-ref"})),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," type to link to a doc page without assigning it to a sidebar."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"type SidebarItemRef = {\n  type: 'ref';\n  id: string;\n};\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='sidebars.js'",title:"'sidebars.js'"},"module.exports = {\n  mySidebar: [\n    {\n      type: 'ref',\n      id: 'doc1', // Document id (string).\n    },\n  ],\n};\n")),(0,i.kt)("p",null,"When browsing doc1, Docusaurus will not display the mySidebar sidebar."),(0,i.kt)("h3",{id:"link-link-to-any-page"},"Link: link to any page",(0,i.kt)("a",{parentName:"h3",href:"https://docusaurus.io/docs/sidebar#sidebar-item-link"})),(0,i.kt)("p",null,"Use the link type to link to any page (internal or external) that is not a doc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"type SidebarItemLink = {\n  type: 'link';\n  label: string;\n  href: string;\n};\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='sidebars.js'",title:"'sidebars.js'"},"module.exports = {\n  myLinksSidebar: [\n    // External link\n    {\n      type: 'link',\n      label: 'Facebook', // The link label\n      href: 'https://facebook.com', // The external URL\n    },\n\n    // Internal link\n    {\n      type: 'link',\n      label: 'Home', // The link label\n      href: '/', // The internal path\n    },\n  ],\n};\n")),(0,i.kt)("h3",{id:"category-create-a-hierarchy"},"Category: create a hierarchy",(0,i.kt)("a",{parentName:"h3",href:"https://docusaurus.io/docs/sidebar#sidebar-item-category"})),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"category")," type to create a hierarchy of sidebar items."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"type SidebarItemCategory = {\n  type: 'category';\n  label: string; // Sidebar label text.\n  items: SidebarItem[]; // Array of sidebar items.\n\n  // Category options:\n  collapsed: boolean; // Set the category to be collapsed or open by default\n};\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title='sidebars.js'",title:"'sidebars.js'"},"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      collapsed: false,\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n")),(0,i.kt)("p",null,"For more usages, see ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/sidebar#sidebar-item-ref"},"documentation"),"."))}p.isMDXComponent=!0}}]);