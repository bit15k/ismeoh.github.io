import{_ as n,X as s,Y as a,a1 as e}from"./framework-ca96282b.js";const i={},t=e(`<h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h1><p>函数就是指具体的功能封装到一个地方，用到时候可以随时调用</p><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2><p>对于函数来讲有很多的类型，根据不同的角度有不同的分法</p><p>从 <strong>用户</strong>角度来讲，分为两类</p><ul><li><strong>系统函数</strong> 是指由编译系统自身带的或者系统库所提供的函数，直接拿来用即可</li><li><strong>自定义函数</strong>是指自己编写的实现具体功能的函数</li></ul><p>从 <strong>函数的形式</strong>来讲，也就是函数的样子，可以分为两类</p><ul><li><strong>有参数函数</strong>是指可以将一些变量传入</li><li><strong>无参数函数</strong>是指不需要外部传入一些变量</li></ul><h2 id="无参和有参函数" tabindex="-1"><a class="header-anchor" href="#无参和有参函数" aria-hidden="true">#</a> 无参和有参函数</h2><h3 id="无参函数基本形式" tabindex="-1"><a class="header-anchor" href="#无参函数基本形式" aria-hidden="true">#</a> 无参函数基本形式</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>类型标识符 函数名<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">void</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    声明部分
    语句
<span class="token punctuation">}</span>

例如
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
using namespace std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token punctuation">;</span> i <span class="token operator">&lt;</span><span class="token number">5</span> <span class="token punctuation">)</span>
        cout<span class="token operator">&lt;&lt;</span>i<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>声明部分</strong>是指一些在函数内部声明的变量<br><code>[]</code>是指当函数是无参函数的时候可以使用void，也可以不使用</p><h3 id="有参函数基本形式" tabindex="-1"><a class="header-anchor" href="#有参函数基本形式" aria-hidden="true">#</a> 有参函数基本形式</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>类型声明 函数名<span class="token punctuation">(</span>形式参数列表<span class="token punctuation">)</span><span class="token punctuation">{</span>
    声明部分
    语句
<span class="token punctuation">}</span>

例如
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
using namespace std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>函数类型声明</strong>在C语言中是可以省略的，默认系统会认为是int，但是在C++语言中必须制定类型</p><h2 id="函数参数列表" tabindex="-1"><a class="header-anchor" href="#函数参数列表" aria-hidden="true">#</a> 函数参数列表</h2><p>要知道如下概念<br><strong>形参</strong>是指我们在定义有参函数时所定义的参数<br><strong>实参</strong>即当我们需要调用该参数实际传入的参数</p><p>例如我们上面调用sum方法</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>sum(1,2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于形参和实参有以下说明</p><ul><li>形参在不调用函数时是不占据空间的</li><li>实参的类型有很多种，但是只要最后是值即可，例如可以是表达式、常量或变量，甚至可以是另外一个带返回值的函数</li><li>当实参传入的类型和形参的一致或者赋值兼容，即形参的类型必须大于等于实参类型，例如形参是long int实参是int</li><li>实参和形参传入是单向值传递，即当实参传入，即形参开辟一个空间将实参的内容复制一份<br><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/未命名绘图.drawio.png" alt="未命名绘图.drawio"></li></ul><h2 id="函数返回值" tabindex="-1"><a class="header-anchor" href="#函数返回值" aria-hidden="true">#</a> 函数返回值</h2><p><strong>函数返回值</strong>是指如果希望将函数内部一些值返回，可以使用返回值</p><p>可以在函数体内部使用<code>return</code>语句</p><p>函数用<code>return</code>返回的值必须与 <strong>函数声明的类型</strong>保持一致，不一致会以 <strong>函数声明</strong>为准</p><h2 id="函数调用" tabindex="-1"><a class="header-anchor" href="#函数调用" aria-hidden="true">#</a> 函数调用</h2><p><strong>函数调用</strong>的基本格式<br><code>函数名([实参列表])</code></p><p>当然 <strong>函数调用</strong>可以与其他组合成不同的形式，比如与一些运算符组成表达式，也可以做另外一个函数的参数的表达式，如下</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>int s = sum(2,3)*5;
sum(sum(2,3));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数原型" tabindex="-1"><a class="header-anchor" href="#函数原型" aria-hidden="true">#</a> 函数原型</h2><p>我们所说的 <strong>函数原型</strong>就是指 <strong>函数声明</strong>，二者意思一致</p><p><strong>函数原型</strong>是指当我们所调用的函数并未被定义时，可以使用函数声明<strong>提前告诉系统</strong>我们要定义的函数</p><p>最简单的例子，假如我们先调用后定义</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>int main(){
    int c = 1, d = 2;
    int add(int a,int b); // 函数原型
    add(c,d); // 此时调用，函数并未定义，必须使用函数原型
}
int add(int a,int b){

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>函数原型</strong>的写法，可以不加变量名即<code>sum(int,int)</code></p><p>什么时候不使用函数原型？函数若在调用之前已经定义，可以不用函数原型</p>`,36),l=[t];function c(d,p){return s(),a("div",null,l)}const o=n(i,[["render",c],["__file","34-函数.html.vue"]]);export{o as default};
