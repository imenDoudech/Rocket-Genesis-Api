const mongoose = require("mongoose");
const bodyParser = require('body-Parser');
const schemas = require('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\shared\\db\\mongodb\\shemas.js');
const agents = require ('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\shared\\resources\\Agents.json')


//Endpoint - '/agent-create'

const createAgent = async (req, res)=> {
    const shemas = new shemas({
      first_name :req.body.first_name,
      last_name  :req.body.last_name,
      email : req.body.email,
      region: req.body.region,
      rating: req.body.rating, 
      fee : req.body.fee, 
      sales: req.body.sales,

    });
  
   agents.push (newAgent)
    .then(()=> res.status(201).json ({message: 'agent ajoute !'}))
    .then(error => res.status (400).json ({error}));
  };


 // Endpoint - '/agents'
const ListAgents = async (req, res) => {
 
    res.json(agents.sort(function (a, b) {
      return a.last_name - b.last_name;
    }));
   
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
  const resultR = agents.filter((agent) => agent.first_name.includes(first_name));
  
  try{  const updateAgent = {
    first_name : req.body.first_name, 
    last_name : req.body.last_name,
    email: req.body.email, 
    region : req.body.region
  }
   (agents[resultR] = updateAgent)
  res.status(200).json('Product updated');
}
catch(err) {
   res.status(400).json({err})
};

   
}
//Endpoint - '/agent-delete'

const deleteAgent = async (req, res) =>
{
  try{
  const id = Number(req.params.id)
    const index = agents.findIndex(agent => agent.id === id)
    agents.splice(index,1)
    res.status(200).json('Agent deleted')
  }
  catch(err) {
    res.status(400).json({err })
 };
}

  module.exports={
    createAgent,
    ListAgents,
    regionAgent,
    updateAgent,
    deleteAgent
  };