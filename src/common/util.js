import Vue from 'vue'
import $http from 'vue-resource'
Vue.use($http)

let vm = new Vue()

const configPath = '/api'
window.configPath = configPath

export class Utils {
  get (url, data = {}) {
    url = configPath + url
    return new Promise((resolve, reject) => {
      vm.$http.get(url, {params: data, credentials: true}).then(res => {
        resolve(res.body)
      }, () => {
        console.log('接口异常')
      })
    })
  }
}
