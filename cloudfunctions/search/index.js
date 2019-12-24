// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  
  let list=await db.collection('todo_list').get()
  let allist = list.data
  let todos = []
  for (var i = 0; i < allist.length; i++) {

    let myDate=new Date(allist[i].starttime)
    if ((myDate.getFullYear() == event.year) && ((myDate.getMonth() + 1) == event.month) && (myDate.getDate() == event.day)) {

      var todo = {
        id: i,
        avatar: 'http://wx.qlogo.cn/mmopen/vi_32/WN9VhW4rxITMAS4l0v5Ov3ta9lFZmbUujcTzfIVAVkibEQSu2BxmBzeXRMbm2OgjzWObQ7xM8U0Voia4XMP14IsA/132',
        userName: allist[i].starttime,
        desc: allist[i].eventname
      }
      todos.push(todo);
    }
  }   
  return todos
}