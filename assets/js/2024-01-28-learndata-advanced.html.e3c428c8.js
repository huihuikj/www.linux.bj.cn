"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[2705],{3671:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,o]of t)a[e]=o;return a}},9939:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>w,data:()=>D});var o=a(7847);const n=(0,o.Lk)("blockquote",null,[(0,o.Lk)("p",null,"本文是 LearnData 博客的进阶篇，基础搭建流程查看主页。")],-1),r={href:"https://newzone.top/posts/2022-08-22-learndata_blog_to_knowledge_management.html",target:"_blank",rel:"noopener noreferrer"},i=(0,o.Lk)("figure",null,[(0,o.Lk)("img",{src:"https://img.newzone.top/2023-12-12-19-00-11.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),(0,o.Lk)("figcaption")],-1),l=(0,o.Lk)("p",null,"但随着使用频率的提升，我也逐渐发现了一些效率上的问题。接下来，我将进一步介绍关于知识搜索和管理方面的 LearnData 博客进阶经验。",-1),p=(0,o.Lk)("h2",{id:"本地搜索与网页端搜索的权衡",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#本地搜索与网页端搜索的权衡"},[(0,o.Lk)("span",null,"本地搜索与网页端搜索的权衡")])],-1),d={href:"https://newzone.top/",target:"_blank",rel:"noopener noreferrer"},c=(0,o.Fv)('<p>随着笔记量的增加，传统的全文本搜索方法开始显得力不从心，我越来越难找到需要的文章。因此，我转而采用了 LearnData 博客集成的 Algolia 和 SearchPro 这两款节点搜索工具进行文章的查询和管理。与 VS Code 的全文本搜索相比，节点搜索不仅提高了搜索效率，更使得大量文章的管理和定位变得更加便捷高效。</p><figure><img src="https://img.newzone.top/2023-12-12-08-01-10.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption>左侧为 VS Code 本地搜索，右侧为网站搜索</figcaption></figure><p>尽管我曾尝试利用 Algolia API 实现本地搜索功能，但由于过于复杂的程序结构和不尽如人意的效果，我最终决定专注于网站端的节点搜索，以此高效地定位所需知识点。</p><h2 id="网页查询与本地文件修改的融合" tabindex="-1"><a class="header-anchor" href="#网页查询与本地文件修改的融合"><span>网页查询与本地文件修改的融合</span></a></h2><p>虽然用网站搜索文章效率极高，但它引出了一个新问题：如何修改找到的网页内容？</p><p>之前，我需要根据网页链接在本地逐一对照文件，才能进行修改，这一流程随着笔记数量的增长变得异常繁琐。我甚至尝试过将笔记同步到双链笔记工具如 Logseq、Obsidian 中进行管理，但这样做既背离了 LearnData 旨在简单、高效的初衷，同时也缺失了网页博客的分享特性，并容易导致文章结构混乱。</p><p>最终，我采取了一种新的方法：通过脚本将网页路径直接转换为本地路径。这样一来，当我在网页端发现需要修改的内容时，只需运行脚本即可快速定位到本地文件，让网页查询与本地文件修改完美融合。</p><figure><img src="https://img.newzone.top/learndata2local.gif?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption>LearnData 博客页面直接跳转到本地</figcaption></figure>',8),g={href:"https://getquicker.net/Sharedaction?code=7cd28948-74cb-433c-53de-08dbf9f189d3",target:"_blank",rel:"noopener noreferrer"},s=(0,o.Fv)('<p><strong>网址链接转换为本地路径的原理</strong>如下：</p><ol><li>获取当前网页的网址。</li><li>替换网址中的固定域名 <code>https://newzone.top/</code> 为空，并将网页路径的 <code>/</code> 转换为本地路径符号 <code>\\</code>。</li><li>以 <code>.html</code> 为分界，取分割后列表的第一部分。</li><li>在文本开头添加本地项目路径 <code>D:\\Backup\\Libraries\\Documents\\GitHub\\LearnData\\docs\\</code>，并在结尾添加 <code>.md</code>。</li><li>为解决目录文档路径问题，将 <code>\\.md</code> 替换为 <code>\\README.md</code>。</li></ol><h2 id="vs-code-文件排序" tabindex="-1"><a class="header-anchor" href="#vs-code-文件排序"><span>VS Code 文件排序</span></a></h2><p>有时，我们可能需要在海量文章中定位最新的文件。VS Code 虽然默认按文件名排序，不支持自定义排序，但以下方法可以帮你实现按最新修改日期排序，优化你的文件管理效率：</p>',4),m=(0,o.Fv)('<li><p><strong>通过设置修改排序</strong>：</p><ul><li>使用快捷键 <code>Ctrl+,</code> 或通过菜单「文件」&gt;「首选项」&gt;「设置」进入设置。</li><li>在设置中搜索 <code>Explorer: Sort Order</code> 并选择 <code>modified</code> 选项，即可使文件按最后修改日期降序排列。</li></ul><figure><img src="https://img.newzone.top/2024-01-23-05-29-33.png?imageMogr2/format/webp" alt="VS Code 文件排序设置" tabindex="0" loading="lazy"><figcaption>VS Code 文件排序设置</figcaption></figure></li>',1),h=(0,o.Lk)("p",null,[(0,o.Lk)("strong",null,"使用 VS Code 扩展"),(0,o.eW)("：")],-1),u={href:"https://marketplace.visualstudio.com/items?itemName=qingshun.explorer-sort-order",target:"_blank",rel:"noopener noreferrer"},f=(0,o.Lk)("li",null,[(0,o.eW)("使用热键 "),(0,o.Lk)("code",null,"Ctrl+F10"),(0,o.eW)(" 即可在名称排序和时间排序之间快速切换。")],-1),b={href:"https://github.com/microsoft/vscode/issues/27286",target:"_blank",rel:"noopener noreferrer"},L=(0,o.Fv)('<h2 id="主题笔记的引入" tabindex="-1"><a class="header-anchor" href="#主题笔记的引入"><span>主题笔记的引入</span></a></h2><p>LearnData 的另一大改变是引入了主题笔记的概念，它允许部分文章同时在博客中更新，并在特定领域的树状栏中展示，打破了传统主侧边栏的限制。</p><p>以文章「飞书迁移记录」为例，它被放在 <code>apps/tutorials/feishu</code> 路径下，在侧边栏中被归类为应用笔记，而不仅仅是博客文章。通过在文章中加入 <code>article</code> 标签，文章内容既能在博客页面展示，也能出现在 RSS 订阅中。</p><figure><img src="https://img.newzone.top/2024-01-23-05-45-34.png?imageMogr2/format/webp" alt="飞书迁移记录示例" tabindex="0" loading="lazy"><figcaption>飞书迁移记录示例</figcaption></figure><p>这种分类方式的优势在于，我可以将新文章有效地归类于树状侧边栏中。同时，<code>article</code> 标签下的文章按 <code>data</code> 排序，时间越新，文章越靠前。因此，只需为笔记添加创建时间 <code>date</code> 标签，文章便会同时出现在 <code>https://newzone.top/article/</code>、<code>https://newzone.top/blog.html</code> 以及 RSS 地址 <code>https://newzone.top/rss.xml</code> 下，并且不会干扰原有的排序逻辑。</p><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语"><span>结语</span></a></h2><p>随着 LearnData 博客的持续优化，改变了一些我对双链笔记的看法，它在海量笔记的管理方面优势明显。但我仍然认为，<strong>双链笔记并不适合知识库</strong>。</p><p>这是因为，在大多数情况下，笔记的积累变成了一种简单的堆砌过程，而不是一个持续的修改、整合和消化的过程。真正的知识管理不应该仅仅是对信息的收集和堆积。拿这篇文章来说，初稿早在 2023 年 12 月就已完成。但为了对外分享，我必须将那些只有我自己能理解的内容进行重构和规范化。正是在这个过程中，我对 LearnData 的思考变得更加清晰，并且想出了用脚本一键定位文章的新方法。如果这篇文章仅仅是我的私人笔记，它可能就会永远停留在初稿阶段，我也不会意识到进一步利用它的必要性。</p><p>在今天这个双链笔记看似无所不能的时代，作为坚持博客形式的少数派，我的做法可能会被一些人视为不必要的复杂和折腾。然而，正是用博客管理知识库的方法，让我的个人效率得到了显著的提升。希望我的这些经验和思考，能为同样致力于高效知识管理的朋友们带来一些新的启示和帮助。</p>',9),k={},w=(0,a(3671).A)(k,[["render",function(e,t){const a=(0,o.g2)("ExternalLinkIcon");return(0,o.uX)(),(0,o.CE)("div",null,[n,(0,o.Lk)("p",null,[(0,o.eW)("自从我放弃了 Notion 等传统知识管理工具，转而尝试将"),(0,o.Lk)("a",r,[(0,o.eW)("博客转化为知识库"),(0,o.bF)(a)]),(0,o.eW)("以来，我发现不仅知识的复用率得到显著提升，文章的更新频率也有所增加。从 LearnData 的 GitHub 提交记录可以看出，仅在过去三周内，就进行了 11 次提交，并涉及了 47 个文件的更新。")]),i,l,p,(0,o.Lk)("p",null,[(0,o.eW)("在 "),(0,o.Lk)("a",d,[(0,o.eW)("LearnData 开源笔记"),(0,o.bF)(a)]),(0,o.eW)(" 的早期，只有 37 篇笔记和一些博客文章。当我开始将笔记主题化，用短篇形式记录具体知识点时，内容数量迅速增长，例如，关于 Docker 容器的部署笔记就超过了 20 篇。")]),c,(0,o.Lk)("p",null,[(0,o.eW)("如果你安装了 Quicker，可以通过安装 "),(0,o.Lk)("a",g,[(0,o.eW)("博客定位本地"),(0,o.bF)(a)]),(0,o.eW)(" 动作来实现这一功能。这个脚本不仅适用于 LearnData 项目，同样可以应用于其他静态博客。")]),s,(0,o.Lk)("ol",null,[m,(0,o.Lk)("li",null,[h,(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.eW)("安装我开发的 "),(0,o.Lk)("a",u,[(0,o.eW)("Explorer Sort Order"),(0,o.bF)(a)]),(0,o.eW)(" 扩展。")]),f])])]),(0,o.Lk)("p",null,[(0,o.eW)("尽管社区早在 2017 年的 "),(0,o.Lk)("a",b,[(0,o.eW)("Explorer/Opened Editors Sorting"),(0,o.bF)(a)]),(0,o.eW)(" 讨论中提出了自定义排序的需求，但由于官方尚未采纳相关解决方案，我们仍需依赖这些小技巧来优化文件管理体验。")]),L])}]]),D=JSON.parse('{"path":"/posts/2024-01-28-learndata-advanced.html","title":"LearnData 博客：高效知识管理和进阶应用技巧","lang":"zh-CN","frontmatter":{"title":"LearnData 博客：高效知识管理和进阶应用技巧","date":"2024-01-28T00:00:00.000Z","category":["博客"],"order":-57,"description":" 本文是 LearnData 博客的进阶篇，基础搭建流程查看主页。 自从我放弃了 Notion 等传统知识管理工具，转而尝试将博客转化为知识库以来，我发现不仅知识的复用率得到显著提升，文章的更新频率也有所增加。从 LearnData 的 GitHub 提交记录可以看出，仅在过去三周内，就进行了 11 次提交，并涉及了 47 个文件的更新。 但随着使用频...","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2024-01-28-learndata-advanced.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"LearnData 博客：高效知识管理和进阶应用技巧"}],["meta",{"property":"og:description","content":" 本文是 LearnData 博客的进阶篇，基础搭建流程查看主页。 自从我放弃了 Notion 等传统知识管理工具，转而尝试将博客转化为知识库以来，我发现不仅知识的复用率得到显著提升，文章的更新频率也有所增加。从 LearnData 的 GitHub 提交记录可以看出，仅在过去三周内，就进行了 11 次提交，并涉及了 47 个文件的更新。 但随着使用频..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.newzone.top/2023-12-12-19-00-11.png?imageMogr2/format/webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T02:07:29.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"LearnData 博客：高效知识管理和进阶应用技巧"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:published_time","content":"2024-01-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-01T02:07:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LearnData 博客：高效知识管理和进阶应用技巧\\",\\"image\\":[\\"https://img.newzone.top/2023-12-12-19-00-11.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2023-12-12-08-01-10.png?imageMogr2/format/webp \\\\\\"左侧为 VS Code 本地搜索，右侧为网站搜索\\\\\\"\\",\\"https://img.newzone.top/learndata2local.gif?imageMogr2/format/webp \\\\\\"LearnData 博客页面直接跳转到本地\\\\\\"\\",\\"https://img.newzone.top/2024-01-23-05-29-33.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2024-01-23-05-45-34.png?imageMogr2/format/webp\\"],\\"datePublished\\":\\"2024-01-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-01T02:07:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"本地搜索与网页端搜索的权衡","slug":"本地搜索与网页端搜索的权衡","link":"#本地搜索与网页端搜索的权衡","children":[]},{"level":2,"title":"网页查询与本地文件修改的融合","slug":"网页查询与本地文件修改的融合","link":"#网页查询与本地文件修改的融合","children":[]},{"level":2,"title":"VS Code 文件排序","slug":"vs-code-文件排序","link":"#vs-code-文件排序","children":[]},{"level":2,"title":"主题笔记的引入","slug":"主题笔记的引入","link":"#主题笔记的引入","children":[]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"git":{"createdTime":1709258849000,"updatedTime":1709258849000,"contributors":[{"name":"辉辉","email":"59565692+huihuikj@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.18,"words":1855},"filePathRelative":"_posts/2024-01-28-learndata-advanced.md","localizedDate":"2024年1月28日","excerpt":"<blockquote>\\n<p>本文是 LearnData 博客的进阶篇，基础搭建流程查看主页。</p>\\n</blockquote>\\n<p>自从我放弃了 Notion 等传统知识管理工具，转而尝试将<a href=\\"https://newzone.top/posts/2022-08-22-learndata_blog_to_knowledge_management.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">博客转化为知识库</a>以来，我发现不仅知识的复用率得到显著提升，文章的更新频率也有所增加。从 LearnData 的 GitHub 提交记录可以看出，仅在过去三周内，就进行了 11 次提交，并涉及了 47 个文件的更新。</p>","autoDesc":true}')}}]);