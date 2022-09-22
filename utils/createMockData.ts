export class MockData {
  public data: any;
  constructor() {
    this.data = {};
  }

  /**
   * @description: 在MockData中创建data
   * @param {string} url
   * @param {*} data
   * @return {*} {url: string;data: T;}
   */
  createMockData = <T>(url: string, data: T): any => {
    this.data[url] = {
      url,
      data,
    };
  };
}
