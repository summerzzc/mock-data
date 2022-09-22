import { join } from 'path';
import { readFolder } from 'common';

export const loadMockData = async () => {
  const realPath = join(process.cwd(), 'mockData');
  // readFolder是我自己封装的，可以改为node的readFolder
  const mockDataUrlArr = await readFolder(realPath);
  if (mockDataUrlArr) {
    const importArr = mockDataUrlArr.map((item) => import(item));
    const importMockData: any[] = await Promise.all(importArr);
    const data = {};
    importMockData.forEach((module) => {
      Object.assign(data, module.default);
    });
    global.mockData = data;
  }
};
