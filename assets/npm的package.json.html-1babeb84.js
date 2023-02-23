import{_ as n,X as a,Y as e,a1 as s}from"./framework-ca96282b.js";const o={},p=s(`<h1 id="npm的package-json" tabindex="-1"><a class="header-anchor" href="#npm的package-json" aria-hidden="true">#</a> npm的package.json</h1><h2 id="使用安装命令写入package-json" tabindex="-1"><a class="header-anchor" href="#使用安装命令写入package-json" aria-hidden="true">#</a> 使用安装命令写入package.json</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>npm install --save     或者  npm install -S
npm install --save-dev 或者  npm install -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>前者写入package.json的dependency后者写入devdependency，二者区别一个是正式发布用到，一个是开发用的</p><h2 id="包版本号的含义" tabindex="-1"><a class="header-anchor" href="#包版本号的含义" aria-hidden="true">#</a> 包版本号的含义</h2><p>例如</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
<span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;antd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3.1.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~16.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;redux&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.7.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lodash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三维版本号的含义:<code>xx.yy.zz</code></p><ul><li>xx 表示主版本号 做了重大的更新会更新此版本号，通常会产生对之前版本的兼容性问题</li><li>yy 表示次版本号 当做了功能性更新会更新该版本号，并且兼容之前版本</li><li>zz 表示修订版本号 当做了新的问题修正会更新该版本号，通常会兼容之前版本</li></ul><p>我们通常不指定<strong>具体的版本号</strong>，而是通过一些符号制定版本的范围，这些符号分别是</p><ul><li><code>~</code> 只是升级修订号</li><li><code>^</code> 只是升级次版本号和修订号</li><li><code>*</code> 升级到最新版本</li></ul><p><code>&quot;react&quot;: &quot;~16.0.1&quot;</code>表示升级修订号即最后一位，也就是修订号的最后一个版本，例如当前修订号的最后一个版本是16.0.9，那么就会更新到此版本，尽管此时最新版本是16.1.0<br><code>&quot;redux&quot;: &quot;^3.7.2&quot;</code>表示升级次版本号和修订号，不会升级主版本号，例如当前最新版本是4.0.1,不会升级，次版本号和修订号的最新版本是3.9.9，只会升级到此版本号<br><code>*</code>就是升级最新版本号</p><h2 id="npm包管理原理" tabindex="-1"><a class="header-anchor" href="#npm包管理原理" aria-hidden="true">#</a> NPM包管理原理</h2><p>分为3阶段，NPM3.X之前和之后，之前是嵌套结构，之后是平行结构，5.0以后增加<code>package.json.lock</code></p><p>嵌套结构是指一个包所依赖的所有包，都会以树形结构列出，这回导致依赖过深，不同包的依赖会出现重复，如图所示</p><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/npm的package.json-2023-02-23-20-59-23.png" alt="npm的package.json-2023-02-23-20-59-23"></p><p>平行结构是指任何一个包的依赖都是，首先放在<code>node_moudle</code>文件下面，当另外一个包有相同依赖出现，先会搜索<code>node_moudle</code>,如果找不到同版本才会在当前包下面再创建一个<code>node_moudle</code>把依赖安装进去</p><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/npm的package.json-2023-02-23-20-59-54.png" alt="npm的package.json-2023-02-23-20-59-54"></p><p>例如，如下</p><p>terser包依赖commander2.20.0版本,但是在根目录下安装的是commander7.2.0，因此在该包下会安装一个旧版本的<br><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/npm的package.json-2023-02-23-21-11-35.png" alt="npm的package.json-2023-02-23-21-11-35"></p><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/npm的package.json-2023-02-23-21-13-05.png" alt="npm的package.json-2023-02-23-21-13-05"></p><p>但是外部根目录下还有一个更高版本的commander7.2.0</p><p><img src="https://cdn.jsdelivr.net/gh/ismeoh/imgchr//imgs/npm的package.json-2023-02-23-21-15-42.png" alt="npm的package.json-2023-02-23-21-15-42"></p><h2 id="package-json-lock" tabindex="-1"><a class="header-anchor" href="#package-json-lock" aria-hidden="true">#</a> package.json.lock</h2><p>package-lock.json 的作用是锁定依赖结构，即只要你目录下有 package-lock.json 文件，那么你每次执行 npm install 后生成的 node_modules 目录结构一定是完全相同的</p>`,25),c=[p];function t(d,i){return a(),e("div",null,c)}const r=n(o,[["render",t],["__file","npm的package.json.html.vue"]]);export{r as default};
