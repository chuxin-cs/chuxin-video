const http = require("http");
const url = require("url");
const querystring = require("querystring");
const server = http.createServer((req, res) => {
  // 解析请求，包括路径名和查询参数
  const parsedUrl = url.parse(req.url);

  // 解析查询参数
  const queryParams = querystring.parse(parsedUrl.query);

  // 判断请求是否为PDF请求
  if (parsedUrl.pathname === "/create-pdf") {
    // 使用函数转换指定的URL
    urlToPDF(queryParams).then((response) => {
      console.log("PDF已生成：", response);
      //Access-Control-Allow-Origin允许跨越（主要方便本地联调）
      res.writeHead(200, {
        "Content-Type": "application/json; charset=utf8",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(JSON.stringify(response));
    });
  }
});

const hostname = "127.0.0.1";
const port = 3080;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const puppeteer = require("puppeteer");

async function urlToPDF(params) {
  if (!params.link) {
    return {
      code: 0,
      msg: "链接为空",
    };
  }
  // 启动浏览器
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  // 打开新页面
  const page = await browser.newPage();
  /* await page.setViewport({
    width: 1920,
    height: 1080
  })*/

  /*
  //如果打开的页面需要设置cookie可使用这里的代码
  const cookie = {
    name: 'Admin-Token',
    value: params.token||'',
    domain: hostname,
    path: '/',
    expires: -1 // Session cookie
  }
  await page.setCookie(cookie)*/
  console.log("pdfLink:", params.link);

  await page.goto(params.link, { waitUntil: "networkidle0" });

  await page.addStyleTag({
    content: `
      @media print {
          body {
              display: block !important
          }
      }
    `
  });


  // 页眉模板（图片使用base64）
  // <img style="width: 80px; height: auto;" src="data:image/png;base64,xxxxxxxxxxxx" />
  const headerTemplate = `<div
style="width: calc(100% - 28px); margin-top: -13px; font-size:8px;border-bottom:2px solid #e1dafb;padding:6px 14px;display: flex; justify-content: space-between; align-items:center;">
<span style="color: #9a7ff7; font-size: 12px; font-family: my-font;">初心出品</span>

</div>`;
  // 页脚模板（pageNumber处会自动注入当前页码）
  const footerTemplate = `<div 
style="width:calc(100% - 28px);margin-bottom: -20px; font-size:8px; padding:15px 14px;display: flex; justify-content: space-between; ">
<span style="color: #9a7ff7; font-size: 10px;">这里是页脚</span>
<span style="color: #9a7ff7; font-size: 13px;" class="pageNumber"></span> 
</div>`;
  // 将页面保存为PDF
  const fileBuffer = await page.pdf({
    headerTemplate,
    footerTemplate,
    // scale: 1,
    margin: {
      // 页面边距
      top: "20mm",
      bottom: "20mm",
      left: "10mm",
      right: "10mm",
    },

    landscape: false,
    format: "A4",
    displayHeaderFooter: true,
    printBackground: true,
    timeout: 60000, // 1 分钟
  });

  /*
  //直接返回
  // 关闭浏览器
  await browser.close()

  return fileBuffer*/

  /*
  //上传文件到服务器
  let returnData = ''
  uploadFile(fileBuffer,params).then((response) => {
    console.log('response:',response);
    returnData=response
    // 关闭浏览器
    browser.close()
  })
  return returnData*/

  const fileName = `${Date.now()}.pdf`;
  // 写入文件系统
  require("fs").writeFileSync(fileName, fileBuffer);
  await browser.close();
  return {
    code: 200,
    msg: "pdf生成成功",
    data: fileName,
  };
}

const axios = require("axios");
const FormData = require("form-data");
//因为部署在在同一个服务器上，所以直接内网调用
const apiHost = "http://127.0.0.1:8080";
//上传文件到服务器
async function uploadFile(fileBuffer, params) {
  const form = new FormData();
  form.append("file", fileBuffer, `${Date.now()}.pdf`);
  form.append("type", "user");
  // 设置请求头（form 会自动设置Content-Length）
  const headers = {
    ...form.getHeaders(),
    authorization: "Bearer " + params.token,
  };
  let pdfRes = "";
  await axios
    .post(`${apiHost}/oss/upload`, form, { headers })
    .then((response) => {
      console.log("Success:", response.data);
      pdfRes = response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return pdfRes;
}
