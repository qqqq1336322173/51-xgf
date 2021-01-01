export default ({ app: { router }, store }) => {
  router.afterEach((to, from) => {
    /* 告诉增加一个PV 
    
    https://hm.baidu.com/hm.js?23f5dfff8e8ee3717076feecd2e9a922
    */
    try {
      window._hmt = window._hmt || []
      window._hmt.push(['_trackPageview', to.fullPath])
    } catch (e) { }
  })
}
