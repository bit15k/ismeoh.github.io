if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const b=e=>a(e,d),t={module:{uri:d},exports:r,require:b};s[d]=Promise.all(c.map((e=>t[e]||b(e)))).then((e=>(i(...e),r)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/01-c-pointer-introduce.html-e5eede67.js",revision:"fd09751cc46ba3dede67e421364e433e"},{url:"assets/01-c-pointer-introduce.html-f6143465.js",revision:"0a5eb97a4e4113e20770271260b68f76"},{url:"assets/01-js-grammer.html-a3ad859e.js",revision:"c9bb875ebdb6ad51ad1466ff7ce788ce"},{url:"assets/01-js-grammer.html-b41d7c94.js",revision:"1faf1f4fb3267d4305f9ab6d5b5dd3d3"},{url:"assets/01-origianal-variable-.html-8325b7f0.js",revision:"bc0ccf4dbfa288b0cf430600de29d826"},{url:"assets/01-origianal-variable-.html-9200eaeb.js",revision:"b1298b4261f52cd0c0556c592e4eaf94"},{url:"assets/02-c-pointer-variable.html-6f659ede.js",revision:"c868fbce98b096239a5454f4a6fddc92"},{url:"assets/02-c-pointer-variable.html-750a33de.js",revision:"308945b2719b21087af14c7c8eb1866f"},{url:"assets/03-js-variables.html-5f573a6d.js",revision:"ca7e1ae39264182524a5f9e087d7ea8b"},{url:"assets/03-js-variables.html-d95d7f20.js",revision:"ca3ed1043450ce371b0e8bca210cea52"},{url:"assets/04-js-data-type.html-4eaec01d.js",revision:"347e36075b1a99bfc3d9bf93d275d1d3"},{url:"assets/04-js-data-type.html-8b8804f2.js",revision:"5eb6ed1e99fd13800d55032d41a29fa4"},{url:"assets/404.html-8fe8b984.js",revision:"9c24ca85b0935982486942662cd06808"},{url:"assets/404.html-a202f78d.js",revision:"67878ca83c076f3a0bb6491b598c45b8"},{url:"assets/app-243e9402.js",revision:"358208331faa16d0c3e278e34d533dd6"},{url:"assets/arrow-function.html-3bd3e676.js",revision:"44afb5ee8d4f87e6875104f73628c770"},{url:"assets/arrow-function.html-d6a791b6.js",revision:"49198cd1217b64c76e15f2fd17480e46"},{url:"assets/callback-functions.html-5c66e49c.js",revision:"acbedc67226ca4174c1649ddad530271"},{url:"assets/callback-functions.html-b81bc107.js",revision:"d9f23a3027e40371d1656660bb00990b"},{url:"assets/es6-module.html-94eb9c42.js",revision:"a3b817b4d00dcf92567d32ff683af9e5"},{url:"assets/es6-module.html-c8f039c3.js",revision:"aca7d55bf53f561f86edd4563b34bd15"},{url:"assets/event-driven-style-programming.html-44797a9c.js",revision:"ea5507bd1b0440ba7d37d2c4b04d4ab5"},{url:"assets/event-driven-style-programming.html-56d287cc.js",revision:"67b34a437b094977b3b21e1ee2393d3d"},{url:"assets/framework-11f0740a.js",revision:"109f1cc73881cfd011bf9373839acf8d"},{url:"assets/giscus-6650c2d9.js",revision:"282a7cb29f6aabbebb5de1c42a089f2c"},{url:"assets/git-basic.html-2b7a4700.js",revision:"37656e8ab3eb8c1497b048ce0e49f41d"},{url:"assets/git-basic.html-c41eb4b2.js",revision:"61445e1bdf8e323b0a9f192aed7ad354"},{url:"assets/git-branch.html-4b123e5d.js",revision:"5e50a3b385fc45dfa93d55d3c5f9bbfb"},{url:"assets/git-branch.html-fab65dd2.js",revision:"38068cbe4bd3f7317c6f781493535241"},{url:"assets/git-chinese-translate.html-41df4468.js",revision:"a29643292425fc96d2e5b24d57d6181a"},{url:"assets/git-chinese-translate.html-667820c9.js",revision:"a6778294211c46fca92c8f717f982296"},{url:"assets/git-config-proxy.html-b6a72244.js",revision:"0edea0a7d8ff020784489da9e9b72fd8"},{url:"assets/git-config-proxy.html-e4cc9c04.js",revision:"87cf930ccc4c7c8d6c20d5c3cf91fd41"},{url:"assets/icon/bak/logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-02787909.js",revision:"e43127c6e73c8f2dde47614c73753dcd"},{url:"assets/index.html-064391c7.js",revision:"6b6da5a86b884210a21bafecdc576e60"},{url:"assets/index.html-09e0e43b.js",revision:"b21647ebcb50420a09657f32bfeedf23"},{url:"assets/index.html-11815783.js",revision:"514c863ae080b7a9c77a362b9b7725a1"},{url:"assets/index.html-167ba78c.js",revision:"20ee088f9a9fd372cd46469f8b9ff732"},{url:"assets/index.html-192a688b.js",revision:"fc6445b6ed649f6ef74a2ba3b1c388d4"},{url:"assets/index.html-1d90605d.js",revision:"e6a8372a4ef88f4a10fda471e8b3e5b3"},{url:"assets/index.html-2d70d12f.js",revision:"b218d2793a1f838a3d25cce7e1aab53e"},{url:"assets/index.html-3180956b.js",revision:"49ce9b0f4c25a7e859bf2b9798918beb"},{url:"assets/index.html-3a7fa779.js",revision:"9772bee90d5914bb44b6b91f28138c59"},{url:"assets/index.html-3cca27c9.js",revision:"90a5dcee77095307566446dbc409b505"},{url:"assets/index.html-3d31268a.js",revision:"2d003cb25b4cd5f10e63c3414fe9e584"},{url:"assets/index.html-42486ee1.js",revision:"caafe7f38449f9cfea2bc9b118818514"},{url:"assets/index.html-598bf4fa.js",revision:"cdc08de7cab1c8040ebc3ee0ab29c6c0"},{url:"assets/index.html-5a015c68.js",revision:"5cf0b66fe610ce271f36dabb8ac21ef5"},{url:"assets/index.html-60aa903b.js",revision:"4ad13d55abb157b2564fa9e2e06fd5e7"},{url:"assets/index.html-6538a909.js",revision:"f082c788a875d3fe1c1c22bf35543e6c"},{url:"assets/index.html-69386708.js",revision:"5f08586bad8176d6cdefe62c93dd8457"},{url:"assets/index.html-6d0ed312.js",revision:"5f08586bad8176d6cdefe62c93dd8457"},{url:"assets/index.html-76a23c25.js",revision:"5f08586bad8176d6cdefe62c93dd8457"},{url:"assets/index.html-831e6137.js",revision:"5f08586bad8176d6cdefe62c93dd8457"},{url:"assets/index.html-90ea17b0.js",revision:"2876775485d3124721e38745e2f0285d"},{url:"assets/index.html-a6957d02.js",revision:"5f08586bad8176d6cdefe62c93dd8457"},{url:"assets/index.html-a89a61fc.js",revision:"e8a7dc87c7f6774a2e280fac2e74968e"},{url:"assets/index.html-b530209e.js",revision:"06a6742997a0cfe141d1d2d186c9209f"},{url:"assets/index.html-b6911636.js",revision:"d64a6b2afd0ba69ee8415b103e5e6d9b"},{url:"assets/index.html-b92aca1c.js",revision:"729a8e9fc6b65bf3dda44b1cfaff6858"},{url:"assets/index.html-c4a3dc91.js",revision:"27dd83c8f4a527a40323bdb9c261ebe2"},{url:"assets/index.html-c70d2d89.js",revision:"772363f79410636b5f3056809cee87bc"},{url:"assets/index.html-d365036c.js",revision:"b21647ebcb50420a09657f32bfeedf23"},{url:"assets/index.html-d6daeebb.js",revision:"2ce6d8aeec4ba325fa2cd8769280b3a1"},{url:"assets/index.html-e276364b.js",revision:"0b0fd49a99df4458e082eaf4e9a6a85c"},{url:"assets/index.html-e52b5fbe.js",revision:"5d35ecaaf7b850122753e1da9815394d"},{url:"assets/index.html-e8185925.js",revision:"5c6a9811573c0686d9d2eb4b727bce45"},{url:"assets/index.html-ec99924d.js",revision:"58512733958117b1abb4aac1302065f2"},{url:"assets/index.html-ecd93874.js",revision:"53de7afb6a5c9fd287037d16cbd7a24b"},{url:"assets/index.html-ecf7c6d2.js",revision:"8cb8f4e6ad823041d61681d9148d7c58"},{url:"assets/index.html-ee6fb4dc.js",revision:"83cfac9c6ef245b63f223f29549d0ac4"},{url:"assets/index.html-f0a8050e.js",revision:"02d238bf9df725d7687a64ea7e861eca"},{url:"assets/index.html-f150c62f.js",revision:"e158294910116305ff8c0d045d66124b"},{url:"assets/index.html-f8d69314.js",revision:"a85d9f6645f2445ca413bad7310c7efb"},{url:"assets/index.html-f9892150.js",revision:"bc93474cc512f35a696d894792f3a8f8"},{url:"assets/index.html-fa90a82f.js",revision:"5f08586bad8176d6cdefe62c93dd8457"},{url:"assets/index.html-fcce6aaf.js",revision:"af232324c8f432fecdf4e30de7599c19"},{url:"assets/js-basic.html-157b86f5.js",revision:"3930fb3af492b7485f24adca26b2cbaa"},{url:"assets/js-basic.html-86447b1e.js",revision:"d4b16464074bee047f4ca8c2583cfb49"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/SearchResult-21575bb0.js",revision:"ca1b6365c75ecbb9e3749eff00fbe7ad"},{url:"assets/style-7169514b.css",revision:"c0171457c55a4ca5eae0129d6bb6f5b2"},{url:"assets/technology-site-collected.html-1e15c86d.js",revision:"cdb9e5e23d75bdae2b910b3481865ad7"},{url:"assets/technology-site-collected.html-8d5372fe.js",revision:"a8fe8fb58d045d598c3d0006598db6f7"},{url:"assets/the()___ difference of docsor command reference .html-3f480196.js",revision:"3086c586a0beec5281b39eabf4da1378"},{url:"assets/the()___ difference of docsor command reference .html-84027243.js",revision:"0e10791048d1e86b010bd6409b851f5b"},{url:"assets/vcode-plugins.html-7ded3a82.js",revision:"f8ffcead6a5987d96639ceca6e272397"},{url:"assets/vcode-plugins.html-bee299e8.js",revision:"3f2204ae8eb215001e5a8f436c468e24"},{url:"assets/vue-basic.html-27cfe4b9.js",revision:"23b772ee5a532dee08d8a9cf94cb9a23"},{url:"assets/vue-basic.html-28e0d8c1.js",revision:"8572bcf1b75a8134b3b965c47cb8b27a"},{url:"assets/布局模板.html-4a484271.js",revision:"1652274ba55482f5992918ae899f7961"},{url:"assets/布局模板.html-81aea28d.js",revision:"612a6f894134d18b4b37fdd48a96d08a"},{url:"assets/文章模板.html-2c516cd2.js",revision:"e032c1ee05037eda255a364aad95066b"},{url:"assets/文章模板.html-78a53f0e.js",revision:"86789e96b4f5d3a4be6b46ac19610541"},{url:"logo.svg",revision:"5230d77294040c33046b95d3df7a97ad"},{url:"404.html",revision:"34815e616d2e908419e02513d21dd162"},{url:"article/index.html",revision:"e28e2d6140cecec4a79830da4580611e"},{url:"blog/index.html",revision:"06e3fc96dffe68b40329da6bed4047e9"},{url:"blog/the()___ difference of docsor command reference .html",revision:"3bc96fdc90d4e7779368c55915f831c0"},{url:"category/index.html",revision:"8fd77c8e72c82ebe4110cda2e729b70a"},{url:"index.html",revision:"7d2174cb75187176bed98a10c0694d89"},{url:"project/c/08-c-pointer/01-c-pointer-introduce.html",revision:"3ca3eeb4a5b63c39c0e9f2825d6bff98"},{url:"project/c/08-c-pointer/02-c-pointer-variable.html",revision:"de75bcfe7a0b2db8334702210e7bb38f"},{url:"project/c/08-c-pointer/index.html",revision:"a91d6c6175ef7c8fe85b8388b85a6e74"},{url:"project/c/index.html",revision:"360edf1bc554976b0eeba4c456ac54be"},{url:"project/git/git-basic.html",revision:"cb741c87a592b245d4bb5bd4f8cb143e"},{url:"project/git/git-branch.html",revision:"1c753ec4c3992b3898de3ba13a80adc7"},{url:"project/git/git-chinese-translate.html",revision:"b7ad47c416692c2d16b1a981772a758c"},{url:"project/git/git-config-proxy.html",revision:"5d5ee1980e3b0f76d0beda3a494bb89d"},{url:"project/git/index.html",revision:"0ce1deef63e78c92884790adb30a2b3d"},{url:"project/index.html",revision:"88e66f9b58e4e0d2c527c4364e813652"},{url:"project/js/01-js-language-baisc/01-js-grammer.html",revision:"33fcdd2c43c6d48eba350b6da80fbc39"},{url:"project/js/01-js-language-baisc/03-js-variables.html",revision:"6e596b9791e606cfb4cd1622afef6d7f"},{url:"project/js/01-js-language-baisc/04-js-data-type.html",revision:"c75403e20ca58b1ca373c4f9c46c4b60"},{url:"project/js/01-js-language-baisc/index.html",revision:"eac49b63daf166df896f02f1e35b5b22"},{url:"project/js/02-js-variable-scoped-memory/01-origianal-variable-.html",revision:"9229ac94ce8239a7360de0f6a8c7f7c2"},{url:"project/js/02-js-variable-scoped-memory/index.html",revision:"1defe7c1f0f8bdb7eb3b8dec482b6de8"},{url:"project/js/26-js-moudle/es6-module.html",revision:"e21500288ea98a5c3586a7214c939362"},{url:"project/js/26-js-moudle/index.html",revision:"0b6a8ff76464e2218746684fab8c6683"},{url:"project/js/index.html",revision:"0cc6bb0b36c783af345d0987ddaa0172"},{url:"project/js/js-function/arrow-function.html",revision:"e0d75d310c0f331d67e046daed526bdf"},{url:"project/js/js-function/callback-functions.html",revision:"cff344705f4aad3ba34eedafa8ab8861"},{url:"project/js/js-function/index.html",revision:"b38a4a942231aaeabbaa646184a025cf"},{url:"project/js/js-obj-class-front-obj/index.html",revision:"6e75e949f8aa2bdab085c60f44022d1b"},{url:"project/js/js-obj-class-front-obj/js-basic.html",revision:"7fbd71a82bbd9228732871fae1b60d21"},{url:"project/nodejs/index.html",revision:"245bc36d5050b8eaf124846d6127b137"},{url:"project/nodejs/nodejs-introduction/event-driven-style-programming.html",revision:"4238de970cd4b076c140c57f6ea5365e"},{url:"project/nodejs/nodejs-introduction/index.html",revision:"5b83042e99cfcd4e6753c4956efe5c3b"},{url:"project/technology-site-collected/index.html",revision:"3efcd4498759e7917dedbbe81ee33280"},{url:"project/technology-site-collected/technology-site-collected.html",revision:"26cf8eb432a86ec47a2da176b103480e"},{url:"project/vscode/index.html",revision:"be979eec9275f2e03b75a09ac46a5801"},{url:"project/vscode/vcode-plugins.html",revision:"006f110eb7e5789de61b0f7b5c1c1a6b"},{url:"project/vue/index.html",revision:"f2867bb857daf8e2be4154db95dc8340"},{url:"project/vue/vue-basic.html",revision:"c0eed23a6da93b3ff052fc520568e809"},{url:"star/index.html",revision:"f97d26d67aa23cd04a58a36c206d5a70"},{url:"tag/index.html",revision:"942b4bbb44aae1f86dfad32e776c34ab"},{url:"timeline/index.html",revision:"c199d44e9357c1295f374890701ede6d"},{url:"布局模板.html",revision:"dfefd7fdf27efdb2d9067742cbf8ed3b"},{url:"文章模板.html",revision:"a930bc9e8d222544a2a38b988994e211"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/android-chrome-192x192.png",revision:"b6433fd5076640350a3513e6c1d19861"},{url:"assets/icon/android-chrome-512x512.png",revision:"b4927b054cb6684f0c7ff628c5fe6eb7"},{url:"assets/icon/apple-touch-icon.png",revision:"a9607609957e151c0f083f392fc5474a"},{url:"assets/icon/bak/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/bak/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/bak/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/bak/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/bak/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/bak/logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"},{url:"assets/icon/bak/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/icon/favicon-16x16.png",revision:"754bcfd774cfab23cfef8e4b56482d0f"},{url:"assets/icon/favicon-32x32.png",revision:"23e3f963d2c5b50a91c5113de6bdfad2"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"avatar.jpg",revision:"b95ccc51db8d8b13f873754b931ae83d"},{url:"bg.jpg",revision:"dada97c2582a8e8fdf8ba68398f3975f"},{url:"logo.png",revision:"b4927b054cb6684f0c7ff628c5fe6eb7"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
