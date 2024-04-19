<template>
  <div>
    <h1>父组件num{{ num }}</h1>
    <!-- 插槽 -->
    <child-component :parentMsg="parentMsg" @parentFunc="add">
      <div class="defaultSolt">默认插槽</div>

      <template #main="{ message }">
        <h3>{{ message }}</h3>
        <p>来自子组件的内容</p>
      </template>

      <template #footer>
        <p>footer插槽</p>
      </template>
    </child-component>
  </div>
</template>
<script>
import ChildComponent from './components/ChildComponent'

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      parentMsg: '这是父组件的数据',
      num: 0,
    }
  },
  methods: {
    add() {
      this.num++
    },
  },
  // 展示父子组件生命周期
  beforeCreate() {
    console.log('父组件beforeCreate')
  },
  created() {
    console.log('父组件created')
  },
  beforeMount() {
    console.log('父组件beforeMount')
  },
  mounted() {
    console.log('父组件mounted')
    setTimeout(() => {
      this.parentMsg = '父组件数据更新了'
    }, 1000)
  },
  beforeUpdate() {
    console.log('父组件beforeUpdate')
  },
  updated() {
    console.log('父组件updated')
  },
  beforeDestroy() {
    console.log('父组件beforeDestroy')
  },
  destroyed() {
    console.log('父组件destroyed')
  },
}
</script>

<style lang="scss" scoped>
.defaultSolt {
  color: black;
}
</style>
