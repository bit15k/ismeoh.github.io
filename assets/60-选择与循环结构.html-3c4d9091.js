import{_ as n,X as e,Y as a,a1 as s}from"./framework-ca96282b.js";const i={},d=s(`<h1 id="选择与循环结构" tabindex="-1"><a class="header-anchor" href="#选择与循环结构" aria-hidden="true">#</a> 选择与循环结构</h1><h2 id="选择结构" tabindex="-1"><a class="header-anchor" href="#选择结构" aria-hidden="true">#</a> 选择结构</h2><p>选择结构的实现主要有if语句和switch语句</p><h3 id="if语句" tabindex="-1"><a class="header-anchor" href="#if语句" aria-hidden="true">#</a> if语句</h3><p>基本格式</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>if()
    ...
else if()

else

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面else if可以有多个也可没有,else如果用只有一个</p><h3 id="switch语句" tabindex="-1"><a class="header-anchor" href="#switch语句" aria-hidden="true">#</a> switch语句</h3><p>基本格式</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>switch(表达式):
    case 常量表达式:语句1;
    ...
    ...
    default: 语句;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环结构" tabindex="-1"><a class="header-anchor" href="#循环结构" aria-hidden="true">#</a> 循环结构</h2><p>实现循环结构的有</p><ul><li>while/do while</li><li>for</li></ul><h3 id="while-do-while语句" tabindex="-1"><a class="header-anchor" href="#while-do-while语句" aria-hidden="true">#</a> while/do while语句</h3><p>基本语法</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">do</span>
 语句
<span class="token keyword">while</span><span class="token punctuation">(</span>表达式<span class="token punctuation">)</span>
    语句

<span class="token operator">--</span><span class="token operator">-</span>

<span class="token keyword">while</span><span class="token punctuation">(</span>表达式<span class="token punctuation">)</span>
    语句


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for语句" tabindex="-1"><a class="header-anchor" href="#for语句" aria-hidden="true">#</a> for语句</h3><p>基本语法</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">for</span><span class="token punctuation">(</span>表达式<span class="token number">1</span><span class="token punctuation">;</span>表达式<span class="token number">2</span><span class="token punctuation">;</span>表达式<span class="token number">3</span><span class="token punctuation">)</span>
    语句

<span class="token keyword">for</span><span class="token punctuation">(</span>循环变量赋初值<span class="token punctuation">;</span>循环条件<span class="token punctuation">;</span>循环变量递增<span class="token punctuation">)</span>
    语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>顺序是表达式1-&gt;表达式2-&gt;语句-&gt;表达式3</p><p>表达式1可以省略后分号不能省略，表达式2省略表示为永恒真</p><p>三个表达式都不写，只写成<code>for(;;)</code>表示无限循环</p><h3 id="break和continue语句" tabindex="-1"><a class="header-anchor" href="#break和continue语句" aria-hidden="true">#</a> break和continue语句</h3><p>break表示提取终止循环，continue表示提前跳出本次循环</p>`,24),l=[d];function c(r,t){return e(),a("div",null,l)}const u=n(i,[["render",c],["__file","60-选择与循环结构.html.vue"]]);export{u as default};
