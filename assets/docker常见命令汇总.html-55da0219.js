import{_ as e,X as r,Y as o,a0 as c}from"./framework-44854a8b.js";const p={},s=c(`<h1 id="docker常见命令汇总" tabindex="-1"><a class="header-anchor" href="#docker常见命令汇总" aria-hidden="true">#</a> docker常见命令汇总</h1><p>安装 Docker<br><code>yum -y install docker</code></p><p>启动 Docker<br><code>systemctl start docker</code></p><p>设置 Docker开机自启动<br><code>systemctl enable docker</code></p><p>查看版本号<br><code>docker -v</code></p><p>查看 Docker 状态，报错时候使用<br> systemctl status docker</p><p>停止 Docker<br> systemctl stop docker</p><p>重启 Docker<br> systemctl restart docker</p><p>查看正在运行的容器<br> docker ps</p><p>查看所有容器，包括停止的容器<br> docker ps -a</p><p>查看容器占用资源情况<br> docker stats</p><p>查看容器的日志（可在这查看报错信息）<br> docker logs 容器名或ID</p><p>启动已被停止的容器<br> docker start 容器名或ID</p><p>停止运行中的容器<br> docker stop 容器名或ID</p><p>重启容器<br> docker restart 容器名或ID</p><p>安装docker compose<br> 添加企业版附加包<br> yum -y install epel-release</p><p>安装pip<br> yum -y install python-pip</p><p>更新pip<br> pip install --upgrade pip</p><p>安装docker-compose<br> pip install docker-compose</p><p>查看docker compose的版本<br> docker-compose version</p><p>删除全部容器<br> docker rm $(docker ps -aq)<br> docker rm $(docker ps -a -q)</p><p>停止全部容器<br> docker stop $(docker ps -a -q)</p><p>删除全部镜像<br> docker rmi $(docker images -q)</p><p>查看<br> docker ps -q<br> docker ps -a</p><p>启动所有容器 docker start $(docker ps -a -q)</p><p>删除所有容器<br> docker rm $(docker ps -a -q)</p><p>重启docker-compose<br> docker-compose restart</p><p>停止容器docker-compose<br> 需要进入相关目录<br> docker-compose down</p><p>重新部署docker-compose<br> 需要进入相关目录<br> docker-compose up -d</p><p>进入容器并以虚拟bash展现<br> docker exec -it seafile bash<br> docker exec -it wordpress bash</p><p>查看容器内的IP返回结果<br> docker exec -it nextcloud netstat -anp</p><p>查看容器内的IP<br> 需要进入虚拟bash</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/hosts
<span class="token function">docker</span> inspect
<span class="token function">docker</span> inspect <span class="token parameter variable">-f</span> <span class="token string">&#39;{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}&#39;</span> container_name_or_id 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取容器名和IP<br><code>docker inspect -f &#39;{{.Name}} - {{.NetworkSettings.IPAddress }}&#39; $(docker ps -aq)</code></p><p>获取docer compose容器名和IP <code>docker inspect -f &#39;{{.Name}} - {{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}&#39; $(docker ps -aq)</code></p><p>显示所有容器IP<br><code>docker inspect --format=&#39;{{.Name}} - {{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}&#39; $(docker ps -aq)</code></p><p>查看指定容器的日志<br> docker logs -f nginx</p><p>查看所有容器网络列表<br> docker network ls 查看网络列表</p><p>查看对应网络的配置<br><code>docker network inspect &lt;container id&gt;</code></p><p>复制指定容器内部文件到宿主机<br> docker cp nginx:/etc/nginx/conf.d/default.conf / docker cp wordpress:/usr/local/etc/php/php.ini /</p>`,40),d=[s];function t(a,n){return r(),o("div",null,d)}const i=e(p,[["render",t],["__file","docker常见命令汇总.html.vue"]]);export{i as default};
