import{_ as n,W as s,X as a,a0 as e}from"./framework-0a321081.js";const p={},t=e(`<h1 id="线性表" tabindex="-1"><a class="header-anchor" href="#线性表" aria-hidden="true">#</a> 线性表</h1><h2 id="顺序表" tabindex="-1"><a class="header-anchor" href="#顺序表" aria-hidden="true">#</a> 顺序表</h2><h3 id="顺序表定义" tabindex="-1"><a class="header-anchor" href="#顺序表定义" aria-hidden="true">#</a> 顺序表定义</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
  ******************************************************************************
  * @file           : SqlList.h
  * @author         : ismeoh
  * @brief          : 线性表头文件
  ******************************************************************************
  */</span>
<span class="token comment">// 使用命名空间</span>
using namespace std<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token comment">// 定义状态码</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">TRUE</span> <span class="token expression"><span class="token number">1</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">FALSE</span> <span class="token expression"><span class="token number">0</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OK</span> <span class="token expression"><span class="token number">1</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">ERROR</span> <span class="token expression"><span class="token number">0</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">INFEASIBLE</span> <span class="token expression"><span class="token operator">-</span><span class="token number">1</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">OVERFLOW</span> <span class="token expression"><span class="token operator">-</span><span class="token number">2</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAXSIZE</span> <span class="token expression"><span class="token number">100</span></span><span class="token comment">//最大长度</span></span>
<span class="token comment">// 定义别名</span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> Status<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">char</span> ElemType<span class="token punctuation">;</span>
<span class="token comment">// 线性表结构体定义</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">SqList</span> <span class="token punctuation">{</span>

    ElemType<span class="token operator">*</span> elem<span class="token punctuation">;</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span>

<span class="token punctuation">}</span>SqList<span class="token punctuation">;</span>
<span class="token comment">// 函数原型声明</span>
Status <span class="token function">initList_Sq</span><span class="token punctuation">(</span>SqList <span class="token operator">&amp;</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="顺序表插入元素" tabindex="-1"><a class="header-anchor" href="#顺序表插入元素" aria-hidden="true">#</a> 顺序表插入元素</h3><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/线性表-2023-02-22-22-48-22.png" alt="线性表-2023-02-22-22-48-22"></p><p>代码实现</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
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



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="顺序表删除元素" tabindex="-1"><a class="header-anchor" href="#顺序表删除元素" aria-hidden="true">#</a> 顺序表删除元素</h2><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/线性表-2023-02-23-23-27-12.png" alt="线性表-2023-02-23-23-27-12"></p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他基础操作" tabindex="-1"><a class="header-anchor" href="#其他基础操作" aria-hidden="true">#</a> 其他基础操作</h3><ul><li>顺序表初始化</li><li>顺序表销毁</li><li>顺序表清空</li><li>顺序表获取长度</li><li>顺序表判空</li><li>顺序表获取某位置元素</li><li>顺序表值查找</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>Status <span class="token function">initList_Sq</span><span class="token punctuation">(</span>SqList<span class="token operator">&amp;</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    l<span class="token punctuation">.</span>elem <span class="token operator">=</span> new <span class="token function">ElemType</span><span class="token punctuation">(</span>MAXSIZE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>l<span class="token punctuation">.</span>elem<span class="token punctuation">)</span>
        <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    l<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> OK<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @brief 销毁线性表
 * @param l 线性表引用
 */</span>
<span class="token keyword">void</span> <span class="token function">destoryList</span><span class="token punctuation">(</span>SqList<span class="token operator">&amp;</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l<span class="token punctuation">.</span>elem<span class="token punctuation">)</span>
        delete l<span class="token punctuation">.</span>elem<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @brief 清空线性表
 * @param l 线性表引用
 */</span>
<span class="token keyword">void</span> <span class="token function">clearList</span><span class="token punctuation">(</span>SqList<span class="token operator">&amp;</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    l<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @brief 获取线性表长度
 * @param l 线性表
 * @return 线性表长度
 */</span>
<span class="token keyword">int</span> <span class="token function">getLength</span><span class="token punctuation">(</span>SqList l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> l<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @brief 判断线性表是否空
 * @param l 线性表
 * @return 真或假
 */</span>
<span class="token keyword">int</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>SqList l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> TRUE<span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token keyword">return</span> FALSE<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @brief 获取线性表元素
 * @param l 线性表
 * @param i 位置
 * @param e 引用回传
 * @return OK or ERROR
 */</span>
<span class="token keyword">int</span> <span class="token function">getElem</span><span class="token punctuation">(</span>SqList l<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> ElemType<span class="token operator">&amp;</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> i <span class="token operator">&gt;</span> l<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
        <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
    e <span class="token operator">=</span> l<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * @brief 根据值查找元素
 * @param l 线性表
 * @param e 元素值
 * @return 位置或0
 */</span>
<span class="token keyword">int</span> <span class="token function">locateElem</span><span class="token punctuation">(</span>SqList l<span class="token punctuation">,</span>ElemType e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> FALSE<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>NF</p>`,15),i=[t];function l(c,o){return s(),a("div",null,i)}const r=n(p,[["render",l],["__file","线性表.html.vue"]]);export{r as default};
