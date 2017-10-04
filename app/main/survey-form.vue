<template>
  <div class="page survey">
    <div class="action-bar">
      <div class="title">Smart Survey</div>
    </div>
    <h1 v-html="form.title" class="title"></h1>
    <pre v-html="form.detail" class="detail"></pre>
    <form method="post" class="form" @submit.prevent="noop">
      <form-item class="item" v-for="(q, idx) in form.q" :key="idx" :item="q" :ans="ans"></form-item>
      <div class="actions">
        <button type="button" class="reset" @click="reset">เริ่มใหม่</button>
        <button type="button" class="submit" @click="submit">ส่งแบบสอบถาม</button>
      </div>
    </form>
    <div :class="{busy: true, active: busy}"></div>
  </div>
</template>
<script>
import Vue from 'vue'
import FormItem from './components/form-item.vue'

export default {
  name: 'survey-form-page',

  components: {
    FormItem,
  },
  
  created() {
    Vue.http.get('/form/1.json').then(res => {
      this.busy = false
      this.form = res.body
      let obj = {}
      this.form.q.forEach(itm => {
        this.parseForm(obj, itm)
      })
      this.ans = obj
      this.emptyAns = JSON.parse(JSON.stringify(obj))
    }).catch(error => {
      console.log('error', error)
    })
  },

  data() {
    return {
      busy: true,
      form: {id: 0, q:[]},
      ans: {},
    }
  },

  methods: {
    noop() {},

    parseForm(obj, item) {
      if (!item) {
        console.log('xxx')
        return
      }
      if (item.f) {
        if (item.chk) {
          obj[item.f] = []
        } else {
          obj[item.f] = ''
        }
      }
      if (item.ch) {
        item.ch.forEach(itm => {
          this.parseForm(obj, itm)
        })
      }
      if (item.chk) {
        
        item.chk.forEach(itm => {
          this.parseForm(obj, itm)
        })
      }
      if (item.table) {
        item.list.forEach(itm => {
          this.parseForm(obj, itm)
        })
      }
    },

    submit() {
      if (!confirm('ยืนยันการส่งแบบสอบถาม')) {
        return
      }
      this.busy = true
      Vue.http.post('/api/form-submit', {
        form_id: 1,
        ans: this.ans,
      }).then(res => {
        this.busy = false
        if (!res.body.status) {
          return alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
        }
        this.$router.replace('/survey-thank')
      }).catch(error => {
        console.error(error)
        this.busy = false
      })
    },

    reset() {
      if (!confirm('ยืนยันการเริ่มใหม่')) {
        return
      }
      this.ans = JSON.parse(JSON.stringify(this.emptyAns))
    }
  }
}
</script>
<style lang="scss">
.survey {
  margin-top: 48px;
  margin-bottom: 32px;
  .action-bar {
    background-color: #E91E63;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    display: flex;
    > .title {
      flex-grow: 1;
      font-size: 24px;
      line-height: 40px;
      padding: 4px 8px;
    }
  }
  .busy {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.66);
    display: none;
    &.active {
      display: block;
    }
  }
  padding: 16px 8px;
  > .title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    line-height: 24px;
    margin: 8px 0;
  }
  > .detail {
    font-size: 16px;
    line-height: 20px;
    margin: 8px 0;
  }
  .header, .text {
    font-size: 18px;
    line-height: 20px;
    margin: 8px 0;
  }
  .text {
    font-size: 16px;
    line-height: 20px;
    margin: 8px 0;
  }
  .form {
    input[type=text], textarea {
      width: 100%;
    }
    .table {
      background-color: #eee;
      td, th {
        background-color: #fff;
        &.span {
          background-color: #eee;
        }
        &.col {
          width: 40px;
          text-align: center;
        }
      }
    }
    > .item {
      margin: 8px 0;
      line-height: 24px;
      &.inline {
        display: flex;
      }
      label {
        display: block;
      }
      .inline {
        display: flex;
        * + * {
          margin-left: 16px;
        }
      }
    }
  }
  .actions {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.66);
    padding: 4px;
    text-align: center;
    display: flex;
    button {
      font-size: 20px;
      height: 32px;
      border-radius: 4px;
      flex-grow: 1;
      &+button {
        margin-left: 16px;
      }
    }
  }
}
</style>
