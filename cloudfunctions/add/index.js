// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event,context) => {
  const wxContext = cloud.getWXContext()
  await db.collection('todo_list').add({
    data: {
      starttime: event.starttime,
      eventname: event.eventname,
      _openid: wxContext.OPENID      
    }
  });
  return {
  }
 
}
