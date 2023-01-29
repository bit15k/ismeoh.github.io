---
date: 2023-01-26 02:45
sidebar: heading
---

# git基础

## 基本流程

以下命令构成了一个基本的工作流程即  
包含如下命令  

`git init`初始化git仓库  

`git add [file or more]`添加文件  

`git commit -m "note"`提交版本库  

`git status`查看当前状态  

## 版本回退

`git diff [file]`对比某文件  

`git log [--pretty=oneline]`查看commit快照历史  
每次提交commit简称**快照**  
通过哈希值确定快照的唯一性  

`git reset --hard 哈希值` 回退或指定规定哈希值的快照,通常要与git reflog一同使用  
即可以回退以前，也可以再回到现在  
其中`--hard`表示同时回退到工作区和暂存区  

如果回退版本少，可以使用下面简写  
`git reset --hard HEAD^`^表示回退一次，^^表示回退2次，依次类推  

`git reflog`查看每次执行命令历史，除了add命令不会记录  
通常用于查看哈希值，来回退指定版本  

---

## 工作原理

**工作区**  
即worktree,电脑直接看见的目录  

**版本库**  
主要包含两个  
**stage\index暂存区** 即add命令添加到的地方  
**master** 即commt添加的地方  

如图所示  

![20230126034407](https://cdn.jsdelivr.net/gh/ismeoh/imgchr/imgs/20230126034407.png)

git的基本工作流程  

1. `git init`初始化仓库
2. `git add`添加到stage
3. `git commit`暂存区所有文件添加到master  

## 管理修改

即git的每次修改必须先将文件添加到暂存区，然后再提交到master区  

如下面例子  

① 第一次修改 -> git add -> 第二次修改  -> git commit  ×  

② 第一次修改 -> git add -> 第二次修改 -> git add -> git commit √  

①第二次修改没有添加到暂存区，故只提交第一次修改到master  

故git管理的是修改，而不是文件  

## 撤销修改

撤销工作区文件包含如下  

- 修改未提交到stage，未提交master
- 修改已经提交到stage,未提交至master
- 修改已经提交到stage,已经提交至master

以下使用`git checkout --<file>`  
以下三种情况必须，修改的文件曾经add或commit过，即在stage或master区有快照

**修改未提交到stage，未提交master**  
那么工作区文件会恢复到和master一样  
`git checkout --<file>`  
等同于`git restore <file>`

**修改提交到stage,未提交至master**  
那么工作区文件会恢复到添加到stage之前的状态  
除了使用`git checkout --<file>`外还可使用  
`git reset HEAD <file>`  

以上，即恢复到最近一次add或commit状态  

**修改已经提交到stage,已经提交至master**  
即版本回退  

## 删除文件

包含如下情况

- 删除文件，提交stage,提交master  
  该情况是真删除  
  以下是误删除的三种情况  

- 误删除文件，未提交stage和master
- 误删除文件，提交stage,未提交master，从mater恢复文件到stage,再从stage恢复到master
- 误删除文件，提交stage,提交master，从master恢复文件  
  
以下所有情况必须，修改的文件曾经add或commit过，即在stage或master区有快照  

**真删除文件，提交stage,提交master**  
以下以test示例，说明删除文件的一般操作  

test创建，  
`git add test,git commmt test -m 'add test'`  
`rm test`  
`git status`此时会提示你，工作区删除操作没有被提交  
`git rm test`,`git commit test -m 'delete test'`  
`git status`此时提交master一并被删除  

注意：git rm和git add是一样的效果  

**误删除文件，未提交stage和master，从master恢复**  
逐步恢复  
`git reset HEAD <file>`从master恢复到stage  
`git restore <file>`从stage恢复到工作区  

以上等同于  
`git reset --hrad HEAD file`,参考版本回退  

等同于
`git checkout --file`

**误删除文件，提交stage,未提交master，从master恢复文件到stage，再从stage恢复到工作区**  
`git reset HEAD <file>`从master恢复到stage  
`git restore <file>`从stage恢复到工作区  
命令`git checkout --<file>`等同与`git reset HEAD`该命令已经不太常用，因为它的主要功能是切换分支  

**误删除文件，提交stage,提交master，从master恢复文件到stage，再从stage恢复到工作区**  
该操作与上面一样  

以上三种情况对应修改的三种情况，因为删除也是一种特殊的修改

`git restore`|`git checkout --file`|`git reset`  
截至到现在，上述三个命令对比  

`git restore`默认是从stage或master恢复至工作区  

`git reset`默认是从master恢复到stage,除非--hard直接同时恢复stage和master

`git checkout --file`是从暂存区恢复到工作区，该命令在最新版git事实上已经被`git reset & git restore`取代  
