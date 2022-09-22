import { MockData } from '../utils/createMockData';

const mockData = new MockData();
const { createMockData, data } = mockData;

createMockData('/test3', {
  msg: 'hello world',
});

export default data;
