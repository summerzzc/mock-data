import { MockData } from '../utils/createMockData';

const mockData = new MockData();
const { createMockData, data } = mockData;

// 通过MockData类，可以简洁的定义mockData
createMockData('/test1', {
  msg: 'hello world',
});

createMockData('/test2', {
  msg: 'hello world',
});

export default data;
