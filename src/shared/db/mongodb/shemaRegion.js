const mongoose = require ("mongoose");
const Agent = require("./shemas");
const regionShema = mongoose.Schema({
    region:{type :String, required : true},
    adress:{type :String, required : true},
    total_sales:{type :Number,  default : 0},
    manager:{type : String},
    top_agents:{type :Array},
    
});

const region = mongoose.model("region", regionShema);


module.exports = region;