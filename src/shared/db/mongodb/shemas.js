const mongoose = require ("mongoose");
const agentShema = mongoose.Schema({
    first_name:{type :String, required : true},
    last_name:{type :String, required : true},
    email: {type :String, required : true},
    region:{type :String, required : true},
    rating:{type :Number,  default : 0},
    fee:{type :Number ,  default : 0},
    sales:{type :Number, default : 0},

});

module.exports ('Agent', agentShema);