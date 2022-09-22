import https from 'https';

// req : 从浏览器带来的请求信息
// res : 从服务器返回给浏览器的信息
export const httpsServer = () => https.createServer((req, res) => {});
