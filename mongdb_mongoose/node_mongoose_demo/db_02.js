/*
Schema：数据库集合的结构对象。
　　     Schema主要用于定义MongoDB中Collection里document的结构
         每个Schema会映射到mongodb中的一个collection，Schema不具备操作数据库的能力
         定义Schema非常简单，指定字段名和类型即可，支持的类型包括以下8种

          String      字符串
          Number      数字    
          Date        日期
          Buffer      二进制
          Boolean     布尔值
          Mixed       混合类型
          ObjectId    对象ID    
          Array       数组

          通过mongoose.Schema来调用Schema
          然后使用new方法来创建schema对象

          eg:
          var TestSchema = new mongoose.Schema({
              name : { type:String },
              age  : { type:Number, default:0 },
              email: { type:String },
              time : { type:Date, default:Date.now }
          });


Model ：由Schema构造而成，可操作数据库。
        Model是由Schema编译而成的构造器，具有抽象属性和行为，可以对数据库进行增删查改

        模型Model是根据Schema编译出的构造器，或者称为类，通过Model可以实例化出文档对象document

　　    文档document的创建和检索都需要通过模型Model来处理


　　    使用model()方法，将Schema编译为Model。model()方法的第一个参数是模型名称

Entity：由Model创建的实体，可操作数据库。
*/

'use strict';

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test');

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, '连接数据库失败'));
connection.once('open',()=>{

    //定义一个schema
    let Schema = mongoose.Schema({
        category:String,
        name:String
    });
    // 我们可以通过schema绑定上数据库操作的所有方法
    Schema.methods.eat = function(){
        console.log("I've eatten one "+this.name);
    }

    //创建一个model
    let Model = mongoose.model("fruit",Schema);

    //生成一个document
    let apple = new Model({
        category:'apple',
        name:'apple'
    });

    //存放数据
    apple.save((err,apple)=>{
        if(err) return
        console.log(err);
        apple.eat();
        //查找数据
        Model.find({name:'apple'},(err,data)=>{
            console.log(data);
        })
    });
})