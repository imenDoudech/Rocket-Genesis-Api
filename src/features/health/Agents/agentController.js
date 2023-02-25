const mongoose = require("mongoose");
const bodyParser = require('body-Parser');
//const Shemas = require('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\shared\\db\\mongodb\\shemas.js');
const agents = require ('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\shared\\resources\\Agents.json')


//Endpoint - '/agent-create'

const createAgent = async (req, res)=> {
  const  newAgent ={
      first_name :"nom",
      last_name  :"prenom",
      email : "aresse@gmail.com",
      region: "region",
      rating: 4784, 
      fee : 90, 
      sales: 0,

    };
  
   agents.push(newAgent);
  //res.send(newAgent);
  console.log('agent ajoute');
    
  };


 // Endpoint - '/agents'
const ListAgents = async (req, res) => {

  res.json(agents.sort(function (a, b) {
    if (a.last_name < b.last_name) {
      return -1;
    } else {
      return 1;
    };
  }))
   
    };

//Endpoint - '/agents-by-region'
const regionAgent = async (req, res) =>
{
  const region = req.query.region;

  const resultR = agents.filter((agent) => agent.region.includes(region));
  if (resultR.length < 1) {
    res.status(404).send("No agents found in region  "+ region);
  } else
  res.json(resultR.sort(function (a, b) {
    return a.rating - b.rating;
  }));

}


//Endpoint - '/agent-update-info'

const updateAgent = async (req, res) =>
{
  const first_name = req.query.first_name;
  const agentR = agents.filter((agent) => agent.first_name.includes(first_name));
  
  if (agentR.length < 1) {
    res.status(404).send("No agent found  ");
  } else{
    agentR.first_name= "nom2";
    agentR.last_name = "Prenom2";
    agentR.email ="agent2@gmail.com";
    agentR.region= "region2";
    res.status(200).json('Product updated');
  }
   
}
//Endpoint - '/agent-delete'

const deleteAgent = async (req, res) =>
{
  const first_name = req.query.first_name;
  const last_name =req.query.last_name;
  const email =req.params.email;
  const agentR = ((agents.filter((agent) => agent.first_name.includes(first_name)))&
   (agents.filter((agent) => agent.last_name.includes(last_name))) &
 (agents.filter((agent) => agent.email.includes(email))));

  if (agentR.length < 1) {
    res.status(404).send("No agent found ");
  } else if (agentR> 1) { 
    res.status(404).send("many agents ");
  } else{
    const index = agents.findIndex(agent => (agent.first_name === agentR.first_name && agent.last_name === agentR.last_name &&
       agent.last_name === agentR.last_name ))
    agents.splice(index,1)
    res.status(200).json('Agent deleted')

  }
}


//meilleurs agents


  module.exports={
    createAgent,
    ListAgents,
    regionAgent,
    updateAgent,
    deleteAgent,
   
  };