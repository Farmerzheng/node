/**
 * Created by wangzheng on 2016/7/24.
 */
//1.异步式读取文件
var fs=require('fs');
fs.readFile('file.txt','utf-8',function(error,data){
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
});
console.log('end.');
//结果:先打印出“end”后打印出"Contents of the file."
   // end.
   // Contents of the file.
