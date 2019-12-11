//app.js
var plugin = requirePlugin("chatbot");

App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      });
    }

    console.log(plugin, "+++");
    plugin.init({
      appid: "rRuWKYdYZ2cwPpJ37nesiRhWXsOasG",
      success: () => { },
      fail: error => { },
      guideList: ["新增日程", "北京天气怎么样", "来一段郭德纲的相声", "中午吃啥呢"],
      textToSpeech: true,
      welcome: "Darling, I am Fei Fei",
      background: "rgba(247, 251, 252, 1)",
      operateCardHeight: 120,
    });

    this.globalData = {}
  }
})
