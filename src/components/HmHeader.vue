<template>
  <div class="hmheader">
    <div class="back" @click="back">
      <span class="iconfont iconjiantou2"></span>
    </div>
    <div class="title"><slot></slot></div>
    <div class="right"></div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang='less' scoped>
.hmheader {
  text-align: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  height: 50px;
  line-height: 50px;
  .back,
  .right {
    width: 50px;
  }
  .title {
    flex: 1;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
