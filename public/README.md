# 执行顺序
## 全局安装 typescript
* npm install typescript -g

## 全局安装 gulp
* npm install gulp-cli -g

## 全局安装 jspm (该包主要为了安装plugin-css插件 若.ts里不需要通过import 方式引入css可以不需要安装)
* npm install jspm -g

## 安装package.json下的包
* npm install

## 安装 plugin-css (systemjs 加载css 需要)
* jspm install css

# 开发环境
## typescript执行脚本,默认会去读取tsconfig.json配置文件
* tsc_dev.bat

## 执行gulp 脚本，将typescript目录下的组件css,html拷贝到 ts编译目录 javascript
* gulp_run.bat

# 打包 
* 执行webpack脚本 默认读取webpack.config.js配置文件
* dist 为anglar的默认打包输出目录 js为 常规打包输出目录
* webpackx.bat


# 包目录
* app为node 后端服务目录
* public 为静态资源根目录 所有的前端资源都在该目录下
* public/css 全局 css目录 ，所有组件css 请跟对应的组件放一起，便于打包
* public/html 前端html目录
* public/src/typescript ts 源码目录
* public/src/javascript ts 编译后的js 目标目录
* public/dist 为webpack打包输出目录 ,webpack会 遍历 typescript目录里的*.ts,*.html,*.css，打包输出到dist目录

# typescript 目录 规范

- 名词解释: 页面，一个真实存在的路径地址 为一个页面。路由页面，由前端路由设置的url路径

- pages目录 为页面目录。该目录下一级文件 *.ts为页面的入口文件。该文件对应同名目录，为该页面对应的所有组件,例如

* 首页(index)对应的 入口文件为index.ts。 pages/index/components 为首页下的所有组件。
* indexModule.ts为入口文件所引用的模块。route.ts 为该页面的路由
* 入口文件、模块、组件之间的关系 如下:一个入口文件引用一个模块（该模块为根模块）;一个模块引用多个组件。

- components 为公共组件，即能被其他页面或者路由页面所引用的公共组件 比如 日期控件，导航控件等

- service 为服务目录，即前端ajax异步请求服务目录

