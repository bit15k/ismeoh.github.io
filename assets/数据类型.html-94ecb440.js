import{_ as a,X as n,Y as e,a1 as s}from"./framework-ca96282b.js";const o={},c=s(`<h1 id="数据与运算" tabindex="-1"><a class="header-anchor" href="#数据与运算" aria-hidden="true">#</a> 数据与运算</h1><h2 id="数据" tabindex="-1"><a class="header-anchor" href="#数据" aria-hidden="true">#</a> 数据</h2><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3><p><strong>数据类型</strong>是指数据在计算机中存储单元的安排，包括存储单元的长度以及存储形式等等，在C和C++语言中的变量和常量都是需要数据类型</p><p>我们所说的<strong>变量</strong>和<strong>常量</strong>都是具有<strong>数据类型</strong>的</p><h4 id="常用数据类型" tabindex="-1"><a class="header-anchor" href="#常用数据类型" aria-hidden="true">#</a> 常用数据类型</h4><p>C语言中常用的数据类型如下</p><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/20230219152844.png" alt="20230219152844"></p><p>C++语言中常用的数据类型如下</p><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/20230219153006.png" alt="20230219153006"></p><p>可以看出C++多出了<code>类类型</code></p><p>关于数据类型的精度、数值范围和在内存中的字节数，根据编译系统自行决定，常见的数据类型如下</p><ul><li>int 4字节</li><li>char 1字节</li><li>float 4字节</li><li>double 8字节</li></ul><h4 id="整型数据" tabindex="-1"><a class="header-anchor" href="#整型数据" aria-hidden="true">#</a> 整型数据</h4><p>整型数据主要分为<code>int</code> <code>long int</code> <code>short int</code>三种，根据是否有符号可以在其前面加<code>signed</code>和<code>unsigned</code></p><h4 id="浮点数据" tabindex="-1"><a class="header-anchor" href="#浮点数据" aria-hidden="true">#</a> 浮点数据</h4><p>浮点型数据主要分<code>float</code>和<code>double</code> <code>long double</code></p><h4 id="字符数据" tabindex="-1"><a class="header-anchor" href="#字符数据" aria-hidden="true">#</a> 字符数据</h4><p>字符数据仍然是按照整型数据存储</p><h4 id="派生数据类型" tabindex="-1"><a class="header-anchor" href="#派生数据类型" aria-hidden="true">#</a> 派生数据类型</h4><p>不在本章讲</p><h3 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h3><p>常量是指不可改变的量，主要分为如下</p><ul><li>数值型常量，<code>10</code></li><li>字符型常量，包含在\` \`里的量</li></ul><h4 id="数值常量" tabindex="-1"><a class="header-anchor" href="#数值常量" aria-hidden="true">#</a> 数值常量</h4><p><strong>数值常量</strong>是指通常所说之常数，数值常量也是分类型的，主要包含如下</p><ul><li>整型常量</li><li>浮点型常量</li></ul><h5 id="整型常量" tabindex="-1"><a class="header-anchor" href="#整型常量" aria-hidden="true">#</a> 整型常量</h5><p>对应数据类型中int，比如<code>10L</code><br> 整型常量根据其数值范围可以分为如下</p><ul><li><code>-32768-32767</code> 是<code>shot int</code></li><li><code>-2147483648-2147483647</code>是<code>long int</code></li><li>还有一些无符号<code>usigned</code>型了解即可</li></ul><p>整型常量的表达方法，主要有如下三种</p><ul><li>十进制数</li><li>八进制数</li><li>十六进制数</li></ul><p>十进制数字需要在数字尾部加<code>l</code>或<code>L</code>，例如<code>10L</code><br> 八进制数字需要在开头加<code>0</code>,八进制的<code>020</code>代表十进制<code>16</code><br> 十六进制在数字的开头加<code>0x</code>或<code>0X</code>，例如<code>0x20</code>即32</p><h5 id="浮点型常量" tabindex="-1"><a class="header-anchor" href="#浮点型常量" aria-hidden="true">#</a> 浮点型常量</h5><p><strong>浮点型常量</strong>就是指我们所说的小数</p><p>表达方式主要有两种</p><ul><li>十进制小数</li><li>指数形式</li></ul><p><strong>十进制小数形式</strong><br> 例如<code>0.12345</code>，主要包含整数部分和小数部分，浮点数常量根据数据所占大小主要分为两种</p><ul><li>双精度浮点类型常量</li><li>单精度浮点类型常量</li></ul><p><strong>双精度浮点类型常量</strong>，一般默认是双精度，例如<code>0.123</code>，其一般占内存8字节<br><strong>单精度浮点类型常量</strong>，在数字后面加<code>f或F</code>，通常占用4字节</p><hr><p><strong>指数形式表达</strong><br> 主要形式<code>0.123e10</code>，具体如下</p><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/20230202230044.png" alt="20230202230044"></p><h4 id="字符常量" tabindex="-1"><a class="header-anchor" href="#字符常量" aria-hidden="true">#</a> 字符常量</h4><p><strong>字符常量</strong>是指类似<code>&#39;a&#39;</code>等单独一个字符且,只占一个字节的常量 主要分为如下两种</p><ul><li>普通字符常量</li><li>转义字符常量</li></ul><h5 id="普通字符常量" tabindex="-1"><a class="header-anchor" href="#普通字符常量" aria-hidden="true">#</a> 普通字符常量</h5><p>\` \`包裹的内容，例如\`a\`，需要注意的是</p><ul><li>只能包含一个字符</li><li>只占1字节</li><li>区分大小写</li></ul><h5 id="转义字符常量" tabindex="-1"><a class="header-anchor" href="#转义字符常量" aria-hidden="true">#</a> 转义字符常量</h5><p>例如<code>\\n</code>不表示字母n，而表示换行符</p><p>常见的转义字符查询</p><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/20230202230826.png" alt="20230202230826"></p><p>注：转义字符尽管包含两个字符，但是仍然占1个字节，编译系统会将ASCII码进行转换，如上图末尾都对应ASCII编码</p><blockquote><p>字符数据在计算机存储是以ASCII码存储的,因为其仍然是整数，所以字符数据可以赋值给整型变量，反之也可将&gt;&gt;整型数据赋值给字符变量</p></blockquote><p>常用ASCII码表</p><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/20230202231749.png" alt="20230202231749"></p><h4 id="字符串常量" tabindex="-1"><a class="header-anchor" href="#字符串常量" aria-hidden="true">#</a> 字符串常量</h4><p>使用&quot; &quot;包裹起来的内容，例如<code>&quot;abc&quot;</code><br> 字符串常量，占4个字节</p><p>字符串常量在内存中的表示</p><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/20230202232339.png" alt="20230202232339"></p><p>其中<code>\\0</code>不是字符串的一部分，因此当输出的时候不会输出</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;abc&quot;</span><span class="token operator">&lt;&lt;</span>endl <span class="token comment">//abc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>char类型不能使用<code>&quot; &quot;</code>，因为只能包含一个字符</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">char</span> c<span class="token punctuation">;</span>
c <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span>  <span class="token comment">//❌</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="符号常量" tabindex="-1"><a class="header-anchor" href="#符号常量" aria-hidden="true">#</a> 符号常量</h4><p>使用<code>#define</code>预处理指令来定义一个符号常量，例如</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">PRICE</span> <span class="token expression"><span class="token number">30</span> </span><span class="token comment">// &lt;--</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> num<span class="token punctuation">.</span>total<span class="token punctuation">;</span>
    num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    total <span class="token operator">=</span> num <span class="token operator">*</span>PRICE<span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span><span class="token string">&quot;total=&quot;</span><span class="token operator">&lt;&lt;</span>total<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点</p><ul><li>明确含义</li><li>一改全改</li></ul><h3 id="变量与常变量" tabindex="-1"><a class="header-anchor" href="#变量与常变量" aria-hidden="true">#</a> 变量与常变量</h3><p>变量是指一个有名字、具有特定属性的存储单元<br> 变量名实际上是指存储地址，只不过是在编译的时候自动给其一个具体的地址</p><p>变量定义/声明基本语法 <code>数据类型 标识符</code><br><strong>标识符</strong>就是指对变量、常变量、符号常量、函数名等等的命名，这里是指变量名，对于<strong>变量名要求</strong>如下<br> 由字母、数字、下划线组成，且第一必须是字母</p><p><strong>变量初始化</strong><br> 所谓变量初始化，即给变量定义的同时给予其赋值</p><p>例子</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token comment">// 变量初始化</span>
<span class="token keyword">int</span> c <span class="token punctuation">,</span> d<span class="token punctuation">;</span><span class="token comment">// 变量声明</span>
c <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// 变量赋值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常变量</strong><br> 常变量是指使用<code>const 数据类型 标识符</code>定义的变量<br> 常变量具有存储单元，但是其值不变，与常量不同，常量没有给存储单元存储一个标识符</p><p>NF</p>`,78),t=[c];function i(p,d){return n(),e("div",null,t)}const l=a(o,[["render",i],["__file","数据类型.html.vue"]]);export{l as default};
