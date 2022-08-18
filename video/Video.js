const{Schema, model} = require("mongoose")
const schema=new Schema({
    
        data:{
              type:Object  
        }
      
})
module.exports=model('Video',schema)