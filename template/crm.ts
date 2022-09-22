const crmTemplate = (data: any, flag = true) => {
  if (!flag) {
    return {
      flag,
      data,
      errorCode: 'S000000',
      errorMsg: '网络异常',
    };
  }
  return {
    flag: true,
    data,
    errorCode: 'S000000',
    errorMsg: '操作成功',
  };
};
export default crmTemplate;
