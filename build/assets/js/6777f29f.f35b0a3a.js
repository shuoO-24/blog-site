(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7006],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9433:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return m}});var r=n(2122),o=n(9756),a=n(7294),i=n(3905),c=n(6010),l="tableOfContentsInline_3fWc";function s(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(s,{isChild:!0,toc:e.children}))}))):null}var u=function(e){var t=e.toc;return a.createElement("div",{className:(0,c.Z)(l)},a.createElement(s,{toc:t}))},d=["components"],p={sidebar_position:10,id:"toc"},f={unversionedId:"Docusaurus_References/toc",id:"Docusaurus_References/toc",isDocsHomePage:!1,title:"Inline TOC | Docusaurus",description:"Each markdown document displays a tab of content on the top-right corner.",source:"@site/docs/Docusaurus_References/10. toc.md",sourceDirName:"Docusaurus_References",slug:"/Docusaurus_References/toc",permalink:"/docs/Docusaurus_References/toc",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Docusaurus_References/10. toc.md",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,id:"toc"},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docs/Docusaurus_References/translate-your-site"},next:{title:"Footer",permalink:"/docs/Docusaurus_References/mdFooter"}},m=[{value:"Full table of contentsDirect link to heading",id:"full-table-of-contentsdirect-link-to-heading",children:[]},{value:"Custom table of contentsDirect link to heading",id:"custom-table-of-contentsdirect-link-to-heading",children:[]}],h={toc:m};function b(e){var t=e.components,n=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each markdown document displays a tab of content on the top-right corner."),(0,i.kt)("p",null,"But it is also possible to display an inline table of contents directly inside a markdown document, thanks to MDX."),(0,i.kt)("h2",{id:"full-table-of-contentsdirect-link-to-heading"},"Full table of contents",(0,i.kt)("a",{parentName:"h2",href:"https://docusaurus.io/docs/markdown-features/code-blocks#full-table-of-contents",title:"Direct link to heading"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"toc")," variable is available in any MDX document, and contain all the top level headings of a MDX document."),(0,i.kt)(u,{toc:m,mdxType:"TOCInline"}),";",(0,i.kt)("h2",{id:"custom-table-of-contentsdirect-link-to-heading"},"Custom table of contents",(0,i.kt)("a",{parentName:"h2",href:"https://docusaurus.io/docs/markdown-features/code-blocks#custom-table-of-contents",title:"Direct link to heading"},"#")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"type TOCItem = {\n  value: string;\n  id: string;\n  children: TOCItem[];\n};\n")),(0,i.kt)("p",null,"You can create this TOC tree manually, or derive a new TOC tree from the ",(0,i.kt)("inlineCode",{parentName:"p"},"toc")," variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import TOCInline from '@theme/TOCInline';\n\n<TOCInline\n  toc={\n    // Only show 3th and 5th top-level heading\n    [toc[2], toc[4]]\n  }\n/>;\n")),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The underlying content is just an example to have more table-of-contents items available in current page."))))}b.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);