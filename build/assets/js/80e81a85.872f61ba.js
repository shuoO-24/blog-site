(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3862],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),h=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=h(t.components);return a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=h(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?a.createElement(d,r(r({ref:e},c),{},{components:n})):a.createElement(d,r({ref:e},c))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,r[1]=s;for(var h=2;h<i;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6925:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h},default:function(){return p}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=["components"],s={id:"vectorfield",title:"Vector Field"},l={unversionedId:"Multivariable Calculus/vectorfield",id:"Multivariable Calculus/vectorfield",isDocsHomePage:!1,title:"Vector Field",description:"Vector fields that are gradients or curls",source:"@site/docs/Multivariable Calculus/vector fields that are gradients or curls.md",sourceDirName:"Multivariable Calculus",slug:"/Multivariable Calculus/vectorfield",permalink:"/docs/Multivariable Calculus/vectorfield",editUrl:"https://github.com/shuoO-24/blog-site/tree/main/docs/docs/Multivariable Calculus/vector fields that are gradients or curls.md",version:"current",frontMatter:{id:"vectorfield",title:"Vector Field"},sidebar:"tutorialSidebar",previous:{title:"Theorems",permalink:"/docs/Multivariable Calculus/calctheorems"},next:{title:"Basic Syntax",permalink:"/docs/Docusaurus_References/Markdown_MDX/mdbasics"}},h=[{value:"Vector fields that are gradients or curls",id:"vector-fields-that-are-gradients-or-curls",children:[]},{value:"vector fields that are gradients",id:"vector-fields-that-are-gradients",children:[{value:"For conservative G, how to find f such that \u2207f=G?",id:"for-conservative-g-how-to-find-f-such-that-\u2207fg",children:[]}]},{value:"vector fields that are curls",id:"vector-fields-that-are-curls",children:[]},{value:"Problems",id:"problems",children:[{value:"Basic skills",id:"basic-skills",children:[]},{value:"Other questions",id:"other-questions",children:[]}]}],c={toc:h};function p(t){var e=t.components,n=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"vector-fields-that-are-gradients-or-curls"},"Vector fields that are gradients or curls"),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter5/S5.7.html#sect-5.7.1"},"vector fields that are gradients")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter5/S5.7.html#sect-5.7.2"},"vector fields that are curls")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter5/S5.7.html#sect-5.7.P"},"Problems")))),(0,i.kt)("iframe",{src:"https://drive.google.com/file/d/1JqVTmSTIgPtSXHRd3LblF-Owid9UlAD6/preview",width:"90%",height:"700"}),(0,i.kt)("p",null,"Given a function f or a vector field F, we can easily compute grad\u2061f or curl\u2061F. Here we ask a sort of inverse question. Given a vector field G, can we determine:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"does there exist some function f such that G\\=grad\u2061f? If so, can we find f?"),(0,i.kt)("li",{parentName:"ul"},"does there exist some vector field F such that G\\=curl\u2061F? If so, can we find F?")),(0,i.kt)("p",null,"We will discuss gradients first."),(0,i.kt)("h2",{id:"vector-fields-that-are-gradients"},"vector fields that are gradients"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Theorem 1.")," Let U be an open subset of Rn for n\u22652, and let G:U\u2192Rn be a continuous vector field. Then the following are equivalent:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(i)")," There exists a function f:U\u2192R of class C1 such that G\\=\u2207f."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(ii)")," \u222bCG\u22c5dx\\=0 for any closed piecewise smooth oriented curve C in U."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(iii)")," \u222bC1G\u22c5dx\\=\u222bC2G\u22c5dx for any two piecewise smooth oriented curves C1,C2 in U that both start at the same point p\u2208U and end at the same point q\u2208U."),(0,i.kt)("p",null,"A continuous vector field G:U\u2192Rn is said to be ",(0,i.kt)("strong",{parentName:"p"},"conservative")," if any one of these conditions is satisfied (and hence all three of them are satisfied)."),(0,i.kt)("p",null,"The starting point of the proof is the fact that if G\\=\u2207f for some f of class C1, then for any oriented curve C that starts at a point p and ends at a point q,"),(0,i.kt)("p",null,"(1)\u222bCG\u22c5dx\\=\u222bC\u2207f\u22c5dx\\=f(q)\u2212f(p)."),(0,i.kt)("p",null,"(We saw this in ",(0,i.kt)("a",{parentName:"p",href:"http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter5/S5.1.html#sect-5.1.3"},"Section 5.1"),", where we called it the ",(0,i.kt)("strong",{parentName:"p"},"Fundamental Theorem of Line Integrals"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(i) \u21d2 (ii)"),". Assume that G\\=\u2207f for some C1 function f. Then since a closed curve is just a curve that starts and ends at the same point p, it follows from (1) that the integral of G\\=\u2207f over a closed curve equals f(p)\u2212f(p)\\=0."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(ii) \u21d2 (iii)"),". ",(0,i.kt)("em",{parentName:"p"},"(sketch)")," Let C1,C2 be two peicewise smooth curves in U that both start at the same point p\u2208U and end at the same point q\u2208U."),(0,i.kt)("p",null,"Given these, we may define a piecewise smooth closed curve C to be the curve formed by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"following C1 from p to q, then"),(0,i.kt)("li",{parentName:"ul"},"following C2 backwards, from q to p,")),(0,i.kt)("p",null,"thereby starting and ending at p. Then"),(0,i.kt)("p",null,"\u222bCG\u22c5dx\\=\u222bC1G\u22c5dx\u2212\u222bC2G\u22c5dx"),(0,i.kt)("p",null,"and it follows from this that if ",(0,i.kt)("strong",{parentName:"p"},"(2)")," holds, then \u222bC1G\u22c5dx\u2212\u222bC2G\u22c5dx\\=0 for all C1,C2 as above, ",(0,i.kt)("em",{parentName:"p"},"i.e.")," ",(0,i.kt)("strong",{parentName:"p"},"(3)")," holds. Filling in some of the details we have glossed over is an exercise."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"(iii) \u21d2 (i)"),". This is the hardest and most interesting part of the theorem. Suppose that G is a vector field that satisfies condition ",(0,i.kt)("strong",{parentName:"p"},"(3)"),". If this function f exists, it ",(0,i.kt)("em",{parentName:"p"},"must")," satisfy (1). Thus we can try to use formula (1) to reconstruct f (if it exists) from G. That is, we can fix some p\u2208U, and we can look for f such that G\\=\u2207f and f(p)\\=0. According to (1), such a function f must satisfy"),(0,i.kt)("p",null,"(2)f(q)\\=\u222bCp,qG\u22c5dx for any curve Cp,q starting at p and ending at q."),(0,i.kt)("p",null,"Thus, given G satisfying condition ",(0,i.kt)("strong",{parentName:"p"},"(3)"),", we use equation (2) to ",(0,i.kt)("em",{parentName:"p"},"define")," f:U\u2192R, and then verify that \u2207f\\=G. Condition ",(0,i.kt)("strong",{parentName:"p"},"(3)")," implies that the definition of f makes sense (that is, is independent of the choice of path Cp,q connecting p to q). Thus the proof of the theorem is completed by... the proof that this function f satisfies \u2207f\\=G. (sketch)"),(0,i.kt)("p",null,"Let f be the function defined in (2). We first claim that for any q\u2208U, any vector v, and any h\u2208R such that the line segment from q to q+hv is contained in U,"),(0,i.kt)("p",null,"(3)f(q+hv)\\=f(q)+\u222b0hG(q+tv)\u22c5vdt."),(0,i.kt)("p",null,"To see that this is true, fix some curve Cp,q that starts at p and ends at q. Let \u2113q,q+hv be the line segment that starts at q and ends at q+hv, and let Cp,q+hv be the curve obtained by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"first following Cp,q from p to q;"),(0,i.kt)("li",{parentName:"ul"},"then following \u2113q,q+hv from q to q+hv.")),(0,i.kt)("p",null,"Thus Cp,q+hv is a piecewise smooth curve that starts at p and ends at q+hv. It follows from (2) that"),(0,i.kt)("p",null,"f(q+hv)\\=\u222bCp,q+hvG\u22c5dx\\=\u222bCp,qG\u22c5dx+\u222b\u2113q,q+hvG\u22c5dx\\=f(q)+\u222b\u2113q,q+hvG\u22c5dx"),(0,i.kt)("p",null,"If we express the line integral over \u2113q,q+hv in terms of the parametrization g(t)\\=q+tv, 0\u2264t\u2264h, this reduces to (3)."),(0,i.kt)("p",null,"Next, for any j\u2208{1,\u2026,n}, if (as usual) ej denotes the unit vector in the jth coordinate direction, then it follows from (3) that"),(0,i.kt)("p",null,"\u2202f\u2202xj(q)\\=limh\u21920f(q+hej)\u2212f(q)h\\=limh\u219201h\u222b0hG(q+tej)\u22c5ejdt\\=limh\u219201h\u222b0hGj(q+tej)dt."),(0,i.kt)("p",null,"It is then an exercise to prove (using our assumption that G is continuous) then the limit exists and equals Gj(q). Since j is arbitrary, this proves that \u2207f(q)\\=G(q). \u25fb"),(0,i.kt)("p",null,"One drawback of ",(0,i.kt)("strong",{parentName:"p"},"Theorem 1")," is that, given a vector field G, it might be hard to check whether it satisfies condition ",(0,i.kt)("strong",{parentName:"p"},"(2)")," or ",(0,i.kt)("strong",{parentName:"p"},"(3)"),". In order to do this, one would need to evaluate line integrals of G over every possible closed curve (for ",(0,i.kt)("strong",{parentName:"p"},"(2)"),") or pair of curves that start and end at the same point (for ",(0,i.kt)("strong",{parentName:"p"},"(3)"),"). However, in 3 dimensions, and if G is C1, there is sometimes a much easier way to check whether it is conservative:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Theorem 2.")," If G is a conservative vector field of class C1 on an open set U\u2282R3, then curl\u2061G\\=0.",(0,i.kt)("br",{parentName:"p"}),"\n","If U is convex, then the converse is true: if G:U\u2192R3 is a C1 vector field and curl\u2061G\\=0, then G is conservative.",(0,i.kt)("br",{parentName:"p"}),"\n","However, on some non-convex sets, there exist ",(0,i.kt)("strong",{parentName:"p"},"non-conservative")," vector fields G that satisfy curl\u2061G\\=0."),(0,i.kt)("p",null,"(This is a special case of a much more general theorem that we will neither state nor discuss.)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sketch of proof.")),(0,i.kt)("p",null,"We already know that if G\\=grad\u2061f, then curl\u2061G\\=curl\u2061grad\u2061f\\=0."),(0,i.kt)("p",null,"For the converse, assume that G is a C1 vector field on a convex set U\u2282R3 such that curl\u2061G\\=0."),(0,i.kt)("p",null,"Fix p\u2208U, and for q\u2208U, let \u2113p,q denote the line segment starting at p and ending at q. Since U is convex, this line segment is entirely contained in U."),(0,i.kt)("p",null,"We now define"),(0,i.kt)("p",null,"f(q):=\u222b\u2113p,qG\u22c5dx."),(0,i.kt)("p",null,"This is clearly well-defined, since we have specified exactly which path we follow to get from p to q, for every q."),(0,i.kt)("p",null,"In order to mimic the proof of Theorem 1, all we need is to be able to check that"),(0,i.kt)("p",null,"(4)f(q+hv)\\=f(q)+\u222b0hG(q+tv)\u22c5vdt."),(0,i.kt)("p",null,"holds. If we know this, then every other argument in the earlier proof can be repeated with no change."),(0,i.kt)("p",null,"To prove it, let's assume that p,q and q+hv are not colinear (in that case one can give a different, easier argument). Then they form the vertices of a triangle. Let's call the triangle S. For any choice of orientation (that is, of the direction n of the unit normal),"),(0,i.kt)("p",null,"\u222cS(curl\u2061G)\u22c5ndA\\=0"),(0,i.kt)("p",null,"since curl\u2061G\\=0 by assumption. Thus Stokes' Theorem implies that"),(0,i.kt)("p",null,"\u222b\u2202SG\u22c5dx\\=0"),(0,i.kt)("p",null,"for any choice of the orientation of \u2202S. Note however that \u2202S consists of the three line segments connecting p to q to q+hv, and back to p. If it is oriented in that order (p to q to q+hv to p), then"),(0,i.kt)("p",null,"0\\=\u222b\u2202SG\u22c5dx \\= \u222b\u2113p,qG\u22c5dx+\u222b\u2113q,q+hvG\u22c5dx+\u222b\u2113q+hv,pG\u22c5dx\\=f(q)+\u222b0hG(q+tv)\u22c5vdt\u2212f(q+hv)."),(0,i.kt)("p",null,"We obtain (4) by rearranging this. \u25fb"),(0,i.kt)("p",null,"An example of a non-conservative vector field G on a convex set that satisfies curl\u2061G\\=0 can be found in the exercises."),(0,i.kt)("h3",{id:"for-conservative-g-how-to-find-f-such-that-\u2207fg"},"For conservative G, how to find f such that \u2207f\\=G?"),(0,i.kt)("p",null,"Now suppose G is a continuous vector field on an open set U\u2282Rn, and that we somehow know that G is conservative. How can we find f such that \u2207f\\=G?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"One method")," is simply to carry out a concrete version of the abstract proof, sketched above, that uses formula (2) to demonstrate of the existence of f. This works particularly well if U is a rectangle. Then given p\\=(a,b,c) and q\\=(x,y,z), we can always join p to q as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the first component from a to x, holding the other two components fixed. This straight-line path is parametrized by"),(0,i.kt)("p",{parentName:"li"},"(t,b,c),t moves from a to x.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next change the second component from b to y, holding the other two components fixed. Since the first component has already been changed to x, this straight-line path is parametrized by"),(0,i.kt)("p",{parentName:"li"},"(x,t,c),t moves from b to y.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, change the third component from c to z, holding the other two components fixed. This straight-line path is parametrized by"),(0,i.kt)("p",{parentName:"li"},"(x,y,t),t moves from c to z."))),(0,i.kt)("p",null,"Let Cp,q be the piecewise linear curve obtained in this way. Then"),(0,i.kt)("p",null,"\u222bCp,qG\u22c5dx\\=\u222baxG1(t,b,c)dt+\u222bbyG2(x,t,c)dt+\u222bczG3(x,y,t)dt."),(0,i.kt)("p",null,"So one way to implement formula (2) is by: fix (a,b,c), and define"),(0,i.kt)("p",null,"(5)f(x,y,z):=\u222baxG1(t,b,c)dt+\u222bbyG2(x,t,c)dt+\u222bczG3(x,y,t)dt."),(0,i.kt)("p",null,"(Note, we could also change the components in a different order, if we prefer...)"),(0,i.kt)("p",null,"The above theoretical considerations guarantee that if G is conservative, then f defined in this way must satisfy \u2207f\\=G."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1.")," Let G:R3\u2192R3 be defined by"),(0,i.kt)("p",null,"G(x,y,z)\\=(\u2212ysin\u2061xy,\u2212xsin\u2061xy+zcos\u2061yz,ycos\u2061yz)."),(0,i.kt)("p",null,"One can check that curl\u2061G\\=0. Thus G is conservative. Let us try to find f such that \u2207f\\=G. We will simply use the above formula, with (a,b,c)\\=(0,0,0). (We could choose any point, but (0,0,0) is convenient.)"),(0,i.kt)("p",null,"Then"),(0,i.kt)("p",null,"\u222baxG1(t,b,c)dt\\=\u222b0x0dt\\=0,"),(0,i.kt)("p",null,"\u222bbyG2(x,t,c)dt\\=\u222b0y(\u2212xsin\u2061xt+0)dt\\=cos\u2061xt|t\\=0t\\=y\\=cos\u2061xy\u22121,"),(0,i.kt)("p",null,"and"),(0,i.kt)("p",null,"\u222bczG3(x,y,t)dt\\=\u222b0zycos\u2061ytdt\\=sin\u2061yt|t\\=0z\\=sin\u2061yz."),(0,i.kt)("p",null,"By adding the contributions from these three terms, we conclude that"),(0,i.kt)("p",null,"f(x,y,z)\\=cos\u2061xy+sin\u2061yz\u22121 satisfies \u2207f\\=G."),(0,i.kt)("p",null,"It is easy to check that this is indeed the case. (The constant \u22121 appears because, in choosing p\\=(0,0,0), we implicitly arranged that f(0,0,0)\\=0, and \u22121 is the constant that makes this be the case. If we had chosen a different point p\\=(a,b,c), then chances are that we would have gotten a different constant."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Remark.")," Note that in writing down a concrete implementation of (2), we could have chosen any curve from (a,b,c) to (x,y,z), such as (for example) a straight line. If the domain of G is a convex set containing the origin, then we can take (a,b,c)\\=(0,0,0), and the straight line to (x,y,z)is parametrized by g(t)\\=(tx,ty,tz) for 0\u2264t\u22641. This leads to a the general formula"),(0,i.kt)("p",null,"f(x,y,z)\\=\u222b01G(tx,ty,tz)\u22c5(x,y,z)dt."),(0,i.kt)("p",null,"For example, for G(x,y,z)\\=(\u2212ysin\u2061xy,\u2212xsin\u2061xy+zcos\u2061yz,ycos\u2061yz) as above, this becomes (after some computation)"),(0,i.kt)("p",null,"f(x,y,z)\\=\u222b01\u22122txysin\u2061(t2xy)+2tyzcos\u2061(t2yz)dt"),(0,i.kt)("p",null,"This is easily evaluated by considering the two halves separately, and making th substitutions u\\=t2xy in the first half and u\\=t2yz in the second half."),(0,i.kt)("h2",{id:"vector-fields-that-are-curls"},"vector fields that are curls"),(0,i.kt)("p",null,"There is a whole theory about vector fields G:U\u2192R3 (for U an open subset of R3) with the property that G\\=curl\u2061F for some other vector field F of class C1. It is very much parallel to the theory of gradient (= conservative) vector fields. However, we considered it in less detail."),(0,i.kt)("p",null,"Some main facts are summarized in the following:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Theorem 2.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If G:U\u2192R3 is a vector field of class C1 and G\\=curl\u2061F for some vector field F:U\u2192R3 of class C2, then div\u2061G\\=0."),(0,i.kt)("li",{parentName:"ol"},"Suppose G is a C1 vector field in an open set U\u2282R3 such that div\u2061G\\=0.",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("strong",{parentName:"li"},"a."),". If U is convex, then there exists a vector field F such that curl\u2061F\\=G.",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("strong",{parentName:"li"},"b.")," However, if U is not convex, it may be the case that no such vector field exists.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"About the proof:")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," We already know that div\u2061curl\u2061F\\=0 for all F."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2b.")," Consider the vector field"),(0,i.kt)("p",null,"G(x,y,z)\\=(xr3,yr3,zr3), where  r\\=x2+y2+z2."),(0,i.kt)("p",null,"This is an example showing that on a nonconvex set U (note that the domain of G is U\\=R3\u2216{0}), there can exist vector fields with zero divergence that are not curls. Imdeed, you can check that div\u2061G\\=0 for this G. You can also check that if S:={(x,y,z)\u2208R3:x2+y2+z2\\=1}, oriented with the unit normal pointing outward, then"),(0,i.kt)("p",null,"\u222cSG\u22c5ndA\\=4\u03c0."),(0,i.kt)("p",null,"whereas if G\\=curl\u2061F in U, then we would have \u222cSG\u22c5ndA\\=\u222cScurl\u2061F\u22c5ndA\\=0. (See ",(0,i.kt)("a",{parentName:"p",href:"http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter5/S5.6.html"},"Section 5.6"),".)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2a.")," The way the proof works is illustrates below for a concrete example. After that we will discus the abstract proof."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2.")," Let"),(0,i.kt)("p",null,"G(x,y,z)\\=(xe\u2212x2z2\u22126x,5y+2z,z\u2212ze\u2212x2z2)."),(0,i.kt)("p",null,"One can check that div\u2061G\\=0, and the domain of G is all of R3, which is convex. So it must be possible to write G as the curl of some vector field F."),(0,i.kt)("p",null,"It turns out (see Folland for a discussion) that in this situation, it is always possible to find F such that one of its components is zero everywhere. In this example, it turns out to be easiest to lok for F of the form F\\=(F1,0,F3). (This can be discovered by trial and error.) Then the equation that we are trying to solve, curl\u2061F\\=G, can be written as three equations:"),(0,i.kt)("p",null,"\u22022F3\\=G1\\=xe\u2212x2z2\u22126x\u22023F1\u2212\u22021F3\\=G2\\=5y+2z\u2212\u22022F1\\=G3\\=z\u2212ze\u2212x2z2."),(0,i.kt)("p",null,"First we consider the first and third equations. For every fixed x,z, we may take the antiderivative with respect to the y variable to obtain"),(0,i.kt)("p",null,"F3(x,y,z)\\=\u222b(xe\u2212x2z2\u22126x)dy\\=y(xe\u2212x2z2\u22126x)+\u03d53(x,z),F1(x,y,z)\\=\u2212\u222b(z\u2212ze\u2212x2z2)dy\\=y(ze\u2212x2z2\u2212z)+\u03d51(x,z),"),(0,i.kt)("p",null,"where \u03d51(x,z) and \u03d53(x,z) are constants of integration, which are written in that way because they may depend on x and z. Substituting these into the second equation and simplifying, we obtain"),(0,i.kt)("p",null,"5y+2z\\=G2\\=\u22023F1\u2212\u22021F3\\=\u22023\u03d51\u2212\u22021\u03d53+y(e\u2212x2z2\u22121)\u22122yx2z2e\u2212x2z2\u2212","[","y(e\u2212x2z2\u22126)\u22122yx2z2e\u2212x2z2","]","."),(0,i.kt)("p",null,"After a lot of cancellation, this reduces to"),(0,i.kt)("p",null,"\u22023\u03d51\u2212\u22021\u03d53\\=2z"),(0,i.kt)("p",null,"and we can see by inspection that ths is solved for example by \u03d51(x,z)\\=0,\u03d53(x,z)\\=\u22122xz. We conclude that curl\u2061F\\=G for"),(0,i.kt)("p",null,"F(x,y,z)\\=(yze\u2212x2z2\u2212yz, 0, yxe\u2212x2z2\u22126xy\u22122xz)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Proof of part 2a of Theorem 2")),(0,i.kt)("p",null,"We will just follow the same procedure as in Example 2. We will also cheat a little cheat by proving the theorem not for an arbitrary convex set, but instead under the assumption that U is a rectangle, ",(0,i.kt)("em",{parentName:"p"},"e.g.")," (a1,b1)\xd7(a2,b2)\xd7(a3,b3)."),(0,i.kt)("p",null,"We assume that G is C1 in U and that div\u2061G\\=0. We want to find F solving the system of equations"),(0,i.kt)("p",null,"\u22022F3\u2212\u22023F2\\=G1\u22023F1\u2212\u22021F3\\=G2\u22021F2\u2212\u22022F1\\=G3."),(0,i.kt)("p",null,"We will look for F such that F3\\=0. Then the first two equations reduce to"),(0,i.kt)("p",null,"\u2212\u22023F2\\=G1\u22023F1\\=G2."),(0,i.kt)("p",null,"We fix some a\u2208(a3,b3) and integrate both sides with respect to the third variable (calling it t instead of z for purposes of integration) getting constants of integration that depend on x and y:"),(0,i.kt)("p",null,"F2(x,y,z)\\=\u2212\u222bazG1(x,y,t)dt+\u03d5(x,y)F1(x,y,z)\\=\u222bazG2(x,y,t)dt+\u03c8(x,y)."),(0,i.kt)("p",null,"We now substitute these into the third equation, differentiate under the integral sign, then simplify using the fact that div\u2061G\\=0:"),(0,i.kt)("p",null,"G3(x,y,z)\\=\u22021F2\u2212\u22022F1\\=\u22021\u03d5\u2212\u22022\u03c8\u2212\u222baz(\u22021G1+\u22022G2)(x,y,t)dt\\=\u22021\u03d5\u2212\u22022\u03c8+\u222baz\u22023G3(x,y,t) dt\\=\u22021\u03d5\u2212\u22022\u03c8+G3(x,y,z)\u2212G3(x,y,a)."),(0,i.kt)("p",null,"Thus the equation reduces to"),(0,i.kt)("p",null,"\u22021\u03d5(x,y)\u2212\u22022\u03c8(x,y)\\=G3(x,y,a)."),(0,i.kt)("p",null,"and this can be solves for example by fixing a\u2032\u2208(a1,b1) and setting"),(0,i.kt)("p",null,"\u03c8(x,y)\\=0,\u03d5(x,y)\\=\u222ba\u2032xG3(t,y,a)dt ."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3.")," This is optional but interesting."),(0,i.kt)("p",null,"Assume that R\u2282R2 is a regular region with piecewise smooth boundary, contained in ","[","\u2212a,a","]","\xd7","[","\u2212a,a","]"," for some positive number a<\u03c0, and let"),(0,i.kt)("p",null,"S:={(x,y,\u03d5(x,y):(x,y)\u2208R} for \u03d5(x,y)\\=ln\u2061(cos\u2061xcos\u2061y)."),(0,i.kt)("p",null,"Below, an image of a portion of the graph of \u03d5. For a suitable choice of the region R, this is what S would look like."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter5/scherk2.png",alt:"scherk"})),(0,i.kt)("p",null,"Also define"),(0,i.kt)("p",null,"G(x,y,z)\\=(\u2212\u2202x\u03d5,\u2212\u2202y\u03d5,1)1+|\u2207\u03d5|2\\=(tan\u2061x,\u2212tan\u2061y,1)1+tan2\u2061x+tan2\u2061y"),(0,i.kt)("p",null,"It is a fact that you can check, if you are unusually fond of differentiation, that \u2207\u22c5G\\=0, and hence that there exists some F such that G\\=\u2207\xd7F. It follows by Stokes Theorem that"),(0,i.kt)("p",null,"\u222cSG\u22c5ndA\\=\u222cS\u2032G\u22c5ndA"),(0,i.kt)("p",null,"for any other surface S\u2032 with the same boundary as S."),(0,i.kt)("p",null,"It is easy to see that G\u22c5n\\=1 on S (in fact G exactly equals n on S). As a result for any surface S\u2032 as above,"),(0,i.kt)("p",null,"area(S) \\= \u222cS1dA \\= \u222cSG\u22c5ndA \\= \u222cS\u2032G\u22c5ndA."),(0,i.kt)("p",null,"Also, it is pretty clear that |G|\\=1 everywhere, and hence that |G\u22c5n|\u2264|G||n|\\=1 everywhere on S\u2032. Therefore"),(0,i.kt)("p",null,"\u222cS\u2032G\u22c5ndA \u2264 \u222cS\u2032|G\u22c5n|dA \u2264 \u222cS\u20321dA\\=area(S\u2032)."),(0,i.kt)("p",null,"Putting these together, we conclude that"),(0,i.kt)("p",null,"area(S)\u2264area(S\u2032) for any surface S\u2032 such that \u2202S\\=\u2202S\u2032."),(0,i.kt)("p",null,"This shows that the particular surface S pictured above is an example of what is called a ",(0,i.kt)("strong",{parentName:"p"},"minimal surface"),": a surface that has the smallest possible area, among all surfaces with a given boundary."),(0,i.kt)("h2",{id:"problems"},"Problems"),(0,i.kt)("h3",{id:"basic-skills"},"Basic skills"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Given a vector field G:R3\u2192R3, determine whether whether there exists any functions f such that \u2207f\\=G, and if so, find one. For example:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"G(x,y,z)\\=(ez1+y2,\u22122xyez(1+y2)2,xez1+y2+sin\u2061z)."),(0,i.kt)("li",{parentName:"ul"},"G(x,y,z)\\=(yz,xz,xy)."),(0,i.kt)("li",{parentName:"ul"},"G(x,y,z)\\=(xsin\u2061ycos\u2061z,12x2cos\u2061ycos\u2061z,\u221212x2sin\u2061ysin\u2061z)."),(0,i.kt)("li",{parentName:"ul"},"G(x,y,z)\\=(12,y2\u2212xzy2z,\u2212yz2)."),(0,i.kt)("li",{parentName:"ul"},"G(x,y,z)\\=(cos\u2061zx,cos\u2061zy,\u2212sin\u2061zln\u2061(xyz)+cos\u2061zz), for x,y,z all positive."),(0,i.kt)("li",{parentName:"ul"},"G is a vector field of the form G(x,y,z)\\=(f(x),g(y),h(z)), where f,g,h are all continuous functions of a single variable."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Given a vector field G:R3\u2192R3, determine whether there exist any vector fields F such that \u2207\xd7F\\=G, and if so find one. For example:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"G(x,y,z)\\=(x,y,z)."),(0,i.kt)("li",{parentName:"ul"},"G(x,y,z)\\=(\u2212y,x,0)."),(0,i.kt)("li",{parentName:"ul"},"G(x,y,z)\\=(y,1zcos\u2061yz,1ycos\u2061yx)."),(0,i.kt)("li",{parentName:"ul"},"G(x,y,z)\\=(yz,xz,xy)."),(0,i.kt)("li",{parentName:"ul"},"G is a vector field of the form G(x,y,z)\\=(f(y,z),g(x,z),h(x,y)), where f,g,h are all continuous functions of two variables.")))),(0,i.kt)("h3",{id:"other-questions"},"Other questions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For U:={(x,y,z)\u2208R3:x2+y2",">","0}, define G:U\u2192R3 by"),(0,i.kt)("p",{parentName:"li"},"G(x,y,z)\\=(\u2212yx2+y2,xx2+y2,0)"),(0,i.kt)("p",{parentName:"li"},"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Prove that curl\u2061G\\=0."),(0,i.kt)("li",{parentName:"ul"},"Prove that G is not conservative.",(0,i.kt)("br",{parentName:"li"}),"(",(0,i.kt)("strong",{parentName:"li"},"Hint"),": Consider \u222bCG\u22c5dx, where C is a circle around the z","-","axis.))"),(0,i.kt)("li",{parentName:"ul"},"possibly challenging, and not really recommended : if we define U\u2032:={(x,y,z)\u2208R3:x",">","0}, then we know that G is conservative on U\u2032. (why?) Find f such that \u2207f\\=G on U\u2032."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Prove that if g is a continuous function defined on an open set containing a point q, then for unit vector e,"),(0,i.kt)("p",{parentName:"li"},"limh\u219201h\u222b0hg(q+te)dt\\=g(q)"),(0,i.kt)("p",{parentName:"li"},"(This point comes up in the proofs of Theorems 1 and 2).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Assume that G is a C2 vector field that is ",(0,i.kt)("strong",{parentName:"p"},"both a gradient and a curl"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Show that if f is a function such that \u2207f\\=G, then f is harmonic (that is, \u22072f\\=0, where we recall that \u22072f\\=\u2211i\\=13\u22022f\u2202xi2.)"),(0,i.kt)("li",{parentName:"ul"},"Conclude that each component Gi of G is also harmonic.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter5/S5.6.html"},"\u21d0"),"  ",(0,i.kt)("a",{parentName:"p",href:"http://www.math.toronto.edu/courses/mat237y1/20189/notes/Contents.html"},"\u21d1"),"  ",(0,i.kt)("a",{parentName:"p",href:"http://www.math.toronto.edu/courses/mat237y1/20189/notes/Chapter6/6.1.html"},"\u21d2")))))}p.isMDXComponent=!0}}]);