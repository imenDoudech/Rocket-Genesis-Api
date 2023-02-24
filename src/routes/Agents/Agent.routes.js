
const AgentController = require ('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\features\\health\\Agents\\agentController');
const Auth = require('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\Authentification.js');

const registerAgentRoutes = (app) => {
    app.post("/createAgent",Auth, AgentController.createAgent);
  };

const registerAgentRoutes2= (app)=>{
    app.get("/ListAgents", Auth, AgentController.ListAgents)
}

const registerAgentRoutes3= (app)=>{
  app.get("/agentRegion", Auth, AgentController.regionAgent)
}

const registerAgentRoutes4= (app)=>{
  app.put("/updateAgent", Auth, AgentController.updateAgent)
 
}

const registerAgentRoutes5= (app)=>{
  app.delete("/deleteAgent", Auth, AgentController.deleteAgent)
 
}
  module.exports ={
    registerAgentRoutes,
    registerAgentRoutes2,
    registerAgentRoutes3,
    registerAgentRoutes4,
    registerAgentRoutes5
  };