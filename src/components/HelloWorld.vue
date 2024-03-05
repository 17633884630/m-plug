<template>
  <div class="hello">
    <p class="fz32 mb16 pb16">测试</p>
    <LineModule type="three" :data="threer">
      <!-- <span slot="more">更多</span> -->
    </LineModule>
  </div>
</template>

<script>
// 导入组件库
import mUi from '../../packages'
console.log(mUi)
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      value: 1,
      threer: [{label: '测试'}, {label: '测试'}, {label: '测试'}]
    }
  },
  components: { LineModule: mUi.TabModule }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>