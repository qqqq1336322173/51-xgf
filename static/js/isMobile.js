(function () {
  // console.log("判断移动端");
  var sUserAgent = navigator.userAgent.toLowerCase();
  if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
    try {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // 判断访问环境是 Android|webOS|iPhone|iPod|BlackBerry 则加载以下样式 
        // setActiveStyleSheet("../../assets/css/app.css");
      } else if (/iPad/i.test(navigator.userAgent)) {
        // 判断访问环境是 iPad 则加载以下样式 
        // setActiveStyleSheet("../../assets/css/app.css");
      } else {
        // require("@/assets/css/app.css")
        // 判断访问环境是 其他移动设备 则加载以下样式 
        // setActiveStyleSheet("../../assets/css/app.css");
      }
    } catch (e) {}
  } else {
    console.log("PC端");
    // setActiveStyleSheet("../../assets/css/main.css");
    // console.log(location.pathname)
  }
  // 判断完毕后加载样式 
  function setActiveStyleSheet(filename) {
    document.write("<link href=" + filename + " rel=stylesheet>");
  }
})();
