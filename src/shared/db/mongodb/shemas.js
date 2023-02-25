const mongoose = require ("mongoose");

//Schema de l'agent
const agentShema = mongoose.Schema({
    first_name:{type :String, required : true},
    last_name:{type :String, required : true},
    email: {type :String, required : true},
    region:{type :String, required : true},
    rating:{type :Number,  default : 0},
    fee:{type :Number ,  default : 0},
    sales:{type :Number, default : 0},

});

//Modèle de l'agent
const Agent = mongoose.model("Agent", agentShema);



module.exports = Agent;

