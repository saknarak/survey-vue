<template>
  <div class="side-panel">
    <div class="logo-panel">
      LUCY ASSIST
    </div>
    <div class="side-menu">
      <ns-collapsible v-for="(group,key) in sideMenuACL" :key="key" ref="menuGroup" :title="group.title"
        open>
        <ul class="menu-group">
          <li v-for="menu in group.menus" :key="menu.id" @click="menuClick">
            <router-link exact :to="menu.route" class="menu">
              <ns-icon :icon="menu.icon || 'settings'"></ns-icon>
              <span class="text" v-text="menu.label"></span>
            </router-link>
          </li>
        </ul>
      </ns-collapsible>
    </div>
    <div class="foot-menu">
      <ns-button icon="exit_to_app" @click="showConfirmSignout">LOGOUT</ns-button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import types from '../vuex/types'
// import utils from '../../lib/utils'
import actions from '../actions'

module.exports = {
  name: 'side-panel',
  computed: {
    ...mapGetters({
      sideMenus: types.getters.sideMenus,
      user: types.getters.user,
    }),
    sideMenuACL() {
      return this.sideMenus.map((mg) => {
        return {
          title: mg.title,
          menus: mg.menus.filter((m) => {
            return true
            // return this.user && (this.user.is_admin || utils.checkAcl(m.acl, this.user.modules))
          }),
        }
      }).filter(mg => mg.menus.length > 0)
    },
  },
  methods: {
    ...mapActions({
      setSidePanel: types.actions.setSidePanel,
    }),
    showConfirmSignout() {
      actions.$emit('show-confirm-signout')
    },
    menuClick() {
      this.setSidePanel(false)
    },
  },
  watch: {
    sideMenus() {
      if (!this.$refs.menuGroup) {
        return
      }
      this.$refs.menuGroup.forEach((mg) => {
        mg.refreshHeight()
      })
    },
  },
}
</script>
<style lang="sass">
.side-panel {
  display: flex;
  flex-direction: column;
  z-index: 200;
  .side-menu {
    flex-grow: 1;
    overflow-y: auto;
    .ns-collapsible__body {
      border: 0;
      padding: 8px 0;
    }
    .menu-group {
      margin: 0;
      padding: 0;
      list-style-type: none;
      > li {
        margin: 0;
        padding: 0;
        background-color: #fff;
        > .menu {
          display: flex;
          height: 40px;
          line-height: 40px;
          > .ns-icon {
            margin: auto 8px;
          }
          > .text {
          }
          &:hover {
            color: #fff;
            background-color: rgba(0,0,0,0.25);
          }
          &.router-link-exact-active {
            border-right: 4px solid #5aad3b;
            background-color: #373a49;
            color: #fff;
            font-weight: bold;
            &:hover {
              background-color: rgba(0,0,0,0.3);
            }
          }
        }
      }
    }
  }
  .foot-menu {
    height: 40px;
    flex-shrink: 0;
    display: flex;
    .ns-button {
      flex-grow: 1;
      height: 40px;
    }
  }
}
</style>
