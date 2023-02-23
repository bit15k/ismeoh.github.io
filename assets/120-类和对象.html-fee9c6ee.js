import{_ as n,X as s,Y as a,a1 as e}from"./framework-ca96282b.js";const t={},i=e(`<h1 id="类和对象" tabindex="-1"><a class="header-anchor" href="#类和对象" aria-hidden="true">#</a> 类和对象</h1><p>以人类引出对象和类的概念，我们所说人类就是一个类，具体到每个人就是对象，同样对于其他，比如狗也是一个类，但是具体到每条狗就是一个对象。不难看出，人来是一个抽象的概念，它定义了什么算是一个人，每个人就是具体的，每个人都体现了人类这一特征</p><p>因此，<strong>类</strong>是具有一批相同特征和共性的对象，这一晦涩的概念就好懂了。我们所说类是抽象的，<strong>对象</strong>是具体的，<strong>类是对象的抽象，抽象是类的具体实现</strong>也好理解了</p><h2 id="声明类" tabindex="-1"><a class="header-anchor" href="#声明类" aria-hidden="true">#</a> 声明类</h2><p>那么如何声明一个类？<br> 类的声明格式</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>class 类名<span class="token punctuation">{</span>
    访问限定符<span class="token operator">:</span>
        成员函数和成员变量
    访问限定符<span class="token operator">:</span>
        成员函数和成员变量
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>

例如
class Dog<span class="token punctuation">{</span>
    public<span class="token operator">:</span>
        String name<span class="token punctuation">;</span>
        <span class="token keyword">void</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;hi&quot;</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述可以归纳为</p><ul><li><code>class 类名</code> 表示 <strong>类头</strong></li><li><code>{ }</code>部分表示 <strong>类体</strong></li><li>类体里面有成员函数和成员变量，同时还包括 <strong>访问限定符</strong></li></ul><h2 id="访问限定符" tabindex="-1"><a class="header-anchor" href="#访问限定符" aria-hidden="true">#</a> 访问限定符</h2><p>上面所说的访问限定符是什么作用，我们所说类通常具有隐蔽性，即将成员变量隐藏起来，外部无法访问，但是可以通过成员函数对外暴露，成员函数或成员变量是否暴露是通过访问限定符来确定的，主要分为</p><ul><li>private</li><li>public</li><li>protest</li></ul><p><strong>private</strong>表示是默认的访问符，即不写的话就是private，其表示私有的，只能被本类所使用<br><strong>public</strong>表示公有的<br><strong>protest</strong>表示受保护的，其不能被类外访问，但是可以被其派生类访问</p>`,12),l=[i];function o(c,p){return s(),a("div",null,l)}const d=n(t,[["render",o],["__file","120-类和对象.html.vue"]]);export{d as default};
