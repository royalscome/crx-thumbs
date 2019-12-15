import BrowserGesture from './gesture'
const action = {
  chrome_totop: () => {
    $("body,html").animate({
      scrollTop: 0
    }, 100)
  },
  chrome_tobottom: () => {
    $("body,html").animate({
      scrollTop: $("body").height(),
    }, 100)
  },
  chrome_toback: () => {
    history.back()
  },
  chrome_close: () => {
    // window.location.href="about:blank"; //有一定概率打开这个空白页面后并没有关闭
    // window.close(); 使用下面的方法，可以解决上述bug
    chrome.extension.sendRequest({action:"close"}, d => {
      console.log("close.back:",d);
    })
  }
}
function set_gesture(){
  var bg = new BrowserGesture()
  bg._ACTION = action
}
set_gesture()
