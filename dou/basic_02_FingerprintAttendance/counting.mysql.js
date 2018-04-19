const fs = require("fs");
const content = fs.readFileSync("data.txt", 'utf8');
const contentArr = content.split("\n");
// console.log(contentArr);
let dataArr = [];
contentArr.forEach((item) => {
  let itemArr = item.split(/\s+/);
  itemArr.pop();
  let itemObj = {};
  itemObj.section = itemArr[0];
  itemObj.num = itemArr[1];
  itemObj.name = itemArr[2];
  itemObj.date = itemArr[3];
  itemObj.weekday = itemArr[4];
  itemObj.time = itemArr[5];

  if (itemObj.time > "8:00") {
    // console.log(`${itemObj.name}迟到了`)
    itemObj.lateNum = 1;
  } else {
    itemObj.lateNum = 0;
  }
  dataArr.push(itemObj);

  // if(itemObj.name )
})
// console.log(dataArr);
var lateObj = {};
var obj = {};
dataArr.forEach((item) => {
  if (item.lateNum == 1 && lateObj[item.name] == undefined) {
    lateObj[item.name] = 1;
  } else if (item.lateNum == 1) {
    lateObj[item.name] += 1
  }
})

console.log(lateObj)
// { '王坚': 2, '刘海林': 3, '张宜奎': 2, '程飞': 2 }

//将统计出来的数据放到数据库中
var  mysql       =  require('mysql');
var  connection  =  mysql.createConnection({  
  host     :   'crm.daohangma.com',
    user     :   'nodeDev',
    password :   'nodeDev',
    database :   'nodeDev'
}); 
connection.connect(); 

let i = 0;
for (let key in lateObj) {
  console.log(`${key}迟到了${lateObj[key]}次`);
  let obj = {
    id:i++,
    name:key,
    num:lateObj[key]
  }
  //插入语句
  connection.query('insert into lateCount set ?',obj,  function (error,  results,  fields)  {  
    if  (error)  throw  error;  
    console.log('插入的结果: ',  results);
  }); 
}

connection.end();