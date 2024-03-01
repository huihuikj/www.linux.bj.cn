"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[9836],{3671:(e,o)=>{o.A=(e,o)=>{const t=e.__vccOpts||e;for(const[e,a]of o)t[e]=a;return t}},9893:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>ze,data:()=>Ce});var a=t(7847);const n=(0,a.Lk)("p",null,"我从小特别羡慕会画画的伙伴。他们能够将心中的想法画出来，而我最高水平的肖像画是丁老头。但在接触 Stable Diffusion 之后，我感觉自己脱胎换骨，给自己贴上了「会画画」的新标签。",-1),i=(0,a.Lk)("figure",null,[(0,a.Lk)("img",{src:"https://img.newzone.top/2022-09-04-11-53-20.png",alt:"",tabindex:"0",loading:"lazy"}),(0,a.Lk)("figcaption",null,"丁老头进化旅程")],-1),r=(0,a.Lk)("p",null,"Stable Diffusion 是一个「文本到图像」的人工智能模型，也是唯一一款开源且能部署在家用电脑（对硬件要求不高）上的 AI 绘图工具。使用 Stable Diffusion，你可以在拥有 6GB 显存显卡，16GB 内存或只依赖 CPU 的电脑上生成图像，并且仅需几秒钟的时间，无需进行预处理或后处理。",-1),l={href:"https://huggingface.co/spaces/stabilityai/stable-diffusion",target:"_blank",rel:"noopener noreferrer"},s={href:"https://beta.dreamstudio.ai/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://wenxin.baidu.com/moduleApi/ernieVilg",target:"_blank",rel:"noopener noreferrer"},c={href:"https://github.com/AbdBarho/stable-diffusion-webui-docker",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/invoke-ai/InvokeAI/blob/main/docs/installation/INSTALL_MAC.md#doesnt-work-anymore",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.charl-e.com/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://sspai.com/post/75682",target:"_blank",rel:"noopener noreferrer"},h=(0,a.Fv)('<figure><img src="https://img.newzone.top/2022-09-05-16-22-45.png" alt="" tabindex="0" loading="lazy"><figcaption>Stable Diffusion 部署流程</figcaption></figure><p>以 Windows 平台为例，本文将依次介绍 Docker 环境配置、Stable Diffusion 安装及基本使用方法。</p><h2 id="docker-环境配置" tabindex="-1"><a class="header-anchor" href="#docker-环境配置"><span>Docker 环境配置</span></a></h2><p>本方案基于 Docker 配置，Docker 实质上是在运行的 Linux 系统中创建了一个隔离的文件环境。因此，Docker 必须部署在基于 Linux 内核的系统上。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> 对于 Mac 用户，无需特别配置即可使用。而对于 Windows 用户，若想部署 Docker，则需要安装一个虚拟 Linux 环境，<strong>配置 WSL 或启用 Hyper-V 二选一</strong>。我推荐使用 Windows 子系统 WSL，它需要占用系统盘 30G 的空间。</p><h3 id="安装-wsl" tabindex="-1"><a class="header-anchor" href="#安装-wsl"><span>安装 WSL</span></a></h3><p>在管理员 PowerShell 输入命令 <code>wsl --install</code>，之后终端会默认安装 Ubuntu。系统下载时间较长，注意别关机。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> 安装 Ubuntu 完成后，按提示设置 Ubuntu 账户和密码。</p><h3 id="启用-hyper-v" tabindex="-1"><a class="header-anchor" href="#启用-hyper-v"><span>启用 Hyper-V</span></a></h3><p>以管理员身份打开 PowerShell 控制台，输入命令 <code>Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All</code>。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup> 重启电脑后，将开启 Hyper-V。</p><h3 id="linux-路径-windows" tabindex="-1"><a class="header-anchor" href="#linux-路径-windows"><span>Linux 路径（Windows）</span></a></h3><p>配置 WebUI Docker 要进入 Linux 环境，因此 Windows 用户需要将其路径转换为 Linux 路径。而 Mac 和 Linux 用户则可以忽略此步骤。</p><p>假设容器位于 <code>D:\\Backup\\Libraries\\Desktop\\stable-diffusion-webui-docker</code>：</p><ol><li>把磁盘符号改为小写，并去除磁盘的冒号，转换为 <code>d\\Backup\\Libraries\\Desktop\\stable-diffusion-webui-docker</code></li><li>添加 <code>/mnt/</code> 前缀，转换为 <code>/mnt/d\\Backup\\Libraries\\Desktop\\stable-diffusion-webui-docker</code>。因为 Windows 本地磁盘是挂载在 Linux 的 mnt 目录下的。</li><li>将反斜扛 <code>\\</code> 替换为 <code>/</code>。最终得到 Linux 路径 <code>/mnt/d/Backup/Libraries/Desktop/stable-diffusion-webui-docker</code>。</li></ol><h2 id="配置-stable-diffusion" tabindex="-1"><a class="header-anchor" href="#配置-stable-diffusion"><span>配置 Stable Diffusion</span></a></h2><h3 id="安装-docker-desktop" tabindex="-1"><a class="header-anchor" href="#安装-docker-desktop"><span>安装 Docker Desktop</span></a></h3>',14),k={href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"},b=(0,a.Lk)("div",{class:"hint-container warning"},[(0,a.Lk)("p",{class:"hint-container-title"},"注意"),(0,a.Lk)("p",null,[(0,a.eW)("Docker Desktop 需在 4.18.0 或以上版本。Docker Desktop 4.17.1 存在 bug，可能会导致 "),(0,a.Lk)("code",null,"Attaching to webui-docker-auto-1"),(0,a.eW)(" 报错。")])],-1),g=(0,a.Lk)("h3",{id:"下载-webui-docker",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#下载-webui-docker"},[(0,a.Lk)("span",null,"下载 WebUI Docker")])],-1),m={href:"https://github.com/AbdBarho/stable-diffusion-webui-docker/releases/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.aliyundrive.com/s/EKmK7MGrHdn",target:"_blank",rel:"noopener noreferrer"},v=(0,a.Lk)("h3",{id:"分支介绍",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#分支介绍"},[(0,a.Lk)("span",null,"分支介绍")])],-1),w=(0,a.Lk)("p",null,[(0,a.eW)("目前，Stable Diffusion Docker 支持 AUTOMATIC1111、InvokeAI、ComfyUI 三种分支。如果需要更换分支，可以修改镜像构建命令 "),(0,a.Lk)("code",null,"docker compose --profile [ui] up --build"),(0,a.eW)(" 中的 "),(0,a.Lk)("code",null,"[ui]"),(0,a.eW)("，将其替换为所需的镜像名即可。")],-1),D=(0,a.Lk)("strong",null,"auto",-1),x=(0,a.Lk)("code",null,"docker compose --profile auto up --build",-1),W=(0,a.Lk)("code",null,"--medvram",-1),S=(0,a.Lk)("code",null,"--lowvram",-1),y={href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-AMD-GPUs#running-inside-docker",target:"_blank",rel:"noopener noreferrer"},I=(0,a.Fv)("<li><strong>auto-cpu</strong>：不依赖显卡的 auto 分支。如果没有符合要求的显卡，可以使用 CPU 模式，内存配置需满足 16G 以上，构建镜像的命令为 <code>docker compose --profile auto-cpu up --build</code>。</li><li><strong>comfy</strong>：基于图形的工作流 UI，非常强大，镜像构建命令为 <code>docker compose --profile comfy up --build</code>。comfy 也有不依赖显卡的分支，构建镜像的命令为 <code>docker compose --profile comfy-cpu up --build</code>。</li><li><strong>invoke</strong>：原名为 <code>lstein</code>，其 cli 端非常成熟，WebUI 端参数较少，能自动读取图片记录，适合无进阶需求的新手和 Mac 用户使用，镜像构建命令为 <code>docker compose --profile invoke up --build</code>。(最新版 invoke 构建有问题，配置包尚未修复)</li><li><s>sygil(已停更)：即原本的 hlky, 界面直观，最高分辨率为 1024x1024，镜像构建命令为 <code>docker compose --profile sygil up --build</code>。</s></li>",4),A=(0,a.Fv)('<h3 id="构建-stable-diffusion" tabindex="-1"><a class="header-anchor" href="#构建-stable-diffusion"><span>构建 Stable Diffusion</span></a></h3><p>在启动 Docker Desktop 后，打开 WSL（Ubuntu）或 Mac 终端，输入路径切换命令 <code>cd /mnt/d/Backup/Libraries/Desktop/stable-diffusion-webui-docker</code>（路径为 Stable Diffusion WebUI Docker 解压文件目录）。接着，输入以下的部署命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 自动下载采样模型和依赖包</span>\n<span class="token function">docker</span> compose <span class="token parameter variable">--profile</span> download up <span class="token parameter variable">--build</span>\n<span class="token comment"># 上方命令需要 20 分钟或更长，完成后执行镜像构建命令</span>\n\n<span class="token function">docker</span> compose <span class="token parameter variable">--profile</span> auto up <span class="token parameter variable">--build</span>\n<span class="token comment"># auto 是功能最多的分支，可以选择 auto | auto-cpu | invoke | comfy | comfy-cpu</span>\n<span class="token function">docker</span> compose <span class="token parameter variable">--profile</span> auto-cpu up <span class="token parameter variable">--build</span>\n<span class="token function">docker</span> compose <span class="token parameter variable">--profile</span> comfy up <span class="token parameter variable">--build</span>\n<span class="token function">docker</span> compose <span class="token parameter variable">--profile</span> comfy-cpu up <span class="token parameter variable">--build</span>\n<span class="token function">docker</span> compose <span class="token parameter variable">--profile</span> invoke up <span class="token parameter variable">--build</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img.newzone.top/2022-09-04-18-32-31.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>等待构建完成后，在终端中会提示访问 <code>http://localhost:7860/</code>，你就可以在本地电脑上用 AI 生成图片了。<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup></p><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h2><p>以下示例以 auto 分支为例，其他分支的主题界面略有不同，但在功能上并没有根本性的差异。</p><h3 id="启动-stable-diffusion" tabindex="-1"><a class="header-anchor" href="#启动-stable-diffusion"><span>启动 Stable Diffusion</span></a></h3><ol><li>打开 Docker Desktop。</li><li>在 Containers 中选中分支容器，点击启动。</li><li>浏览器中访问 <code>http://localhost:7860/</code>。</li></ol><figure><img src="https://img.newzone.top/2022-09-04-17-06-27.png" alt="" tabindex="0" loading="lazy"><figcaption>Docker Desktop 界面</figcaption></figure><h3 id="text-to-image" tabindex="-1"><a class="header-anchor" href="#text-to-image"><span>Text-to-Image</span></a></h3><p>Text-to-Image（文生图）是 Stable Diffusion 依据文字描述来生成图像的方法。对于崇尚空间结构的画作类型，如风景、创意画等，推荐使用竖图或横图。对于人像类画作，推荐使用 1:1 的方形图像，否则可能会出现多个人脸叠加的情况。生成的图片分辨率受到一定限制，你可以使用 Upscale 对结果图片进行放大处理。</p><figure><img src="https://img.newzone.top/2022-09-05-08-28-23.png" alt="" tabindex="0" loading="lazy"><figcaption>Text-to-Image 界面</figcaption></figure><p>默认情况下使用的是 Simple 简单模式。如果你想要使用更多的功能，你可以点击右侧的 Advanced 按钮，进入进阶选项。在进阶选项中，你可以使用场景矩阵、面部修复和分辨率放大等多种高级功能。</p><h3 id="image-to-image" tabindex="-1"><a class="header-anchor" href="#image-to-image"><span>Image-to-Image</span></a></h3><p>Image-to-Image（图生图）是依据文字描述和输入源图来生成相关图像。如果输入源图是 Text-to-Image、素描或结构画，该模式可充分填充图像细节。而如果输入源图是细节充分的照片，生成的结果与原图差异较大。此外，你还可以限定区域来生成图像，这非常适合进行图像修改。</p><figure><img src="https://img.newzone.top/2022-09-04-15-39-00.png" alt="" tabindex="0" loading="lazy"><figcaption>Image-to-Image 界面</figcaption></figure><p>CLIP interrogator 会根据图像来生成文字描述。Denoising Strength 指与原图的差异度，建议设置在 0.75-0.9 之间。若要魔改图片，可将 Denoising Strength 设为 0.5 或以下。下图中的 Denoising Strength 只有 0.44，整体图片结构及要素未变，但结果如何，你看到了。</p><figure><img src="https://img.newzone.top/2022-09-04-15-40-26.png" alt="" tabindex="0" loading="lazy"><figcaption>超级魔改图片</figcaption></figure><p>Image-to-Image 还可以用来移除、替换或修复图像，甚至可以将源图作为结果图的一部分，利用 Stable Diffusion 扩展绘画。高精度重绘的采样方法推荐 <code>DPM++ 2S a karrars</code>，并将采样迭代步数调整到 40 以上。</p><h3 id="image-lab" tabindex="-1"><a class="header-anchor" href="#image-lab"><span>Image Lab</span></a></h3><p>Image Lab 有批量修正面孔和放大图片分辨率的功能。</p><p>Fix Faces 是通过 GFPGAN 模型来改善图片中的面孔，Effect strength 滑块可以控制效果的强度。但实际效果别报太高期许，下图右侧开启了 Fix Faces，只能说勉强有了五官。</p><figure><img src="https://img.newzone.top/2022-09-04-15-47-14.png" alt="" tabindex="0" loading="lazy"><figcaption>A woman flying in the air laughing</figcaption></figure><p>Upscale 可以通过 RealESRGAN、GoBIG、Latent Diffusion Super Resolution 和 GoLatent 四种模型来放大图片分辨率。其中，RealESRGAN 有普通和卡通两种模式，你可以根据需要进行选择。放大图片主要消耗 CPU 和内存资源。</p><h2 id="参数解释" tabindex="-1"><a class="header-anchor" href="#参数解释"><span>参数解释</span></a></h2><h3 id="classifier-free-guidance" tabindex="-1"><a class="header-anchor" href="#classifier-free-guidance"><span>Classifier Free Guidance</span></a></h3><p>Classifier Free Guidance (CFG) 的默认值为 7。数字越小，创作自由度越高，模型与 Prompt 相关性越低。CFG 参数不影响所需的 VRAM 或生成时间。</p><ul><li>CFG 2-6：虽然有创意，但可能不符合提示。</li><li>CFG 7-10：这些提示适用于大多数情况，既富有创意又具有指导性。</li><li>CFG 10-15：当你确信 Prompt 足够好、足够具体时可以使用。</li><li>CFG 16-20：除非提示非常详细，否则不建议使用。这可能会影响连贯性和质量。</li></ul><h3 id="step" tabindex="-1"><a class="header-anchor" href="#step"><span>Step</span></a></h3><p>Step（采样步长/精度）的默认值为 50。Stable Diffusion 通过充满噪音的画布开始创建图像，并逐步去噪以达到最终输出。Step 参数控制这些去噪步骤的数量。通常情况下，越高越好。对于初学者来说，建议使用默认值。Step 参数不影响所需的 VRAM，但 Step 数值的变化会与生成图像的时间成正比。</p><h3 id="seed" tabindex="-1"><a class="header-anchor" href="#seed"><span>Seed</span></a></h3><p>Seed（种子）的默认值为 -1，代表随机值。Seed 是控制初始噪声的数字，在其他参数固定的情况下，每次生成的图像都会不同，这就是种子的作用。如果你保持提示、种子和所有其他参数不变，你可以得到相同的结果。如果一个 Seed 生成了高质量图片，保存该 Seed 并将其应用到其他图片上，以保持高质量。</p><h3 id="sampler" tabindex="-1"><a class="header-anchor" href="#sampler"><span>Sampler</span></a></h3><p>Sampling method/Diffusion Sampler（扩散采样器）是用来在生成图像过程中对图像进行去噪的方法。由于不同的扩散采样器在计算图像下一步的方式不同，因此它们需要不同的持续时间和步骤来生成可用的图像。建议初学者使用 DDIM，因为它速度快，通常只需要 10 步就能生成好的图像，因此可以很容易和快速地进行试验和改进。</p><h2 id="文字描述图像" tabindex="-1"><a class="header-anchor" href="#文字描述图像"><span>文字描述图像</span></a></h2><p>Stable Diffusion 通过英文文字内容来描述场景或物体，以此来决定生成的图像中会出现什么。文字描述是决定图像生成质量的关键因素。<sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup></p><p>样例：<code>A beautiful painting {画作种类} of a singular lighthouse, shining its light across a tumultuous sea of blood {画面描述} by greg rutkowski and thomas kinkade {画家/画风}, Trending on artstation {参考平台}, yellow color scheme {配色}</code>。<sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup></p>',38),F={href:"https://prompt.newzone.top/",target:"_blank",rel:"noopener noreferrer"},_=(0,a.Fv)('<h3 id="常规描述" tabindex="-1"><a class="header-anchor" href="#常规描述"><span>常规描述</span></a></h3><ol><li>输入图像的对象、主体，比如一只熊猫、一个持剑的战士，<strong>不要描述动作、情绪和事件</strong>；<sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7"></a></sup></li><li><strong>图像种类</strong>：一幅画（a painting of + raw prompt）还是一张照片（a photograph of + raw prompt），或者 Watercolor（水彩）、Oil Paint（油画）、Comic（漫画）、Digital Art（数码艺术）、Illustration（插画）、realistic painting（写实画）、photorealistic（写实照片）、Portrait photogram（肖像照）、Low Poly（低面建模）、3D Item Rende（三维渲染）、sculpture (雕塑) 等等，图像种类可以叠加。</li><li><strong>画家/画风</strong>：建议混合多个画家的风格，比如 <code>Studio Ghibli, Van Gogh, Monet</code>，或描述风格种类，比如 <code>very coherent symmetrical artwork</code>，将作品结构设为「连贯且对称」。</li><li><strong>色调</strong>：yellow color scheme 指整个画面的主色调为黄色。</li><li><strong>参考平台</strong>：Trending on ArtStation，也可以替换为「Facebook」「Pixiv」「Pixbay」等。 <img src="https://img.newzone.top/2022-09-16-22-33-26.png" alt="" title="相同参数下，不同平台生成的图片" loading="lazy"></li></ol><h3 id="特征描述" tabindex="-1"><a class="header-anchor" href="#特征描述"><span>特征描述</span></a></h3><p>除画面主体外，可以用其他具象物体和形容词来填充画面细节。描述词要具体，讲出你要的物体和它的特征。</p><ul><li>次要元素：物体不要太多，两到三个就好。若要特别强调某个元素，可以加很多括号或者惊叹号，比如 <code>beautiful forest background, desert!!, (((sunset)))</code> 中会优先体现「desert」和「sunset」元素。</li><li>人物特征：<code>detailed gorgeous face, delicate features, elegant, Googly Eyes, Bone, big tits, silver hair, olive skin, Mini smile</code>；</li><li>特定润色：<code>insanely detailed and intricate, gorgeous, surrealism, smooth, sharp focus, Painting, Digital Art, Concept Art, Illustration, Artstation, in a symbolic and meaningful style, 8K</code>；</li><li>光线描述：<code>Natural Lighting, Studio Lighting, Cinematic Lighting, Crepuscular Rays, X-Ray, Backlight</code>；</li><li>镜头视角：<code>Cinematic, Magazine, Golden Hour, F/22, Depth of Field, Side-View</code>，虚化背景 <code>Bokeh</code>；</li><li>画面质量：<code>professional, award winning, breathtaking, groundbreaking, superb, outstanding</code>，或虚幻引擎 <code>Unreal Engine</code>；</li><li>其他描述：细节和纹理、物体占据画面的大小、年代、渲染 / 建模工具等，比如 Vivid Colors（艳丽色彩）。</li></ul><h3 id="prompt-权重" tabindex="-1"><a class="header-anchor" href="#prompt-权重"><span>prompt 权重</span></a></h3><p>假设你在提示词中使用了 <code>mountain</code>，生成的图像很可能会有树。但如果你想要生成没有树的山的图像，可以使用 <code>mountain | tree:-10</code>。其中 <code>tree:-10</code> 表示对于树的权重非常负，因此生成的图像中不会出现树。通过权重词，我们还能生成更复杂的图像，例如 <code>A planet in space:10 | bursting with color red, blue, and purple:4 | aliens:-10 | 4K, high quality</code>。<sup class="footnote-ref"><a href="#footnote8">[8]</a><a class="footnote-anchor" id="footnote-ref8"></a></sup></p><p>Prompt 中的词语顺序代表其权重，越靠前权重越大。如若某物未出现在图像中，可以将该名词放在首位。</p><h3 id="否定提示" tabindex="-1"><a class="header-anchor" href="#否定提示"><span>否定提示</span></a></h3><p>auto/auto-cpu 分支中可以设置 Negative prompt（否定提示），以避免画面中出现指定元素。</p><ul><li>修正畸形：<code>disfigured, deformed hands, blurry, grainy, broken, cross-eyed, undead, photoshopped, overexposed, underexposed, lowres, bad anatomy, bad hands, extra digits, fewer digits, bad digit, bad ears, bad eyes, bad face, cropped: -5</code>。</li><li>避免裸体：<code>nudity, bare breasts</code>。</li><li>避免黑白照：<code>black and white,monochrome</code>。</li></ul><h3 id="prompt-参考" tabindex="-1"><a class="header-anchor" href="#prompt-参考"><span>prompt 参考</span></a></h3><p>除画面主体描述外，其他要素并非必须。如果你只是简单尝试，输入主体「apples」即可。</p>',13),G={href:"https://promptomania.com/stable-diffusion-prompt-builder/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://weirdwonderfulai.art/resources/disco-diffusion-modifiers/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://prompthero.com/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://openart.ai/",target:"_blank",rel:"noopener noreferrer"},C=(0,a.Lk)("blockquote",null,[(0,a.Lk)("p",null,"goddess close-up portrait skull with mohawk, ram skull, skeleton, thorax, x-ray, backbone, jellyfish phoenix head, nautilus, orchid, skull, betta fish, bioluminiscent creatures, intricate artwork by Tooth Wu and wlop and beeple, highly detailed, digital painting, Trending on artstation, very coherent symmetrical artwork, concept art, smooth, sharp focus, illustration, 8k")],-1),M=(0,a.Lk)("h2",{id:"prompt-matrix",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#prompt-matrix"},[(0,a.Lk)("span",null,"Prompt matrix")])],-1),R=(0,a.Lk)("sup",{class:"footnote-ref"},[(0,a.Lk)("a",{href:"#footnote9"},"[9]"),(0,a.Lk)("a",{class:"footnote-anchor",id:"footnote-ref9"})],-1),B={href:"https://github.com/HelixNGC7293/DeforumStableDiffusionLocal",target:"_blank",rel:"noopener noreferrer"},E=(0,a.Fv)('<p>上方视频的调教词为 <code>A mecha robot in World War II in realistic style|Shoot with another mecha robot|Bombed by planes|Missile drop|broken|Repaired|cinematic lighting</code>。<code>|</code> 符号后的场景条件将进行排列组合，视频样例有 6 个场景条件生成 64 张图。</p><p>另外，我们可以指定场景条件位置，比如 <code>@(moba|rpg|rts) character (2d|3d) model</code> 表示 <code>(moba|rpg|rts 三选一) character (2d|3d 二选一) model</code>，也就是会生成 3*2 张图片。开头的 <code>@</code> 是触发指定场景条件位置的符号，不能省略。</p><h2 id="textual-inversion" tabindex="-1"><a class="header-anchor" href="#textual-inversion"><span>Textual Inversion</span></a></h2><p>Textual Inversion（文本倒置）是 auto/auto-cpu 分支提供的功能，可以个人定制单词在模型中的含义。比如大众模型中医生多是白人男性，而我们可以输入 5 张亚洲女性照片并将其与 doctor 关联，经过 Textual Inversion 处理后的模型生成的医生形象将以亚洲女性为主。<sup class="footnote-ref"><a href="#footnote10">[10]</a><a class="footnote-anchor" id="footnote-ref10"></a></sup></p><p>Textual Inversion 定制流程：</p><ol><li>Preprocess images：设置源图目录和输出目录。</li><li>Create embedding（新建嵌入）：建立模型属性。</li><li>待续。</li></ol><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="docker-desktop-failed" tabindex="-1"><a class="header-anchor" href="#docker-desktop-failed"><span>Docker Desktop failed</span></a></h3><p>未正常安装/关闭 Docker 容器时，可能会报错 <code>Docker Desktop failed to start/stop</code>。</p><p>先删除 <code>%AppData%</code> 路径下的 Docker 文件夹，然后在 PowerShell 中输入下方命令，关闭 WSL 和 docker-desktop。最后，手动重启 Docker Desktop。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>wsl <span class="token parameter variable">--shutdown</span>\nwsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span>\nwsl <span class="token parameter variable">--unregister</span> docker-desktop\nwsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-desktop-cannot-start" tabindex="-1"><a class="header-anchor" href="#docker-desktop-cannot-start"><span>Docker Desktop cannot start</span></a></h3><p><code>Hardware assisted virtualization and data execution protection must be enabled in the BIOS</code> 报错说明电脑没开启虚拟化。</p><p>在开机的时候多按几次 <code>F2</code> 或 <code>DEL</code> 进入 BIOS，然后设置中开启「Intel Virtual Technology」，AMD 则是将「SVM Support」设置为设置为「Enable」的状态；最后点击「F10」保存退出即可。</p><h3 id="docker-命令失败" tabindex="-1"><a class="header-anchor" href="#docker-命令失败"><span>docker 命令失败</span></a></h3><p><code>The command &#39;docker&#39; could not be found</code> 说明当前命令行确实 Docker 环境缺失，检查 Docker Desktop 是否启动。</p><p><code>Error: (HTTP code 500) server error - Ports are not available: exposing port TCP 0.0.0.0:7860 -&gt; 0.0.0.0:0: listen tcp 0.0.0.0:7860: bind: An attempt was made to access a socket in a way forbidden by its access permissions.</code> 说明端口启用失败。Windows 可使用 <code>net stop winnat</code> 重置端口，Linux 则使用 <code>sudo fuser -k 7860/tcp</code>。</p><h3 id="exited-with-code-137" tabindex="-1"><a class="header-anchor" href="#exited-with-code-137"><span>exited with code 137</span></a></h3><p>通常来说，<code>exited with code 137</code> 意味着内存不足，超出内存限制导致进程被关闭。建议硬件配置最低为 16G 内存，尤其是在使用 auto-cpu 模式时。</p><h3 id="端口访问被拒" tabindex="-1"><a class="header-anchor" href="#端口访问被拒"><span>端口访问被拒</span></a></h3><p>Docker 容器原本运行正常，端口访问突然被拒绝了，显示 <code>Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:7860 -&gt; 0.0.0.0:0: listen tcp 0.0.0.0:7860: bind: An attempt was made to access a socket in a way forbidden by its access permissions</code>。</p><p>在 Powershell 中输入 <code>netsh int ipv4 show excludedportrange protocol=tcp</code> 检查是否处于被排除端口范围，然后输入 <code>reg add HKLM\\SYSTEM\\CurrentControlSet\\Services\\hns\\State /v EnableExcludedPortRange /d 0 /f</code> 开启端口。操作完成后，重启电脑即可解封端口。<sup class="footnote-ref"><a href="#footnote11">[11]</a><a class="footnote-anchor" id="footnote-ref11"></a></sup></p><h3 id="filenotfounderror" tabindex="-1"><a class="header-anchor" href="#filenotfounderror"><span>FileNotFoundError</span></a></h3><p>再次架构容器时报错 <code>FileNotFoundError: [Errno 2] No such file or directory: &#39;/models/model.ckpt&#39;</code>，这是架构位置错误导致的。此时，我们需要检查是否通过 WSL 输入的架构命令，并且 Stable Diffusion WebUI Docker 解压路径是否配置正确。</p><h3 id="采样模型" tabindex="-1"><a class="header-anchor" href="#采样模型"><span>采样模型</span></a></h3><p>采样模型是 AI 绘画的核心。2022.09.10 已支持自动下载采样模型，下方列表仅做参考。</p>',26),U={href:"https://www.googleapis.com/storage/v1/b/aai-blog-files/o/sd-v1-4.ckpt?alt=media",target:"_blank",rel:"noopener noreferrer"},N=(0,a.Lk)("code",null,"model.ckpt",-1),V={href:"https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.4.pth",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://heibox.uni-heidelberg.de/f/578df07c8fc04ffbadf3/?dl=1",target:"_blank",rel:"noopener noreferrer"},K={href:"https://heibox.uni-heidelberg.de/f/31a76b13ea27482981b4/?dl=1",target:"_blank",rel:"noopener noreferrer"},j=(0,a.Lk)("code",null,"LDSR.ckpt",-1),q=(0,a.Lk)("code",null,"LDSR.yaml",-1),X=(0,a.Lk)("h2",{id:"最后",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#最后"},[(0,a.Lk)("span",null,"最后")])],-1),Y=(0,a.Lk)("p",null,"尽管 Stable Diffusion 目前还不能作为生产力工具，但它使设计变得更加简单，也为普通人开启了 AI 绘画的可能性。建议你亲自体验，实际部署一下，让自己拥有更多的可能性。",-1),J=(0,a.Lk)("hr",{class:"footnotes-sep"},null,-1),Q={class:"footnotes"},$={class:"footnotes-list"},ee={id:"footnote1",class:"footnote-item"},oe={href:"https://www.runoob.com/docker/windows-docker-install.html",target:"_blank",rel:"noopener noreferrer"},te=(0,a.Lk)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),ae={id:"footnote2",class:"footnote-item"},ne={href:"https://docs.microsoft.com/zh-cn/windows/wsl/install#install-wsl-command",target:"_blank",rel:"noopener noreferrer"},ie=(0,a.Lk)("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),re={id:"footnote3",class:"footnote-item"},le={href:"https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v#enable-hyper-v-using-powershell",target:"_blank",rel:"noopener noreferrer"},se=(0,a.Lk)("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),pe={id:"footnote4",class:"footnote-item"},ce={href:"https://github.com/AbdBarho/stable-diffusion-webui-docker/wiki/Setup",target:"_blank",rel:"noopener noreferrer"},de=(0,a.Lk)("a",{href:"#footnote-ref4",class:"footnote-backref"},"↩︎",-1),fe={id:"footnote5",class:"footnote-item"},ue={href:"https://openart.ai/promptbook",target:"_blank",rel:"noopener noreferrer"},he=(0,a.Lk)("a",{href:"#footnote-ref5",class:"footnote-backref"},"↩︎",-1),ke={id:"footnote6",class:"footnote-item"},be={href:"https://www.ifanr.com/app/1484403",target:"_blank",rel:"noopener noreferrer"},ge=(0,a.Lk)("a",{href:"#footnote-ref6",class:"footnote-backref"},"↩︎",-1),me={id:"footnote7",class:"footnote-item"},Le={href:"https://www.guokr.com/article/462587/",target:"_blank",rel:"noopener noreferrer"},ve=(0,a.Lk)("a",{href:"#footnote-ref7",class:"footnote-backref"},"↩︎",-1),we={id:"footnote8",class:"footnote-item"},De={href:"https://learnprompting.org/docs/Images/weighted_terms",target:"_blank",rel:"noopener noreferrer"},xe=(0,a.Lk)("a",{href:"#footnote-ref8",class:"footnote-backref"},"↩︎",-1),We={id:"footnote9",class:"footnote-item"},Se={href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features#prompt-matrix",target:"_blank",rel:"noopener noreferrer"},ye=(0,a.Lk)("a",{href:"#footnote-ref9",class:"footnote-backref"},"↩︎",-1),Ie={id:"footnote10",class:"footnote-item"},Ae={href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Textual-Inversion",target:"_blank",rel:"noopener noreferrer"},Fe=(0,a.Lk)("a",{href:"#footnote-ref10",class:"footnote-backref"},"↩︎",-1),_e={id:"footnote11",class:"footnote-item"},Ge={href:"https://github.com/docker/for-win/issues/3171#issuecomment-572571882",target:"_blank",rel:"noopener noreferrer"},Te=(0,a.Lk)("a",{href:"#footnote-ref11",class:"footnote-backref"},"↩︎",-1),Pe={},ze=(0,t(3671).A)(Pe,[["render",function(e,o){const t=(0,a.g2)("ExternalLinkIcon"),Pe=(0,a.g2)("BiliBili");return(0,a.uX)(),(0,a.CE)("div",null,[n,i,r,(0,a.Lk)("p",null,[(0,a.eW)("想要体验 AI 绘图，你可以使用在线工具 "),(0,a.Lk)("a",l,[(0,a.eW)("Hugging Face"),(0,a.bF)(t)]),(0,a.eW)("、"),(0,a.Lk)("a",s,[(0,a.eW)("DreamStudio"),(0,a.bF)(t)]),(0,a.eW)(" 或"),(0,a.Lk)("a",p,[(0,a.eW)("百度文心"),(0,a.bF)(t)]),(0,a.eW)("。但相对于本地部署来说，Hugging Face 需要排队，生成一张图约 5 分钟；DreamStudio 可以免费生成 200 张图片，之后需要缴费；百度文心能用中文生成图片，但仍处于 beta 阶段，未正式商用。此外，这些在线工具的图片调整功能比较有限，无法批量生成图片，只适用于测试和体验。")]),(0,a.Lk)("p",null,[(0,a.eW)("如果你需要生成大量的 AI 图片，可以通过 Docker Desktop 将 "),(0,a.Lk)("a",c,[(0,a.eW)("Stable Diffusion WebUI Docker"),(0,a.bF)(t)]),(0,a.eW)(" 部署到家用电脑上，从而实现免费的 AI 文字绘画，并摆脱在线工具的限制。对于 Mac 用户，推荐选择 Stable Diffusion 的 invoke 分支，如果在部署过程中出现错误，你可以参考 "),(0,a.Lk)("a",d,[(0,a.eW)("InvokeAI 文档"),(0,a.bF)(t)]),(0,a.eW)("进行排查。对于 M1/M2 Mac 用户，推荐使用更简便的 "),(0,a.Lk)("a",f,[(0,a.eW)("CHARL-E"),(0,a.bF)(t)]),(0,a.eW)(" 或 "),(0,a.Lk)("a",u,[(0,a.eW)("DiffusionBee"),(0,a.bF)(t)]),(0,a.eW)("。")]),h,(0,a.Lk)("p",null,[(0,a.eW)("按平台选 "),(0,a.Lk)("a",k,[(0,a.eW)("Docker Desktop"),(0,a.bF)(t)]),(0,a.eW)(" 版本，安装后点击左侧的 Add Extensions，推荐安装 Disk usage 扩展，这将便于管理 Docker 的存储空间。")]),b,g,(0,a.Lk)("p",null,[(0,a.eW)("下载 "),(0,a.Lk)("a",m,[(0,a.eW)("Stable Diffusion WebUI Docker 配置包"),(0,a.bF)(t)]),(0,a.eW)("或"),(0,a.Lk)("a",L,[(0,a.eW)("阿里云盘聚合版"),(0,a.bF)(t)]),(0,a.eW)("（2024.01.22 更新），然后将其解压到指定路径。聚合版包括相关依赖和模型，因此文件较大。如果需要更新 Stable Diffusion WebUI Docker，你可以按照上述步骤重新构建容器。")]),v,w,(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[D,(0,a.eW)("（推荐）：设置模块最丰富，显示绘画过程，支持随机插入艺术家、参数读取和否定描述，最高分辨率为 2048x2048（高分辨率对显存要求更高），镜像构建命令为 "),x,(0,a.eW)("。默认使用 6GB 以上的显存，如果你的显卡内存较低，则将配置中的 "),W,(0,a.eW)(" 改为 "),S,(0,a.eW)("。A 卡用户注意修改"),(0,a.Lk)("a",y,[(0,a.eW)("显卡设置"),(0,a.bF)(t)]),(0,a.eW)("。")]),I]),A,(0,a.Lk)("p",null,[(0,a.eW)("描述图像需要多种描述，因此我开发了一个开源工具 "),(0,a.Lk)("a",F,[(0,a.eW)("IMGPrompt"),(0,a.bF)(t)]),(0,a.eW)("，以便生成图像提示词。")]),_,(0,a.Lk)("p",null,[(0,a.eW)("如果你不知道生成什么图像，可以使用 "),(0,a.Lk)("a",G,[(0,a.eW)("promptoMANIA"),(0,a.bF)(t)]),(0,a.eW)(" 、"),(0,a.Lk)("a",T,[(0,a.eW)("WEIRD WONDERFUL AI ART"),(0,a.bF)(t)]),(0,a.eW)(" 按提示组合描述，或参考 AI 图库 "),(0,a.Lk)("a",P,[(0,a.eW)("PromptHero"),(0,a.bF)(t)]),(0,a.eW)(" 和 "),(0,a.Lk)("a",z,[(0,a.eW)("OpenArt"),(0,a.bF)(t)]),(0,a.eW)(" 上其他人分享的成品图和描述文案，比如")]),C,M,(0,a.Lk)("p",null,[(0,a.eW)("Prompt matrix 可以按不同条件组合生成多张相关但不同的画面，适合用于制作视频素材。"),R,(0,a.eW)(" 此时，批次数量的设置会被忽略。如果你对将图像转化为视频有兴趣，可以尝试使用 "),(0,a.Lk)("a",B,[(0,a.eW)("Deforum Stable Diffusion Local Version"),(0,a.bF)(t)]),(0,a.eW)("。")]),(0,a.bF)(Pe,{bvid:"BV1YP411V7vV"}),E,(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[(0,a.Lk)("a",U,[(0,a.eW)("Stable Diffusion v1.4 (4GB)"),(0,a.bF)(t)]),(0,a.eW)(", 将压缩包文件重命名为 "),N,(0,a.eW)("。")]),(0,a.Lk)("li",null,[(0,a.eW)("(可选) "),(0,a.Lk)("a",V,[(0,a.eW)("GFPGANv1.4.pth (340MB)"),(0,a.bF)(t)]),(0,a.eW)("。")]),(0,a.Lk)("li",null,[(0,a.eW)("(可选) "),(0,a.Lk)("a",H,[(0,a.eW)("RealESRGAN_x4plus.pth (64MB)"),(0,a.bF)(t)]),(0,a.eW)(" 和 "),(0,a.Lk)("a",O,[(0,a.eW)("RealESRGAN_x4plus_anime_6B.pth (18MB)"),(0,a.bF)(t)]),(0,a.eW)("。")]),(0,a.Lk)("li",null,[(0,a.eW)("(可选) "),(0,a.Lk)("a",Z,[(0,a.eW)("LDSR (2GB)"),(0,a.bF)(t)]),(0,a.eW)(" 和 "),(0,a.Lk)("a",K,[(0,a.eW)("LDSR 配置"),(0,a.bF)(t)]),(0,a.eW)("，分别重命名为 "),j,(0,a.eW)(" 和 "),q,(0,a.eW)("。")])]),X,Y,J,(0,a.Lk)("section",Q,[(0,a.Lk)("ol",$,[(0,a.Lk)("li",ee,[(0,a.Lk)("p",null,[(0,a.Lk)("a",oe,[(0,a.eW)("Windows Docker 安装"),(0,a.bF)(t)]),(0,a.eW)(),te])]),(0,a.Lk)("li",ae,[(0,a.Lk)("p",null,[(0,a.Lk)("a",ne,[(0,a.eW)("使用 WSL 在 Windows 上安装 Linux"),(0,a.bF)(t)]),(0,a.eW)(),ie])]),(0,a.Lk)("li",re,[(0,a.Lk)("p",null,[(0,a.Lk)("a",le,[(0,a.eW)("在 Windows 10 上安装 Hyper-V"),(0,a.bF)(t)]),(0,a.eW)(),se])]),(0,a.Lk)("li",pe,[(0,a.Lk)("p",null,[(0,a.Lk)("a",ce,[(0,a.eW)("Setup Stable Diffusion WebUI Docker"),(0,a.bF)(t)]),(0,a.eW)(),de])]),(0,a.Lk)("li",fe,[(0,a.Lk)("p",null,[(0,a.Lk)("a",ue,[(0,a.eW)("Stable Diffusion Prompt Book - OpenArt"),(0,a.bF)(t)]),(0,a.eW)(),he])]),(0,a.Lk)("li",ke,[(0,a.Lk)("p",null,[(0,a.Lk)("a",be,[(0,a.eW)("外网爆火的 4 款「你说我画」自动作画工具，我们测了下，有 1 款的确超强"),(0,a.bF)(t)]),(0,a.eW)(),ge])]),(0,a.Lk)("li",me,[(0,a.Lk)("p",null,[(0,a.Lk)("a",Le,[(0,a.eW)("最时髦的 AI 画画，一文包教包会"),(0,a.bF)(t)]),(0,a.eW)(),ve])]),(0,a.Lk)("li",we,[(0,a.Lk)("p",null,[(0,a.Lk)("a",De,[(0,a.eW)("Learn Prompting: Weighted Terms"),(0,a.bF)(t)]),(0,a.eW)(),xe])]),(0,a.Lk)("li",We,[(0,a.Lk)("p",null,[(0,a.Lk)("a",Se,[(0,a.eW)("stable-diffusion Prompt matrix"),(0,a.bF)(t)]),(0,a.eW)(),ye])]),(0,a.Lk)("li",Ie,[(0,a.Lk)("p",null,[(0,a.Lk)("a",Ae,[(0,a.eW)("Textual Inversion"),(0,a.bF)(t)]),(0,a.eW)(),Fe])]),(0,a.Lk)("li",_e,[(0,a.Lk)("p",null,[(0,a.Lk)("a",Ge,[(0,a.eW)("Windows 端口访问被拒"),(0,a.bF)(t)]),(0,a.eW)(),Te])])])])])}]]),Ce=JSON.parse('{"path":"/posts/2022-09-05-stable_diffusion_ai_painting.html","title":"零基础入门 Stable Diffusion - 无需显卡把 AI 绘画引擎搬进家用电脑","lang":"zh-CN","frontmatter":{"title":"零基础入门 Stable Diffusion - 无需显卡把 AI 绘画引擎搬进家用电脑","date":"2022-09-05T00:00:00.000Z","category":["工具"],"tag":["AI","Docker","Stable Diffusion"],"order":-49,"description":"我从小特别羡慕会画画的伙伴。他们能够将心中的想法画出来，而我最高水平的肖像画是丁老头。但在接触 Stable Diffusion 之后，我感觉自己脱胎换骨，给自己贴上了「会画画」的新标签。 丁老头进化旅程 Stable Diffusion 是一个「文本到图像」的人工智能模型，也是唯一一款开源且能部署在家用电脑（对硬件要求不高）上的 AI 绘图工具。使用...","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2022-09-05-stable_diffusion_ai_painting.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"零基础入门 Stable Diffusion - 无需显卡把 AI 绘画引擎搬进家用电脑"}],["meta",{"property":"og:description","content":"我从小特别羡慕会画画的伙伴。他们能够将心中的想法画出来，而我最高水平的肖像画是丁老头。但在接触 Stable Diffusion 之后，我感觉自己脱胎换骨，给自己贴上了「会画画」的新标签。 丁老头进化旅程 Stable Diffusion 是一个「文本到图像」的人工智能模型，也是唯一一款开源且能部署在家用电脑（对硬件要求不高）上的 AI 绘图工具。使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.newzone.top/2022-09-04-11-53-20.png \\"丁老头进化旅程\\""}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T02:07:29.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"零基础入门 Stable Diffusion - 无需显卡把 AI 绘画引擎搬进家用电脑"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"AI"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:tag","content":"Stable Diffusion"}],["meta",{"property":"article:published_time","content":"2022-09-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-01T02:07:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"零基础入门 Stable Diffusion - 无需显卡把 AI 绘画引擎搬进家用电脑\\",\\"image\\":[\\"https://img.newzone.top/2022-09-04-11-53-20.png \\\\\\"丁老头进化旅程\\\\\\"\\",\\"https://img.newzone.top/2022-09-05-16-22-45.png \\\\\\"Stable Diffusion 部署流程\\\\\\"\\",\\"https://img.newzone.top/2022-09-04-18-32-31.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2022-09-04-17-06-27.png \\\\\\"Docker Desktop 界面\\\\\\"\\",\\"https://img.newzone.top/2022-09-05-08-28-23.png \\\\\\"Text-to-Image 界面\\\\\\"\\",\\"https://img.newzone.top/2022-09-04-15-39-00.png \\\\\\"Image-to-Image 界面\\\\\\"\\",\\"https://img.newzone.top/2022-09-04-15-40-26.png \\\\\\"超级魔改图片\\\\\\"\\",\\"https://img.newzone.top/2022-09-04-15-47-14.png \\\\\\"A woman flying in the air laughing\\\\\\"\\",\\"https://img.newzone.top/2022-09-16-22-33-26.png \\\\\\"相同参数下，不同平台生成的图片\\\\\\"\\"],\\"datePublished\\":\\"2022-09-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-01T02:07:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"Docker 环境配置","slug":"docker-环境配置","link":"#docker-环境配置","children":[{"level":3,"title":"安装 WSL","slug":"安装-wsl","link":"#安装-wsl","children":[]},{"level":3,"title":"启用 Hyper-V","slug":"启用-hyper-v","link":"#启用-hyper-v","children":[]},{"level":3,"title":"Linux 路径（Windows）","slug":"linux-路径-windows","link":"#linux-路径-windows","children":[]}]},{"level":2,"title":"配置 Stable Diffusion","slug":"配置-stable-diffusion","link":"#配置-stable-diffusion","children":[{"level":3,"title":"安装 Docker Desktop","slug":"安装-docker-desktop","link":"#安装-docker-desktop","children":[]},{"level":3,"title":"下载 WebUI Docker","slug":"下载-webui-docker","link":"#下载-webui-docker","children":[]},{"level":3,"title":"分支介绍","slug":"分支介绍","link":"#分支介绍","children":[]},{"level":3,"title":"构建 Stable Diffusion","slug":"构建-stable-diffusion","link":"#构建-stable-diffusion","children":[]}]},{"level":2,"title":"使用说明","slug":"使用说明","link":"#使用说明","children":[{"level":3,"title":"启动 Stable Diffusion","slug":"启动-stable-diffusion","link":"#启动-stable-diffusion","children":[]},{"level":3,"title":"Text-to-Image","slug":"text-to-image","link":"#text-to-image","children":[]},{"level":3,"title":"Image-to-Image","slug":"image-to-image","link":"#image-to-image","children":[]},{"level":3,"title":"Image Lab","slug":"image-lab","link":"#image-lab","children":[]}]},{"level":2,"title":"参数解释","slug":"参数解释","link":"#参数解释","children":[{"level":3,"title":"Classifier Free Guidance","slug":"classifier-free-guidance","link":"#classifier-free-guidance","children":[]},{"level":3,"title":"Step","slug":"step","link":"#step","children":[]},{"level":3,"title":"Seed","slug":"seed","link":"#seed","children":[]},{"level":3,"title":"Sampler","slug":"sampler","link":"#sampler","children":[]}]},{"level":2,"title":"文字描述图像","slug":"文字描述图像","link":"#文字描述图像","children":[{"level":3,"title":"常规描述","slug":"常规描述","link":"#常规描述","children":[]},{"level":3,"title":"特征描述","slug":"特征描述","link":"#特征描述","children":[]},{"level":3,"title":"prompt 权重","slug":"prompt-权重","link":"#prompt-权重","children":[]},{"level":3,"title":"否定提示","slug":"否定提示","link":"#否定提示","children":[]},{"level":3,"title":"prompt 参考","slug":"prompt-参考","link":"#prompt-参考","children":[]}]},{"level":2,"title":"Prompt matrix","slug":"prompt-matrix","link":"#prompt-matrix","children":[]},{"level":2,"title":"Textual Inversion","slug":"textual-inversion","link":"#textual-inversion","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"Docker Desktop failed","slug":"docker-desktop-failed","link":"#docker-desktop-failed","children":[]},{"level":3,"title":"Docker Desktop cannot start","slug":"docker-desktop-cannot-start","link":"#docker-desktop-cannot-start","children":[]},{"level":3,"title":"docker 命令失败","slug":"docker-命令失败","link":"#docker-命令失败","children":[]},{"level":3,"title":"exited with code 137","slug":"exited-with-code-137","link":"#exited-with-code-137","children":[]},{"level":3,"title":"端口访问被拒","slug":"端口访问被拒","link":"#端口访问被拒","children":[]},{"level":3,"title":"FileNotFoundError","slug":"filenotfounderror","link":"#filenotfounderror","children":[]},{"level":3,"title":"采样模型","slug":"采样模型","link":"#采样模型","children":[]}]},{"level":2,"title":"最后","slug":"最后","link":"#最后","children":[]}],"git":{"createdTime":1709258849000,"updatedTime":1709258849000,"contributors":[{"name":"辉辉","email":"59565692+huihuikj@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":16.76,"words":5027},"filePathRelative":"_posts/2022-09-05-stable_diffusion_ai_painting.md","localizedDate":"2022年9月5日","excerpt":"<p>我从小特别羡慕会画画的伙伴。他们能够将心中的想法画出来，而我最高水平的肖像画是丁老头。但在接触 Stable Diffusion 之后，我感觉自己脱胎换骨，给自己贴上了「会画画」的新标签。</p>\\n<figure><img src=\\"https://img.newzone.top/2022-09-04-11-53-20.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>丁老头进化旅程</figcaption></figure>\\n<p>Stable Diffusion 是一个「文本到图像」的人工智能模型，也是唯一一款开源且能部署在家用电脑（对硬件要求不高）上的 AI 绘图工具。使用 Stable Diffusion，你可以在拥有 6GB 显存显卡，16GB 内存或只依赖 CPU 的电脑上生成图像，并且仅需几秒钟的时间，无需进行预处理或后处理。</p>","autoDesc":true}')}}]);