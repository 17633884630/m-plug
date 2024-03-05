import TabModule from './index.vue'

// 为组件提供 install 安装方法，供按需引入
TabModule.install = function (Vue) {
  Vue.component(TabModule.name, TabModule)
}

// 导出组件
export default TabModule