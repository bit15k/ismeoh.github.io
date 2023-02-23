import{_ as e,W as n,X as s,a0 as a}from"./framework-0a321081.js";const i={},d=a(`<h1 id="centos7-vsftpd安装与配置" tabindex="-1"><a class="header-anchor" href="#centos7-vsftpd安装与配置" aria-hidden="true">#</a> Centos7+Vsftpd安装与配置</h1><h2 id="防火墙配置" tabindex="-1"><a class="header-anchor" href="#防火墙配置" aria-hidden="true">#</a> 防火墙配置</h2><p>如果没有安装可以忽略</p><p>CentOS7.0以上版本更换了防火墙为firewall，7.0之前版本的防火墙配置不再适用</p><p>重启防火墙服务<code>systemctl restart firewalld.service</code></p><p>重载防火墙配置<code>firewall-cmd --reload</code></p><p>添加端口<code>firewall-cmd --zone=public --add-port=21/tcp --permanent</code></p><p>添加vsftpd服务<code>firewall-cmd --permanent --add-service=ftp</code></p><p>关闭SELinux<code>vi /etc/selinux/config</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#SELINUX=enforcing #注释掉</span>

<span class="token comment">#SELINUXTYPE=targeted #注释掉</span>

<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled <span class="token comment">#增加</span>

:wq<span class="token operator">!</span> <span class="token comment">#保存退出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SELINUX简介</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>SELinux(Security-Enhanced Linux)是美国国家安全局（NSA）对于强制访问控制的实现，是 Linux历史上最杰出的新安全子系统。NSA是在Linux社区的帮助下开发了一种访问控制体系，在这种访问控制体系的限制下，进程只能访问那些在他的任务中所需要文件。
SELinux旨在提高Linux系统的安全性，提供强健的安全保证，可防御未知攻击。
大部分情况下，我们访问ftp的时候会被SELinux拦截，当然如果你没也设置SELiunx也能正常访问，此步可以跳过。
大家通常的作法是关闭SELiunx，这样做会引起其它安全问题，嫌麻烦的可以直接关闭：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置selinux" tabindex="-1"><a class="header-anchor" href="#配置selinux" aria-hidden="true">#</a> 配置SELinux</h2><p>如果直接关闭，跳过此步骤</p><p>setenforce 0 #让SELinux进入Permissive模式（宽容模式）<br> SELiunx一共有三种模式：</p><ul><li>enforcing（强制模式 ）：开始限制domain/type</li><li>permissive（宽容模式） ：仅会有警告信息</li><li>disabled（关闭）：关闭SELinux</li></ul><p>设置SELiunx：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/sbin/sestatus <span class="token parameter variable">-v</span> <span class="token comment">#查看SELinux状态 SELinux </span>
<span class="token operator">&gt;</span> status: enabled <span class="token comment">#启用 SELinuxfs mount: </span>
<span class="token operator">&gt;</span> /sys/fs/selinux SELinux root directory: /etc/selinux Loaded 
<span class="token operator">&gt;</span> policy name: targeted Current mode: 
<span class="token operator">&gt;</span> enforcing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>setenforce 0 #暂时让SELinux进入Permissive模式</code></p><p>这个时候我们尝试访问一下ftp目录，发现能够正常访问。<br> 我们查看一下权限：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>etsebool <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">ftp</span> 
<span class="token operator">&gt;</span> ftpd_anon_write –<span class="token operator">&gt;</span> off 
<span class="token operator">&gt;</span> ftpd_connect_all_unreserved –<span class="token operator">&gt;</span> off 
<span class="token operator">&gt;</span> ftpd_connect_db –<span class="token operator">&gt;</span> off 
<span class="token operator">&gt;</span> ftpd_full_access –<span class="token operator">&gt;</span> off 
<span class="token operator">&gt;</span> ftpd_use_cifs –<span class="token operator">&gt;</span> off 
<span class="token operator">&gt;</span> ftpd_use_fusefs –<span class="token operator">&gt;</span> off 
<span class="token operator">&gt;</span> ftpd_use_nfs –<span class="token operator">&gt;</span> off 
<span class="token operator">&gt;</span> ftpd_use_passive_mode –<span class="token operator">&gt;</span> off 
<span class="token operator">&gt;</span> httpd_can_connect_ftp –<span class="token operator">&gt;</span> off 
<span class="token operator">&gt;</span> httpd_enable_ftp_server –<span class="token operator">&gt;</span> off 
<span class="token operator">&gt;</span> tftp_anon_write –<span class="token operator">&gt;</span> off 
<span class="token operator">&gt;</span> tftp_home_dir –<span class="token operator">&gt;</span> off 
<span class="token operator">&gt;</span> ftp_home_dir和allow_ftpd_full_access必须为on 才能使vsftpd 具有访问ftp根目录，以及文件传输等权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>setsebool -P tftp_home_dir 1</code><br><code>setsebool -P allow_ftpd_full_access 1</code><br> 让我们再回到强制模式：<br><code>setenforce 1 #进入Enforcing模式</code><br> 如果还是不行的话，可能是我们的目录没有权限：<br><code>chmod -R 777 /usr/yong.cao/ftp #ftp的访问路径</code></p><h2 id="配置vsftpd" tabindex="-1"><a class="header-anchor" href="#配置vsftpd" aria-hidden="true">#</a> 配置vsftpd</h2><p>用<code>vim /etc/vsftpd/vsftpd.conf</code>打开后修改或者新增：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>anonymous_enable=NO    #不允许匿名访问

write_enable=YES    #写权限

local_root=/usr/yong.cao/ftp   #这里是我自定义的ftp目录

chroot_local_user=YES    #这个是限制ftp用户只能在自己目录，如果ftp可以跳到其它任意目录是比较危险的，建议限制

allow_writeable_chroot=YES   #2.3.5之后，如果用户被限定在了其主目录下，则该用户的主目录不能再具有写权限了，需新增此配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>激活root用户</strong> 处于安全考虑，root用户是不能作为ftp的登录账户的，如果在没有限制访问目录的情况下，root用户可以在ftp里访问任一文件，所以默认是不能登录ftp的。当然，你也可以为新建一些用户，专门作为ftp用户，个人习惯，用虚拟机的时候我一般直接用root用户登录ftp。</p><p>我们需要注释或者删除/etc/vsftpd/ftpusers和/etc/vsftpd/user_list中的root：</p><p><code>vi /etc/vsftpd/ftpusers</code></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>#Users that are not allowed to login via ftp
#root
bin
daemon
adm
lp
sync
shutdown
halt
mail
news
uucp
operator
games
nobody
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>vi /etc/vsftpd/user_list</code></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>#vsftpd userlist
#If userlist_deny=NO, only allow users in this file
#If userlist_deny=YES (default), never allow users in this file, and
#do not even prompt for a password.
#Note that the default vsftpd pam config also checks /etc/vsftpd/ftpusers
#for users that are denied.
#root
bin
daemon
adm
lp
sync
shutdown
halt
mail
news
uucp
operator
games
nobody
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重启服务</strong></p><p>CentOS7中是用这个命令：<code>systemctl restart vsftpd.service</code><br> 如果是其它系统：<code>service restart vsftpd</code></p>`,33),l=[d];function t(r,o){return n(),s("div",null,l)}const p=e(i,[["render",t],["__file","Vsftpd安装和配置.html.vue"]]);export{p as default};
