<template>
  <div>
    <h2>{{ title }}</h2>
    <p v-if="contentReady">组件内容：{{ componentContent }}</p>
    <button @click="toggleContent">切换内容</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vue组件生命周期',
      componentContent: '',
      contentReady: false,
    }
  },
  beforeCreate() {
    console.log('beforeCreate: 组件实例被创建前')
  },
  created() {
    console.log(
      'created: 组件实例已创建，数据观测(data observer)和事件(event)都处于可用状态，但DOM还未渲染'
    )
    this.fetchComponentContent()
  },
  beforeMount() {
    console.log(
      'beforeMount: 模板编译挂载之前，此时虚拟DOM已经创建完成，即将开始渲染到页面中'
    )
  },
  mounted() {
    console.log('mounted: 组件已经渲染到页面中，可以操作DOM元素')
    this.$nextTick(() => {
      console.log('mounted: 在$nextTick回调中执行DOM操作，确保DOM更新完毕')
    })
  },
  beforeUpdate() {
    console.log('beforeUpdate: 数据发生变化时，虚拟DOM重新渲染之前')
  },
  updated() {
    console.log('updated: 数据变化导致的虚拟DOM重新渲染已完成，界面已经更新')
  },
  beforeDestroy() {
    console.log('beforeDestroy: 组件销毁前，可以在此做一些清理工作')
  },
  destroyed() {
    console.log('destroyed: 组件已被销毁')
  },
  methods: {
    fetchComponentContent() {
      setTimeout(() => {
        this.componentContent = '这是从服务器获取的数据'
        this.contentReady = true
      }, 1000)
    },
    toggleContent() {
      this.contentReady = !this.contentReady
    },
  },
}
</script>

<style scoped></style>
