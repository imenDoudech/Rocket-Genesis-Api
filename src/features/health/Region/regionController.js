const Express = require("express");
const app = Express();

const schemaRegion = require('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\shared\\db\\mongodb\\shemaRegion.js');
const agents = require ('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\shared\\resources\\Agents.json')
const AgentController = require ('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\features\\health\\Agents\\agentController');
const region = require("C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\shared\\db\\mongodb\\shemaRegion.js");

//Endpoint - '/region-create'

//Trouver les meilleurs agents
const meillersAgents= (region)=>{
    
    const resultR = agents.filter((agent) => agent.region.includes(region));
  if (resultR.length < 1) {
  //console.log("No agents found in region  "+ region);
  } else{
    resultR.sort(function (a, b) {
        return b.Sales - a.Sales;
        })
  };
  
  const top_agents=[resultR[0],resultR[1],resultR[2]]; //3 meilleurs agents
  return(top_agents);
  
  
  }

  //Calculer le total de ventes pour chaque région
let totalVentes=0;
const totalVente= (region)=>{
    
    const resultR = agents.filter((agent) => agent.region.includes(region));
    

if (resultR.length < 1) {
// console.log("No agents found in region  "+ region);
} else
{
    for (let i = 0; i < resultR.length; i++) {
        totalVentes = totalVentes + JSON.parse(resultR[i].Sales);
      }
      return totalVentes; // retourner le total de ventes
}
}

const regions = [
    {
        region: "Nord",
        adress:"adresse",
        total_sales: totalVente("Nord"),
        manager: AgentController.createAgent(app),
        top_agents: meillersAgents("Nord"),
      },

      {
        region: "Est",
        adress: "adresse",
        total_sales: totalVente("Est"),
        manager:AgentController.createAgent(app),
        top_agents:meillersAgents("Est"),
      }, 

      {
        region: "Sud",
        adress:"adresse",
        total_sales: totalVente("Sud"),
        manager: AgentController.createAgent(app),
        top_agents: meillersAgents("Sud"),
      }, 
      
      {
        region: "Ouest",
        adress: "adresse",
        total_sales: totalVente("Ouest"),
        manager: AgentController.createAgent(app),
        top_agents: meillersAgents("Ouest"),
      }
]

console.log (regions);

const createRegion = async(req, res) => {
    const region = "region5";
    const  adress= "adresse5";
    const total_sales = totalVente(region);
    const manager = AgentController.createAgent();
    const top_agents = meillersAgents(region);
    
    if(region && adress && total_sales && manager && top_agents ) {
        const Region = regions.find(r => r.region === region)
        if (Region) {
          res.send(`${region} EXISTE DÉJÀ`)
        } else {
          const newRegion = {region,adress,total_sales,manager,top_agents}
          regions.push(newRegion)
          res.send(`${region} a été ajoutée`)
        }
      }
}


//Endpoint - '/regionR'
const getRegion = async(req, res) => {
const region = req.params.region;
const Region = regions.find(r => r.region === region)
res.json(Region)
console.log ("region trouvee "+Region.region);
}

//Endpoint - '/all-stars'
const star = async(req, res) => {
    const resultR = agents.filter((agent) => agent.region.includes(region));
    if (resultR.length < 1) {
    //console.log("No agents found in region  "+ region);
    } else{
      resultR.sort(function (a, b) {
          return b.Sales - a.Sales;
          })
          const top_agents=[resultR[0],resultR[1],resultR[2]];
          return(top_agents[0]);
         
    };
   console.log("meilleur  " +resultR[0]);
    
   

}




module.exports={
    createRegion,
    getRegion,
    star
}