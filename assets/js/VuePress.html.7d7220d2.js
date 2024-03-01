"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[1211],{3671:(e,s)=>{s.A=(e,s)=>{const a=e.__vccOpts||e;for(const[e,n]of s)a[e]=n;return a}},276:(e,s,a)=>{a.r(s),a.d(s,{comp:()=>De,data:()=>Ce});var n=a(7847);const t={href:"https://v2.vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"},l={href:"https://stackblitz.com/",target:"_blank",rel:"noopener noreferrer"},i=(0,n.Lk)("code",null,"https://stackblitz.com/github/用户名/仓库名",-1),o={href:"https://theme-hope.vuejs.press/zh/guide/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87",target:"_blank",rel:"noopener noreferrer"},p={href:"https://theme-hope.vuejs.press/zh/config/style.html",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/vuepress/awesome-vuepress/blob/main/v2.md",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.npmjs.com/package/vuepress-plugin-helper-live2d",target:"_blank",rel:"noopener noreferrer"},k=(0,n.Lk)("h2",{id:"初始配置",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#初始配置"},[(0,n.Lk)("span",null,"初始配置")])],-1),d=(0,n.Lk)("li",null,[(0,n.eW)("新建文件夹，然后在该路径下运行命令 "),(0,n.Lk)("code",null,"pnpm create vuepress-theme-hope docs"),(0,n.eW)("。vuepress-theme-hope 主题的样例文件会存储在该路径下。有时因版本问题，样例运行会报错，此时须用固定版本号来安装依赖环境，终端中输入 "),(0,n.Lk)("code",null,"pnpm add vuepress@2.0.0-beta.64 @vuepress/client@2.0.0-beta.64 vuepress-theme-hope@2.0.0-beta.230 && pnpm docs:dev"),(0,n.eW)("。")],-1),m=(0,n.Lk)("li",null,[(0,n.eW)("执行命令 "),(0,n.Lk)("code",null,"pnpm docs:dev"),(0,n.eW)(" 启动样例网站。")],-1),b=(0,n.Lk)("code",null,"docs\\.vuepress",-1),h={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,"config.ts：配置网站环境依赖和网站属性。"),(0,n.Lk)("li",null,"sidebar.ts：侧边栏，集合所有文档的目录。"),(0,n.Lk)("li",null,"navbar.ts：导航栏，放最常用的文档链接。"),(0,n.Lk)("li",null,"theme.ts：对主题和插件进行设置。")],-1),f=(0,n.Lk)("li",null,[(0,n.eW)("如果遇到报错，执行命令 "),(0,n.Lk)("code",null,"pnpm add vuepress@next vuepress-theme-hope && pnpm i && pnpm up"),(0,n.eW)(" 修复并升级相关依赖包。如果依然有问题，则删除 node_modules 和 lock 文件，执行 "),(0,n.Lk)("code",null,"pnpm install && pnpm i && pnpm up"),(0,n.eW)(" 重置依赖包文件。")],-1),g=(0,n.Fv)('<p>如果遇到错误 <code>[ERR_MODULE_NOT_FOUND]: Cannot find package</code>，则将 package.json 放在 demo project 中生成 lock 文件，比对 lock 文件是否为正确生成依赖树，将正确的 lock 文件复制到项目下。</p><p>每个插件和主题版本只支持一个 VuePress 版本，因此要稳定的话，需用固定版本号的环境依赖才可以，比如主题 <code>vuepress-theme-hope@2.0.0-beta.230</code> 仅支持 <code>vuepress@2.0.0-beta.64</code>。如果你需要升级主题和 VuePress 版本，请执行以下命令 <code>pnpm dlx vp-update</code>。</p><h2 id="搜索插件" tabindex="-1"><a class="header-anchor" href="#搜索插件"><span>搜索插件</span></a></h2>',3),L={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html",target:"_blank",rel:"noopener noreferrer"},W={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://crawler.algolia.com/admin/crawlers/bd9cfb06-0346-4a64-9a1a-8a513f0b7fce/overview",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.algolia.com/apps/M4EXXEZIEG/dashboard",target:"_blank",rel:"noopener noreferrer"},w=(0,n.Lk)("h2",{id:"webpack-打包",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#webpack-打包"},[(0,n.Lk)("span",null,"Webpack 打包")])],-1),q=(0,n.Lk)("p",null,"从 VuePress 2.0.0-rc.2 版本起，你可以自由选择 Vite 或 Webpack 作为打包工具。使用 Vite 进行打包时，系统会引入时间戳和 hash 值对文件进行重命名。这一机制虽然保证了文件的唯一性，但同时也带来了一个问题：即使没有更新内容，网站的大部分文件在每次生成时也会发生改变。例如，在我的 VuePress 默认配置的笔记网站中，每次服务器部署都需耗费 5 至 15 分钟的宝贵时间。新版的 LearnData 已经默认采用了 Webpack 作为打包工具，因此无需手动切换。",-1),E=(0,n.Lk)("p",null,"早期的 VuePress 只支持 Vite 打包。因此，我记录了手动添加 webpack 的方法，作为备用。",-1),_={href:"https://github.com/rockbenben/LearnData/tree/nohashname",target:"_blank",rel:"noopener noreferrer"},P={href:"https://v2.vuepress.vuejs.org/zh/guide/bundler.html",target:"_blank",rel:"noopener noreferrer"},F=(0,n.Fv)('<li><p>修改 config.ts 的导入设置，将 <code>import { defineUserConfig } from &quot;vuepress&quot;</code> 替换为 <code>import { defineUserConfig } from &quot;@vuepress/cli&quot;</code>，将 <code>import { viteBundler } from &quot;@vuepress/bundler-vite&quot;</code> 替换为 <code>import { webpackBundler } from &quot;@vuepress/bundler-webpack&quot;</code>。</p></li><li><p>Webpack 环境依赖包安装，并运行服务。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#组合命令，打包使用 Webpack</span>\n<span class="token function">pnpm</span> <span class="token function">add</span> vuepress@next vuepress-theme-hope <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> remove vuepress <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> <span class="token function">add</span> vuepress-webpack@next sass-loader <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> up\n\n<span class="token comment">#运行在本地服务器</span>\n<span class="token function">yarn</span> docs:dev\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组合命令也能<strong>解决报错</strong>，升级相关依赖包。相关命令的分步解释见下方。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#确保你正在使用最新的 vuepress 和 vuepress-theme-hope 版本</span>\n<span class="token function">pnpm</span> <span class="token function">add</span> vuepress@next vuepress-theme-hope\n\n<span class="token comment">#更换打包工具，Webpack 需手动下载 sass-loader</span>\n<span class="token function">pnpm</span> remove vuepress\n<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-webpack@next sass-loader\n\n<span class="token comment">#常用插件：google-analytics，search</span>\n<span class="token function">pnpm</span> <span class="token function">add</span> @vuepress/plugin-google-analytics@next @vuepress/plugin-search@next\n\n<span class="token comment">#升级当前目录的依赖以确保你的项目只包含单个版本的相关包</span>\n<span class="token function">pnpm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> up\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>',2),V={href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer"},B=(0,n.Lk)("sup",{class:"footnote-ref"},[(0,n.Lk)("a",{href:"#footnote1"},"[1]"),(0,n.Lk)("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),z=(0,n.Lk)("code",null,".filename",-1),j=(0,n.Fv)('<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  bundler<span class="token operator">:</span> <span class="token function">webpackBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">chainWebpack</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// do not use chunk hash in js</span>\n      <span class="token comment">//参照案例：https://github.com/vuepress/vuepress-plugin-named-chunks/blob/b9fb5a1d3475530b1d74b6616f92a6e3bf14a7ed/__tests__/docs/.vuepress/config.js</span>\n      config<span class="token punctuation">.</span>output\n        <span class="token punctuation">.</span><span class="token function">filename</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[name].js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">chunkFilename</span><span class="token punctuation">(</span><span class="token string">&quot;assets/chunks/[name].js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),A={href:"https://cli.vuejs.org/config/#vue-config-js",target:"_blank",rel:"noopener noreferrer"},M=(0,n.Lk)("code",null,"filenameHashing: false",-1),D=(0,n.Lk)("h2",{id:"关闭-prefetch",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#关闭-prefetch"},[(0,n.Lk)("span",null,"关闭 prefetch")])],-1),C=(0,n.Lk)("p",null,"preload 是一种声明式的资源获取请求方式，用于提前加载一些需要的依赖，并且不会影响页面的 onload 事件。prefetch 是一种利用浏览器的空闲时间加载页面将来可能用到的资源的一种机制；通常可以用于加载非首页的其他页面所需要的资源，以便加快后续页面的首屏速度。preload 主要用于预加载当前页面需要的资源；而 prefetch 主要用于加载将来页面可能需要的资源。",-1),H={href:"https://vuepress.github.io/zh/reference/config.html#build-%E9%85%8D%E7%BD%AE%E9%A1%B9",target:"_blank",rel:"noopener noreferrer"},U=(0,n.Lk)("p",null,[(0,n.Lk)("code",null,"docs\\.vuepress"),(0,n.eW)(" 路径下的 config.ts 配置中插入 "),(0,n.Lk)("code",null,"shouldPrefetch: false,"),(0,n.eW)("，即可关闭 prefetch。")],-1),S=(0,n.Lk)("h2",{id:"页面模板",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#页面模板"},[(0,n.Lk)("span",null,"页面模板")])],-1),T=(0,n.Lk)("p",null,"VuePress 页面生成规则基于主题模板，如果修改全站 html 内容，最简单的方式就是修改模板。",-1),R={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/theme/templates/index.build.html",target:"_blank",rel:"noopener noreferrer"},I=(0,n.Fv)('<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/utils&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  templateBuild<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;index.build.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除修改页面模板外，也可以通过修改 config.ts 配置来添加自定义标签。插入下方代码后，网站所有页面都会在 header 前添入对应代码，其效用等同于 <code>&lt;meta name=&quot;keywords&quot; content=&quot;关键词，内容标签，相关词&quot;&gt;</code> 和 <code>&lt;img referrerpolicy=&quot;no-referrer-when-downgrade&quot; src=&quot;https://tongji.newzone.top/matomo.php?idsite=7&amp;amp;rec=1&quot; style=&quot;border:0&quot; alt=&quot;&quot; /&gt;</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>head<span class="token operator">:</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">[</span>\n    <span class="token string">&quot;meta&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      name<span class="token operator">:</span> <span class="token string">&quot;keywords&quot;</span><span class="token punctuation">,</span>\n      content<span class="token operator">:</span> <span class="token string">&quot;关键词，内容标签，相关词&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>\n    <span class="token string">&quot;img&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      referrerpolicy<span class="token operator">:</span> <span class="token string">&quot;no-referrer-when-downgrade&quot;</span><span class="token punctuation">,</span>\n      src<span class="token operator">:</span> <span class="token string">&quot;https://tongji.newzone.top/matomo.php?idsite=7&amp;amp;rec=1&quot;</span><span class="token punctuation">,</span>\n      style<span class="token operator">:</span> <span class="token string">&quot;border:0&quot;</span><span class="token punctuation">,</span>\n      alt<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时间参数" tabindex="-1"><a class="header-anchor" href="#时间参数"><span>时间参数</span></a></h2>',4),N={href:"https://plugin-seo2.vuejs.press/zh/guide.html",target:"_blank",rel:"noopener noreferrer"},O=(0,n.Lk)("code",null,"og:updated_time",-1),G=(0,n.Lk)("code",null,"article:modified_time",-1),X=(0,n.Lk)("code",null,"page.git.updatedTime",-1),Z=(0,n.Lk)("code",null,"theme.ts",-1),J=(0,n.Fv)('<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> seoPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-seo2&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">seoPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      hostname<span class="token operator">:</span> <span class="token string">&quot;https://vuepress-theme-hope.github.io&quot;</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">ogp</span><span class="token operator">:</span> <span class="token punctuation">(</span>ogp<span class="token punctuation">,</span> page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token operator">...</span>ogp<span class="token punctuation">,</span>\n        <span class="token string-property property">&quot;og:updated_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n        <span class="token string-property property">&quot;og:modified_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，如果想停止向页面导入 lastUpdated 参数，在 <code>theme.ts</code> 中插入 <code>lastUpdated: false</code> 即可。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  lastUpdated<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义主题" tabindex="-1"><a class="header-anchor" href="#自定义主题"><span>自定义主题</span></a></h2>',4),K={class:"task-list-container"},Q=(0,n.Lk)("li",{class:"task-list-item"},[(0,n.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-0",checked:"checked",disabled:"disabled"}),(0,n.Lk)("label",{class:"task-list-item-label",for:"task-item-0"},[(0,n.Lk)("s",null,"创建独立的笔记区，便于整理生活感悟与专题文章。尽管仍使用同一侧边栏，但可设定为仅展示个别领域，适应文章数量众多的场景。")])],-1),Y={class:"task-list-item"},$=(0,n.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-1",checked:"checked",disabled:"disabled"},null,-1),ee={class:"task-list-item-label",for:"task-item-1"},se={href:"https://vuepress-theme-hope.github.io/v2/components/zh/guide/",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/demo/components/src/.vuepress/config.ts",target:"_blank",rel:"noopener noreferrer"},ne={class:"task-list-item"},te=(0,n.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-2",checked:"checked",disabled:"disabled"},null,-1),le={class:"task-list-item-label",for:"task-item-2"},ie={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},oe={class:"task-list-item"},ce=(0,n.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-3",checked:"checked",disabled:"disabled"},null,-1),pe={class:"task-list-item-label",for:"task-item-3"},re={href:"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html#%E9%80%9A%E8%BF%87%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90",target:"_blank",rel:"noopener noreferrer"},ue=(0,n.Lk)("li",{class:"task-list-item"},[(0,n.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-4",checked:"checked",disabled:"disabled"}),(0,n.Lk)("label",{class:"task-list-item-label",for:"task-item-4"},[(0,n.Lk)("s",null,"去 meta 标签，测试并未成功，不再尝试")])],-1),ke={class:"task-list-item"},de=(0,n.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-5",checked:"checked",disabled:"disabled"},null,-1),me={class:"task-list-item-label",for:"task-item-5"},be={href:"https://theme-hope.vuejs.press/zh/guide/feature/comment.html#waline",target:"_blank",rel:"noopener noreferrer"},he=(0,n.Fv)('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"><s>google analytics 没反应，实际已经包含在 js 中了</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"><s>不用自动开启一堆的网站，关闭 prefetch</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"><s>生成文件名固定化，chainWebpack</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"><s>网页更新时，有时会打不开链接，需要使用缓存。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"><s>VuePress 博客页面：frontmatter 中添加 order 参数让最新的文章往上排，无法按文件名倒序排列</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> 全局路径需要给子目录添加 README.md，没那么多内容填，暂时放弃。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> 独立设置页面标题。未成功，所有页面都会加入默认标题。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> 侧边栏显示客服图片。icon 位置直接放链接也没用。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> 指定页面子标题不被目录页识别。但页面中取消 toc 的话，网页位置会出现偏移。</label></li>',9),ve={class:"task-list-item"},fe=(0,n.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-15",checked:"checked",disabled:"disabled"},null,-1),ge={class:"task-list-item-label",for:"task-item-15"},Le={href:"https://theme-hope.vuejs.press/zh/cookbook/advanced/replace.html#%E6%8F%92%E6%A7%BD%E5%88%A9%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},We={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/theme/src/client/module/navbar/components/NavbarBrand.ts",target:"_blank",rel:"noopener noreferrer"},xe=(0,n.Fv)('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-16"><s>子域名中部署 blog 和 note，分别使用不同路径。这方案可以与 WordPress 共存，但未了避免后续出错，还是取消了。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-17"><s>Giscus 评论区设置</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-18"><s>导航栏添加 repo 位置</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-19"><s>页面统计，插件只支持 Google、百度，然后用图片标签方式植入统计。直接修改页面模板，放入统计链接。备用方法：将统计代码直接放在侧边栏。</s></label></li>',4),ye={class:"task-list-item"},we=(0,n.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-20",checked:"checked",disabled:"disabled"},null,-1),qe={class:"task-list-item-label",for:"task-item-20"},Ee={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/docs/theme/src/.vuepress/config.ts",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://vuepress-theme-hope.github.io/v2/seo/zh/guide.html#%E7%9B%B4%E6%8E%A5%E6%B7%BB%E5%8A%A0-head-%E6%A0%87%E7%AD%BE",target:"_blank",rel:"noopener noreferrer"},Pe=(0,n.Fv)('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-21" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-21"><s>将 docs 里的 README.md 转移到主目录中，保持 github 项目页的同步。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-22" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-22"><s>打开页面链接，侧边栏焦点能不能也移动过去。侧边栏标题需要能在首屏出现，才能激活焦点。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-23" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-23"><s>默认主题颜色为白天，虽然不能切换，但发稿用白色就行。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-24" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-24"><s>设置导航栏自动隐藏</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-25" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-25"><s>隐藏编辑时间和贡献者</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-26" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-26"><s>用 md 控制图片是，图片不能显示。这可能是因为主题默认的 lazy 加载，改用七牛云的图片属性控制尺寸。</s></label></li>',6),Fe=(0,n.Lk)("hr",{class:"footnotes-sep"},null,-1),Ve={class:"footnotes"},Be={class:"footnotes-list"},ze={id:"footnote1",class:"footnote-item"},je={href:"https://blog.csdn.net/song854601134/article/details/121340077",target:"_blank",rel:"noopener noreferrer"},Ae=(0,n.Lk)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),Me={},De=(0,a(3671).A)(Me,[["render",function(e,s){const a=(0,n.g2)("ExternalLinkIcon"),Me=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("p",null,[(0,n.Lk)("a",t,[(0,n.eW)("VuePress"),(0,n.bF)(a)]),(0,n.eW)(" 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。如果你已经有了 docsify/Hexo 等 Markdown 架构网站，简单就能切换到 VuePress。")]),(0,n.Lk)("p",null,[(0,n.eW)("不过，VuePress 网站需要依赖包环境，生成的静态文件在本地运行会缺少组件，需要服务器或其他云服务上运行。如果本地部署中出现未知 bug，推荐使用 "),(0,n.Lk)("a",l,[(0,n.eW)("StackBlitz"),(0,n.bF)(a)]),(0,n.eW)(" 在线 IDE 工具测试，打开 "),i,(0,n.eW)(" 即可将对应 GitHub 仓库导入 StackBlitz。开发时，建议用 dev 命令测试，这样可以查看打包前的动态代码，发现组件间的内部链接。")]),(0,n.Lk)("p",null,[(0,n.eW)("LearnData 的主题为 "),(0,n.Lk)("a",o,[(0,n.eW)("vuepress-theme-hope"),(0,n.bF)(a)]),(0,n.eW)("，图标为 "),(0,n.Lk)("a",c,[(0,n.eW)("Iconfont 精选图标"),(0,n.bF)(a)]),(0,n.eW)("，页面修改查看 "),(0,n.Lk)("a",p,[(0,n.eW)("样式配置"),(0,n.bF)(a)]),(0,n.eW)("，其他主题和插件参考 "),(0,n.Lk)("a",r,[(0,n.eW)("Awesome VuePress V2"),(0,n.bF)(a)]),(0,n.eW)(" 和 "),(0,n.Lk)("a",u,[(0,n.eW)("看板娘"),(0,n.bF)(a)]),(0,n.eW)("。")]),k,(0,n.Lk)("ol",null,[(0,n.Lk)("li",null,[(0,n.eW)("环境配置：安装 pnpm，也支持 npm 和 yarn，可参考"),(0,n.bF)(Me,{to:"/deploy/VPS.html#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2"},{default:(0,n.k6)((()=>[(0,n.eW)("环境部署教程")])),_:1}),(0,n.eW)("。")]),d,m,(0,n.Lk)("li",null,[b,(0,n.eW)(" 路径下的 config.ts，navbar.ts，sidebar.ts，theme.ts 可以修改页面属性，设置方法参考 "),(0,n.Lk)("a",h,[(0,n.eW)("官方案例"),(0,n.bF)(a)]),(0,n.eW)("。 "),v]),f]),g,(0,n.Lk)("p",null,[(0,n.eW)("本地搜索插件："),(0,n.Lk)("a",L,[(0,n.eW)("search"),(0,n.bF)(a)]),(0,n.eW)(" 根据你的页面，在本地生成搜索索引，然后在用户访问站点时加载搜索索引文件。默认情况下，该插件会将页面标题和小标题作为搜索索引。")]),(0,n.Lk)("p",null,[(0,n.eW)("在线搜索插件："),(0,n.Lk)("a",W,[(0,n.eW)("algolia DocSearch"),(0,n.bF)(a)]),(0,n.eW)(" 使用在线爬虫抓取全站，并提供网站搜索索引，抓取周期为一周。开源文档可以申请官方爬虫支持，商业化内容需要自己设置爬虫。")]),(0,n.Lk)("p",null,[(0,n.eW)("在 "),(0,n.Lk)("a",x,[(0,n.eW)("algolia 爬虫管理页"),(0,n.bF)(a)]),(0,n.eW)(" 修改爬虫抓取规则，然后手动触发爬虫进行全站搜索。之后，"),(0,n.Lk)("a",y,[(0,n.eW)("algolia 搜索数据库"),(0,n.bF)(a)]),(0,n.eW)(" 可以查看搜索次数与数据。")]),w,q,E,(0,n.Lk)("p",null,[(0,n.eW)("如果不想每次架构都重命名文件，可以复制「"),(0,n.Lk)("a",_,[(0,n.eW)("nohashname"),(0,n.bF)(a)]),(0,n.eW)("」branch。我把 nohashname 分支的打包工具换成了 "),(0,n.Lk)("a",P,[(0,n.eW)("Webpack"),(0,n.bF)(a)]),(0,n.eW)("，并用 chainWebpack 设置文件命名规则，避免文件非必要重命名。")]),(0,n.Lk)("ol",null,[F,(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.eW)("修改文件命名规则：打开 config.ts，使用 "),(0,n.Lk)("a",V,[(0,n.eW)("webpack-chain"),(0,n.bF)(a)]),(0,n.eW)(" 修改 webpack 输出文件名规则，停止对 js 文件 hashname。"),B,(0,n.eW)(),z,(0,n.eW)(" 加路径容易报错，这里只把 chunk 文件放入子文件夹。")]),j,(0,n.Lk)("p",null,[(0,n.eW)("在查找 chainWebpack 配置前，我依照 "),(0,n.Lk)("a",A,[(0,n.eW)("vue.config.js"),(0,n.bF)(a)]),(0,n.eW)(" 的指引添加了 "),M,(0,n.eW)("，但是 VuePress 并未停止 hashname。事实上，我理解错了。根据 @Mister-Hope 的说明，「这里的 filenameHasing 是 vue-cli 自己加的一个属性。拿到这里当例子很奇怪。就好比你按照 iOS 使用手册去设置 Android 结果无效，本不应该有效。另外本身为了防止应用程序出错，你也从不应该移除 hash。」")])])]),D,C,(0,n.Lk)("p",null,[(0,n.eW)("VuePress "),(0,n.Lk)("a",H,[(0,n.eW)("Build 配置项"),(0,n.bF)(a)]),(0,n.eW)("默认开启了 preload 和 prefetch。但是，开启了 prefetch，所有其它页面所需的文件都会被预拉取。页面较多或服务器宽带后付费的话，建议关闭 prefetch。")]),U,S,T,(0,n.Lk)("p",null,[(0,n.eW)("我的主题模板文件是 "),(0,n.Lk)("a",R,[(0,n.eW)("@vuepress-theme-hope/templates/index.build.html"),(0,n.bF)(a)]),(0,n.eW)("，将其下载到本地后，修改为你想要的样式，放入 .vuepress 文件夹内。最后在 config.ts 中添加代码，即可启用修改模板。")]),I,(0,n.Lk)("p",null,[(0,n.Lk)("a",N,[(0,n.eW)("vuepress-plugin-seo2"),(0,n.bF)(a)]),(0,n.eW)(" 在网页中插入 "),O,(0,n.eW)(" 和 "),G,(0,n.eW)("，这两个参数都引用自 "),X,(0,n.eW)("。"),Z,(0,n.eW)(" 中无法设置 ogp。你需要打开 config.ts，使用 vuepress-plugin-seo2 的 ogp 参数重新设置 meta，并删除你不想要的参数。根据 @Mister-Hope 的说明:「API 的设计很容易理解，就是给你个自动生成的对象然后等你返回。所以你只需要在原对象上把属性删掉，返回这个对象就是了。」")]),J,(0,n.Lk)("ul",K,[Q,(0,n.Lk)("li",Y,[$,(0,n.Lk)("label",ee,[(0,n.Lk)("s",null,[(0,n.eW)("插入 Bilibili 或第三方视频，可使用专用 "),(0,n.Lk)("a",se,[(0,n.eW)("组件库"),(0,n.bF)(a)]),(0,n.eW)("，配置参考 "),(0,n.Lk)("a",ae,[(0,n.eW)("组件案例 config.ts"),(0,n.bF)(a)]),(0,n.eW)(".")])])]),(0,n.Lk)("li",ne,[te,(0,n.Lk)("label",le,[(0,n.Lk)("s",null,[(0,n.eW)("插件"),(0,n.Lk)("a",ie,[(0,n.eW)("docsearch"),(0,n.bF)(a)]),(0,n.eW)("：将 Algolia DocSearch 集成到 VuePress 中，为你的文档网站提供搜索功能。")])])]),(0,n.Lk)("li",oe,[ce,(0,n.Lk)("label",pe,[(0,n.Lk)("s",null,[(0,n.eW)("README 页面如何隐藏，使用 index: false，参考"),(0,n.Lk)("a",re,[(0,n.eW)("主题设置"),(0,n.bF)(a)])])])]),ue,(0,n.Lk)("li",ke,[de,(0,n.Lk)("label",me,[(0,n.Lk)("s",null,[(0,n.Lk)("a",be,[(0,n.eW)("waline"),(0,n.bF)(a)]),(0,n.eW)(" 评论插件，无需账户，更适合大众。")])])]),he,(0,n.Lk)("li",ve,[fe,(0,n.Lk)("label",ge,[(0,n.Lk)("a",Le,[(0,n.eW)("修改导航栏 brand 链接"),(0,n.bF)(a)]),(0,n.eW)("，需用本地文件替代 "),(0,n.Lk)("a",We,[(0,n.eW)("主题默认设置"),(0,n.bF)(a)]),(0,n.eW)("。设置的 ts 未生效，暂时放弃。")])]),xe,(0,n.Lk)("li",ye,[we,(0,n.Lk)("label",qe,[(0,n.Lk)("s",null,[(0,n.eW)("定制页面标签：config.ts 中添加全局 "),(0,n.Lk)("a",Ee,[(0,n.eW)("head 标签"),(0,n.bF)(a)]),(0,n.eW)("，或在页面中添加 "),(0,n.Lk)("a",_e,[(0,n.eW)("独立 head 标签"),(0,n.bF)(a)]),(0,n.eW)("，支持图片统计代码。")])])]),Pe]),Fe,(0,n.Lk)("section",Ve,[(0,n.Lk)("ol",Be,[(0,n.Lk)("li",ze,[(0,n.Lk)("p",null,[(0,n.Lk)("a",je,[(0,n.eW)("chainWebpack 常用配置方式"),(0,n.bF)(a)]),(0,n.eW)(),Ae])])])])])}]]),Ce=JSON.parse('{"path":"/web/VuePress.html","title":"VuePress","lang":"zh-CN","frontmatter":{"article":false,"title":"VuePress","icon":"vue","order":1,"description":"VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。如果你已经有了 docsify/Hexo 等 Markdown 架构网站，简单就能切换到 VuePress。 不过，VuePress 网站需要依赖包环境，生成的静态...","head":[["meta",{"property":"og:url","content":"https://newzone.top/web/VuePress.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"VuePress"}],["meta",{"property":"og:description","content":"VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。如果你已经有了 docsify/Hexo 等 Markdown 架构网站，简单就能切换到 VuePress。 不过，VuePress 网站需要依赖包环境，生成的静态..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T02:07:29.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-03-01T02:07:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"VuePress\\",\\"description\\":\\"VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。如果你已经有了 docsify/Hexo 等 Markdown 架构网站，简单就能切换到 VuePress。 不过，VuePress 网站需要依赖包环境，生成的静态...\\"}"]]},"headers":[{"level":2,"title":"初始配置","slug":"初始配置","link":"#初始配置","children":[]},{"level":2,"title":"搜索插件","slug":"搜索插件","link":"#搜索插件","children":[]},{"level":2,"title":"Webpack 打包","slug":"webpack-打包","link":"#webpack-打包","children":[]},{"level":2,"title":"关闭 prefetch","slug":"关闭-prefetch","link":"#关闭-prefetch","children":[]},{"level":2,"title":"页面模板","slug":"页面模板","link":"#页面模板","children":[]},{"level":2,"title":"时间参数","slug":"时间参数","link":"#时间参数","children":[]},{"level":2,"title":"自定义主题","slug":"自定义主题","link":"#自定义主题","children":[]}],"git":{"createdTime":1709258849000,"updatedTime":1709258849000,"contributors":[{"name":"辉辉","email":"59565692+huihuikj@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":10.03,"words":3009},"filePathRelative":"web/VuePress.md","localizedDate":"2024年3月1日","excerpt":"<p><a href=\\"https://v2.vuepress.vuejs.org/zh/guide/getting-started.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">VuePress</a> 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。如果你已经有了 docsify/Hexo 等 Markdown 架构网站，简单就能切换到 VuePress。</p>\\n<p>不过，VuePress 网站需要依赖包环境，生成的静态文件在本地运行会缺少组件，需要服务器或其他云服务上运行。如果本地部署中出现未知 bug，推荐使用 <a href=\\"https://stackblitz.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">StackBlitz</a> 在线 IDE 工具测试，打开 <code>https://stackblitz.com/github/用户名/仓库名</code> 即可将对应 GitHub 仓库导入 StackBlitz。开发时，建议用 dev 命令测试，这样可以查看打包前的动态代码，发现组件间的内部链接。</p>","autoDesc":true}')}}]);