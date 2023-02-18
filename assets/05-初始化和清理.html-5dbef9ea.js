import{_ as n,X as s,Y as a,a0 as e}from"./framework-5ccfa493.js";const t={},c=e(`<h1 id="java初始化和清理" tabindex="-1"><a class="header-anchor" href="#java初始化和清理" aria-hidden="true">#</a> Java初始化和清理</h1><h2 id="构造器初始化" tabindex="-1"><a class="header-anchor" href="#构造器初始化" aria-hidden="true">#</a> 构造器初始化</h2><p>Java中类使用构造器来进行对象初始化，从而避免因为忘记初始化而导致的问题，如下所示</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 构造器</span>
    <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 初始化对象</span>
<span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>构造器</strong>是一类特殊的方法，其没有任何返回值,<strong>构造器要求</strong>其方法名必须是与类名相同<br><strong>默认构造器</strong>是指没有任何参数的构造器，如上所示</p><h2 id="方法重载" tabindex="-1"><a class="header-anchor" href="#方法重载" aria-hidden="true">#</a> 方法重载</h2><p>理解方法重载，首先要明白方法是什么，例如一个动作就是一个方法，如清洗车辆</p><p>理解方法重载可以从上面，构造器这一个特殊的方法，构造器方法要求同类的名字一致，因此如果需要多个构造器方法时，我们可以通过构造器的<code>参数类型</code>、<code>参数个数</code>、<code>参数顺序</code>来区分不同的构造器，这就叫做<code>方法重载</code>，同理普通的方法也有此用法，如下例所示</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 构造器</span>
    <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    <span class="token comment">// 构造器方法重载</span>
    <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    <span class="token comment">// 普通方法重载</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 初始化对象</span>
<span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数类型提升问题" tabindex="-1"><a class="header-anchor" href="#参数类型提升问题" aria-hidden="true">#</a> 参数类型提升问题</h3><p><strong>参数类型提升</strong>是指当方法的形参类型大于实参类型，那么会自动提升成形参类型</p><p>NF</p>`,12),p=[c];function i(o,l){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","05-初始化和清理.html.vue"]]);export{d as default};
