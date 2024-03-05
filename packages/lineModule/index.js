import LineModule from './index.vue'

// 为组件提供 install 安装方法，供按需引入
LineModule.install = function (Vue) {
  Vue.component(LineModule.name, LineModule)
}

// 导出组件
export default LineModule