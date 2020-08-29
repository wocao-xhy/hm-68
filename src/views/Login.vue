/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
<template>
  <div>
    <hm-header>登录</hm-header>
    <hm-log></hm-log>
    <!-- form表单 -->
    <van-form @submit="login">
    <van-field
      v-model="username"
      name="用户名"
      label="账号"
      placeholder="请输入账号"
      :rules="rules.username"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="请输入密码"
      :rules="rules.password"
    />
    <div style="margin: 16px;">
      <van-button  block type="info" native-type="submit">
        提交
      </van-button>
    </div>
    <p class="tips">没有账号?去<router-link to="/register">注册</router-link></p>
    </van-form>
  </div>
</template>
<script>
eslint-disable-next-line no-unused-vars

export default {
  created() {
    // console.log(this.$route)
    const { username, password } = this.$route.params
    this.username = username
    this.password = password
  },
  methods: {
    async login() {
      const res = await this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })
      // eslint-disable-next-line no-unused-vars
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        this.$router.push('/user')
      } else {
        this.$toast.fail(message)
      }
    }
  },
  data() {
    return {
      password: '',
      username: '',
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          { pattern: /^\d{5,11}$/, message: '请输入的用户名长度为5-11位', trigger: 'onChange' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          { pattern: /^\d{3,9}$/, message: '请输入的密码长度为3-9位', trigger: 'onChange' }
        ]
      }

    }
  }
}
</script>
<style lang="less">
  .tips {
    font-size: 14px;
    padding: 15px;
    text-align: right;
    a {
      color: orange;
    }
  }
</style>
