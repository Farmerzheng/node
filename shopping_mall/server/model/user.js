let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// schema 是用来定义 documents的基本字段和集合的
let productSchema = new Schema({
    "userId": String,
    "userName": String,
    "userPwd": String,
    "orderList": Array,
    "cartList": [{
        "productImage": String,
        "salePrice": String,
        "productName": String,
        "productId": String,
        "productNum": String,
        "checked": String
    }],
    "addressList": [{
        "addressId": String,
        "userName": String,
        "streetName": String,
        "postCode": String,
        "tel": String,
        "isDefault": Boolean
    }]
})

module.exports = mongoose.model("user", productSchema);