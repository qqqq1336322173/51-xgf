import Vue from 'vue'
var isMobile = {
  install(Vue) {
    Vue.prototype.test = {
      val: function (val) {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
        return flag;
      }
    };
    Vue.prototype.test1 = {
      val: function (a) {
        let b = a.split('/');
        let c = b[b.length - 1].length;
        return a.substr(0, a.length - c);
      }
    }
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    Vue.prototype.isMobile = flag
  }
}
// vue原型挂载 - 是否PC端
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
  Vue.prototype.$pc = false
  // hostConfig.vconsole && new VConsole()
} else {
  Vue.prototype.$pc = true

}

Vue.use(isMobile)
