import{_ as n,X as e,Y as s,a0 as a}from"./framework-44854a8b.js";const i={},l=a(`<h1 id="nginx配置严格域名校验" tabindex="-1"><a class="header-anchor" href="#nginx配置严格域名校验" aria-hidden="true">#</a> Nginx配置严格域名校验</h1><p>如禁止IP直接访问</p><p>default_server</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span> default_server;
    return <span class="token number">444</span>;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>法2（需要最新版本nginx1.9以上） ssl_reject_handshake</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">443</span> ssl default_server;
    ssl_reject_handshake on;
<span class="token punctuation">}</span>
合并写法
server <span class="token punctuation">{</span>
    listen <span class="token number">80</span> default_server;
    listen <span class="token number">443</span> ssl default_server;
    ssl_reject_handshake on;
    return <span class="token number">444</span>;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=[l];function d(t,c){return e(),s("div",null,r)}const v=n(i,[["render",d],["__file","nginx-config-nameserver-verify.html.vue"]]);export{v as default};
