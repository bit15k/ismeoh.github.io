import{_ as n,X as s,Y as a,a0 as e}from"./framework-44854a8b.js";const t={},p=e(`<h1 id="nginx配置模板" tabindex="-1"><a class="header-anchor" href="#nginx配置模板" aria-hidden="true">#</a> Nginx配置模板</h1><p>包含</p><ul><li>反向代理配置</li><li>SSL证书配置</li><li>http跳转https</li><li>www跳转到主域名</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>#user  nobody<span class="token punctuation">;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

#error_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log<span class="token punctuation">;</span>
#error_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log  notice<span class="token punctuation">;</span>
#error_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log  info<span class="token punctuation">;</span>

#pid        logs<span class="token operator">/</span>nginx<span class="token punctuation">.</span>pid<span class="token punctuation">;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


http <span class="token punctuation">{</span>
    server_tokens  off<span class="token punctuation">;</span>
    include       mime<span class="token punctuation">.</span>types<span class="token punctuation">;</span>
    default_type  application<span class="token operator">/</span>octet<span class="token operator">-</span>stream<span class="token punctuation">;</span>

    #log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    #                  <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    #                  <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    #access_log  logs<span class="token operator">/</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    #tcp_nopush     on<span class="token punctuation">;</span>

    #keepalive_timeout  <span class="token number">0</span><span class="token punctuation">;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    #gzip  on<span class="token punctuation">;</span>

    
    #监听域名和<span class="token number">80</span>端口并强制跳转https
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span># 端口号
        server_name  a<span class="token punctuation">.</span>com<span class="token punctuation">;</span># 你的域名
        rewrite <span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>$host$1  permanent<span class="token punctuation">;</span> # 重写成https
        
        

        
    <span class="token punctuation">}</span>
    #监听域名和<span class="token number">80</span>端口强制跳转https
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span> 
        server_name  b<span class="token punctuation">.</span>com<span class="token punctuation">;</span># 你的域名
        rewrite <span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>$host$1  permanent<span class="token punctuation">;</span> # 重写成https
        
        

        
    <span class="token punctuation">}</span>


    # <span class="token constant">HTTPS</span> server
    # 监听<span class="token number">443</span>端口
    server <span class="token punctuation">{</span>
        listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
        server_name  a<span class="token punctuation">.</span>com<span class="token punctuation">;</span>a<span class="token punctuation">.</span>com

        # ssl证书配置
        ssl_certificate      a<span class="token punctuation">.</span>crt<span class="token punctuation">;</span># crt文件存放的地址
        ssl_certificate_key  a<span class="token punctuation">.</span>key<span class="token punctuation">;</span># key文件存放的地址

        ssl_session_cache    shared<span class="token operator">:</span><span class="token constant">SSL</span><span class="token operator">:</span>1m<span class="token punctuation">;</span>
        ssl_session_timeout  5m<span class="token punctuation">;</span>

        
        ssl_protocols TLSv1 TLSv1<span class="token punctuation">.</span><span class="token number">1</span> TLSv1<span class="token punctuation">.</span><span class="token number">2</span><span class="token punctuation">;</span>
        ssl_ciphers <span class="token constant">ECDHE</span><span class="token operator">-</span><span class="token constant">RSA</span><span class="token operator">-</span><span class="token constant">AES128</span><span class="token operator">-</span><span class="token constant">GCM</span><span class="token operator">-</span><span class="token constant">SHA256</span><span class="token operator">:</span><span class="token constant">HIGH</span><span class="token operator">:</span><span class="token operator">!</span>aNULL<span class="token operator">:</span><span class="token operator">!</span><span class="token constant">MD5</span><span class="token operator">:</span><span class="token operator">!</span><span class="token constant">RC4</span><span class="token operator">:</span><span class="token operator">!</span><span class="token constant">DHE</span><span class="token punctuation">;</span>
        ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>

        location <span class="token operator">/</span> <span class="token punctuation">{</span>
        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>server1<span class="token punctuation">;</span>#配置反向代理，与前面的upstream server1对应
        proxy_set_header Host $host<span class="token punctuation">;</span> # 转发host值
        proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Real<span class="token operator">-</span><span class="token constant">IP</span> $remote_addr<span class="token punctuation">;</span> # 转发真实<span class="token constant">IP</span>
        proxy_set_header <span class="token constant">REMOTE</span><span class="token operator">-</span><span class="token constant">HOST</span> $remote_addr<span class="token punctuation">;</span>
        proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span>For $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        
        
    <span class="token punctuation">}</span>

    server <span class="token punctuation">{</span>
        listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
        server_name  www<span class="token punctuation">.</span>a<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
        # 配置crt和key文件路径
        ssl_certificate      <span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
        ssl_certificate_key  <span class="token punctuation">.</span>key<span class="token punctuation">;</span>

        ssl_session_cache    shared<span class="token operator">:</span><span class="token constant">SSL</span><span class="token operator">:</span>1m<span class="token punctuation">;</span>
        ssl_session_timeout  5m<span class="token punctuation">;</span>

        
        ssl_protocols TLSv1 TLSv1<span class="token punctuation">.</span><span class="token number">1</span> TLSv1<span class="token punctuation">.</span><span class="token number">2</span><span class="token punctuation">;</span>
        ssl_ciphers <span class="token constant">ECDHE</span><span class="token operator">-</span><span class="token constant">RSA</span><span class="token operator">-</span><span class="token constant">AES128</span><span class="token operator">-</span><span class="token constant">GCM</span><span class="token operator">-</span><span class="token constant">SHA256</span><span class="token operator">:</span><span class="token constant">HIGH</span><span class="token operator">:</span><span class="token operator">!</span>aNULL<span class="token operator">:</span><span class="token operator">!</span><span class="token constant">MD5</span><span class="token operator">:</span><span class="token operator">!</span><span class="token constant">RC4</span><span class="token operator">:</span><span class="token operator">!</span><span class="token constant">DHE</span><span class="token punctuation">;</span>
        ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>

        # 配置www跳转到主域名，如果你配置了www
        location <span class="token operator">/</span> <span class="token punctuation">{</span>
            rewrite  <span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$  https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">-</span><span class="token operator">/</span>$1 permanent<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>



        
    <span class="token punctuation">}</span>
    #反向代理<span class="token number">1</span>
    upstream server1<span class="token punctuation">{</span>
                        
        server <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">1001</span><span class="token punctuation">;</span># 本地服务端口<span class="token number">1</span>，可以设置多个
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function i(l,c){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","Nginx配置模板.html.vue"]]);export{u as default};
