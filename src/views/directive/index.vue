<template>
  <div>
    <!-- 使用自定义指令高亮显示文本 -->
    <p v-highlight="highlightColor">被高亮的文字</p>
    <!-- 自动聚焦 -->
    <input type="text" v-focus />

    <!-- 使用混合功能，插入计算属性及方法 -->
    <div>
      <p>num：{{ num }}</p>
      <button @click="incrementNum">点击触发混合方法</button>
    </div>

    <!-- 使用过滤器得出乘方与立方结果 -->
    <p>num平方：{{ num | square }}</p>
    <p>num四次方：{{ num | square | square2 }}</p>
    <p>过滤器传参：{{ num | filterA(2) }}</p>
  </div>
</template>

<script>
import mixins from './mixins'
export default {
  mixins: [mixins],
  data() {
    return {
      highlightColor: 'blue',
      num: 0,
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
  methods: {
    add() {
      this.num = this.num + 6
    },
  },
  directives: {
    highlight: {
      bind(el, binding, vnode) {
        el.style.color = binding.value
      },
      update(el, binding, vnode) {
        el.style.color = binding.value
      },
    },
    focus: {
      inserted(el) {
        el.focus()
      },
    },
  },
  filters: {
    // 平方
    square(num) {
      return num * num
    },
    // 四次方
    square2(value) {
      return value * value
    },
    filterA(value, arg) {
      return '当前num为' + value + '，传参为' + arg
    },
  },
}
</script>

<style lang="less" scoped></style>
