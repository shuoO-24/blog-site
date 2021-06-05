---
id: embed
title: Embed images and files
parse_number_prefixes: true
---

## Files

:::warning Web URL Only
不知为什么正常内置pdf文档的方法用不可用，所有的url都默认是以`http://localhost:3000`开头，所以不能使用relative or absolute path的方式来插入文档；所以有服务器的可以直接传到自己服务器里，没有的话就像我一样用Google Drive或者Box或者OneDrive等类似的服务就行，将访问权限设成anyone，再把http的query改成 `preview`，就像这样：`https://drive.google.com/file/d/16Oht1VWNWzL8rNuYt-m8nIgrCaSE-H07/preview`。等我学明白react了再看看Docusaurus为什么不可embed pdf file using local path哼哼
:::

1. `<embed src="/static/pdf/Lagrange_Multipliers.pdf"  type='application/pdf' width="100%" height="600px" />`
    时好时坏，很不稳定，有时突然就Page not found了，非常不推荐


2. `<a target="_blank" href={require('/assets/docusaurus-asset-example-pdf.pdf').default}> Download this PDF </a>`
   官方文档里的用法，但我没成功过TT

3. `<object data="https://math.jhu.edu/~lindblad/211/l19.pdf" type="application/pdf" width="700px" height="700px"><embed src="https://math.jhu.edu/~lindblad/211/l19.pdf"></embed></object>` 可用
   
4. `<iframe src="https://drive.google.com/file/d/1uaj7JRq2ZRK6yg629fnEPI3E90aOfhM_/preview" width="640" height="480"></iframe>`
用Google Drive里直接复制下来的embed code