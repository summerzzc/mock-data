import http from 'http';
import url from 'url';
import { config } from '../config';
const { template } = config;

// req : 从浏览器带来的请求信息
// res : 从服务器返回给浏览器的信息
export const httpServer = () =>
  http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const pathname = url.parse(req.url || '').pathname || '';
    if (global.mockData.hasOwnProperty(pathname)) {
      const mock = global.mockData[pathname];
      let body = '';
      //每当接收到请求体数据，累加到post中
      req.on('data', function (chunk) {
        body += chunk; //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
      });
      req.on('end', function () {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(template(mock.data, mock.flag)));
        res.end();
      });
    } else {
      //TODO:后期优化，不存在mockData里的接口，转发到原来的接口中
      req.on('end', function () {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(template({}, false)));
        res.end();
      });
    }
  });
