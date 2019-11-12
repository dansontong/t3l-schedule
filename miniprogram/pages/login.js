// miniprogram/pages/login.js

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  bindGetUserInfo(res) {    
     
    wx.authorize({
    scope: 'scope.record',
    success() {
                // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
      wx.switchTab({
        url: '/pages/main'
      })
     
              
              },
    fail(){
      wx.showModal({
        title: '用户未授权录音',
        content: '拒绝授权将不能体验小程序完整功能，点击确定开启授权',
        success: (res) => {
          if (res.confirm) {
            wx.openSetting({
              complete(){
                checkrecord();
  
              }
              
            });
            
          }
        }
      })

    }
      })
     
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
function checkrecord() {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.record']) {

          wx.showModal({
            title: '用户未授权录音',
            content: '拒绝授权将不能体验小程序完整功能，点击确定开启授权',
            success: (res) => {

              if (res.confirm) {
                wx.openSetting({
                  complete() {
                    checkrecord();

                  }
                });
                
              }
            }
          });

        }
        else {
          wx.switchTab({
            url: '/pages/main'
          })

        }
      }
    })

  }