import Vue from "vue";
import DefaultPassiveEvents from "default-passive-events";
// import weui from 'weui.js'
// import 'weui'
// Vue.prototype.$weui = weui
Vue.prototype.unescape = function (html) {
  // html
  //   .replace(html ? /&(?!#?\w+;)/g : /&/g, '&')
  //   .replace(/</g, "<")
  //   .replace(/>/g, ">")
  //   .replace(/"/g, "\"")
  //   .replace(/'/g, "\'")
  return html.replace(/<[^>]+>/g, "").substring(0, 60) + '...';
  // html = html.substring(30, 60);
  // console.log(html)
  // return html;
}
Vue.use(DefaultPassiveEvents);
