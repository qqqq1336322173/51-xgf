const storage = {
  set(key, value) {
    window.sessionStorage.setItem(key, value)
  },

  get(key) {
    return window.sessionStorage.getItem(key)
  },

  remove(key) {
    window.sessionStorage.removeItem(key)
  }

}

export default storage
