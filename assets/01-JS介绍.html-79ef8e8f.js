import{_ as a,X as n,Y as s,a0 as t}from"./framework-5ccfa493.js";const e={},l=t(`<h1 id="javascript介绍" tabindex="-1"><a class="header-anchor" href="#javascript介绍" aria-hidden="true">#</a> JavaScript介绍</h1><p><strong>JavaScript</strong>是一种进行复杂交互及运算的客户端脚本语言，最初是由网景公司创建</p><p><strong>ECMAScript</strong>是指为了解决早期JavaScript发展的混乱性，因此由许多公司共同组成的委员会所起草的脚本语言标准ECMA-262所实现语言</p><h2 id="javascript构成" tabindex="-1"><a class="header-anchor" href="#javascript构成" aria-hidden="true">#</a> JavaScript构成</h2><p>JavaScript主要包含三部分构成</p><ul><li><code>ECMAScript</code></li><li><code>DOM</code> 文档对象模型</li><li><code>BOM</code> 浏览器对象模型</li></ul><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/20230218170151.png" alt="20230218170151"></p><h3 id="ecmascript" tabindex="-1"><a class="header-anchor" href="#ecmascript" aria-hidden="true">#</a> ECMAScript</h3><p><strong>ECMAScript</strong>是ECMA-262所实现语言，但是他没有输入和输出等方法。因此通常作为一种基准，浏览器只提供基于ECMAScript的宿主环境，该宿主环境通常扩展了一些内容<br> JavaScript实现了ECMAScript</p><p>通常其包含如下部分</p><ul><li>语法</li><li>类型</li><li>语句</li><li>关键字</li><li>保留字</li><li>操作符</li><li>全局对象</li></ul><p><strong>版本问题</strong> 我们通常将 ECMAScript和 ECMA-262等同，一个是实现一个是标准，我们常说的es5是指 ECMA-262标准的第五个版本，他的实现是 ECMAScript3.1</p><p>如何算<strong>实现ECMA-262标准</strong>，满足以下</p><ul><li>支持 ECMA-262 中描述的所有“类型、值、对象、属性、函数，以及程序语法与语义”；</li><li>支持 Unicode 字符标准</li><li>增加 ECMA-262 中未提及的“额外的类型、值、对象、属性和函数”。ECMA-262 所说的这些额外内容主要指规范中未给出的新对象或对象的新属性。</li><li>支持 ECMA-262 中没有定义的“程序和正则表达式语法”（意思是允许修改和扩展内置的正则表达式特性）</li></ul><p><strong>浏览器实现问题</strong> 并不是所有浏览器都支持最新ECMA标准，但是广泛支持的版本是ECAM5</p><h3 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h3><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/20230218160649.png" alt="20230218160649"></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span> 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span> 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Sample Page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span> 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span> 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span> 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Hello World!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span> 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DOM是指<code>文档对象模型</code>Document Object Model,是由多个层级节点构成的文档，可以对其进行增加、删除、修改等等操作，是HTML和XML编程的接口</p><p>DOM的出现是为了<code>解决</code>微软和网景公司开发的不同DHTML标准所带来的不一致性，因此由W3C牵头制定了DOM标准</p><p><code>DOM级别</code>，即W3C所发布的DOM的版本。<code>DOM Level 1</code>是最初的标准，主要包含如下部分</p><ul><li><code>DOM Core</code> 即定义了一种映射XML方法，可以方便访问和操作文档</li><li><code>DOM HTML</code> 在上面的基础上，扩展了一些HTML的对象和方法</li></ul><p><code>DOM Level 2</code>包含如下内容</p><ul><li>DOM 视图：描述追踪文档不同视图（如应用 CSS 样式前后的文档）的接口。</li><li>DOM 事件：描述事件及事件处理的接口。</li><li>DOM 样式：描述处理元素 CSS 样式的接口。</li><li>DOM 遍历和范围：描述遍历和操作 DOM 树的接口。</li></ul><p>此外还有<code>DOM Level 3和4</code></p><p>关于浏览器对 <strong>兼容性</strong>，DOM2已经广泛兼容，可以查询</p><h3 id="bom" tabindex="-1"><a class="header-anchor" href="#bom" aria-hidden="true">#</a> BOM</h3><p><strong>BOM</strong>是指浏览器对象模型，用于访问和操作浏览器的接口，例如浏览器窗口。关于BOM标准JavaScript并没有给出标准，因此每个浏览器都有自己的一套标准，但是随着HTML5的出现许多问题得到解决</p><p>我们所说BOM是指浏览器窗口和子窗口，但是通常以下也算作BOM的扩展</p><ul><li>弹出新浏览器窗口的能力；</li><li>移动、缩放和关闭浏览器窗口的能力；</li><li>navigator 对象，提供关于浏览器的详尽信息；</li><li>location 对象，提供浏览器加载页面的详尽信息；</li><li>screen 对象，提供关于用户屏幕分辨率的详尽信息；</li><li>performance 对象，提供浏览器内存占用、导航行为和时间统计的详尽信息；</li><li>对 cookie 的支持；</li><li>其他自定义对象，如 XMLHttpRequest 和 IE 的 ActiveXObject。</li></ul>`,30),i=[l];function p(c,o){return n(),s("div",null,i)}const d=a(e,[["render",p],["__file","01-JS介绍.html.vue"]]);export{d as default};
