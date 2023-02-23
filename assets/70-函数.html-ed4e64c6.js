import{_ as n,W as s,X as a,a0 as e}from"./framework-0a321081.js";const i={},l=e(`<h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h1><p>函数就是指具体的功能封装到一个地方，用到时候可以随时调用</p><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2><p>对于函数来讲有很多的类型，根据不同的角度有不同的分法</p><p>从 <strong>用户</strong>角度来讲，分为两类</p><ul><li><strong>系统函数</strong> 是指由编译系统自身带的或者系统库所提供的函数，直接拿来用即可</li><li><strong>自定义函数</strong> 是指自己编写的实现具体功能的函数</li></ul><p>从 <strong>函数的形式</strong>来讲，也就是函数的样子，可以分为两类</p><ul><li><strong>有参数函数</strong> 是指可以将一些变量传入</li><li><strong>无参数函数</strong> 是指不需要外部传入一些变量</li></ul><h2 id="无参和有参函数" tabindex="-1"><a class="header-anchor" href="#无参和有参函数" aria-hidden="true">#</a> 无参和有参函数</h2><h3 id="无参函数基本形式" tabindex="-1"><a class="header-anchor" href="#无参函数基本形式" aria-hidden="true">#</a> 无参函数基本形式</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>类型标识符 函数名<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">void</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    声明部分
    语句
<span class="token punctuation">}</span>

例如
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
using namespace std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数原型" tabindex="-1"><a class="header-anchor" href="#函数原型" aria-hidden="true">#</a> 函数原型</h2><p>我们所说的 <strong>函数原型</strong>就是指 <strong>函数声明</strong>，二者意思一致</p><p><strong>函数原型</strong>是指当我们所调用的函数并未被定义时，可以使用函数声明<strong>提前告诉系统</strong>我们要定义的函数</p><p>最简单的例子，假如我们<code>先调用后定义</code></p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>int main(){
    int c = 1, d = 2;
    int add(int a,int b); // 函数原型
    add(c,d); // 此时调用，函数并未定义，必须使用函数原型
}
int add(int a,int b){

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>函数原型</strong>的写法，<code>int add(int a,int b)</code> ,也可以不加变量名即<code>sum(int,int)</code></p><p>什么时候不使用函数原型？函数若在调用之前已经定义，可以不用函数原型</p><p>函数定义和函数声明的区别，即函数定义包含函数体，函数声明不包含函数体</p><h2 id="内置函数" tabindex="-1"><a class="header-anchor" href="#内置函数" aria-hidden="true">#</a> 内置函数</h2><p><strong>内置函数</strong>可以理解成将函数拿来插入到当前调用的位置，这时需要理解与普通函数调用的区别</p><p>普通函数调用如下</p><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/普通函数调用流程对比内置函数调用.png" alt="普通函数调用流程对比内置函数调用"></p><p><strong>定义内置函数</strong>是指在函数定义时增加<code>inline</code>关键字</p><p>如下所示</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>
int main(){
    int c = 1, d = 2;
    inlne int add(int a,int b); // 函数原型
    add(c,d); // 此时调用，函数并未定义，必须使用函数原型
}
inlne int add(int a,int b){

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不要忘记函数原型也要加</strong>.<br><strong>内置函数不允许有复杂的控制语句，否则会自动转换成普通函数</strong></p><h2 id="函数重载" tabindex="-1"><a class="header-anchor" href="#函数重载" aria-hidden="true">#</a> 函数重载</h2><p><strong>函数重载</strong>就是指一物多用，一个函数可以用于多种用途，即函数可以根据其 <strong>形参类型</strong>、<strong>形参顺序</strong>、<strong>形参个数</strong> 定义多个同名函数,当函数调用时会自动根据这几个条件匹配相应的同名函数</p><p>例如</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>int add(int a,int b){

}
int add(double a,double b){

}
int add(int a,int b,int c){

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数模板" tabindex="-1"><a class="header-anchor" href="#函数模板" aria-hidden="true">#</a> 函数模板</h2><p><strong>函数模板</strong>是指定义一个不指定 <strong>函数类型</strong>和 <strong>形参类型</strong>的函数，系统会根据实参自动实现形参和函数类型</p><p>例如</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>#include &lt;iostream&gt; 
using namespace std;
template &lt;typename T&gt;
int main(){
    int c = 1, d = 2;
    T add(T a,T b);
    add(c,d); 
}
T add(T a,T b){

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面可以归纳为</p><ul><li>先定义虚拟类型，语法<code>template &lt;typename 虚拟类型名&gt;</code>或使用另外一个定义格式<code>template &lt;class 虚拟类型名&gt;</code>，这里的虚拟类型名可以随便起，一般用T</li><li>然后将函数定义中的类型名和形参类型换成你所定义的虚拟类型名</li></ul><h2 id="带默认参数的函数" tabindex="-1"><a class="header-anchor" href="#带默认参数的函数" aria-hidden="true">#</a> 带默认参数的函数</h2><p>顾名思义即在函数定义的时候在形参的位置添加默认参数，可以不传实参了</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>sum(int i = 1, int j){}
sum()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一些注意的点</p><ul><li>当使用<code>函数原型</code>时，最好把默认值写到函数原型上面</li><li>使用函数默认值不要使用函数重载</li></ul><h2 id="嵌套定义与调用" tabindex="-1"><a class="header-anchor" href="#嵌套定义与调用" aria-hidden="true">#</a> 嵌套定义与调用</h2><p>即C++不允许函数嵌套定义，即一个函数里再定义一个函数不允许，但是允许嵌套调用，即一个函数里可以调用另外一个函数</p><h2 id="局部变量与全局变量" tabindex="-1"><a class="header-anchor" href="#局部变量与全局变量" aria-hidden="true">#</a> 局部变量与全局变量</h2><p><strong>局部变量</strong>是指在变量只在函数内有效</p><p>有哪些是局部变量</p><ul><li>函数内的变量</li><li>函数的形参</li><li>{...} 语句块内</li></ul><p><strong>全局变量</strong>是指在函数外部的都是全局变量，其从定义开始到文件末尾<br> 使用全局变量，需要注意</p><ul><li>全局变量会占据存储单元</li><li>全局变量和局部变量重名，以局部变量为准，全局变量被屏蔽</li><li>使用全局变量，不利于程序的移植</li></ul><p>什么是作用域<br> 变量的有效范围叫做函数的作用域，其分为以下几种</p><ul><li>文件作用域，起作用范围在定义开始到文件结束</li><li>函数作用域，函数体内有效</li><li>块作用域，大括号括起来的</li><li>函数原型作用域，就是函数原型形参的作用域</li></ul><h2 id="动态和静态存储" tabindex="-1"><a class="header-anchor" href="#动态和静态存储" aria-hidden="true">#</a> 动态和静态存储</h2><p>动态存储是指在程序运行期间对变量动态分配存储空间<br> 静态存储是指在同对变量进行分配固定存储空间</p><p>因此，一个程序可以分为如下几个区</p><ul><li>程序区</li><li>静态存储区</li><li>动态存储区</li></ul><p>动态存储区存放的内容</p><ul><li>全局变量</li></ul><p>静态存储区存放的内容</p><ul><li>函数的形参</li><li>函数内的自动变量</li><li>函数调用的现场保护和返回地址</li></ul><h2 id="存储类别" tabindex="-1"><a class="header-anchor" href="#存储类别" aria-hidden="true">#</a> 存储类别</h2><p>变量的存储类别就是指4个关键字,这四个关键字分别可以从三个角度来定义变量即是动态静态分配、作用域范围、存储在内存还是寄存器</p><ul><li>auto 局部变量</li><li>static 静态存储</li><li>register 寄存器存储</li><li>extern 扩展作用域</li></ul><h3 id="auto声明自动局部变量" tabindex="-1"><a class="header-anchor" href="#auto声明自动局部变量" aria-hidden="true">#</a> auto声明自动局部变量</h3><p>自动变量就是指在函数内的定义的局部变量，加<code>auto</code>关键字，一般将关键字省略<br> 第一点，自动变量从作用域看是局部变量<br> 第二点，从存储类别来看是动态存储，即函数调用才会创建变量为其分配空间</p><h3 id="static声明静态局部变量" tabindex="-1"><a class="header-anchor" href="#static声明静态局部变量" aria-hidden="true">#</a> static声明静态局部变量</h3><p>静态局部变量就是指在函数内用<code>static</code>声明的局部变量，其在函数调用结束后仍然保留上一次函数调用的值</p><p>第一点，静态局部变量，静态即它存储在静态存储区 第二点，静态局部变量，局部是指从作用域范围来看</p><h3 id="register声明寄存器变量" tabindex="-1"><a class="header-anchor" href="#register声明寄存器变量" aria-hidden="true">#</a> register声明寄存器变量</h3><p>寄存器变量是指放在CPU的寄存器中的变量，使用<code>register</code>声明</p><h3 id="extern声明外部变量" tabindex="-1"><a class="header-anchor" href="#extern声明外部变量" aria-hidden="true">#</a> extern声明外部变量</h3><p>第一类情况</p><p>我们所说全局变量作用域是指从其定义一点开始，到文件结束，如果在其定义之前想使用，可以使用extern进行扩展</p><p>如</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>file.c
// 此处想使用a
extern int a;
cout&lt;&lt;a&lt;&lt;endl;

.......
.......
int a = 5; // 定义全局变量

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二类情况</p><p>如果一个文件想引用另一个文件的变量，可以用<code>extern</code></p><p>例如</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>file1<span class="token punctuation">.</span>c引用file2<span class="token punctuation">.</span>c
<span class="token keyword">extern</span> <span class="token keyword">int</span> a<span class="token punctuation">;</span> <span class="token comment">// 声明a是外部变量</span>
cout<span class="token operator">&lt;&lt;</span>a<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>

file2<span class="token punctuation">.</span>c
<span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>综上，其实extern关键字的作用就是对其变量作用域的扩展，同一个文件内对全局变量的作用域进行扩展，不同文件是将另外一个文件的变量作用域扩展到本文件</p><p>外部有两层含义：一，本文件内全局变量的外部，永远不超其文件内；二，本文件以外的文件</p><p>注：其仍然是存储在静态存储区的</p><h3 id="static声明静态外部变量" tabindex="-1"><a class="header-anchor" href="#static声明静态外部变量" aria-hidden="true">#</a> static声明静态外部变量</h3><p>静态外部变量是指该变量作用域只能本文件内使用，其他文件无法通过<code>extern</code>扩展，使用</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>file1<span class="token punctuation">.</span>cpp
<span class="token keyword">static</span> <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

file2<span class="token punctuation">.</span>cpp
<span class="token keyword">extern</span> <span class="token keyword">int</span> a<span class="token punctuation">;</span> × 无法扩展  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量总结" tabindex="-1"><a class="header-anchor" href="#变量总结" aria-hidden="true">#</a> 变量总结</h3><p>变量的存储类别就是指4个关键字</p><ul><li>auto</li><li>static</li><li>register</li><li>extern</li></ul><p>变量从三个角度可以分为，如下<br> 从作用域角度区分变量,即其有效范围</p><ul><li>局部变量 <ul><li>自动变量-&gt;函数内使用</li><li>静态局部变量-&gt;函数内使用</li><li>寄存器变量-&gt;函数内使用</li><li>形式参数-&gt;函数内使用</li></ul></li><li>全局变量 <ul><li>静态外部变量-&gt;本文件使用</li><li>外部变量-&gt;外部文件可使用</li></ul></li></ul><p>从变量分配时机，是函数调用临时分配还是整个程序运行期间都存在</p><ul><li>动态分配 <ul><li>自动变量-&gt;函数内使用</li><li>寄存器变量-&gt;函数内使用</li><li>形式参数-&gt;函数内使用</li></ul></li><li>静态分配 <ul><li>静态局部变量-&gt;函数内使用</li><li>静态外部变量-&gt;文件内使用</li><li>外部变量-&gt;其他文件可以使用</li></ul></li></ul><p>从变量值存放位置</p><ul><li>内存中静态存储区 <ul><li>静态局部变量-&gt;函数内使用</li><li>静态外部变量-&gt;文件内使用</li><li>外部变量-&gt;其他文件可以使用</li></ul></li><li>内存中动态存储区 <ul><li>自动变量-&gt;函数内使用</li><li>形式参数-&gt;函数内使用</li></ul></li><li>CPU寄存器 <ul><li>寄存器变量-&gt;函数内使用</li></ul></li></ul><h2 id="变量声明和定义区别" tabindex="-1"><a class="header-anchor" href="#变量声明和定义区别" aria-hidden="true">#</a> 变量声明和定义区别</h2><p>分为两个角度</p><p>函数的声明和定义</p><ul><li>函数的定义是指功能的定义，即带函数体</li><li>函数的声明即函数原型的声明</li></ul><p>变量的声明和定义</p><ul><li>定义型声明，即<code>int a</code>，其占据存储空间</li><li>引用型声明，即<code>extern int a</code>说明其实引用其他文件的</li></ul><p>一般来说，我们把建立存储空间的叫做定义型声明，自身不建立存储空间的叫做引用型，这里不建立存储空间是指自身不建立，其他文件变量建立了存空间，我引用过来</p><h2 id="内部和外部函数" tabindex="-1"><a class="header-anchor" href="#内部和外部函数" aria-hidden="true">#</a> 内部和外部函数</h2><p>内部函数即只能在本文件内使用的，其他文件不能使用</p><p>例如</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> 类型标识符 函数名<span class="token punctuation">(</span>形参表<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>外部函数供给其他文件使用的<br><strong>注</strong>：extern关键字可以省略<br> 例如</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>file1<span class="token punctuation">.</span>cpp
<span class="token keyword">extern</span> 类型标识符 函数名<span class="token punctuation">(</span>形参表<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// extern关键字可以省略</span>

file2<span class="token punctuation">.</span>cpp引用file1<span class="token punctuation">.</span>cpp
<span class="token keyword">extern</span> 类型标识符 函数名<span class="token punctuation">(</span>形参表<span class="token punctuation">)</span> <span class="token comment">// 函数原型</span>
<span class="token comment">// extern关键字可以省略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其结合<code>inclue</code>指令使用，即把函数原型直接放到<code>.h</code>文件中即可</p><p>NF</p>`,127),t=[l];function d(c,r){return s(),a("div",null,t)}const o=n(i,[["render",d],["__file","70-函数.html.vue"]]);export{o as default};
