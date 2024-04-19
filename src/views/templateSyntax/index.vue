<template>
  <section>
    <!-- 数据绑定(插值表达式) -->
    <input type="text" v-model="title" />
    <h1>数据绑定（插值表达式）:{{ title }}</h1>
    {{ title.length > 3 ? '标题长度大于3' : '标题长度小于3' }}
    <br />
    字符倒序排列:{{ title.split('').reverse().join('') }}
    <!-- 错误使用 -->
    <!-- 这是语句，不是表达式 -->
    <!-- {{ var a = 1 }} -->
    <!-- 流控制也不会生效 -->
    <!-- {{ if (ok) { return message } }} -->
    <hr />
    <!-- 文本渲染 -->
    文本渲染：
    <p v-text="description"></p>
    <p v-html="description"></p>
    title 渲染一次：<span v-once>{{ title }}</span>
    <p v-pre>{{ description }}</p>
    <p v-cloak>{{ description }}</p>
    <hr />
    <!-- 条件渲染 -->
    条件渲染：
    <div v-if="isLoggedIn">
      <button @click="logout">退出</button>
    </div>
    <div v-else>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" required />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required />
        <button type="submit">登录</button>
      </form>
    </div>
    <hr />
    <!-- 循环渲染 -->
    循环渲染：
    <ul>
      <li
        v-for="(item, index) in items"
        :key="item.id"
        :class="'li-' + index"
        :style="{ color: item.color }">
        {{ index }} - {{ item.name }}
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>
    <hr />
    <!-- 事件监听与修饰符 -->
    事件监听与修饰符
    <button @click.stop="handleClick">点击(阻止事件冒泡)</button>
    <!-- 可链式调用 -->
    <button @mousedown.ctrl.once="handleCtrlClick">Ctrl+Click me</button>
    <hr />

    <!-- 计算属性与侦听器 -->
    计算属性与侦听器 firstName:<input type="text" v-model="firstName" />
    lastName:<input type="text" v-model="lastName" />
    <p>计算属性 fullName: {{ fullName }} {{ fullName }}</p>
    <p v-if="showFullName">fullName长度大于3</p>
    <p>deepObject: {{ deepObject }}</p>
    <hr />
  </section>
</template>

<script>
export default {
  name: 'templateSyntax',
  data() {
    return {
      title: 'Vue 2 Basics',
      description: '<div style="color: red;">This is a div</div>',
      isLoggedIn: false,
      username: '',
      password: '',
      items: [
        { id: 1, name: 'Item 1', color: 'red' },
        { id: 2, name: 'Item 2', color: 'green' },
        { id: 3, name: 'Item 3', color: 'aqua' },
      ],
      firstName: '',
      lastName: '',
      showFullName: false,
      deepObject: {
        firstName: 'John',
        Child: {
          lastName: 'Doe',
        },
      },
    }
  },

  computed: {
    fullName() {
      this.deepObject.Child.lastName = this.lastName
      return `${this.firstName} ${this.lastName}`
    },
  },

  watch: {
    firstName(newVal, oldVal) {
      console.log('firstName', 'newVal:', newVal, 'oldVal:', oldVal)
    },
    fullName(newVal, oldVal) {
      this.showFullName = newVal.length > 3
    },
    // 深度监听deep  立即监听immediate
    deepObject: {
      handler(newVal, oldVal) {
        console.log('deepObject changed')
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    login() {
      // Simulate successful login
      this.isLoggedIn = true
    },

    logout() {
      this.isLoggedIn = false
    },

    removeItem(index) {
      this.items.splice(index, 1)
    },

    handleClick(event) {
      console.log('Clicked!', event)
    },

    handleCtrlClick(event) {
      if (!event.ctrlKey) return
      alert('Ctrl key')
    },
  },
  // keep-alive
  created() {
    console.log('created')
  },
  destroyed() {
    console.log('destroyed')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
}
</script>

<style lang="scss" scoped></style>
