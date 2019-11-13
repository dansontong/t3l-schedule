// miniprogram/pages/schedule.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData();
  },
  initData() {
    let _data = [{
      id: 0,
      avatar: 'http://wx.qlogo.cn/mmopen/vi_32/WN9VhW4rxITMAS4l0v5Ov3ta9lFZmbUujcTzfIVAVkibEQSu2BxmBzeXRMbm2OgjzWObQ7xM8U0Voia4XMP14IsA/132',
      userName: 'Wginit',
      desc: '白山羊'
    }, {
      id: 1,
      avatar: 'http://wx.qlogo.cn/mmopen/vi_32/WN9VhW4rxITMAS4l0v5Ov3ta9lFZmbUujcTzfIVAVkibEQSu2BxmBzeXRMbm2OgjzWObQ7xM8U0Voia4XMP14IsA/132',
      userName: 'Wginit',
      desc: '一只白山羊'
      }, {
        id: 2,
        avatar: 'http://wx.qlogo.cn/mmopen/vi_32/WN9VhW4rxITMAS4l0v5Ov3ta9lFZmbUujcTzfIVAVkibEQSu2BxmBzeXRMbm2OgjzWObQ7xM8U0Voia4XMP14IsA/132',
        userName: 'Wginit',
        desc: '一只白山羊'
      }, {
        id: 3,
        avatar: 'http://wx.qlogo.cn/mmopen/vi_32/WN9VhW4rxITMAS4l0v5Ov3ta9lFZmbUujcTzfIVAVkibEQSu2BxmBzeXRMbm2OgjzWObQ7xM8U0Voia4XMP14IsA/132',
        userName: 'Wginit',
        desc: '一只白山羊'
      }, {
        id: 4,
        avatar: 'http://wx.qlogo.cn/mmopen/vi_32/WN9VhW4rxITMAS4l0v5Ov3ta9lFZmbUujcTzfIVAVkibEQSu2BxmBzeXRMbm2OgjzWObQ7xM8U0Voia4XMP14IsA/132',
        userName: 'Wginit',
        desc: '一只白山羊'
      }]
    this.setData({
      list: _data
    })
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

  },
  /**
   * 选择日期后执行的事件
   * currentSelect 当前点击的日期
   * allSelectedDays 选择的所有日期（当mulit为true时，allSelectedDays有值）
   */
  afterTapDay(e) {
    console.log('afterTapDay', e.detail); // => { currentSelect: {}, allSelectedDays: [] }
  },
  /**
   * 当日历滑动时触发(适用于周/月视图)
   * 可在滑动时按需在该方法内获取当前日历的一些数据
   */
  onSwipe(e) {
    console.log('onSwipe', e.detail);
    const dates = this.calendar.getCalendarDates();
  },
  /**
   * 当改变月份时触发
   * => current 当前年月 / next 切换后的年月
   */
  whenChangeMonth(e) {
    console.log('whenChangeMonth', e.detail);
    // => { current: { month: 3, ... }, next: { month: 4, ... }}
  },
  /**
   * 周视图下当改变周时触发
   * => current 当前周信息 / next 切换后周信息
   */
  whenChangeWeek(e) {
    console.log('whenChangeWeek', e.detail);
    // {
    //    current: { currentYM: {year: 2019, month: 1 }, dates: [{}] },
    //    next: { currentYM: {year: 2019, month: 1}, dates: [{}] },
    //    directionType: 'next_week'
    // }
  },
  /**
   * 日期点击事件（此事件会完全接管点击事件），需自定义配置 takeoverTap 值为真才能生效
   * currentSelect 当前点击的日期
   */
  onTapDay(e) {
    console.log('onTapDay', e.detail); // => { year: 2019, month: 12, day: 3, ...}
  },
  /**
   * 日历初次渲染完成后触发事件，如设置事件标记
   */
  afterCalendarRender(e) {
    console.log('afterCalendarRender', e);
  },
  // 跳转至详情页
  jumpToDetail(e) {
    console.log(e.detail)
    let _id = e.detail
    if (e.detail == '') {
      return
    }
  },
  // 删除成员
  remove(e) {
    let that = this
    let { list } = that.data
    let _index = e.detail
    console.log(_index)
    wx.showModal({
      content: '确认删除吗?',
      confirmText: '删除',
      success: function (res) {
        if (res.confirm) {
          list.splice(_index, 1)
          that.setData({
            list
          })
        }
      }
    })
  }
})