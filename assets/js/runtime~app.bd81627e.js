(()=>{"use strict";var e,t,a,l={},r={};function d(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return l[e].call(a.exports,a,a.exports,d),a.exports}d.m=l,e=[],d.O=(t,a,l,r)=>{if(!a){var o=1/0;for(i=0;i<e.length;i++){for(var[a,l,r]=e[i],h=!0,m=0;m<a.length;m++)(!1&r||o>=r)&&Object.keys(d.O).every((e=>d.O[e](a[m])))?a.splice(m--,1):(h=!1,r<o&&(o=r));if(h){e.splice(i--,1);var n=l();void 0!==n&&(t=n)}}return t}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[a,l,r]},d.d=(e,t)=>{for(var a in t)d.o(t,a)&&!d.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,a)=>(d.f[a](e,t),t)),[])),d.u=e=>"assets/js/"+({20:"Docker.html",88:"2018-06-08-baizhuo_gp1700.html",98:"Fitness.html",139:"syncthing.html",201:"2018-05-01-jekyll_blog_on_github_pages.html",349:"paperless-ngx.html",359:"reader.html",486:"Coupon.html",535:"DailyRoutine.html",616:"2022-06-07-blog_md_to_wordpress.html",654:"deeplx.html",665:"2017-04-22-rss_feed43_feedex.html",924:"grocy.html",955:"2017-10-18-light_cat_e8-c-epon_admin.html",960:"2018-05-24-airtable_noob.html",982:"2022-04-20-survivorship_bias_in_shanghai_2022.html",1074:"flare.html",1088:"2018-12-28-voice_input_try.html",1211:"VuePress.html",1371:"gitlab.html",1397:"Maintenance.html",1398:"2_obs_streamfx.html",1471:"2019-10-04-fake_aka_hospital_skin_care_products.html",1571:"uptime-kuma.html",1582:"2018-01-19-forget_the_cdn.html",1597:"logseq.html",1672:"HomeAutomation.html",1734:"feishu.html",1871:"0_live_equipments.html",1944:"screen.html",1946:"2022-05-22-surveillance_video_for_myself.html",1984:"2018-05-04-audition_cut_mp3.html",1989:"2017-04-18-wechat_multi_open.html",2013:"2020-12-17-weight_log.html",2213:"2018-05-02-jekyll_blog_on_vps.html",2302:"Vue.html",2499:"emby.html",2530:"2022-04-21-uivision_rpa.html",2542:"Chrome.html",2658:"2021-01-02-keepass_the_real_lastpassword.html",2705:"2024-01-28-learndata-advanced.html",2707:"2018-05-15-aria2_a_new_download_tool.html",2823:"2018-06-19-iptv_direckly.html",2873:"srs-stack.html",3015:"6_live_positioning.html",3054:"qbittorrent.html",3058:"Python.html",3121:"2020-09-22-uefi_asus_board.html",3146:"2019-04-01-rsshub_noob.html",3309:"toolbox.html",3363:"2021-10-23-nas_with_rsshub_and_huginn.html",3518:"Electron.html",3569:"Markdown.html",3652:"2023-02-27-chatgpt_shortcuts.html",3689:"docsify.html",3753:"2023-09-05-virtual_positioning.html",3759:"2018-03-06-no_more_dinner.html",3834:"2018-06-10-koolproxy_https.html",3912:"intro.html",3984:"nextcloud.html",3986:"2020-11-01-gym_equipment_throw_away.html",4026:"2019-03-31-openvpn_back_to_home.html",4130:"2022-02-19-microsoft_store_fixed.html",4138:"2022-03-17-rss_persistent_link_collection.html",4166:"2017-07-28-office_2016_installer_error.html",4429:"Regex.html",4447:"navidrome.html",4470:"index.html",4474:"Life.html",4523:"newborn.html",4534:"2017-07-29-onenote_2016_cannot_be_logged_in.html",4541:"AutoHotkey.html",4552:"2020-03-25-rsshub_on_vps.html",4732:"2017-10-18-light_cat_port_forwarding.html",4756:"tachidesk.html",4925:"VPS.html",4938:"design.html",4971:"2022-11-18-whisper_ai_subtitles.html",5048:"2022-09-07-extreme_branding_thinking_with_mate50.html",5099:"Huginn.html",5152:"NAS.html",5218:"Comments.html",5219:"CloudServices.html",5260:"2020-11-27-rime_input.html",5377:"DNS.html",5478:"2017-09-02-forced_shutdown.html",5496:"2022-08-10-new_stuff_shaping_machine.html",5581:"json-translate.html",5707:"qinglong.html",5744:"GitHub.html",5781:"5_live_platforms.html",5845:"2022-08-22-learndata_blog_to_knowledge_management.html",5900:"2018-01-31-hire_a_robot.html",5974:"2023-03-31-efficient_morning_5am_club.html",6029:"1_obs_basic.html",6077:"2022-01-23-wechat_lucky_money_cover.html",6262:"faq.html",6405:"grampsjs.html",6586:"4_live_effects.html",6632:"blog.html",6640:"Shoppinglist.html",6749:"3_obs_plugins.html",6762:"2019-08-26-scrcpy_screen_projection.html",6819:"stirling-pdf.html",6831:"Cloudflare.html",6968:"2017-09-03-smb_lan_sharing.html",7085:"2023-10-29-switch-firmware-updates.html",7204:"MySQL.html",7217:"Medical.html",7230:"vscode.html",7270:"Static.html",7418:"n8n.html",7480:"Javascript.html",7481:"Applist.html",7490:"404.html",7541:"HTML.html",7573:"memos.html",7619:"sun-panel.html",7681:"2020-09-13-wifi_speed_up.html",7722:"2018-04-30-baota_deploy_vps.html",7758:"TTRSS.html",7838:"hospital.html",7930:"Diet.html",7949:"ChatGPT.html",8106:"2023-10-07-clone-voice.html",8184:"2020-10-25-dpc_watchdog_violation.html",8245:"2021-05-31-principles_criticism_and_self-criticism.html",8304:"take-kids-out.html",8356:"2022-11-03-ffmpeg_screen_recording.html",8365:"2018-05-03-jekyll_blog_autodeploy.html",8458:"2022-03-21-winget_the_strongest_software_manager_for_windows.html",8685:"QTTabBar.html",9011:"cors-anywhere.html",9022:"2018-10-07-huginn_scraping_any_website.html",9125:"obsidian.html",9187:"mt-photos.html",9366:"2023-01-26-whiteboard_gtd.html",9503:"homarr.html",9522:"power-automate.html",9544:"2021-01-27-blog_jekyll_to_wordpress.html",9600:"photo-swipe",9740:"2022-03-09-lenovo_black_card_member.html",9785:"alist.html",9789:"xiaoya.html",9811:"birthing.html",9836:"2022-09-05-stable_diffusion_ai_painting.html",9973:"NewSystem.html",9981:"reverse-proxy.html"}[e]||e)+"."+{20:"a18ba6f3",88:"ed80b032",98:"76bc9cdf",139:"edd77678",201:"ab52e45c",349:"b74889b1",359:"f53ef33b",486:"196d7d01",535:"49c45205",616:"2806edda",654:"351588a6",665:"b2a26eee",924:"f5561eb5",955:"cdaf508b",960:"8b54b6a3",982:"259e2891",1074:"be0a5f91",1088:"e9f1b684",1186:"6fd078f4",1211:"7d7220d2",1371:"e90eb246",1397:"a8b7842e",1398:"345d1f03",1423:"b28d0b57",1471:"1d53aa60",1571:"194bc556",1582:"fe86ba7c",1596:"ca832ad2",1597:"4057250b",1672:"a25dc4c7",1682:"1767c90e",1734:"8195b917",1871:"4eef7bf7",1944:"fa83443b",1946:"33993826",1984:"e1623c2c",1989:"f9a852fd",2013:"c9fc9d18",2021:"3d500962",2213:"903631c9",2302:"0ead0bae",2337:"a9a846d0",2470:"0dad2d67",2499:"df07fbda",2530:"66f420d5",2542:"13228807",2658:"ec41d0f1",2705:"e3c428c8",2707:"22fd171e",2823:"a1e772c3",2836:"7b1b05fd",2873:"b624f5cb",3015:"639bc006",3027:"132d36a7",3054:"f6cce646",3058:"f99d652e",3121:"49b075b4",3146:"1849bd6c",3309:"0466f08b",3363:"1e219517",3518:"6ea1a3dd",3569:"b871837b",3652:"8ef3551a",3689:"69f6efe3",3753:"6b7e8112",3759:"9b5b88e4",3834:"dfb4308c",3912:"42afe608",3984:"791a771b",3986:"6db258b8",4026:"17484722",4130:"3240cc17",4138:"d00581b1",4166:"a989ad80",4399:"35ed640f",4429:"da34c4e8",4447:"04d9223a",4470:"17ea00cd",4474:"819ad05a",4483:"a777bbcc",4523:"0fca62bd",4534:"be4a95e6",4541:"d20b9a41",4552:"e0cb2eec",4672:"75f7d068",4732:"3258b7e4",4756:"9a91ace7",4925:"2af6ce57",4938:"85920519",4971:"a6c9d3da",5048:"f7518787",5099:"f30c3c64",5152:"f44bfce6",5218:"88a83984",5219:"867636e6",5260:"21f62da7",5377:"490b4ae0",5390:"73d580fe",5478:"9e4e26cc",5496:"ffad687a",5581:"37e2ba4c",5616:"2ef7ded5",5699:"b498a9f9",5707:"a804e0f0",5744:"f3619efd",5781:"fb1039b0",5845:"2e417672",5900:"bd18ad27",5974:"fa7f8b6c",6029:"b478b92a",6077:"8a118765",6262:"21591f7a",6276:"bead99dc",6392:"d715ebea",6405:"4d1edaac",6459:"c38b1b98",6586:"305586f3",6632:"4a983eda",6640:"277457a7",6749:"e91687ff",6762:"f49dd955",6819:"e29d9d6e",6831:"24baf1fc",6968:"58329c5e",7085:"4d4eac6c",7204:"9baa9474",7217:"86bd2b38",7230:"b0dbbe96",7270:"21d89645",7418:"85ae9a2d",7480:"b3fb4694",7481:"a8f57dcd",7490:"6ef8d242",7541:"7d5a320d",7547:"5d9b632c",7573:"a3b6cb69",7619:"d47c8dd8",7637:"bc3d91db",7681:"59d64a78",7722:"da29d6d7",7755:"c3e02d2d",7758:"d23d7699",7838:"f79cf968",7930:"1c8509bb",7949:"71cd7d99",8106:"955aa105",8126:"a3ec3add",8184:"65097b7f",8245:"b17dceb6",8304:"72943fad",8356:"30ca81f4",8365:"36add51e",8458:"af7ed266",8666:"0f408295",8685:"d2e6672c",8766:"7a276eed",8994:"a4267a65",9011:"6938012a",9022:"34b02d1e",9125:"a5a9d9c0",9155:"4f288999",9187:"78acd337",9324:"ff2ad0d4",9366:"b3f5de5c",9503:"2e4acabe",9522:"2b73e45c",9544:"41ad3c90",9600:"2a81417f",9627:"dbb0cbef",9701:"b24d9e9c",9740:"8e60ae97",9785:"170ec9bb",9789:"f67f2dee",9811:"ded10ea2",9836:"b9ec610d",9973:"a7d748aa",9981:"a4455359"}[e]+".js",d.miniCssF=e=>"assets/css/"+e+".styles."+{3027:"132d36a7",4483:"a777bbcc",6392:"d715ebea"}[e]+".css",d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},a="learn-data:",d.l=(e,l,r,o)=>{if(t[e])t[e].push(l);else{var h,m;if(void 0!==r)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var s=n[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==a+r){h=s;break}}h||(m=!0,(h=document.createElement("script")).charset="utf-8",h.timeout=120,d.nc&&h.setAttribute("nonce",d.nc),h.setAttribute("data-webpack",a+r),h.src=e),t[e]=[l];var c=(a,l)=>{h.onerror=h.onload=null,clearTimeout(b);var r=t[e];if(delete t[e],h.parentNode&&h.parentNode.removeChild(h),r&&r.forEach((e=>e(l))),a)return a(l)},b=setTimeout(c.bind(null,void 0,{type:"timeout",target:h}),12e4);h.onerror=c.bind(null,h.onerror),h.onload=c.bind(null,h.onload),m&&document.head.appendChild(h)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/",(()=>{if("undefined"!=typeof document){var e={2750:0};d.f.miniCss=(t,a)=>{e[t]?a.push(e[t]):0!==e[t]&&{3027:1,4483:1,6392:1}[t]&&a.push(e[t]=(e=>new Promise(((t,a)=>{var l=d.miniCssF(e),r=d.p+l;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),l=0;l<a.length;l++){var r=(o=a[l]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){var o;if((r=(o=d[l]).getAttribute("data-href"))===e||r===t)return o}})(l,r))return t();((e,t,a,l,r)=>{var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onerror=d.onload=a=>{if(d.onerror=d.onload=null,"load"===a.type)l();else{var o=a&&a.type,h=a&&a.target&&a.target.href||t,m=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+h+")");m.name="ChunkLoadError",m.code="CSS_CHUNK_LOAD_FAILED",m.type=o,m.request=h,d.parentNode&&d.parentNode.removeChild(d),r(m)}},d.href=t,document.head.appendChild(d)})(e,r,0,t,a)})))(t).then((()=>{e[t]=0}),(a=>{throw delete e[t],a})))}}})(),(()=>{var e={2750:0,5882:0};d.f.j=(t,a)=>{var l=d.o(e,t)?e[t]:void 0;if(0!==l)if(l)a.push(l[2]);else if(/^(2750|3027|4483|5882|6392)$/.test(t))e[t]=0;else{var r=new Promise(((a,r)=>l=e[t]=[a,r]));a.push(l[2]=r);var o=d.p+d.u(t),h=new Error;d.l(o,(a=>{if(d.o(e,t)&&(0!==(l=e[t])&&(e[t]=void 0),l)){var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;h.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",h.name="ChunkLoadError",h.type=r,h.request=o,l[1](h)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,a)=>{var l,r,[o,h,m]=a,n=0;if(o.some((t=>0!==e[t]))){for(l in h)d.o(h,l)&&(d.m[l]=h[l]);if(m)var i=m(d)}for(t&&t(a);n<o.length;n++)r=o[n],d.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return d.O(i)},a=self.webpackChunklearn_data=self.webpackChunklearn_data||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})()})();