<template>
  <div>
    <!-- 显示计数器 -->
    <p>Count: {{ formattedCount }}</p>
    <!-- 显示用户登录状态和用户名 -->
    <p v-if="isLoggedIn">用户已登录，用户名：{{ userName }}</p>
    <p v-if="isLoggedIn">
      通过$store.state获取用户名：{{ $store.state.user.userInfo }}
    </p>
    <p v-else>用户未登录</p>
    <!-- 按钮触发计数器操作 -->
    <button @click="incrementCount">增加</button>
    <button @click="incrementCountAsync">异步增加</button>
    <!-- 登录/登出按钮 -->
    <button v-if="!isLoggedIn" @click="login">登录</button>
    <button v-if="isLoggedIn" @click="logout">登出</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapState('user', ['isLoggedIn']),
    ...mapGetters(['formattedCount']),
    ...mapGetters('user', ['userName']),
  },
  methods: {
    ...mapMutations(['incrementCount']),
    ...mapMutations('user', ['setLoggedIn']),
    ...mapActions(['incrementCountAsync']),
    ...mapActions('user', ['login', 'logout']),

    handleLogin() {
      this.login(this.credentials)
      // 使用$store调用mutations中的方法
      // this.$store.commit('incrementCount')
      // 使用$store调用action中登录方法
      // this.$store.dispatch('user/login', this.credentials)
    },
  },
}
</script>

<style lang="less" scoped></style>
