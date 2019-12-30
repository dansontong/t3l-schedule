// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let list=await db.collection('todo_list').get()
  let kindlist1 = await db.collection('todos_identify').limit(100).get()
  let kindlist2 = await db.collection('todos_identify').skip(100).limit(100).get() 
  let kinds = kindlist1.data
  kinds.push(kindlist2.data)
  let allist = list.data
  let todos = []
  for (var i = 0; i < allist.length; i++) {  
    let myDate=new Date(allist[i].starttime)
    if ((myDate.getFullYear() == event.year) && ((myDate.getMonth() + 1) == event.month) && (myDate.getDate() == event.day) && (allist[i]._openid == wxContext.OPENID)) {
      let pic=''    
      for (var j=0;j<kinds.length;j++)
      {
        if (kinds[j].name == allist[i].eventname)
        {
          pic = kinds[j].pic
          break;
        }
      }
      var todo = {
        id: i,
        avatar: pic,
        userName: allist[i].starttime,
        desc: allist[i].eventname
      }
      todos.push(todo);
    }
  }   
  return todos
}