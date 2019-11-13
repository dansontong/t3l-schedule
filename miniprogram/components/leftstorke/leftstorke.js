// components/list-item/list-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,  // 列表数组
      value: [],
      observer(value) {
        console.log(value)
      }
    },
    optionText: {
      type: String,   // 右侧操作菜单文案
      value: '',
      observer(value) {
        console.log(value)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    index: '',
    buttonWidth: 150,   //删除按钮宽度单位（rpx）
    txtStyle: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    jumpToDetail (e) {  // 跳转详情页
      this.triggerEvent('jump', e.currentTarget.dataset.id)
    },
    //触摸滑块
    touchS: function (e) {
      this.data.index = ''
      if (e.touches.length == 1) {        //判断是否只有一个触摸点
        this.data.startX = e.touches[0].clientX  //记录触摸起始位置的X坐标
        this.data.index = e.currentTarget.dataset.index
      }
    },
    //划动滑块
    touchM: function (e) {
      let that = this
      let { index, list } = that.data
      if (e.touches.length == 1) {
        let moveX = e.touches[0].clientX    //记录触摸点位置的X坐标
        let disX = that.data.startX - moveX  //计算手指起始点的X坐标与当前触摸点的X坐标的差值
        let buttonWidth = that.data.buttonWidth
        let txtStyle = ''
        if (disX <= 0) {             //如果移动距离小于等于0，文本层位置不变
          txtStyle = "left: 0rpx";
        } else if (disX > 0) {       //移动距离大于0，文本层left值等于手指移动距离
          txtStyle = "left:-" + disX + "rpx";
          if (disX >= buttonWidth) {
            //控制手指移动距离最大值为删除按钮的宽度
            txtStyle = "left:-" + buttonWidth + "rpx";
          }
        }
        //获取手指触摸的是哪一个item
        for (let i = 0, length = list.length; i < length; i++) {
          if (i == index) {
            list[i].txtStyle = txtStyle;
          } else {
            list[i].txtStyle = 'left: 0rpx';
          }
        }
        that.setData({
          index,
          list
        })
      }
    },
    // 手指离开滑块
    touchE: function (e) {
      let that = this
      let { index, list } = that.data
      if (e.changedTouches.length == 1) {
        let endX = e.changedTouches[0].clientX    //手指移动结束后触摸点位置的X坐标
        let disX = that.data.startX - endX        //触摸开始与结束，手指移动的距离
        let buttonWidth = that.data.buttonWidth
        let txtStyle = disX > buttonWidth / 2 ? "left:-" + buttonWidth + "rpx" : "left:0rpx"  //如果距离小于删除按钮的1/2，不显示删除按钮
        list[index].txtStyle = txtStyle
        that.setData({
          list
        });
      }
    },
    // 操作事件
    option (e) {
      this.triggerEvent('option', e.currentTarget.dataset.index)
    }
  }
})
