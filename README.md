# mockdata(模拟数据)

#### 介绍
监听端口，匹配的接口，返回mockData文件下的数据，
template是返回的模板

#### 使用说明

1.  安装包
2.  修改template下的文件，改为自己的需要的返回模板；也可以新建，在config.ts里修改使用的模板文件
3.  在mockData下添加文件，添加接口（接口添加参照mockData/crm.ts）;服务会自动读取mockData下的文件内容，不需要额外配置
4.  启动服务：npm run start

#### 备注
在utils/loadMockData.ts中，我引用了common，这是我自己再次封装的nodeApi，没有上传npm，
如果要运行，请改为node原生api

