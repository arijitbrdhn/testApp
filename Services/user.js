let custoInfo = require('../routes/user');

let token = '9a3784b224';

var mongo=require('mongoose');
var schema=mongo.Schema;
var url='mongodb://192.168.2.223:27017/customer';

/*This is user  schema */
var userschema=new schema({
  firstname :{type: String},
  lastname :{type: String},
  email: {type: String, unique: true},
  mobile: {type: Number},
  password: {type: String},
  image: {type: String}
},{collection: 'customerinfos'});

//mongodb connection 
mongo.connect(url,function(err){
  if(err)
    console.log(err);
  else
    console.log("connected");
})

let model=mongo.model('',userschema);

let findInfo = function(data,callback){
  let info = data.info;

  model.findOne({"email":info},function(err,doc){
      if(err)
      callback(err)
      
     else if(doc==null){
        model.findOne({"mobile":info},function(err,doc){
          if(err)
           callback(err)
           else if(doc==null)
           callback("Customer does not exist")
           else
           callback(doc)
        })
      }
     else
    callback(doc)

  }) 
 };

let listAll = function(data,callback){

  model.find({},function(err,doc){
      if(err)
      callback(err)
      else
      callback(doc)
  })
};


module.exports = {
	findInfo : findInfo,
  listAll : listAll,
  token : token
}










