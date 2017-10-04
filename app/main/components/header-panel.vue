<template>
  <div class="header-panel">
    <div class="module-panel">
      <ns-icon-button icon="menu" type="secondary" @click="toggleSidePanel"></ns-icon-button>
      <ns-select :keys="{ label: 'name', value: 'code' }" :options="moduleList" v-model="curModule"
        @change="handleModuleChange"></ns-select>
    </div>
    <div class="lang-panel"></div>
    <div class="status-panel"></div>
    <div class="profile-panel">
      <ns-button type="secondary" class="profile-badge" has-dropdown ref="profileButton">
        <ns-menu contain-focus has-icons has-secondary-text slot="dropdown" :options="profileOption"
          @select="profileMenuSelected" @close="$refs.profileButton.closeDropdown()"></ns-menu>
        <div class="profile-inner">
          <div class="icon"></div>
          <div class="text ellipsis" v-text="user && user.display_name || 'UNKNOWN'"></div>
        </div>
      </ns-button>
    </div>
    <ns-preloader class="loading" :show="isLoading"></ns-preloader>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import config from '../../config'
import types from '../vuex/types'
import actions from '../actions'

module.exports = {
  name: 'header-panel',
  data() {
    return {
      langs: config.languages,
      curLang: Vue.config.lang,
      curModule: { code: 'lucy-index', name: 'LUCY' },
      profileOption: [
        {
          id: 'edit',
          label: 'Profile',
          icon: 'edit',
        },
        {
          type: 'divider',
        },
        {
          id: 'signout',
          label: 'Logout',
          icon: 'exit_to_app',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      modules: types.getters.modules,
      selectedModule: types.getters.selectedModule,
      user: types.getters.user,
      isLoading: types.getters.isLoading,
    }),
    moduleList() {
      return Object.keys(this.modules).map(code => ({ code, name: this.modules[code].title }))
    },
  },
  watch: {
    selectedModule(newModule) {
      this.curModule = {
        code: newModule,
        name: (this.modules && this.modules[newModule] && this.modules[newModule].title) || newModule,
      }
    },
  },
  methods: {
    ...mapActions({
      toggleSidePanel: types.actions.toggleSidePanel,
    }),
    handleModuleChange(newModule) {
      if (this.modules[newModule.code]) {
        this.$router.push(this.modules[newModule.code].route)
      }
    },
    profileMenuSelected(menu) {
      if (menu.id === 'signout') {
        actions.$emit('show-confirm-signout')
      }
    },
  },
}
</script>
