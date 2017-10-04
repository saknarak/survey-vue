<template>
  <div class="app">
    <div class="layout">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import store from '../vuex'
import api from './api'

export default {
  store,

}
</script>
<style lang="scss">
@import "../sass/main";
</style>
