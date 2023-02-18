import{_ as e,X as i,Y as n,a1 as d}from"./framework-ca96282b.js";const a={},s=d(`<h2 id="创建备份数据库存放处" tabindex="-1"><a class="header-anchor" href="#创建备份数据库存放处" aria-hidden="true">#</a> 创建备份数据库存放处</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>mkdir -p /backup/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="编写脚本" tabindex="-1"><a class="header-anchor" href="#编写脚本" aria-hidden="true">#</a> 编写脚本</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>#!/bin/bash
DATE=\`date +%Y%m%d%H%M\`                #备份日期时间
DATABASE=                              #备份数据库名称
DB_USERNAME=root                       #数据库账号
DB_PASSWORD=&quot;&quot;                         #数据库密码
BACKUP_PATH=/backup/data               #备份数据，禁止放在网站目录下

#备份命令

/usr/bin/mysqldump-u $DB_USERNAME-p $DB_PASSWORD -h 127.0.0.1 -R --opt $DATABASE | gzip &gt; \${BACKUP_PATH}\\/\${DATABASE}_\${DATE}.sql.gz

#删除7天前备份文件
find \${BACKUP_PATH} -mtime +7 -name &quot;\${DATABASE}_*.sql.gz&quot; -exec rm -f {} \\;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试脚本" tabindex="-1"><a class="header-anchor" href="#测试脚本" aria-hidden="true">#</a> 测试脚本</h2><p>给脚本执行权限 <code>chmod +x mysql_backup.sh</code><code>sh mysql_backup.sh</code></p><h2 id="配置定时任务" tabindex="-1"><a class="header-anchor" href="#配置定时任务" aria-hidden="true">#</a> 配置定时任务</h2><p><code>crontab -e</code>设置定时要求，会进入设置，详细用法看最下面</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>5 * * * * /mysql_backup.sh #设置每天五点调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>crontab -l</code>列出当前任务</p><p><code>service crontab reload</code>重新载入配置文件</p><h2 id="crontab命令" tabindex="-1"><a class="header-anchor" href="#crontab命令" aria-hidden="true">#</a> crontab命令</h2><h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h3><p><code>crontab [ -u user ] { -l | -r | -e }</code></p><p><code>-e</code>: 执行文字编辑器来设定时程表，内定的文字编辑器是 VI，如果你想用别的文<br> 字编辑器，则请先设定 VISUAL 环境变数来指定使用那个文字编辑器(比如说 setenv VISUAL joe)<br><code>-r</code>: 删除目前的时程表<br><code>-l</code>: 列出目前的时程表</p><p>执行此命令会进入文本编辑器，让你设置定时，具体格式如下</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>*    *    *    *    *
-    -    -    -    -
|    |    |    |    |
|    |    |    |    +----- 星期中星期几 (0 - 7) (星期天 为0)
|    |    |    +---------- 月份 (1 - 12) 
|    |    +--------------- 一个月中的第几天 (1 - 31)
|    +-------------------- 小时 (0 - 23)
+------------------------- 分钟 (0 - 59)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>其中 f1 是表示分钟，f2 表示小时，f3 表示一个月份中的第几日，f4 表示月份，f5 表示一个星期中的第几天。program 表示要执行的程序。</li><li>当 f1 为 <code>*</code> 时表示每分钟都要执行 program，f2 为 <code>*</code>时表示每小时都要执行程序，其馀类推 -当 f1 为 a-b 时表示从第 a 分钟到第 b 分钟这段时间内要执行，f2 为 a-b 时表示从第 a 到第 b 小时都要执行，其馀类推</li><li>当 f1 为 <code>*/n</code> 时表示每 n 分钟个时间间隔执行一次，f2 为 <code>*/n</code> 表示每 n 小时个时间间隔执行一次，类推</li><li>当 f1 为 a, b, c,... 时表示第 a, b, c,... 分钟要执行，f2 为 a, b, c,... 时表示第 a, b, c...个小时要执行，其馀类推</li></ul><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>每月每天每小时的第 0 分钟执行一次 /bin/ls

0 * * * * /bin/ls
在 12 月内, 每天的早上 6 点到 12 点，每隔 3 个小时 0 分钟执行一次 /usr/bin/backup

0 6-12/3 * 12 * /usr/bin/backup
周一到周五每天下午 5:00 寄一封信给 alex@domain.name

0 17 * * 1-5 mail -s &quot;hi&quot; alex@domain.name &lt; /tmp/maildata
每月每天的午夜 0 点 20 分, 2 点 20 分, 4 点 20 分....执行 echo &quot;haha&quot;

20 0-23/2 * * * echo &quot;haha&quot;
下面再看看几个具体的例子：

0 */2 * * * /sbin/service httpd restart  意思是每两个小时重启一次apache 

50 7 * * * /sbin/service sshd start  意思是每天7：50开启ssh服务 

50 22 * * * /sbin/service sshd stop  意思是每天22：50关闭ssh服务 

0 0 1,15 * * fsck /home  每月1号和15号检查/home 磁盘 

1 * * * * /home/bruce/backup  每小时的第一分执行 /home/bruce/backup这个文件 

00 03 * * 1-5 find /home &quot;*.xxx&quot; -mtime +4 -exec rm {} \\;  每周一至周五3点钟，在目录/home中，查找文件名为*.xxx的文件，并删除4天前的文件。

30 6 */10 * * ls  意思是每月的1、11、21、31日是的6：30执行一次ls命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自启命令" tabindex="-1"><a class="header-anchor" href="#自启命令" aria-hidden="true">#</a> 自启命令</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>/sbin/service crond start //启动服务

/sbin/service crond stop //关闭服务

/sbin/service crond restart //重启服务

/sbin/service crond reload //重新载入配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),l=[s];function r(c,v){return i(),n("div",null,l)}const m=e(a,[["render",r],["__file","Linux下定时备份MYSQL数据库.html.vue"]]);export{m as default};
