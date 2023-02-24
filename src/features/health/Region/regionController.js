const mongoose = require("mongoose");
const bodyParser = require('body-Parser');
const fs = require("fs");

const schemaRegion = require('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\shared\\db\\mongodb\\shemaRegion.js');
const agents = require ('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\shared\\resources\\Agents.json')
const AgentController = require ('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\features\\health\\Agents\\agentController');
const region = require("C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\shared\\db\\mongodb\\shemaRegion.js");

//Endpoint - '/region-create'
const meillersAgents= (region)=>{
    const resultR = agents.filter((agent) => agent.region.includes(region));
if (resultR.length < 1) {
console.log("No agents found in region  "+ region);
} else
resultR.sort(function (a, b) {
return a.Sales - b.Sales;
});

return top_agents=[resultR[0],resultR[1],resultR[2]];


}
let totalVentes=0;
const totalVente= (region)=>{
    const resultR = agents.filter((agent) => agent.region.includes(region));
if (resultR.length < 1) {
 console.log("No agents found in region  "+ region);
} else
{
    for (let i = 0; i < resultR.length; i++) {
        totalVentes = totalVentes + JSON.parse(resultR[i].Sales);
      }

}
return totalVentes;
}
const regions = [
    {
        region: "Nord",
        adress:"adresse",
        total_sales: totalVente("Nord"),
        manager: AgentController.createAgent(),
        top_agents: meillersAgents("Nord"),
      },

      {
        region: "Est",
        adress: "adresse",
        total_sales: totalVente("Est"),
        manager:AgentController.createAgent(),
        top_agents:meillersAgents("Est"),
      }, 

      {
        region: "Sud",
        adress:"adresse",
        total_sales: totalVente("Sud"),
        manager: AgentController.createAgent(),
        top_agents: meillersAgents("Sud"),
      }, 
      
      {
        region: "Ouest",
        adress: "adresse",
        total_sales: totalVente("Ouest"),
        manager: AgentController.createAgent(),
        top_agents: meillersAgents("Ouest"),
      }
]

  
console.log(regions);
    fs.writeFileSync("/src/shared/resources/Regions.json", JSON.stringify(regions));
    const savedRegions = JSON.parse(fs.readFileSync("/src/shared/resources/Regions.json"));
    console.log(savedRegions);

const createRegion = async(req, res) => {
    
    


}

/*
//Endpoint - '/region'
const getRegion = async(req, res) => {
const region = req.params.region;
const Region = regions.find(Region => Region.region === region)

if (!Region) {
return res.status(404).send('Region not found')
}
res.json(Region)
}*/

module.exports={
    createRegion,
 //   getRegion
}