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
  margin-top: 32px;
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
    opacity: 0;
    transition: 1s;
    &.active {
      // display: block;
      backdrop-filter: blur(4px);
      opacity: 1;
    }
  }
  padding: 16px 8px;
  > .title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    line-height: 24px;
    margin: 16px 0;
  }
  > .detail {
    font-size: 16px;
    line-height: 20px;
    margin: 16px 0;
  }
  .header, .text {
    font-size: 18px;
    font-weight: bold;
    line-height: 20px;
    margin: 16px 0;
  }
  .text {
    font-size: 16px;
    line-height: 20px;
    margin: 16px 0;
  }
  .form {
    input[type=text] {
      width: 100%;
      height: 32px;
      border: none;
      border-radius: 4px;
      border: 1px solid #eee;
      border-bottom: 1px solid #ccc;
      padding: 4px;
    }
    label.chk::before {
      content: ''
    }
    textarea {
      width: 100%;
      border-radius: 4px;
      border: 1px solid #eee;
      border-bottom: 1px solid #ccc;
      padding: 4px;
    }
    .table {
      background-color: #eee;
      width: 100%;
      td, th {
        background-color: #fff;
        padding: 2px 4px;
        &.span {
          background-color: #eee;
        }
        &.col {
          width: 40px;
          text-align: center;
        }
      }
      th {
        line-height: 20px;
        font-weight: normal;
      }
      tr.sep td {
        border-bottom: 1px solid #ccc;
      }
    }
    > .item {
      margin: 8px 0;
      line-height: 24px;
      &.inline {
        display: flex;
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
    background-color: rgba(255, 255, 255, 0.83);
    padding: 4px 8px;
    text-align: center;
    display: flex;
    justify-content: center;
    button {
      font-size: 20px;
      height: 32px;
      border-radius: 4px;
      flex-grow: 1;
      max-width: 200px;
      &.submit {
        color: #009688;
      }
      &.reset {
        color: #FF9800;
      }
      &+button {
        margin-left: 16px;
      }
    }
  }
}
</style>
