
const AgentController = require ('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\features\\health\\Agents\\agentController');

//l'authetification
const Auth = require('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\Authentification.js');

//La journalisation - Express.js
const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";

//Endpoint - '/agent-create'
const registerAgentRoutes = (app) => {
    app.post("/createAgent",Auth, AgentController.createAgent);
    logger.debug("POST: createAgent");
  };
 // Endpoint - '/agents'
const registerAgentRoutes2= (app)=>{
    app.get("/ListAgents", Auth, AgentController.ListAgents)
    logger.debug("GET: ListAgents");
}

//Endpoint - '/agents-by-region'
const registerAgentRoutes3= (app)=>{
  app.get("/agentRegion", Auth, AgentController.regionAgent)
  logger.debug("GET: agentRegion");
}
//Endpoint - '/agent-update-info'
const registerAgentRoutes4= (app)=>{
  app.put("/updateAgent", Auth, AgentController.updateAgent)
  logger.debug("PUT: updateAgent");
 
}
//Endpoint - '/agent-delete'
const registerAgentRoutes5= (app)=>{
  app.delete("/deleteAgent", Auth, AgentController.deleteAgent)
  logger.debug("DELETE: deleteAgent");
 
}
  module.exports ={
    registerAgentRoutes,
    registerAgentRoutes2,
    registerAgentRoutes3,
    registerAgentRoutes4,
    registerAgentRoutes5
  };