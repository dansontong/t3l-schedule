// miniprogram/pages/main.js
var plugin = requirePlugin("chatbot");
const chat = plugin.getChatComponent();

Page({

  // getQueryCallback回调, 返回数据
  getQueryCallback: function (e) {
    var strRet = e.detail.data.answer
    if (-1 != strRet.indexOf('新增成功，内容如下')){
      console.log(e.detail.data.answer)
      var str = e.detail.data.answer
      var search1 ='日程开始时间：'
      var search2 ='日程事件：'
      var start = str.indexOf(search1)
      var end = str.indexOf(search2)
      var starttime = str.substring(start + search1.length, end-1)
      var eventname = str.substring(end + search2.length, str.length)
      console.log(eventname)  
      wx.cloud.callFunction({
        name: 'add',
        data: {
          starttime: starttime,
          eventname: eventname
        },
        complete: res => {
          console.log('callFunction test result: ', res)
        }
      })
 
    }
  },

  // goBackHome回调 返回上一级页面
  goBackHome: function () {
    /*wx.redirectTo({
      url: '../pages/schedule'
    })*/
    this.setData({
      sound: !this.data.sound
    })
    plugin.setTextToSpeech(!this.data.sound)
  },

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})