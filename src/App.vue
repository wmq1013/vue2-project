<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- 基础语法与模板 -->
      <router-link to="/templateSyntax">基础语法与模板</router-link> |
      <!-- 生命周期 -->
      <router-link to="/lifecycleHooks">生命周期</router-link> |
      <!-- 组件化开发 -->
      <router-link to="/component">组件化开发</router-link> |
      <!-- 路由 -->
      <router-link to="/router">路由</router-link> |
      <!-- Vuex状态管理 -->
      <router-link to="/vuex">Vuex状态管理</router-link> |
      <!-- 过渡与动画效果 -->
      <router-link to="/transition">过渡与动画效果</router-link> |
      <!-- 表单处理与验证 -->
      <router-link to="/form">表单处理与验证</router-link> |
      <!-- 自定义指令 -->
      <router-link to="/directive">自定义指令</router-link>
      <button @click="goToRouter">跳转到路由</button>
    </nav>
    <!-- 路由切换时，keep-alive组件可以缓存组件，避免重复渲染,include匹配组件name -->
    <keep-alive :include="['templateSyntax']">
      <router-view />
    </keep-alive>
    <!-- 可以有多个<router-view /> -->
    <div class="small-div" v-if="this.$route.path === '/templateSyntax'">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
    goToRouter() {
      this.$router.push({ path: '/router', query: { id: 123 } })
    },
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-active {
      color: #42b983;
      &:first-child {
        color: unset;
      }
    }
    &.router-link-exact-active {
      color: #42b983 !important;
    }
  }
}

.small-div {
  width: 100%;
  height: 500px;
  overflow: auto;
  // 缩放
  transform: scale(0.6);
}
</style>
