<template>
  <div>
    <h1>当前路由：{{ $route.path }}</h1>
    <h1>将要去：{{ toRoute }}</h1>
    <h1>路由参数：{{ $route.query }}</h1>
    <router-link to="/router/children">访问子路由</router-link>
    <!-- 子路由组件将在此处渲染 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 获取当前路由
      currentRoute: this.$route.path,
      toRoute: '',
    }
  },
  // 组件内的守卫
  beforeRouteEnter(to, from, next) {
    console.log('路由：beforeRouteEnter')
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log('路由：beforeRouteUpdate')
    next()
  },
  beforeRouteLeave(to, from, next) {
    this.toRoute = to.path
    setTimeout(() => {
      console.log('路由：beforeRouteLeave')
      next()
    }, 1000)
  },
}
</script>

<style lang="less" scoped></style>
