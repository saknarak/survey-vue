
import Vue from 'vue'
import config from '../../config'

const api = {}

api.fetchServerTs = () => {
  return Vue.http.get(config.API_URL + '/serverTs').then((res) => {
    if (!res.data.status) {
      throw res.data
    }
    return res.data.serverTs
  })
}

api.keepSession = () => {
  return Vue.http.post(config.API_URL + '/signon/session').then((res) => {
    if (!res.body.status) {
      throw new Error(res.body.error)
    }
    let session = {
      sessionId: res.body.session.id,
      valid: res.body.session.data.valid,
      user: res.body.session.data.user,
    }
    return session
  })
}

api.signout = () => {
  return Vue.http.post(config.API_URL + '/signon/signout', {}).then((res) => {
    if (!res.body || !res.body.status) {
      throw new Error((res.body && res.body.error) || 'ERROR')
    }
    return true
  })
}

module.exports = api
