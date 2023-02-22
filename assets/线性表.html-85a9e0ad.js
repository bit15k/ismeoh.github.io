import{_ as n,X as s,Y as a,a1 as e}from"./framework-ca96282b.js";const t={},p=e(`<h1 id="线性表" tabindex="-1"><a class="header-anchor" href="#线性表" aria-hidden="true">#</a> 线性表</h1><h2 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h2><h3 id="插入算法" tabindex="-1"><a class="header-anchor" href="#插入算法" aria-hidden="true">#</a> 插入算法</h3><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/线性表-2023-02-22-22-48-22.png" alt="线性表-2023-02-22-22-48-22"></p><p>代码实现</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
 * @brief 插入元素到线性表某个位置
 * @param l 线性表引用
 * @param i 位置
 * @param e 元素
 * @return 0或1
 */</span>
Status <span class="token function">listInsertSq</span><span class="token punctuation">(</span>SqList <span class="token operator">&amp;</span>l<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">,</span>ElemType e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 如果插入的位置小于1 或 插入位置大于线性表长度 报错</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> i <span class="token operator">&gt;</span> l<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果线性表的长度超过最大长度 报错</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>length <span class="token operator">==</span> MAXSIZE<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> l<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> i<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        l<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> l<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    l<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
    l<span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> OK<span class="token punctuation">;</span>

<span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>NF</p>`,7),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","线性表.html.vue"]]);export{r as default};
