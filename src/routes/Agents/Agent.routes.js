
const AgentController = require ('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\features\\health\\Agents\\agentController');

const registerAgentRoutes = (app) => {
    app.post("/createAgent",AgentController.createAgent);
  };

const registerAgentRoutes2= (app)=>{
    app.get("/ListAgents", AgentController.ListAgents)
}

const registerAgentRoutes3= (app)=>{
  app.get("/agentRegion", AgentController.regionAgent)
}

const registerAgentRoutes4= (app)=>{
  app.put("/updateAgent", AgentController.updateAgent)
 
}

const registerAgentRoutes5= (app)=>{
  app.delete("/deleteAgent", AgentController.deleteAgent)
 
}
  module.exports ={
    registerAgentRoutes,
    registerAgentRoutes2,
    registerAgentRoutes3,
    registerAgentRoutes4,
    registerAgentRoutes5
  };