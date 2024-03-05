// 导入button组件
// import './common/var.less'
//测试组件
import LineModule from './lineModule/index' 
//头部组件
import TabModule from './tab/index' 
//通用公共方法
import * as Util  from './util/index.ts'

// console.log(Util)

// 组件列表
const components = [
    LineModule,
    TabModule
]

// 定义 install 方法，接收 Vue 作为参数（使用 use 注册插件，那么所有的组件都会被注册）
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  LineModule,
  //Tab组件
  TabModule,
  //公共方法
  Util
}
