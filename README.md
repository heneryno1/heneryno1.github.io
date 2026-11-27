---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: a101ac3647f8d2fe046fd54f22f743c3_c02f431bea0311f1aa8b525400dc9a98
    ReservedCode1: kj8LIvUnyTZ6zCpWFbOzQQwD8n0ktenNyEiobNR3xHV72Is7+pORRro4NZkDTayr7fkRJBw944rzANskV2/LXSOVkSoLRtDbsKr03d1Ie8WZKqdmXOQSI5QO6tFWOGQHY6KeI2xFW0P+KMa/dvYtBvYK7XAfXIjMBqnNg+SSdT7VLIM9gisYU5E+e7E=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: a101ac3647f8d2fe046fd54f22f743c3_c02f431bea0311f1aa8b525400dc9a98
    ReservedCode2: kj8LIvUnyTZ6zCpWFbOzQQwD8n0ktenNyEiobNR3xHV72Is7+pORRro4NZkDTayr7fkRJBw944rzANskV2/LXSOVkSoLRtDbsKr03d1Ie8WZKqdmXOQSI5QO6tFWOGQHY6KeI2xFW0P+KMa/dvYtBvYK7XAfXIjMBqnNg+SSdT7VLIM9gisYU5E+e7E=
---

# 我的个人主页（GitHub Pages 模板）

这是一套给初中生用的个人主页模板，纯 HTML + CSS + JavaScript，不需要安装任何软件，
上传到 GitHub 就能变成一个真正的网站。

页面风格参考 GitHub Pages 自带的 Cayman 主题：顶部蓝绿渐变、白色内容卡片、清爽的圆角导航。

---

## 一、先看看它长什么样

双击 `index.html`，用浏览器打开就能看。四个页面可以互相跳转：

| 页面 | 文件 | 内容 |
| --- | --- | --- |
| 关于我 | `index.html` | 姓名、年级、学校、爱好、小目标 |
| 作品展示 | `works.html` | 作品卡片，每张卡片有名称、说明、分类 |
| 学习笔记 | `notes.html` | 笔记列表，带关键词搜索 |
| 联系方式 | `contact.html` | 邮箱、GitHub、说明 |

---

## 二、怎么改成自己的（最重要的一步）

网页里所有用 **【】** 括起来的地方，都是"占位符"，把它们换成你自己的内容，然后**删掉【】这层括号**。

比如：

```html
<h1 class="project-name">【你的名字】</h1>
```

改成：

```html
<h1 class="project-name">李明</h1>
```

### 建议按这个顺序改

1. **改名字和介绍**：打开 `index.html`，找到最上面的 `<h1 class="project-name">` 和 `<p class="project-tagline">`。
2. **改基本信息**：`index.html` 里的"基本信息"表格，把每个 `<td>` 里的内容换掉。
3. **改作品**：打开 `works.html`，复制一整段 `<article class="work-card"> ... </article>`，粘贴到 `</div>` 前面，再改里面的文字。
4. **改笔记**：打开 `notes.html`，用同样的办法复制 `<article class="note-item"> ... </article>`。
5. **改联系方式**：打开 `contact.html`，把邮箱和 GitHub 用户名换成自己的。
6. **改页脚**：每个页面最下面的版权署名。

### 换颜色（可选）

打开 `css/style.css`，文件最上面有：

```css
--brand-start: #155799;   /* 深蓝 */
--brand-end:   #159937;   /* 青绿 */
```

改这两个色号，整个网站的渐变颜色就变了。不知道选什么颜色，可以上网搜"HTML 颜色代码"挑一个喜欢的。

---

## 三、放图片

1. 把图片放进 `images` 文件夹（比如 `images/我的画.jpg`）。
2. 在 `works.html` 里，把这一行：

```html
<div class="work-cover">作品图片（可替换）</div>
```

换成：

```html
<img src="images/我的画.jpg" alt="我的画" style="width:100%;border-radius:.35rem;margin-bottom:.9rem;">
```

注意：`src` 里写的是**相对路径**，不用写 `E:\` 或者 `C:\` 这种电脑上的盘符，
因为网站上线以后，文件是从网站根目录开始找的。这一点对 GitHub Pages 很重要。

---

## 四、发布到 GitHub Pages

### 第 1 步：在 GitHub 建一个仓库

1. 注册或登录 [github.com](https://github.com)。
2. 右上角 `+` → `New repository`。
3. 仓库名字必须写成：`你的用户名.github.io`
   （比如用户名是 `liming`，仓库名就是 `liming.github.io`，一个字母都不能差）。
4. 选 `Public`，点 `Create repository`。

### 第 2 步：上传文件

在仓库页面点 `Add file` → `Upload files`，
把这套文件**全部**拖进去（包括 `css`、`js`、`images` 三个文件夹，以及 4 个 html 文件），
然后在下面点 `Commit changes`。

注意：要上传**文件夹里面的东西**，不要只上传外面的文件夹，
上传完成后仓库首页应该能直接看到 `index.html`。

### 第 3 步：打开设置

仓库页面 → `Settings` → 左边找到 `Pages` → 
`Source` 选 `Deploy from a branch` → 分支选 `main`，目录选 `/ (root)` → 点 `Save`。

### 第 4 步：等一两分钟

再刷新这个 Pages 页面，顶部会出现一行：
`Your site is live at https://你的用户名.github.io/`

点开它，就是你的网站了。

### 以后怎么更新

改完文件后，回到仓库，把改过的文件重新上传覆盖，`Commit changes`，
等一两分钟刷新网站就能看到新内容。

---

## 五、文件夹结构

```
my-homepage/
├── index.html          关于我（首页，必须叫 index.html）
├── works.html          作品展示
├── notes.html          学习笔记
├── contact.html        联系方式
├── css/
│   └── style.css       全站样式（颜色、字体、间距都在这里）
├── js/
│   └── main.js         小功能：导航高亮、页脚年份、笔记搜索
├── images/
│   └── 说明.txt        图片放这里
├── .nojekyll           告诉 GitHub Pages 不用 Jekyll 处理（别删）
└── README.md           就是本文件
```

---

## 六、常见问题

**页面打开是白的一片，只有文字没有颜色？**
`css/style.css` 没有和 html 文件放在一起，或者路径被改了。检查 `css` 文件夹是否和 `index.html` 在同一层。

**点了导航跳到"404 Not Found"？**
文件名大小写不一致。GitHub 上 `Index.html` 和 `index.html` 是两个不同的文件，统一用小写。

**上传后网站还是旧样子？**
GitHub Pages 需要一两分钟生效，等一下再强制刷新（Ctrl + F5）。

**图片不显示？**
检查 `src` 里的路径和图片文件名是否完全一致，包括后缀 `.jpg` 还是 `.png`。

**想加第五个页面？**
复制 `contact.html` 存成新名字（比如 `hobbies.html`），改内容，
再把四个页面导航里的 `<nav>` 部分都加上一行 `<a href="hobbies.html">我的爱好</a>`。

---

## 七、给家长的一点提示

- 页面是公开的，请提醒孩子**不要写真实住址、手机号、身份证号**，留邮箱即可。
- 建议和孩子一起改第一个版本，之后让孩子自己维护，遇到不会的地方再一起查。
- 每次改完可以先在本机双击 html 看效果，确认没问题再上传。
*（内容由AI生成，仅供参考）*
