<template>
  <div class="page-content page-index">
    <h1 class="title">
      <strong>WELCOME</strong>
    </h1>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import mainTypes from './vuex/types'

export default {
  name: 'main-index-page',
  created() {
    console.log('redirect...')
    this.$router.push('/survey/1')
  },
}
</script>
