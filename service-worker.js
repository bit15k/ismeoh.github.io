if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const b=e=>a(e,d),t={module:{uri:d},exports:r,require:b};s[d]=Promise.all(c.map((e=>t[e]||b(e)))).then((e=>(i(...e),r)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/01-c-pointer-introduce.html-9900d176.js",revision:"36b23dbebcd16e4c38204c318e0b7fd2"},{url:"assets/01-c-pointer-introduce.html-f6143465.js",revision:"0a5eb97a4e4113e20770271260b68f76"},{url:"assets/01-cpp-datatype.html-81d2a4e0.js",revision:"c6ce3711949ad47228c3b1924cdfe5d7"},{url:"assets/01-cpp-datatype.html-94f006f0.js",revision:"a306aa5a48cbb319c79993ed53789c11"},{url:"assets/01-js-grammer.html-a3ad859e.js",revision:"c9bb875ebdb6ad51ad1466ff7ce788ce"},{url:"assets/01-js-grammer.html-d737d12c.js",revision:"54062704b2d32e2af0a7811f64e6526c"},{url:"assets/01-origianal-variable-.html-a2672ac7.js",revision:"b632b2fecc91f51e72a281231fb3b3a6"},{url:"assets/01-origianal-variable-.html-b5c403f0.js",revision:"e8ccb7671bf783e7fcca01c659b3fedc"},{url:"assets/02-c-pointer-variable.html-750a33de.js",revision:"308945b2719b21087af14c7c8eb1866f"},{url:"assets/02-c-pointer-variable.html-9caf44cc.js",revision:"19d2f21f4eaee77fb606dc80bcca4e8d"},{url:"assets/02-cpp-constants.html-28de72d1.js",revision:"271f214be0819745b0b1de40dbe130ed"},{url:"assets/02-cpp-constants.html-d8d754e3.js",revision:"97ccedafcc106f87a3309d45d0623ce2"},{url:"assets/03-js-variables.html-413d7c77.js",revision:"32e4f8917833a58f78004823bf9e469c"},{url:"assets/03-js-variables.html-d95d7f20.js",revision:"ca3ed1043450ce371b0e8bca210cea52"},{url:"assets/04-js-data-type.html-6477fd93.js",revision:"abc6f37b6e257e1a5a20d2af394b08f5"},{url:"assets/04-js-data-type.html-8b8804f2.js",revision:"5eb6ed1e99fd13800d55032d41a29fa4"},{url:"assets/404.html-3a04fa52.js",revision:"5b8f53e536685311ef45ad919072b40b"},{url:"assets/404.html-a202f78d.js",revision:"67878ca83c076f3a0bb6491b598c45b8"},{url:"assets/app-789b44ce.js",revision:"9701f0ce2b08af916c588c265f5f8c3c"},{url:"assets/arrow-function.html-16a459df.js",revision:"b6a8c1d1548121868fc26253f310a1d0"},{url:"assets/arrow-function.html-3bd3e676.js",revision:"44afb5ee8d4f87e6875104f73628c770"},{url:"assets/callback-functions.html-5c66e49c.js",revision:"acbedc67226ca4174c1649ddad530271"},{url:"assets/callback-functions.html-9cb2f500.js",revision:"324e93c1a0fc58b9e16815ea81ff645a"},{url:"assets/cpp-introduce.html-8ab1a9b4.js",revision:"8d25bf1201172e2122dad4615551347a"},{url:"assets/cpp-introduce.html-e8ae8a3a.js",revision:"76596552f74a7210c7f263e8082d3e07"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/es6-module.html-94eb9c42.js",revision:"a3b817b4d00dcf92567d32ff683af9e5"},{url:"assets/es6-module.html-f32cf43a.js",revision:"6b9c9cfcef7aaf30da4178644faf1c0c"},{url:"assets/event-driven-style-programming.html-44797a9c.js",revision:"ea5507bd1b0440ba7d37d2c4b04d4ab5"},{url:"assets/event-driven-style-programming.html-d8e716f8.js",revision:"83b563191d2e936f44349b115341de3c"},{url:"assets/framework-7c93dcdd.js",revision:"908e54dd0dfe97cbe2648357be796cb9"},{url:"assets/giscus-6650c2d9.js",revision:"282a7cb29f6aabbebb5de1c42a089f2c"},{url:"assets/git-basic.html-13eb58e8.js",revision:"52a327216cb20f9f0803daa18538e9dc"},{url:"assets/git-basic.html-2b7a4700.js",revision:"37656e8ab3eb8c1497b048ce0e49f41d"},{url:"assets/git-branch.html-4241ce64.js",revision:"3a34ae5628acdd34e53d32da007646cf"},{url:"assets/git-branch.html-4b123e5d.js",revision:"5e50a3b385fc45dfa93d55d3c5f9bbfb"},{url:"assets/git-chinese-translate.html-62debf1a.js",revision:"ca6f48ec9169621f9932ae0fe02bf39e"},{url:"assets/git-chinese-translate.html-667820c9.js",revision:"a6778294211c46fca92c8f717f982296"},{url:"assets/git-config-proxy.html-b6a72244.js",revision:"0edea0a7d8ff020784489da9e9b72fd8"},{url:"assets/git-config-proxy.html-f891e59d.js",revision:"9da191471d3df4d71254af4559d7618d"},{url:"assets/icon/bak/logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-02787909.js",revision:"e43127c6e73c8f2dde47614c73753dcd"},{url:"assets/index.html-03f0072c.js",revision:"3d8899cdeee13a79781c71420e44520f"},{url:"assets/index.html-064391c7.js",revision:"6b6da5a86b884210a21bafecdc576e60"},{url:"assets/index.html-08b513e2.js",revision:"6659ef2741ebfacb8afa5833c5731948"},{url:"assets/index.html-0d29149d.js",revision:"72f3544d8e2820d708ba3a995c01b6d8"},{url:"assets/index.html-0d67003f.js",revision:"6278ba6684c749def22f8bc49b16d671"},{url:"assets/index.html-11815783.js",revision:"514c863ae080b7a9c77a362b9b7725a1"},{url:"assets/index.html-192a688b.js",revision:"fc6445b6ed649f6ef74a2ba3b1c388d4"},{url:"assets/index.html-1d90605d.js",revision:"e6a8372a4ef88f4a10fda471e8b3e5b3"},{url:"assets/index.html-2d70d12f.js",revision:"b218d2793a1f838a3d25cce7e1aab53e"},{url:"assets/index.html-2f0e2772.js",revision:"08e59af7ae8e62497cb28479b7c2f5fa"},{url:"assets/index.html-32265839.js",revision:"cc46df535b4a547f96615495f391c0c6"},{url:"assets/index.html-382e665b.js",revision:"6278ba6684c749def22f8bc49b16d671"},{url:"assets/index.html-3c21fcc1.js",revision:"fefdbf199429826a0f128809662406cd"},{url:"assets/index.html-3cca27c9.js",revision:"90a5dcee77095307566446dbc409b505"},{url:"assets/index.html-3d2c9683.js",revision:"fa4f70052b40e20038efc530bb1f09c1"},{url:"assets/index.html-3d31268a.js",revision:"2d003cb25b4cd5f10e63c3414fe9e584"},{url:"assets/index.html-55fa55e1.js",revision:"52de7d94d07a10bdc3c14b8b72a9608c"},{url:"assets/index.html-564923aa.js",revision:"a60dd9baeeb38a1badab4a3864deaf5a"},{url:"assets/index.html-5b9e4115.js",revision:"6e08652864154a5cc9358264008e0ab1"},{url:"assets/index.html-5f378126.js",revision:"554389d995432a37a7f6a44cd56ffa4a"},{url:"assets/index.html-5f81cc2b.js",revision:"48feebd147884a1ffc278de92682da39"},{url:"assets/index.html-60aa903b.js",revision:"4ad13d55abb157b2564fa9e2e06fd5e7"},{url:"assets/index.html-64e4f160.js",revision:"b020f952b7b71bd192770feaf885c3d7"},{url:"assets/index.html-6538a909.js",revision:"f082c788a875d3fe1c1c22bf35543e6c"},{url:"assets/index.html-687d2c9a.js",revision:"fa4f70052b40e20038efc530bb1f09c1"},{url:"assets/index.html-69ea4bb9.js",revision:"6278ba6684c749def22f8bc49b16d671"},{url:"assets/index.html-79c4fc61.js",revision:"6278ba6684c749def22f8bc49b16d671"},{url:"assets/index.html-7c97bcd3.js",revision:"8cf4ed81e24a847e85ea0a030bdf3c9c"},{url:"assets/index.html-7da874cf.js",revision:"6050fb62694ade17b9af91a57be8f6cf"},{url:"assets/index.html-85ac3fb8.js",revision:"756fe1b8da3eff40cb9f620484dd09b8"},{url:"assets/index.html-8764b236.js",revision:"b8dc0f2fb0e2c7ad7fec162d7d9945d6"},{url:"assets/index.html-90ba3ed5.js",revision:"554389d995432a37a7f6a44cd56ffa4a"},{url:"assets/index.html-90ea17b0.js",revision:"2876775485d3124721e38745e2f0285d"},{url:"assets/index.html-93ac53ac.js",revision:"6278ba6684c749def22f8bc49b16d671"},{url:"assets/index.html-9e6ef565.js",revision:"fbf937885cc477d9496d2c4a3673922a"},{url:"assets/index.html-a89a61fc.js",revision:"e8a7dc87c7f6774a2e280fac2e74968e"},{url:"assets/index.html-b09ae162.js",revision:"b0a9a824fa588f9ea3b28c280f9e8c47"},{url:"assets/index.html-b48358fe.js",revision:"baa1cee098646307dbc6f6248c104bd9"},{url:"assets/index.html-b808a0aa.js",revision:"6278ba6684c749def22f8bc49b16d671"},{url:"assets/index.html-be76b98e.js",revision:"89178cd4933169c3772d47a367270afc"},{url:"assets/index.html-c4a3dc91.js",revision:"27dd83c8f4a527a40323bdb9c261ebe2"},{url:"assets/index.html-c70d2d89.js",revision:"772363f79410636b5f3056809cee87bc"},{url:"assets/index.html-d040b0fd.js",revision:"cade85f241ff4efe0472a4ef395c9817"},{url:"assets/index.html-e50f3c66.js",revision:"1aee0098706e22669cce13da0acb2d86"},{url:"assets/index.html-ec99924d.js",revision:"58512733958117b1abb4aac1302065f2"},{url:"assets/index.html-ecd93874.js",revision:"53de7afb6a5c9fd287037d16cbd7a24b"},{url:"assets/index.html-f0a8050e.js",revision:"02d238bf9df725d7687a64ea7e861eca"},{url:"assets/index.html-f150c62f.js",revision:"e158294910116305ff8c0d045d66124b"},{url:"assets/index.html-f6d04fff.js",revision:"5c0ba148bb02eacff6def0fe8977cffa"},{url:"assets/index.html-f8d69314.js",revision:"a85d9f6645f2445ca413bad7310c7efb"},{url:"assets/index.html-f9892150.js",revision:"bc93474cc512f35a696d894792f3a8f8"},{url:"assets/js-basic.html-157b86f5.js",revision:"3930fb3af492b7485f24adca26b2cbaa"},{url:"assets/js-basic.html-80752175.js",revision:"b065bb1c640cac018833dd9c887d6cf1"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/style-ffaa6bcb.css",revision:"21f2896b64a4c619644cb9c5f400e18d"},{url:"assets/technology-site-collected.html-660f8c5e.js",revision:"6a6249f1766ca358819e982d69d7a01e"},{url:"assets/technology-site-collected.html-b7843695.js",revision:"50a32d17d02ab6fffda53b8fd4b03634"},{url:"assets/the()___ difference of docsor command reference .html-3f480196.js",revision:"3086c586a0beec5281b39eabf4da1378"},{url:"assets/the()___ difference of docsor command reference .html-bf5bed01.js",revision:"a275104761d198ae1bdc6c9aebbff30d"},{url:"assets/vcode-plugins.html-7de4f4a5.js",revision:"8cc71ff8ab431765933a3ec066a3c3c9"},{url:"assets/vcode-plugins.html-bee299e8.js",revision:"3f2204ae8eb215001e5a8f436c468e24"},{url:"assets/vue-basic.html-27cfe4b9.js",revision:"23b772ee5a532dee08d8a9cf94cb9a23"},{url:"assets/vue-basic.html-c3678bc2.js",revision:"f2f1d2a4ac6c5e576969984b9b201ac3"},{url:"assets/布局模板.html-10485331.js",revision:"4e15808443a62e71f0b897d668205a9f"},{url:"assets/布局模板.html-4a484271.js",revision:"1652274ba55482f5992918ae899f7961"},{url:"assets/文章模板.html-78a53f0e.js",revision:"86789e96b4f5d3a4be6b46ac19610541"},{url:"assets/文章模板.html-fc430a3b.js",revision:"22d62547a8dfc343fd4ec5a985c2a312"},{url:"logo.svg",revision:"5230d77294040c33046b95d3df7a97ad"},{url:"404.html",revision:"baeac2c520d5b9e1f3a5845c0b1482b9"},{url:"article/index.html",revision:"801f5e23eb995541691077e68a699976"},{url:"blog/index.html",revision:"1a2e35211856bdd3c6a2fa2370357808"},{url:"blog/the()___ difference of docsor command reference .html",revision:"9f9d090e363a3c2abfcab9a27dde007e"},{url:"category/index.html",revision:"859641f0d8e7639442c769b428c0b9b0"},{url:"index.html",revision:"35d848e95817a5ad990a2266b414d302"},{url:"project/c/08-c-pointer/01-c-pointer-introduce.html",revision:"f9b54f34738fd76c01b1bdc11a6574ac"},{url:"project/c/08-c-pointer/02-c-pointer-variable.html",revision:"a42952627638380b8ebfed8df8f1e9e9"},{url:"project/c/08-c-pointer/index.html",revision:"a6fab2a71619c89bd87c52edd65d4b43"},{url:"project/c/09-custom-data-type/index.html",revision:"3e478fafb29af8c741a40710df74547a"},{url:"project/c/index.html",revision:"1e7e38e41a012b7eacafab811c1d69a6"},{url:"project/cpp/01-cpp-introduce/cpp-introduce.html",revision:"aa00057307ac44e1d60b04061f6f7a4b"},{url:"project/cpp/01-cpp-introduce/index.html",revision:"d614b900d12597be02661b7e72daf251"},{url:"project/cpp/02-cpp-datatype-and-expression/01-cpp-datatype.html",revision:"6eec15677259cea557a9c56ad9c22cb4"},{url:"project/cpp/02-cpp-datatype-and-expression/02-cpp-constants.html",revision:"6ad5f14ebf27d1e6b9f7aa38aeb00a66"},{url:"project/cpp/02-cpp-datatype-and-expression/index.html",revision:"91c4a43e1d40de45d76b336e19dd8ec7"},{url:"project/cpp/index.html",revision:"2c684b6e4e40a91064ba8a44a4c4cc0e"},{url:"project/git/git-basic.html",revision:"b8cf139581845763c1dc996b929245b1"},{url:"project/git/git-branch.html",revision:"f5cb8cd18ab282b39913ac241d31eb10"},{url:"project/git/git-chinese-translate.html",revision:"bfdb45ac7a55fc449ace612df0dfae11"},{url:"project/git/git-config-proxy.html",revision:"246a7bb6d78363ad6c66c82533bbce5b"},{url:"project/git/index.html",revision:"4b3ebe0f9bd7e1baa3671ddb6cc41662"},{url:"project/index.html",revision:"0f125ba34a34e5a854f32439a20eb840"},{url:"project/js/01-js-language-baisc/01-js-grammer.html",revision:"46cbe36bb801e3bc8b6e44a28ce4ef32"},{url:"project/js/01-js-language-baisc/03-js-variables.html",revision:"c0e1474711d1ceb36c7851e87850f436"},{url:"project/js/01-js-language-baisc/04-js-data-type.html",revision:"9ded4b74b3ee30af53163881cf69c744"},{url:"project/js/01-js-language-baisc/index.html",revision:"6762f4ac07601b17ae2065869b97c4ff"},{url:"project/js/02-js-variable-scoped-memory/01-origianal-variable-.html",revision:"a6ef00d129d7d21b21b09fb7dfd235d2"},{url:"project/js/02-js-variable-scoped-memory/index.html",revision:"01a3520a8348cb50dbc1bb85526d3158"},{url:"project/js/26-js-moudle/es6-module.html",revision:"4512b5a045a018c862af3dfa736df208"},{url:"project/js/26-js-moudle/index.html",revision:"0c0be4227501cc9698ba8aa9ad4dc51b"},{url:"project/js/index.html",revision:"357b421a346278d7b2f8977fa16755bc"},{url:"project/js/js-function/arrow-function.html",revision:"b0ca7ddfcd8951c176953511bf32323d"},{url:"project/js/js-function/callback-functions.html",revision:"42bb7c43b77cbf1792c6ca5822952988"},{url:"project/js/js-function/index.html",revision:"cad902723bf1f5ca61d865a3a2f90131"},{url:"project/js/js-obj-class-front-obj/index.html",revision:"a1967b2aa53fdf29ed4b2754c94ad89c"},{url:"project/js/js-obj-class-front-obj/js-basic.html",revision:"e42a554236a8081a2a34f7ef241ce0d5"},{url:"project/nodejs/index.html",revision:"a64d63f697bfe129b4ecbacc5510a42a"},{url:"project/nodejs/nodejs-introduction/event-driven-style-programming.html",revision:"cd2740e439929a199e3badcc36dfadad"},{url:"project/nodejs/nodejs-introduction/index.html",revision:"bd5a24d72d80d45359051f1d861bf0dc"},{url:"project/technology-site-collected/index.html",revision:"dbf5faa27b92a403d2c365fad3a3adfa"},{url:"project/technology-site-collected/technology-site-collected.html",revision:"74432429de9e3fda6a2efb3f540cf9e1"},{url:"project/vscode/index.html",revision:"f7ed5d9abfe5c251c756ecd7b6934cb5"},{url:"project/vscode/vcode-plugins.html",revision:"1f3d3a79d7f5d0c3bf2d97875637cc49"},{url:"project/vue/index.html",revision:"f19ec69512644d0f2e3f08dfcc447027"},{url:"project/vue/vue-basic.html",revision:"8149770eeaa2e4711e7fc0d591e71e9a"},{url:"star/index.html",revision:"b124d580c580370e96c7c779c7d25202"},{url:"tag/index.html",revision:"f5d9cdaf4890902ea4a8992b06be838a"},{url:"timeline/index.html",revision:"2359079d957626c304e5a3beebd858cb"},{url:"布局模板.html",revision:"04dacb90a8deba11cebdb8b0077742c4"},{url:"文章模板.html",revision:"2a34d57b00295742301f368f1602fbbb"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/android-chrome-192x192.png",revision:"b6433fd5076640350a3513e6c1d19861"},{url:"assets/icon/android-chrome-512x512.png",revision:"b4927b054cb6684f0c7ff628c5fe6eb7"},{url:"assets/icon/apple-touch-icon.png",revision:"a9607609957e151c0f083f392fc5474a"},{url:"assets/icon/bak/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/bak/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/bak/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/bak/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/bak/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/bak/logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"},{url:"assets/icon/bak/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/icon/favicon-16x16.png",revision:"754bcfd774cfab23cfef8e4b56482d0f"},{url:"assets/icon/favicon-32x32.png",revision:"23e3f963d2c5b50a91c5113de6bdfad2"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"avatar.jpg",revision:"b95ccc51db8d8b13f873754b931ae83d"},{url:"bg.jpg",revision:"dada97c2582a8e8fdf8ba68398f3975f"},{url:"logo.png",revision:"b4927b054cb6684f0c7ff628c5fe6eb7"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
