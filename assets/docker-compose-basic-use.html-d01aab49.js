import{_ as n,X as s,Y as a,a1 as e}from"./framework-ca96282b.js";const t={},p=e(`<h1 id="docker-compose的基本使用与配置模板" tabindex="-1"><a class="header-anchor" href="#docker-compose的基本使用与配置模板" aria-hidden="true">#</a> docker-compose的基本使用与配置模板</h1><p>Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。</p><p>简单来说就一个应用，分好几个容器，比如一个web应用除了web容器本身还有数据库容器，一共需要两个容器，就需要打包成一个配置文件统一管理和启动，好部署</p><h2 id="配置项说明" tabindex="-1"><a class="header-anchor" href="#配置项说明" aria-hidden="true">#</a> 配置项说明</h2><p><code>services</code>该标签底下设置一个服务底下的一个个容器，比如web容器，数据库容器</p><p><code>networks</code>标签，用于配置整个大的服务的网络,<code>- driver</code>表示该网络的网络模式</p><p>以下是<code>services</code>下面的子标签介绍</p><p><code>image</code>表示拉取的docker镜像，一般的格式是<code>&lt;路径名:版本号&gt;</code></p><p><code>restart</code>表示重启的时机</p><p><code>ports</code>指定暴露给宿主机的端口号，一般格式是<code>&lt;- 绑定宿主机的端口号:容器内的端口号&gt;</code></p><p><code>exports</code>暴露给其他容器内的端口号,一般格式是<code>&lt;- 端口号&gt;</code></p><p><code>links</code>用于指向其他服务<br> 该节点用于指定多个容器构成的服务的内网，比如wordpress容器需要访问mysql容器，于是可以在wordpress下使用<code>link</code>指向mysql，那么在wordpress内部访问，比如设置链接数据库，就不需要用<code>ip:端口号</code>形式，直接写成<code>mysql:端口号</code>即可<br> 需要注意的是，必须同属于一个网络，一个<code>networks</code>标签指定这些容器在一个网络，如下</p><p><code>networks</code>用于配置该容器属于哪个网络，格式是<code>- 所属网络</code></p><p><code>container_name</code>容器名</p><p><code>volumes</code>映射宿主机和容器的文件或目录的路径,-格式是 <code>&lt;宿主机路径:容器内路径&gt;</code><br> 宿主机就是真实的服务器</p><p><code>environment</code>设置环境变量，即容器内的服务可以读取相关配置的环境变量</p><p><code>command</code>设置启动容器附带执行的命令</p><h2 id="模板举例" tabindex="-1"><a class="header-anchor" href="#模板举例" aria-hidden="true">#</a> 模板举例</h2><p>这个例子将nginx容器、halo容器、nextcoud容器、mysql容器、redis容器、wordpress容器打包到一起统一进行管理<br> 其中nginx可以反向代理halo、nextcloud、wordpress容器，其中又有其他容器相互依赖使用的例子，比如nextcloud需要mysql</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;2.0&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.23.1
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;443:443&quot;</span>
    <span class="token key atrule">expose</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;18-190&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;210-220&quot;</span>
    <span class="token comment">#links:</span>
      <span class="token comment">#- seafile</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token comment">#- /nextcloud/nginx/conf:/etc/nginx- </span>
      <span class="token punctuation">-</span> /nextcloud/nginx/ssl<span class="token punctuation">:</span>/ssl
      <span class="token punctuation">-</span> /nextcloud/nginx/conf/nginx.conf<span class="token punctuation">:</span>/etc/nginx/nginx.conf
      <span class="token punctuation">-</span> /nextcloud/nginx/conf.d/default.conf<span class="token punctuation">:</span>/etc/nginx/conf.d/default.conf
      <span class="token punctuation">-</span> /nextcloud/nginx/conf.d/halo.quinntian.com.conf<span class="token punctuation">:</span>/etc/nginx/conf.d/halo.quinntian.com.conf
      <span class="token punctuation">-</span> /nextcloud/nginx/conf.d/cloud.quinntian.com.conf<span class="token punctuation">:</span>/etc/nginx/conf.d/cloud.quinntian.com.conf
      <span class="token comment">#- /opt/nginx/html:/usr/share/nginx/html</span>
      <span class="token comment">#- /opt/nginx/logs:/var/log/nginx</span>
      <span class="token comment"># - /opt/nginx/proxy.conf:/etc/nginx/proxy.conf</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> nginx<span class="token punctuation">-</span>net 
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> nextcloud
      <span class="token comment"># - halo</span>
      
  
  <span class="token key atrule">halo</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> halohub/halo<span class="token punctuation">:</span>1.5.4
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> halo
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>  unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;8090:8090&quot;</span>  
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /nextcloud/halo<span class="token punctuation">:</span>/root/.halo
    <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> halohub/halo<span class="token punctuation">:</span>1.5.4
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> nginx<span class="token punctuation">-</span>net   
  <span class="token key atrule">nextcloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nextcloud
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nextcloud
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;9090:80&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /nextcloud/nextcloud<span class="token punctuation">-</span>data/var/www/html<span class="token punctuation">:</span>/var/www/html
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> nginx<span class="token punctuation">-</span>net
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mysql
      <span class="token punctuation">-</span> redis
     
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;9091:3306&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=yourpassword  <span class="token comment"># Requested, set the root&#39;s password of MySQL service.</span>
      <span class="token punctuation">-</span> MYSQL_LOG_CONSOLE=true
      <span class="token comment"># - MYSQL_USER=wordpress   </span>
      <span class="token comment"># - MYSQL_PASSWORD=yourpassword</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /nextcloud/mysql/usr/local/mysql/conf<span class="token punctuation">:</span>/etc/mysql/conf.d 
      <span class="token punctuation">-</span> /nextcloud/mysql/usr/local/mysql/logs<span class="token punctuation">:</span>/logs 
      <span class="token punctuation">-</span> /nextcloud/mysql/usr/local/mysql/data<span class="token punctuation">:</span>/var/lib/mysql
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> nginx<span class="token punctuation">-</span>net
    
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;9092:6379&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /nextcloud/redis/data<span class="token punctuation">:</span>/data
      <span class="token punctuation">-</span> /nextcloud/redis/conf/redis.conf<span class="token punctuation">:</span>/etc/redis/redis.conf
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> nginx<span class="token punctuation">-</span>net  
    <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token comment"># 以配置文件的方式启动 redis.conf</span>
      redis<span class="token punctuation">-</span>server /etc/redis/redis.conf
  <span class="token key atrule">wordpress</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> wordpress<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> wordpress
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mysql
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9093<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> nginx<span class="token punctuation">-</span>net
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mysql
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">WORDPRESS_DB_HOST</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">3306</span>
      <span class="token key atrule">WORDPRESS_DB_USER</span><span class="token punctuation">:</span> root
      <span class="token key atrule">WORDPRESS_DB_PASSWORD</span><span class="token punctuation">:</span> yourpassword
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /nextcloud/wordpress/wp<span class="token punctuation">-</span>content<span class="token punctuation">:</span>/var/www/html/wp<span class="token punctuation">-</span>content 
      <span class="token punctuation">-</span> /nextcloud/wordpress/php<span class="token punctuation">-</span>conf/php.ini<span class="token punctuation">:</span>/usr/local/etc/php/php.ini     
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">nginx-net</span><span class="token punctuation">:</span> 
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考 https://www.runoob.com/docker/docker-compose.html</p>`,21),c=[p];function l(o,i){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","docker-compose-basic-use.html.vue"]]);export{d as default};
