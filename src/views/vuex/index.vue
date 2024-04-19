<template>
  <div>
    <!-- 显示计数器 -->
    <p>Count: {{ formattedCount }}</p>

    <!-- 显示用户登录状态和用户名 -->
    <p v-if="isLoggedIn">用户已登录，用户名：{{ userName }}</p>
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
    },
  },
}
</script>

<style lang="less" scoped></style>
