<template>
  <div v-if="item.h"><h2 v-html="item.h" class="header"></h2></div>
  <div v-else-if="item.t && !item.f && !item.table" v-html="item.t" class="text"></div>
  <div v-else-if="item.ch">
    <div v-html="item.t"></div>
    <template v-for="(ch, idx2) in item.ch">
      <label :key="idx2">
        <input type="radio" v-model="ans[item.f]" :value="ch.v" :disabled="disabled">
        <span v-html="ch.t"></span>
      </label>
      <div v-if="ch.sub" :key="idx2" :class="{disabled: ans[item.f] !== ch.v}">
        <form-item v-for="(s, sidx) in ch.sub" :key="sidx" :item="s" :ans="ans" :disabled="ans[item.f] !== ch.v"></form-item>
      </div>
    </template>
  </div>
  <div v-else-if="item.chk">
    <div v-html="item.t"></div>
    <template v-for="(ch, idx2) in item.chk">
      <label :key="idx2">
        <input type="checkbox" v-model="ans[item.f]" :value="ch.v" :disabled="disabled">
        <span v-html="ch.t"></span>
      </label>
      <div v-if="ch.sub" :key="idx2" :class="{disabled: ans[item.f] !== ch.v}">
        <form-item v-for="(s, sidx) in ch.sub" :key="sidx" :item="s" :ans="ans" :disabled="ans[item.f].indexOf(ch.v) === -1"></form-item>
      </div>
    </template>
  </div>
  <div v-else-if="item.textarea">
    <div v-html="item.t"></div>
    <textarea v-model="ans[item.f]" :disabled="disabled"></textarea>
  </div>
  <div v-else-if="item.table">
    <div v-html="item.t"></div>
    <table class="table">
      <thead>
        <tr>
          <th rowspan="2" v-html="item.t"></th>
          <th :colspan="item.level.length" v-html="item.levelText"></th>
        </tr>
        <tr>
          <th v-for="lvl in item.level" :key="lvl.v" v-html="lvl.t"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, r) in item.list" :key="r">
          <template v-if="row.h && row.span">
            <td :colspan="item.level.length + 1" v-html="row.h" class="span"></td>
          </template>
          <template v-else-if="row.h">
            <td v-html="row.h"></td>
            <td v-for="lvl in item.level" :key="lvl.v">&nbsp;</td>
          </template>
          <template v-else>
            <td v-html="row.t"></td>
            <td v-for="lvl in item.level" :key="lvl.v" class="col">
              <label><input type="radio" v-model="ans[row.f]" :value="lvl.v"></label>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else-if="item.f" :class="{inline:item.inline}">
    <div v-html="item.t"></div>
    <input type="text" v-model="ans[item.f]" :disabled="disabled">
  </div>
</template>
<script>
export default {
  name: 'form-item',

  props: {
    item: Object,
    ans: Object,
    disabled: false,
  },
}
</script>
