var  mysql       =  require('mysql');
var  connection  =  mysql.createConnection({  
    host     :   'crm.daohangma.com',
    user     :   'nodeDev',
    password :   'nodeDev',
    database :   'nodeDev'
}); 
connection.connect(); 
// 查询数据
connection.query('select count(*) from t_class',  function (error,  results,  fields)  {  
  if  (error)  throw  error;  
  console.log('统计记录了总条数: ',  results);
}); 
//删除数据
connection.query('delete from t_class where name=?',["李四77"],  function (error,  results,  fields)  {  
  if  (error)  throw  error;  
  console.log('删除的结果: ',  results);
}); 
//更新数据
connection.query('update t_class set name=?,grade=? where id=?',["wangzheng","3","111"],  function (error,  results,  fields)  {  
  if  (error)  throw  error;  
  console.log('更新的结果: ',  results);
}); 
//插入语句
connection.query('insert into t_class set ?',{id:999,name:"zanglei",grade:22,created_time:123123},  function (error,  results,  fields)  {  
  if  (error)  throw  error;  
  console.log('插入的结果: ',  results);
}); 
connection.end();