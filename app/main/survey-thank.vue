<template>
  <div class="page thank">
    <h1>ขอขอบคุณที่ทำแบบสำรวจ</h1>
  </div>
</template>
<script>
export default {
  name: 'survey-thank-page',
}
</script>
<style lang="scss">
.page.thank {
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
  h1 {
    position: absolute;
    top: calc(50% - 32px);
    left: 0;
    right: 0;
    text-align: center;
    margin: auto;
    background-color: #eee;
    line-height: 64px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0 , 0.33);
  }
}
</style>
