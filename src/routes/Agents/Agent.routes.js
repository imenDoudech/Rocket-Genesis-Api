
const AgentController = require ('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\routes\\Agents\\agent.routes.js');

const registerAgentRoutes = (app) => {
    app.post("/createAgent",AgentController.createAgent);
  };

const registerAgentRoutes2= (app)=>{
    app.get("/ListAgents", AgentController.ListAgents)
}
  module.exports ={
    registerAgentRoutes,
    registerAgentRoutes2,
  };