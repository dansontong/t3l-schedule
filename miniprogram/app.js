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
      guideList: ["小小", "北京天气怎么样", "你叫什么呀"],
      textToSpeech: true,
      welcome: "Darling, I am 妃妃, 可以帮您管理日程、查询天气，也可以陪您聊天哦~",
      background: "rgba(247, 251, 252, 1)",
      //background: "url('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1747765195,2131793807&fm=26&gp=0.jpg')",
      operateCardHeight: 130,
      //guideCardHeight: 80
    });

    this.globalData = {}
  },
  getOpenid() {
    let that = this;
    wx.cloud.callFunction({
      name: 'openid',
      complete: res => {
        return res.result.openid
      }
    })
  },
})
