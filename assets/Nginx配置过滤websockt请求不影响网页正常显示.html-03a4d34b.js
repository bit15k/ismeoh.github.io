import{_ as n,X as s,Y as a,a1 as e}from"./framework-ca96282b.js";const t={},p=e(`<h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h2><p>处理经过<code>https://a.com/page1</code>发送来的<code>websocket</code>协议数据，自动将请求转发给服务器本地端口1080，但浏览器仍然显示网页，此时是将<code>https://a.com/page2</code>网页的内容返回，但浏览器页面地址栏网址<code>https://a.com/page</code>保持不变</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">..</span>.父节点及其他非必要内容省略

location /page1 <span class="token punctuation">{</span> 
<span class="token builtin class-name">set</span> <span class="token variable">$cnt</span> keep-live<span class="token punctuation">;</span><span class="token comment"># 配置连接类型</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$http_upgrade</span> <span class="token operator">!=</span> <span class="token string">&quot;websocket&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment"># WebSocket协商失败时返回404</span>

rewrite /page1 / <span class="token builtin class-name">break</span><span class="token punctuation">;</span><span class="token comment"># 重写url为</span>
proxy_pass https://a.com/page2<span class="token punctuation">;</span> <span class="token comment"># 代理转发到page2返回page2的内容</span>


<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$http_upgrade</span> <span class="token operator">=</span> <span class="token string">&quot;websocket&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 


proxy_pass http://127.0.0.1:1080<span class="token punctuation">;</span> <span class="token comment"># 该端口用于处理websocket协议的数据</span>
<span class="token builtin class-name">set</span> <span class="token variable">$cnt</span> upgrade<span class="token punctuation">;</span>

<span class="token punctuation">}</span>



proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span><span class="token comment">#设置http版本</span>
proxy_set_header Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span> <span class="token comment">#设置upgrad类型</span>
proxy_set_header Connection cnt<span class="token punctuation">;</span><span class="token comment">#设置header类型</span>
proxy_set_header Host <span class="token operator">&lt;</span>你的域名<span class="token operator">&gt;</span><span class="token punctuation">;</span><span class="token comment">#此处不要用$host否则无法跳转，因为$host获取的是当前域名会导致无法跳转</span>
<span class="token comment"># Show real IP </span>
proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量cnt用于指定upgrade，下面是实际走websockt的值</p><p>proxy_set_header Upgrade websocket;<br> proxy_set_header Connection upgrade;<br> 为什么websocket在header中使用这两个字段参考<br><a href=":/6c78328e815845fa9f648b8feb1baf09">为什么HTTP Upgrade的时候，需要Connection: upgrade - Robert的博客</a></p>`,6),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","Nginx配置过滤websockt请求不影响网页正常显示.html.vue"]]);export{d as default};
