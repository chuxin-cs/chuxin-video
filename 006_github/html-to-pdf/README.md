安装包（需注意Chrome是否成功安装）
```
pnpm i
```
启动服务
```
node index.js
```
启动成功后可用 `http://127.0.0.1:3080/create-pdf?link=https://www.baidu.com/` 来生成pdf

如不想用puppeteer，可看下print.html

print.html是使用原生的window.print()的示例代码