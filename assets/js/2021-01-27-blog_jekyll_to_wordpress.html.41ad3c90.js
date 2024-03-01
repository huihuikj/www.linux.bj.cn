"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[9544],{3671:(n,t)=>{t.A=(n,t)=>{const a=n.__vccOpts||n;for(const[n,e]of t)a[n]=e;return a}},3822:(n,t,a)=>{a.r(t),a.d(t,{comp:()=>w,data:()=>y});var e=a(7847);const s=(0,e.Lk)("p",null,"2005 年开始在 MSN space 写博客，期间配合 Google Sidewiki(短命) 记录感想。六年后，MSN space 关闭，旧博客被动转移到 WordPress 托管，暂停使用博客。",-1),o=(0,e.Lk)("p",null,"2018 年偶尔接触到 Jekyll，被其简洁的界面和便捷性打动，博客复活。本地用 Markdown 编辑排版，同步 github 发布，博客方向则从感想记录转移到知识输出。",-1),p=(0,e.Lk)("p",null,"Jekyll 用着太舒服，不知不觉就过了三年。但随着文章越来越多，修改也愈加困难，甚至逐渐习惯只更新专栏，而将博客仅作初版发布。Jekyll 已经失去了知识记录参考的初衷，决定将博客从 Jekyll 迁移到 WordPress，文章的初次排版编辑依旧使用 Markdown。",-1),l=(0,e.Lk)("figure",null,[(0,e.Lk)("img",{src:"https://img.newzone.top/20210128124408.png?imageMogr2/thumbnail/500x",alt:"",tabindex:"0",loading:"lazy"}),(0,e.Lk)("figcaption")],-1),r=(0,e.Lk)("h2",{id:"迁移步骤",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#迁移步骤"},[(0,e.Lk)("span",null,"迁移步骤")])],-1),c={href:"https://github.com/Huxpro/huxpro.github.io",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Fv)('<ol><li><p>复制博客主目录下的 feed.xml 文件，重命名为「feed-wp.xml」。如果目录内不存在 feed.xml，可尝试 rss.xml 或 atom.xml。</p></li><li><p>修改 feed-wp.xml 文件中的 <code>for post in site.posts limit:100 %</code>，该项为 rss 最低生成量，我们导出所有文章，因此将该值修改为 100。</p></li><li><p>参照下方内容，按 WordPress 所需 rss 格式修改 feed-wp.xml 文件的 <code>item</code> 部分，并在文件顶部的 <code>&lt;rss&gt;</code> 元素内添加 <code>xmlns:content=&quot;http://purl.org/rss/1.0/modules/content/&quot;</code>，避免 xml 格式报错。</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rss</span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>atom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2005/Atom<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://purl.org/rss/1.0/modules/content/<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pubDate</span><span class="token punctuation">&gt;</span></span>发布日期<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pubDate</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">content:</span>encoded</span><span class="token punctuation">&gt;</span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">content:</span>encoded</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span><span class="token punctuation">&gt;</span></span>标签/目录 (该项将全部转为目录)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>category</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rss</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>登录 WordPress 后台，工具－导入－安装并启用插件 <strong>FeedWordPress</strong> 。自带 RSS 导入器许久不更新，极易报错，不推荐。</p></li><li><p>后台－Syndication－添加 rss 源，比如添加源 <code>xxx.com/feed-wp.xml</code>，其中 <code>xxx.com</code> 指你的博客网址。</p><figure><img src="https://img.newzone.top/20210128120956.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ol><p>参考资料：</p>',2),u={href:"https://www.v2ex.com/t/73385",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.yiyult.com/201903155699.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.cnblogs.com/u0mo5/p/4100927.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://stackoverflow.com/questions/33212592/how-to-create-contentencoded-in-rss",target:"_blank",rel:"noopener noreferrer"},m={href:"content:encoded"},h={},w=(0,a(3671).A)(h,[["render",function(n,t){const a=(0,e.g2)("ExternalLinkIcon");return(0,e.uX)(),(0,e.CE)("div",null,[s,o,p,l,r,(0,e.Lk)("p",null,[(0,e.eW)("这里迁移的是 Jekyll 的 "),(0,e.Lk)("a",c,[(0,e.eW)("Hux blog 模板"),(0,e.bF)(a)]),(0,e.eW)("，Hexo 或其他 Jekyll 博客可以参照微调。")]),i,(0,e.Lk)("ul",null,[(0,e.Lk)("li",null,[(0,e.Lk)("p",null,[(0,e.Lk)("a",u,[(0,e.eW)("有没有办法把 Markdown 写的博客迁移到 wordpress？"),(0,e.bF)(a)])])]),(0,e.Lk)("li",null,[(0,e.Lk)("p",null,[(0,e.Lk)("a",k,[(0,e.eW)("WordPress 从 RSS 导入文章"),(0,e.bF)(a)])])]),(0,e.Lk)("li",null,[(0,e.Lk)("p",null,[(0,e.Lk)("a",d,[(0,e.eW)("有关 WordPress 的 Rss 导入指南"),(0,e.bF)(a)])])]),(0,e.Lk)("li",null,[(0,e.Lk)("p",null,[(0,e.Lk)("a",g,[(0,e.eW)("How to create "),(0,e.Lk)("a",m,[(0,e.eW)("content:encoded"),(0,e.bF)(a)]),(0,e.eW)(" in RSS")])])])])])}]]),y=JSON.parse('{"path":"/posts/2021-01-27-blog_jekyll_to_wordpress.html","title":"Jekyll 博客迁移－从 Markdown 到 WordPress","lang":"zh-CN","frontmatter":{"title":"Jekyll 博客迁移－从 Markdown 到 WordPress","date":"2021-01-27T00:00:00.000Z","category":["博客"],"tag":["Jekyll","WordPress"],"order":-35,"description":"2005 年开始在 MSN space 写博客，期间配合 Google Sidewiki(短命) 记录感想。六年后，MSN space 关闭，旧博客被动转移到 WordPress 托管，暂停使用博客。 2018 年偶尔接触到 Jekyll，被其简洁的界面和便捷性打动，博客复活。本地用 Markdown 编辑排版，同步 github 发布，博客方向则从感...","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2021-01-27-blog_jekyll_to_wordpress.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Jekyll 博客迁移－从 Markdown 到 WordPress"}],["meta",{"property":"og:description","content":"2005 年开始在 MSN space 写博客，期间配合 Google Sidewiki(短命) 记录感想。六年后，MSN space 关闭，旧博客被动转移到 WordPress 托管，暂停使用博客。 2018 年偶尔接触到 Jekyll，被其简洁的界面和便捷性打动，博客复活。本地用 Markdown 编辑排版，同步 github 发布，博客方向则从感..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.newzone.top/20210128124408.png?imageMogr2/thumbnail/500x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T02:07:29.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Jekyll 博客迁移－从 Markdown 到 WordPress"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"Jekyll"}],["meta",{"property":"article:tag","content":"WordPress"}],["meta",{"property":"article:published_time","content":"2021-01-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-01T02:07:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jekyll 博客迁移－从 Markdown 到 WordPress\\",\\"image\\":[\\"https://img.newzone.top/20210128124408.png?imageMogr2/thumbnail/500x\\",\\"https://img.newzone.top/20210128120956.gif\\"],\\"datePublished\\":\\"2021-01-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-01T02:07:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"迁移步骤","slug":"迁移步骤","link":"#迁移步骤","children":[]}],"git":{"createdTime":1709258849000,"updatedTime":1709258849000,"contributors":[{"name":"辉辉","email":"59565692+huihuikj@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.79,"words":537},"filePathRelative":"_posts/2021-01-27-blog_jekyll_to_wordpress.md","localizedDate":"2021年1月27日","excerpt":"<p>2005 年开始在 MSN space 写博客，期间配合 Google Sidewiki(短命) 记录感想。六年后，MSN space 关闭，旧博客被动转移到 WordPress 托管，暂停使用博客。</p>\\n<p>2018 年偶尔接触到 Jekyll，被其简洁的界面和便捷性打动，博客复活。本地用 Markdown 编辑排版，同步 github 发布，博客方向则从感想记录转移到知识输出。</p>\\n<p>Jekyll 用着太舒服，不知不觉就过了三年。但随着文章越来越多，修改也愈加困难，甚至逐渐习惯只更新专栏，而将博客仅作初版发布。Jekyll 已经失去了知识记录参考的初衷，决定将博客从 Jekyll 迁移到 WordPress，文章的初次排版编辑依旧使用 Markdown。</p>","autoDesc":true}')}}]);