<!-- ChildComponent.vue -->
<template>
  <div class="child-component">
    <header>
      <!-- 默认插槽 -->
      <h2>这是父组件的数据：{{ parentMsg }}</h2>
      <h1><slot></slot></h1>
      <h1><slot></slot></h1>
    </header>

    <main>
      <!-- 作用域插槽 -->
      调用父组件事件：<button @click="handleClick">点击</button>
      <slot name="main" :message="'Hello from Child Component!'"></slot>
    </main>

    <footer>
      <!-- 具名插槽 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    parentMsg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$emit('parentFunc')
    },
  },
  // 展示父子组件生命周期
  beforeCreate() {
    console.log('子组件beforeCreate')
  },
  created() {
    console.log('子组件created')
  },
  beforeMount() {
    console.log('子组件beforeMount')
  },
  mounted() {
    console.log('子组件mounted')
  },
  beforeUpdate() {
    console.log('子组件beforeUpdate')
  },
  updated() {
    console.log('子组件updated')
  },
  beforeDestroy() {
    console.log('子组件beforeDestroy')
  },
  destroyed() {
    console.log('子组件destroyed')
  },
}
</script>

<style lang="scss">
.child-component {
  display: flex;
  flex-direction: column;
  gap: 10px;
  header {
    background-color: #f8f9fa;
    padding: 0.5rem;
  }

  main {
    background-color: antiquewhite;
    flex-grow: 1;
  }

  footer {
    background-color: #e9ecef;
    padding: 0.5rem;
  }
}
.defaultSolt {
  color: red !important;
}
</style>
