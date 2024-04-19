<template>
  <div>
    <!-- 自定义指令 -->
    <p v-highlight="highlightColor">Highlighted text</p>
  </div>
</template>
<script>
export default {
  data() {
    return { highlightColor: 'yellow' }
  },
  created() {},
  methods: {},
  directives: {
    highlight: {
      bind(el, binding, vnode) {
        el.style.backgroundColor = binding.value
      },
      update(el, binding, vnode) {
        el.style.backgroundColor = binding.value
      },
    },
  },
}
</script>

<style lang="less" scoped></style>
