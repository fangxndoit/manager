/**
 * Storage二次封装
 */

import config from './../config'

export default {
  setItem(key,value){
    const storage = this.getStorage()
    storage[key] = value
    window.localStorage.setItem(config.namespace, JSON.stringify(storage))
  },
  getItem(key){
    return this.getStorage()[key]
  },
  getStorage(){
    return JSON.parse(window.localStorage.getItem(config.namespace) || "{}")
  },
  clearItem(key){
    const storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(config.namespace, JSON.stringify(storage))
  },
  clearAll(){
    window.localStorage.clear()
  }
}