(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9545],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return t?i.createElement(h,l(l({ref:n},u),{},{components:t})):i.createElement(h,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2202:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var i=t(2122),r=t(9756),a=(t(7294),t(3905)),l=["components"],o={id:"leetcode300",title:"300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217",parse_number_prefixes:!0},s={unversionedId:"Dynamic Programming/leetcode300",id:"Dynamic Programming/leetcode300",isDocsHomePage:!1,title:"300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217",description:"LeetCode 300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217",source:"@site/docs/Dynamic Programming/300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217.md",sourceDirName:"Dynamic Programming",slug:"/Dynamic Programming/leetcode300",permalink:"/docs/Dynamic Programming/leetcode300",editUrl:"https://github.com/shuoO-24/blog-site/tree/main/docs/docs/Dynamic Programming/300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217.md",version:"current",sidebarPosition:300,frontMatter:{id:"leetcode300",title:"300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217",parse_number_prefixes:!0},sidebar:"tutorialSidebar",previous:{title:"96. Unique Binary Search Trees \u2014 Medium",permalink:"/docs/Dynamic Programming/leetcode96"},next:{title:"SQL Overview",permalink:"/docs/SQL Notes/sqlintro"}},p=[{value:"\u601d\u8def\uff08\u52a8\u6001\u89c4\u5212+\u4e8c\u5206\u67e5\u627e\uff09",id:"\u601d\u8def\uff08\u52a8\u6001\u89c4\u5212\u4e8c\u5206\u67e5\u627e\uff09",children:[{value:"\u4ee3\u7801\u4f18\u5316",id:"\u4ee3\u7801\u4f18\u5316",children:[]},{value:"\u6269\u5c55\uff1a\u6811\u72b6\u6570\u7ec4\u89e3\u6cd5",id:"\u6269\u5c55\uff1a\u6811\u72b6\u6570\u7ec4\u89e3\u6cd5",children:[]}]}],u={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"LeetCode ",(0,a.kt)("a",{parentName:"em",href:"https://leetcode-cn.com/problems/longest-increasing-subsequence/"},"300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217"))),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u627e\u5230\u5176\u4e2d\u6700\u957f\u4e25\u683c\u9012\u589e\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\u3002\n\u5b50\u5e8f\u5217\u662f\u7531\u6570\u7ec4\u6d3e\u751f\u800c\u6765\u7684\u5e8f\u5217\uff0c\u5220\u9664\uff08\u6216\u4e0d\u5220\u9664\uff09\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u800c\u4e0d\u6539\u53d8\u5176\u4f59\u5143\u7d20\u7684\u987a\u5e8f\u3002\u4f8b\u5982\uff0c","[3,6,2,7]"," \u662f\u6570\u7ec4 ","[0,3,1,6,2,2,7]"," \u7684\u5b50\u5e8f\u5217\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = ","[10,9,2,5,3,7,101,18]","\n\u8f93\u51fa\uff1a4\n\u89e3\u91ca\uff1a\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u662f ","[2,3,7,101]","\uff0c\u56e0\u6b64\u957f\u5ea6\u4e3a 4 \u3002"),(0,a.kt)("p",null,"\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums = ","[0,1,0,3,2,3]","\n\u8f93\u51fa\uff1a4"),(0,a.kt)("p",null,"\u793a\u4f8b 3\uff1a\n\u8f93\u5165\uff1anums = ","[7,7,7,7,7,7,7]","\n\u8f93\u51fa\uff1a1"),(0,a.kt)("p",null,"\u63d0\u793a\uff1a\n1 <= nums.length <= 2500\n-104 <= nums","[i]"," <= 104"),(0,a.kt)("p",null,"\u8fdb\u9636\uff1a\n\u4f60\u53ef\u4ee5\u8bbe\u8ba1\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(n2) \u7684\u89e3\u51b3\u65b9\u6848\u5417\uff1f\n\u4f60\u80fd\u5c06\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u964d\u4f4e\u5230 O(n log(n)) \u5417?"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u601d\u8def\uff08\u52a8\u6001\u89c4\u5212\u4e8c\u5206\u67e5\u627e\uff09"},"\u601d\u8def\uff08\u52a8\u6001\u89c4\u5212+\u4e8c\u5206\u67e5\u627e\uff09"),(0,a.kt)("p",null,"LIS\uff1aLongest Increasing Subset"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u8f93\u5165\u5e8f\u5217\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20 X\uff0c\u5206\u522b\u627e\u51fa\u627e\u51fa\u4ee5 X \u7ed3\u5c3e\u7684 LIS\uff0c\u5176\u4e2d\u957f\u5ea6\u6700\u957f\u7684\uff0c\u5c31\u662f\u6211\u4eec\u8981\u627e\u7684\u6700\u7ec8 LIS"),(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u4ec0\u4e48\u5173\u6ce8\u7ed3\u5c3e\uff1f\u56e0\u4e3a\u7ed3\u5c3e\u51b3\u5b9a\u4e86 LIS \u6240\u80fd\u6709\u7684\u6700\u5927\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u5176\u6210\u4e3a\u4e00\u4e2a\u9012\u589e\u7684\u6570\u7ec4\uff0c\u8bb0\u5f55\u80fd\u5f62\u6210 LIS \u7684\u6240\u6709\u5143\u7d20"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u8fb9\u904d\u5386\u6240\u6709\u5143\u7d20\u4e00\u8fb9\u66f4\u65b0\u6570\u7ec4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e24\u79cd\u53ef\u80fd\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"nums[i]")," \u6bd4\u6570\u7ec4\u5185\u6240\u6709\u5143\u7d20\u90fd\u5927 --\x3e \u5b83\u53ef\u4ee5\u88ab\u653e\u5728 LIS \u7684\u672b\u5c3e --\x3e append \u4e00\u4e0b\uff0c\u5e76\u4e14 LIS \u7684\u957f\u5ea6\u52a0 1"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"li"},"dp[i - 1] < nums[i] <= dp[i]"),"\uff0c\u8bf4\u660e\u5b83\u9700\u8981\u66ff\u6362\u5927\u4e8e\u7b49\u4e8e x \u7684",(0,a.kt)("inlineCode",{parentName:"li"},"dp[i]"),"\u6570\u5b57\uff0c\u4ee5\u4fdd\u8bc1\u6570\u7ec4\u662f\u4e00\u4e2a\u9012\u589e\u7684\u5e8f\u5217 --\x3e \u66f4\u65b0",(0,a.kt)("inlineCode",{parentName:"li"},"dp[i]")))))),(0,a.kt)("li",{parentName:"ul"},"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("strong",{parentName:"li"},"\u4e8c\u5206\u67e5\u627e"),"\uff0c\u627e\u5230\u6570\u7ec4\u4e2d\u9700\u8981\u88ab\u66f4\u65b0\u7684\u90a3\u4e2a\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"  public int lengthOfLIS(int[] nums) {\n      // \u5bf9\u4e8e\u8f93\u5165\u5e8f\u5217\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20X\uff0c\u5206\u522b\u627e\u51fa\u627e\u51fa\u4ee5X\u7ed3\u5c3e\u7684LIS\uff0c\u5176\u4e2d\u957f\u5ea6\u6700\u957f\u7684\uff0c\u5c31\u662f\u6211\u4eec\u8981\u627e\u7684\u6700\u7ec8LIS\n      int[] dp = new int[nums.length];\n      int size = 0;\n      // \u65b0\u5b57\u7b26\u8981\u4e48\u53d6\u4ee3\u65e7\u5b57\u7b26\uff0c\u8981\u4e48\u52a0\u5728dp\u672b\u5c3e(i == size; size++;)\n      for (int i: nums){\n          int j = 0, k = size;\n          while (j != k){\n              int mid = j + (k - j)/2;  // \u627e\u5230\u88ab\u53d6\u4ee3\u7684\u5b57\u7b26\u7684\u4e0b\u6807\n              if (dp[mid] < i){\n                  j = mid + 1;\n              } else {\n                  k = mid;\n              }\n          }\n          dp[j] = i;\n          if (j == size){\n              size++;\n          }\n      }\n      return size;\n  }\n")),(0,a.kt)("p",null,"\u6267\u884c\u7528\u65f6\uff1a4 ms, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e86 84.11%\u7684\u7528\u6237\n\u5185\u5b58\u6d88\u8017\uff1a37.8 MB, \u5728\u6240\u6709 Java \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e86 91.22%\u7684\u7528\u6237\n\u5fc3\u5f97\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u9053\u9898\u662f\u5f88\u7ecf\u5178\u7684\u5b57\u7b26\u4e32\u7c7b\u52a8\u6001\u89c4\u5212\u9898\u76ee\uff0c\u987a\u4fbf\u590d\u4e60\u4e86\u4e00\u4e0b\u52a8\u6001\u89c4\u5212\u4ee3\u7801\u6a21\u677f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u9898\u8981\u4ed4\u7ec6\u4e00\u70b9\uff0c\u628a\u6837\u4f8b\u7422\u78e8\u900f\u4e86\u518d\u5f00\u59cb\u5199\u4ee3\u7801\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u52e4\u80fd\u8865\u62d9\u3002")),(0,a.kt)("h4",{id:"debug"},"Debug"),(0,a.kt)("p",null,"Binary search \u65f6",(0,a.kt)("inlineCode",{parentName:"p"},"mid"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"dp[i]"),"\u6bd4\u8f83......\u4e0d\u662f\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"nums[i]"),"\uff01"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u4ee3\u7801\u4f18\u5316"},"\u4ee3\u7801\u4f18\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int lengthOfLIS(vector<int> nums) {\n        vector<int> d(nums.size(), INT_MAX);\n        for (auto num : nums) *lower_bound(d.begin(), d.end(), num) = num;\n        return lower_bound(d.begin(), d.end(), INT_MAX) - d.begin();\n    }\n};\n")),(0,a.kt)("p",null,"\u6267\u884c\u7528\u65f6\uff1a8 ms, \u5728\u6240\u6709 C++ \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e86 94.80%\u7684\u7528\u6237\n\u5185\u5b58\u6d88\u8017\uff1a10.2 MB, \u5728\u6240\u6709 C++ \u63d0\u4ea4\u4e2d\u51fb\u8d25\u4e86 62.42%\u7684\u7528\u6237\n\u5fc3\u5f97\uff1aC++\u6307\u9488\u53d8\u91cf\u7684\u5999\u7528 hhhh \u7edd\u4e86\u7edd\u4e86\uff01\u4e0d\u8fc7\u7a7a\u95f4\u590d\u6742\u5ea6\u8fd8\u80fd\u518d\u4f18\u5316\u5417\uff1f\u597d\u5947"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u6269\u5c55\uff1a\u6811\u72b6\u6570\u7ec4\u89e3\u6cd5"},"\u6269\u5c55\uff1a\u6811\u72b6\u6570\u7ec4\u89e3\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/FlushHip/article/details/79165701"},"\u9605\u8bfb\u6750\u6599\uff1a\u6811\u72b6\u6570\u7ec4\u7b80\u5355\u6613\u61c2\u7684\u8be6\u89e3",(0,a.kt)("em",{parentName:"a"},"FlushHip-CSDN \u535a\u5ba2"),"\u6811\u72b6\u6570\u7ec4")),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Fenwick tree or binary indexed tree")," is a data structure that can efficiently update elements and calculate ",(0,a.kt)("strong",{parentName:"p"},"prefix sums in a table of numbers"),". ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fenwick_tree"},"Fenwick tree - Wikipedia")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#300-%E6%9C%80%E9%95%BF%E9%80%92%E5%A2%9E%E5%AD%90%E5%BA%8F%E5%88%97"},"300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E6%80%9D%E8%B7%AF%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE"},"\u601d\u8def\uff08\u52a8\u6001\u89c4\u5212+\u4e8c\u5206\u67e5\u627e\uff09"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#debug"},"Debug")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E4%BB%A3%E7%A0%81%E4%BC%98%E5%8C%96"},"\u4ee3\u7801\u4f18\u5316")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E6%89%A9%E5%B1%95%E6%A0%91%E7%8A%B6%E6%95%B0%E7%BB%84%E8%A7%A3%E6%B3%95"},"\u6269\u5c55\uff1a\u6811\u72b6\u6570\u7ec4\u89e3\u6cd5"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#time-complexity-in-big-o-notation"},"Time complexity in big O notation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#description"},"Description"))))))))),(0,a.kt)("p",null,"Create a binary indexed tree for the array ","[1, 2, 3, 4, 5]"," by inserting one by one:\n",(0,a.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/BITDemo.gif/440px-BITDemo.gif",alt:"440px-BITDemo.gif"})),(0,a.kt)("h4",{id:"time-complexity-in-big-o-notation"},"Time complexity in big O notation"),(0,a.kt)("p",null,"Algorithm Average Worst case\nSpace O(n) O(n)\nSearch O(logn) O(logn)\nInsert O(logn) O(logn)\nDelete O(logn) O(logn)"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Given an index in the array representing a vertex, the index of a vertex's parent or child is calculated through bitwise operations on the binary representation of its index. Each element of the array contains the pre-calculated sum of a range of values, and by combining that sum with additional ranges encountered during an upward traversal to the root, the prefix sum is calculated. When a table value is modified, all range sums which contain the modified value are in turn modified during a similar traversal of the tree. The range sums are defined in such a way that both queries and modifications to the table are executed in asymptotically equivalent time (${\\displaystyle O(\\log n)}$ in the worst case)."),(0,a.kt)("p",null,"A Fenwick tree is most easily understood by considering a one-based array. ",(0,a.kt)("strong",{parentName:"p"},"Each element whose index is a power of 2 contains the sum of the first elements.")," ",(0,a.kt)("strong",{parentName:"p"},"Elements whose indices are the sum of two (distinct) powers of 2 contain the sum of the elements since the preceding power of 2.")," In general, each element contains the sum of the values since its parent in the tree, and that parent is found by clearing the least-significant bit in the index ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," ",(0,a.kt)("inlineCode",{parentName:"p"},"i")),(0,a.kt)("p",null,"To find the sum up to any given index, consider the ",(0,a.kt)("strong",{parentName:"p"},"binary expansion of the index, and add elements which correspond to each 1 bit in the binary form"),"."),(0,a.kt)("p",null,"For example, say one wishes to find the sum of the first eleven values. Eleven is 10112 in binary. This contains three 1 bits, so three elements must be added: 10002, 10102, and 10112. These contain the sums of values 1\u20138, 9\u201310, and 11, respectively."),(0,a.kt)("p",null,"To modify the eleventh value, the elements which must be modified are 10112, 11002, 100002, and all higher powers of 2 up to the size of the array. These contain the sums of values 11, 9\u201312, and 1\u201316, respectively. The maximum number of elements which may need to be updated is limited by the number of bits in the size of the array."),(0,a.kt)("p",null,"......"))}m.isMDXComponent=!0}}]);