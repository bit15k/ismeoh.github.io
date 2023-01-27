import{_ as e,V as i,W as s,$ as n}from"./framework-9bf4c1fc.js";const t={},l=n(`<h1 id="代理配置" tabindex="-1"><a class="header-anchor" href="#代理配置" aria-hidden="true">#</a> 代理配置</h1><p>配置代理</p><p><strong>临时添加与全局添加</strong>命令</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>git config --global http.proxy &#39;socks5://127.0.0.1:socks5端口号&#39;
 
git config --global https.proxy &#39;socks5://127.0.0.1:socks5端口号&#39;
git config --global http.proxy &#39;http://127.0.0.1:http端口号&#39;
 
git config --global https.proxy &#39;https://127.0.0.1:https端口号&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>直接修改用户目录下</strong>，.gitcofig文件添加如下</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>[http]
proxy = socks5://127.0.0.1:socks5端口号
proxy = http://127.0.0.1:http端口号
 
[https]
proxy = socks5://127.0.0.1:socks5端口号
proxy = https://127.0.0.1:http端口号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启使配置生效<br><code>git config -l --global</code></p><p>查看当前代理<br><code>git config -l</code></p>`,8),d=[l];function o(c,a){return i(),s("div",null,d)}const p=e(t,[["render",o],["__file","100-git-config-proxy.html.vue"]]);export{p as default};
