<template>
  <form @submit.prevent="onSubmit">
    <!-- 双向数据绑定：用户名输入框 -->
    <label for="username">用户名：</label>
    <input
      type="text"
      id="username"
      v-model="formData.username"
      placeholder="请输入用户名" />
    <!-- 显示用户名验证错误信息 -->
    <p class="error-message" v-if="errors.username">{{ errors.username }}</p>
    <br />
    <!-- 双向数据绑定：密码输入框 -->
    <label for="password">密码：</label>
    <input
      type="password"
      id="password"
      v-model="formData.password"
      placeholder="请输入密码" />
    <!-- 显示密码验证错误信息 -->
    <p class="error-message" v-if="errors.password">{{ errors.password }}</p>
    <br />
    <!-- 提交按钮 -->
    <button type="submit">提交</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      // 定义表单数据对象
      formData: {
        username: '',
        password: '',
      },
      // 定义表单验证错误信息对象
      errors: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    // 表单提交事件处理函数
    onSubmit() {
      // 调用表单验证方法
      if (this.validateForm()) {
        // 如果验证通过，执行提交逻辑（此处省略）
        console.log('表单提交成功', this.formData)
      } else {
        console.log('表单验证失败')
      }
    },

    // 表单验证方法
    validateForm() {
      // 清空已有错误信息
      this.errors = {
        username: '',
        password: '',
      }

      // 用户名验证
      if (!this.formData.username.trim()) {
        this.errors.username = '用户名不能为空'
      } else if (
        this.formData.username.length < 3 ||
        this.formData.username.length > 20
      ) {
        this.errors.username = '用户名长度应在3到20个字符之间'
      }

      // 密码验证
      if (!this.formData.password.trim()) {
        this.errors.password = '密码不能为空'
      } else if (
        this.formData.password.length < 6 ||
        this.formData.password.length > 20
      ) {
        this.errors.password = '密码长度应在6到20个字符之间'
      }

      // 返回验证结果：若错误信息对象为空，则验证通过
      return Object.keys(this.errors).every((key) => !this.errors[key])
    },
  },
}
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 5px;
}
</style>
