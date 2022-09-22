import { config } from './config';
import { httpServer } from './server/http';
import { httpsServer } from './server/https';
import { loadMockData } from './utils/loadMockData';

const { port, https } = config;
global.mockData = {};

loadMockData().then(() => {
  let server = https ? httpsServer() : httpServer();
  server.listen(port);
  console.log('初始化完成');
});
