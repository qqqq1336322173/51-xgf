import Vue from 'vue'
var isObjectValueEqual = {
  install(Vue) {
    Vue.prototype.isObjectValueEqual = {
      val(a, b) {
        //取对象a和b的属性名
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
        //判断属性名的length是否一致
        if (aProps.length != bProps.length) {
          return false;
        }
        //循环取出属性名，再判断属性值是否一致
        for (var i = 0; i < aProps.length; i++) {
          var propName = aProps[i];
          if (a[propName] !== b[propName]) {
            return false;
          }
        }
        return true;
      }
    }
  }
}
Vue.use(isObjectValueEqual)
