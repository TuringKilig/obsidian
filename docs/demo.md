#  前端学习 TODO 列表

##  前端基础

- 了解 **服务器映射**  
  - ATP 服务器如何把文件夹映射成网站  
    1. 假设有一个文件夹 /var/www/html/a.html, 当你在浏览器里输入：`http://localhost/a.html`, 浏览器会发送一个http请求给`localhost`
    2. 浏览器发出的请求会被服务器解析:
       服务器监听某个端口（比如 8080），接收到请求后：
       - 把请求路径 `/index.html` 拼接到服务器设定的 根目录，比如：
          ``` 
          根目录: /var/www/html
          路径:   /index.html
          真实文件: /var/www/html/index.html

    3. 读取文件并返回
       服务器检查文件是否存在，如果存在就读取内容。
       返回响应：
       ```
       HTTP/1.1 200 OK
        Content-Type: text/html
    4. 浏览器渲染：
       - 浏览器收到内容，解析 HTML，遇到` <link> <script> <img> `再发请求。
       - 服务器同样按照路径规则找到对应文件，继续返回。

  - **Web 服务器怎么知道去哪个文件夹找文件?**
    1. 在于 服务器配置（通常在 Web 服务器软件里，比如 Nginx/Apache/Node.js）
    - server_name 或 端口号 → 映射到 某个文件夹，如：
      ```
      例如在NGINX：
      # 网站1 配置
        server {
            listen 80;                        # 监听 80 端口
            server_name site1.com;            # 或指定域名
            root /var/www/site1;              # 根目录 = 文件夹A
            index index.html;
        }

      # 网站2 配置
        server {
            listen 90;                        # 监听 90 端口
            server_name site2.com;
            root /var/www/site2;              # 根目录 = 文件夹B
            index index.html;
        }
    这样：
    - 请求 `http://localhost:80/index.html` → 去 /var/www/site1/index.html
    - 请求 `http://localhost:90/index.html` → 去 /var/www/site2/index.html
    2. 服务器是如何“知道”的?
       - 操作系统级别：
         - TCP/IP 协议栈收到请求，发现请求端口 = 80
         - 把这个请求交给正在监听 80 端口的进程（比如 Nginx）
       - Web 服务器级别：
         - Web 服务器看请求的 Host（域名）和端口号
         - 匹配到配置文件里对应的规则（哪个 server 块）。
       - 文件系统映射：
         - 把请求路径 /xxx.html 拼接到配置里的 root 路径（例如 /var/www/site1）。
         - 得到真实路径 /var/www/site1/xxx.html
         - 读取文件，返回给浏览器。
  
    **总结：操作系统只负责把请求交给监听该端口的进程；而具体请求路径对应哪个文件夹（根目录），完全是由 Web 服务器配置文件决定的。**
  - Node 工具：`http-server` 映射文件夹  
  - 搞清楚 **404 与 500 的区别** （A 找不到 B → 404；A 自己出错 → 500）

- 搞懂 **index.html 的作用**  
  - index 是前端项目的默认入口  
  - 目录暴露的安全措施要了解一下  
  - 为什么 index 默认只能是纯文本显示？（表格、样式需要额外引入） 

- 熟悉 **文件路径规则**  
  - 路径找文件：文件夹下默认找 `index.html`  
  - `./assets/a.css` vs `/assets/a.css` 的区别  
  - 本地文件访问（双击 `D:/xxx.html`） vs 服务器访问（`http://localhost:port`）

---

##  HTML / CSS / JS

- 写一个最基础的 **HTML 页面**  
  - 外部引入 JS & CSS 文件  
  - 在 HTML 里通过 `<script>` & `<link>` 加载

- 掌握加载顺序  
  - CSS 会立即应用到 DOM  
  - JS 需要等 DOM 加载完成再运行（可用 `defer` 或 `DOMContentLoaded`）

- 在 MDN 上查一些关键词（例如 DOM、CSSOM、加载顺序）

---

## TypeScript & Vue

- 在项目里引入 **TypeScript**  
  - 先编译 TS → JS，再在 HTML 里使用  
  - 理解为什么浏览器不能直接跑 `.ts`

- 学习 **Vue 基础项目搭建**  
  - 创建 Vue 项目（包含 TS、JSX、Vue Router、Pinia、ESLint、Prettier）  
  - 明白这些工具的作用

---

## 文档与静态站点

> Markdown 文件（`.md`）本身就是天然的静态资源，可以直接丢到文件夹或服务器作为文档。

- 学习 **VitePress**  
  - 在项目里初始化 VitePress  
  - 跑起来一个本地文档站点  
  - 尝试修改样式，看看能否打包离线使用  
  - 最后部署到服务器

- 了解 **MDBook**  
  - 学习如何生成“电子书”风格的文档

---

##  总结

<TaskList :items="[
  '了解服务器映射 (http-server)',
  '写基础 HTML + CSS + JS 页面',
  '尝试 TS 编译',
  '跑起 VitePress',
  '学习 Vue 生态 (Router, Pinia, ESLint, Prettier)'
]" />