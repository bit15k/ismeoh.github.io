import{_ as n,X as s,Y as a,a1 as e}from"./framework-ca96282b.js";const i={},t=e(`<h1 id="nginx配置开机自启" tabindex="-1"><a class="header-anchor" href="#nginx配置开机自启" aria-hidden="true">#</a> Nginx配置开机自启</h1><p>适用于centos7以上版本</p><h2 id="创建开机自启文件" tabindex="-1"><a class="header-anchor" href="#创建开机自启文件" aria-hidden="true">#</a> 创建开机自启文件</h2><p>首先在以下目录创建文件</p><p><code>vim /lib/systemd/system/nginx.service</code></p><p>配置文件如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
Description<span class="token operator">=</span>nginx service
After<span class="token operator">=</span>network<span class="token punctuation">.</span>target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
Type<span class="token operator">=</span>forking
# 设置执行启动、重新载入和停止的命令地址
ExecStart<span class="token operator">=</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>webserver<span class="token operator">/</span>nginx<span class="token operator">/</span>sbin<span class="token operator">/</span>nginx
ExecReload<span class="token operator">=</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>webserver<span class="token operator">/</span>nginx<span class="token operator">/</span>sbin<span class="token operator">/</span>nginx <span class="token operator">-</span>s reload
ExecStop<span class="token operator">=</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>webserver<span class="token operator">/</span>nginx<span class="token operator">/</span>sbin<span class="token operator">/</span>nginx <span class="token operator">-</span>s quit
PrivateTmp<span class="token operator">=</span><span class="token boolean">true</span>

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
WantedBy<span class="token operator">=</span>multi<span class="token operator">-</span>user<span class="token punctuation">.</span>target

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于nginx的位置可以使用<code>find / -name nginx</code>进行寻找</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>参数说明
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>  服务的说明 
Description 描述服务 
After 描述服务类别

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span> 服务运行参数的设置
Type<span class="token operator">=</span>forking 是后台运行的形式 
ExecStart 为服务的具体运行命令 
ExecReload 为重启命令 
ExecStop 为停止命令 
PrivateTmp<span class="token operator">=</span>True 表示给服务分配独立的临时空间 
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>的启动、重启、停止命令全部要求使用绝对路径

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>运行级别下服务安装的相关设置，可设置为多用户，即系统运行级别为<span class="token number">3</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关服务命令" tabindex="-1"><a class="header-anchor" href="#相关服务命令" aria-hidden="true">#</a> 相关服务命令</h2><p>设置开机自启动<code>systemctl enable nginx</code></p><p>关闭开机自动启动<code>systemctl disable nginx</code></p><p>启动nginx服务<code>systemctl start nginx.service</code></p><p>停止服务<code>systemctl stop nginx.service</code></p><p>重新启动服务<code>systemctl restart nginx.service</code></p><p>查看所有已启动的服务<code>systemctl list-units --type=service</code></p><p>查看服务当前状态<code>systemctl status nginx.service</code></p><p>设置开机自启动<code>systemctl enable nginx.service</code></p><p>停止开机自启动<code>systemctl disable nginx.service</code></p>`,19),p=[t];function o(c,r){return s(),a("div",null,p)}const d=n(i,[["render",o],["__file","Nginx配置开机自启.html.vue"]]);export{d as default};
