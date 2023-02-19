import{_ as n,X as s,Y as a,a1 as e}from"./framework-ca96282b.js";const t={},c=e(`<h1 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体" aria-hidden="true">#</a> 结构体</h1><p>结构体是指将不同数据类型组合起来的新的数据类型</p><h2 id="类型的定义和变量声明" tabindex="-1"><a class="header-anchor" href="#类型的定义和变量声明" aria-hidden="true">#</a> 类型的定义和变量声明</h2><h3 id="先定义后声明" tabindex="-1"><a class="header-anchor" href="#先定义后声明" aria-hidden="true">#</a> 先定义后声明</h3><p>这里的先定义是指先定义新的结构体类型，后使用该类型声明变量</p><p>定义的基本格式</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> 新结构名字<span class="token punctuation">{</span>
    成员变量
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>声明的基本格式</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> 结构体的名字 变量名<span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span>

<span class="token keyword">struct</span> <span class="token class-name">Student</span> s1<span class="token punctuation">,</span>s2<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义和声明同时" tabindex="-1"><a class="header-anchor" href="#定义和声明同时" aria-hidden="true">#</a> 定义和声明同时</h3><p>基本格式</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> 结构体变量名<span class="token punctuation">{</span>
    参数列表
<span class="token punctuation">}</span>变量名列表<span class="token punctuation">;</span>


<span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无名定义" tabindex="-1"><a class="header-anchor" href="#无名定义" aria-hidden="true">#</a> 无名定义</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>变量名列表<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体变量的初始化" tabindex="-1"><a class="header-anchor" href="#结构体变量的初始化" aria-hidden="true">#</a> 结构体变量的初始化</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> 结构体变量名<span class="token punctuation">{</span>
    参数列表
<span class="token punctuation">}</span>变量<span class="token number">1</span><span class="token operator">=</span><span class="token punctuation">{</span>赋值列表<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>s1<span class="token operator">=</span><span class="token punctuation">{</span><span class="token char">&#39;Tom&#39;</span><span class="token punctuation">,</span><span class="token number">17</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述是要进行全部初始化，如果要进行单一赋值，可以如下 <code>struct Student s1 = {.age = 17}</code></p><p>NF</p>`,18),i=[c];function p(l,d){return s(),a("div",null,i)}const o=n(t,[["render",p],["__file","结构体.html.vue"]]);export{o as default};
