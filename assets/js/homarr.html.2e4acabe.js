"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[9503],{3671:(n,a)=>{a.A=(n,a)=>{const e=n.__vccOpts||n;for(const[n,s]of a)e[n]=s;return e}},1290:(n,a,e)=>{e.r(a),e.d(a,{comp:()=>i,data:()=>p});var s=e(7847);const t={href:"https://github.com/ajnart/homarr",target:"_blank",rel:"noopener noreferrer"},o=(0,s.Fv)('<p>比如 NAS 中内网和外网地址链接不同，你可以设置两套系统。</p><p>问题：</p><ul><li>无法直接添加 <code>chrome://extensions/</code> 等非标准链接。</li><li>图标会远程调用 Github 图库，速度会慢些。</li></ul><h2 id="部署代码" tabindex="-1"><a class="header-anchor" href="#部署代码"><span>部署代码</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">homarr</span><span class="token punctuation">:</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> homarr\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/ajnart/homarr<span class="token punctuation">:</span>latest\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock <span class="token comment"># Optional, only if you want docker integration</span>\n      <span class="token punctuation">-</span> /volume1/docker/homarr/configs<span class="token punctuation">:</span>/app/data/configs\n      <span class="token punctuation">-</span> /volume1/docker/homarr/icons<span class="token punctuation">:</span>/app/public/icons\n      <span class="token punctuation">-</span> /volume1/docker/homarr/data<span class="token punctuation">:</span>/data\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&#39;7575:7575&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),r={},i=(0,e(3671).A)(r,[["render",function(n,a){const e=(0,s.g2)("ExternalLinkIcon");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("p",null,[(0,s.Lk)("a",t,[(0,s.eW)("Homarr"),(0,s.bF)(e)]),(0,s.eW)(" 可以作为网站书签导航页工具，也可以集成各类状态仪表板，让你可以在一个方便的位置访问和控制一切。")]),o])}]]),p=JSON.parse('{"path":"/services/dockers-on-nas/homarr.html","title":"Homarr：本地导航","lang":"zh-CN","frontmatter":{"article":false,"title":"Homarr：本地导航","order":91,"description":"Homarr 可以作为网站书签导航页工具，也可以集成各类状态仪表板，让你可以在一个方便的位置访问和控制一切。 比如 NAS 中内网和外网地址链接不同，你可以设置两套系统。 问题： 无法直接添加 chrome://extensions/ 等非标准链接。 图标会远程调用 Github 图库，速度会慢些。 部署代码 ","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/homarr.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Homarr：本地导航"}],["meta",{"property":"og:description","content":"Homarr 可以作为网站书签导航页工具，也可以集成各类状态仪表板，让你可以在一个方便的位置访问和控制一切。 比如 NAS 中内网和外网地址链接不同，你可以设置两套系统。 问题： 无法直接添加 chrome://extensions/ 等非标准链接。 图标会远程调用 Github 图库，速度会慢些。 部署代码 "}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T02:07:29.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-03-01T02:07:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Homarr：本地导航\\",\\"description\\":\\"Homarr 可以作为网站书签导航页工具，也可以集成各类状态仪表板，让你可以在一个方便的位置访问和控制一切。 比如 NAS 中内网和外网地址链接不同，你可以设置两套系统。 问题： 无法直接添加 chrome://extensions/ 等非标准链接。 图标会远程调用 Github 图库，速度会慢些。 部署代码 \\"}"]]},"headers":[{"level":2,"title":"部署代码","slug":"部署代码","link":"#部署代码","children":[]}],"git":{"createdTime":1709258849000,"updatedTime":1709258849000,"contributors":[{"name":"辉辉","email":"59565692+huihuikj@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.49,"words":148},"filePathRelative":"services/dockers-on-nas/homarr.md","localizedDate":"2024年3月1日","excerpt":"<p><a href=\\"https://github.com/ajnart/homarr\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Homarr</a> 可以作为网站书签导航页工具，也可以集成各类状态仪表板，让你可以在一个方便的位置访问和控制一切。</p>\\n<p>比如 NAS 中内网和外网地址链接不同，你可以设置两套系统。</p>\\n<p>问题：</p>\\n<ul>\\n<li>无法直接添加 <code>chrome://extensions/</code> 等非标准链接。</li>\\n<li>图标会远程调用 Github 图库，速度会慢些。</li>\\n</ul>","autoDesc":true}')}}]);