(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[787],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2395:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:2},l={unversionedId:"Docusaurus_References/Code Block",id:"Docusaurus_References/Code Block",isDocsHomePage:!1,title:"Add Code blocks",description:"---",source:"@site/docs/Docusaurus_References/2. Code Block.md",sourceDirName:"Docusaurus_References",slug:"/Docusaurus_References/Code Block",permalink:"/docs/Docusaurus_References/Code Block",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Docusaurus_References/2. Code Block.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basic Syntax",permalink:"/docs/Docusaurus_References/Basics"},next:{title:"Front-matter",permalink:"/docs/Docusaurus_References/Front-matter"}},c=[{value:"Code title",id:"code-title",children:[]},{value:"Syntax highlighting",id:"syntax-highlighting",children:[]},{value:"Line highlighting",id:"line-highlighting",children:[]},{value:"Interactive code editor",id:"interactive-code-editor",children:[{value:"Imports",id:"imports",children:[]}]},{value:"Multi-language support code blocks#",id:"multi-language-support-code-blocks",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Code blocks within documentation are super-powered \ud83d\udcaa."),(0,i.kt)("h2",{id:"code-title"},"Code title",(0,i.kt)("a",{parentName:"h2",href:"https://docusaurus.io/docs/markdown-features/code-blocks#code-title"})),(0,i.kt)("p",null,"You can add a title to the code block by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," key after the language (leave a space between them)."),(0,i.kt)("p",null,"/src/components/HelloCodeTitle.js"),(0,i.kt)("h2",{id:"syntax-highlighting"},"Syntax highlighting",(0,i.kt)("a",{parentName:"h2",href:"https://docusaurus.io/docs/markdown-features/code-blocks#syntax-highlighting"})),(0,i.kt)("p",null,"Code blocks are text blocks wrapped around by strings of 3 backticks. You may check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mdx-js/specification"},"this reference")," for specifications of MDX."),(0,i.kt)("p",null,"Use the matching language meta string for your code block, and Docusaurus will pick up syntax highlighting automatically, powered by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer"},"Prism React Renderer"),"."),(0,i.kt)("p",null,"By default, the Prism ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer#theming"},"syntax highlighting theme")," we use is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/themes/palenight.js"},"Palenight"),". You can change this to another theme by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"prism")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig")," in your docusaurus.config.js."),(0,i.kt)("p",null,"For example, if you prefer to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dracula")," highlighting theme:"),(0,i.kt)("p",null,"By default, Docusaurus comes with a subset of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js"},"commonly used languages"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'markup, bash, clike, c, cpp, css, "css-extras", javascript, jsx, "js-extras", coffeescript, diff, git, go, graphql, handlebars, json, less, makefile, markdown, objectivec, ocaml, python, reason, sass, scss, sql, stylus, tsx, typescript, wasm, yaml')),(0,i.kt)("p",null,"If there's a syntax that is not currently supported, we are open to adding them! Pull requests welcome."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some popular languages like Java, C#, or PHP are not enabled by default."))),(0,i.kt)("p",null,"To add syntax highlighting for any of the other ",(0,i.kt)("a",{parentName:"p",href:"https://prismjs.com/#supported-languages"},"Prism supported languages"),", define it in an array of additional languages."),(0,i.kt)("p",null,"For example, if you want to add highlighting for the ",(0,i.kt)("inlineCode",{parentName:"p"},"powershell")," language:"),(0,i.kt)("p",null,"If you want to add highlighting for languages not yet supported by Prism, you can swizzle ",(0,i.kt)("inlineCode",{parentName:"p"},"prism-include-languages"),":"),(0,i.kt)("p",null,"It will produce ",(0,i.kt)("inlineCode",{parentName:"p"},"prism-include-languages.js")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"src/theme")," folder. You can add highlighting support for custom languages by editing ",(0,i.kt)("inlineCode",{parentName:"p"},"prism-include-languages.js"),":"),(0,i.kt)("p",null,"src/theme/prism-include-languages.js"),(0,i.kt)("p",null,"You can refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PrismJS/prism/tree/master/components"},"Prism's official language definitions")," when you are writing your own language definitions."),(0,i.kt)("h2",{id:"line-highlighting"},"Line highlighting",(0,i.kt)("a",{parentName:"h2",href:"https://docusaurus.io/docs/markdown-features/code-blocks#line-highlighting"})),(0,i.kt)("p",null,"You can bring emphasis to certain lines of code by specifying line ranges after the language meta string (leave a space after the language)."),(0,i.kt)("p",null,"To accomplish this, Docusaurus adds the ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus-highlight-code-line")," class to the highlighted lines. You will need to define your own styling for this CSS, possibly in your ",(0,i.kt)("inlineCode",{parentName:"p"},"src/css/custom.css")," with a custom background color which is dependent on your selected syntax highlighting theme. The color given below works for the default highlighting theme (Palenight), so if you are using another theme, you will have to tweak the color accordingly."),(0,i.kt)("p",null,"To highlight multiple lines, separate the line numbers by commas or use the range syntax to select a chunk of lines. This feature uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"parse-number-range")," library and you can find ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/parse-numeric-range"},"more syntax")," on their project details."),(0,i.kt)("p",null,"You can also use comments with ",(0,i.kt)("inlineCode",{parentName:"p"},"highlight-next-line"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"highlight-start"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"highlight-end")," to select which lines are highlighted."),(0,i.kt)("h2",{id:"interactive-code-editor"},"Interactive code editor",(0,i.kt)("a",{parentName:"h2",href:"https://docusaurus.io/docs/markdown-features/code-blocks#interactive-code-editor"})),(0,i.kt)("p",null,"(Powered by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/react-live"},"React Live"),")"),(0,i.kt)("p",null,"You can create an interactive coding editor with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-live-codeblock")," plugin."),(0,i.kt)("p",null,"First, add the plugin to your package."),(0,i.kt)("p",null,"You will also need to add the plugin to your ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."),(0,i.kt)("p",null,"To use the plugin, create a code block with ",(0,i.kt)("inlineCode",{parentName:"p"},"live")," attached to the language meta string."),(0,i.kt)("p",null,"The code block will be rendered as an interactive editor. Changes to the code will reflect on the result panel live."),(0,i.kt)("h3",{id:"imports"},"Imports",(0,i.kt)("a",{parentName:"h3",href:"https://docusaurus.io/docs/markdown-features/code-blocks#imports"})),(0,i.kt)("h5",{id:"react-live-and-imports"},"react-live and imports"),(0,i.kt)("p",null,"It is not possible to import components directly from the react-live code editor, you have to define available imports upfront."),(0,i.kt)("p",null,"By default, all React imports are available. If you need more imports available, swizzle the react-live scope:"),(0,i.kt)("p",null,"src/theme/ReactLiveScope/index.js"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ButtonExample")," component is now available to use:"),(0,i.kt)("h2",{id:"multi-language-support-code-blocks"},"Multi-language support code blocks",(0,i.kt)("a",{parentName:"h2",href:"https://docusaurus.io/docs/markdown-features/code-blocks#multi-language-support-code-blocks"},"#")),(0,i.kt)("p",null,"With MDX, you can easily create interactive components within your documentation, for example, to display code in multiple programming languages and switching between them using a tabs component."),(0,i.kt)("p",null,"Instead of implementing a dedicated component for multi-language support code blocks, we've implemented a generic Tabs component in the classic theme so that you can use it for other non-code scenarios as well."),(0,i.kt)("p",null,"The following example is how you can have multi-language code tabs in your docs. Note that the empty lines above and below each language block is ",(0,i.kt)("strong",{parentName:"p"},"intentional"),". This is a current limitation of MDX, you have to leave empty lines around Markdown syntax for the MDX parser to know that it's Markdown syntax and not JSX."),(0,i.kt)("p",null,"And you will get the following:"),(0,i.kt)("p",null,"You may want to implement your own ",(0,i.kt)("inlineCode",{parentName:"p"},"<MultiLanguageCode />")," abstraction if you find the above approach too verbose. We might just implement one in future for convenience."),(0,i.kt)("p",null,"If you have multiple of these multi-language code tabs, and you want to sync the selection across the tab instances, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#syncing-tab-choices"},"Syncing tab choices section"),"."))}p.isMDXComponent=!0}}]);