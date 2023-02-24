// Initial dependencies and definitions

require("dotenv").config();
const Express = require("express");
const app = Express();

const port = process.env.PORT || 3004;
const MongoManager = require("./src/shared/db/mongodb/mongo-manager");
//MongoManager.openMongoConnection();

// Import routes
const HealthRoutes = require("./src/routes/health.routes");
const AgentRoutes = require("./src/routes/Agents/agent.routes");
const RegionRoutes = require("./src/routes/region/region.routes");


app.use(Express.json());

// routes HELTH
HealthRoutes.registerHealthRoutes(app);
HealthRoutes.registerHealthRoutes2(app);
HealthRoutes.registerHealthRoutes3(app);
HealthRoutes.registerHealthRoutes4(app);
HealthRoutes.registerHealthRoutes5(app);
HealthRoutes.registerHealthRoutes6(app);

// routes Agent
AgentRoutes.registerAgentRoutes(app);
AgentRoutes.registerAgentRoutes2(app);
AgentRoutes.registerAgentRoutes3(app);
AgentRoutes.registerAgentRoutes4(app);
AgentRoutes.registerAgentRoutes5(app);

// routes Region
RegionRoutes.registerRegionRoutes(app);
RegionRoutes.registerRegionRoutes2(app);
RegionRoutes.registerRegionRoutes3(app);


//MongoManager.creationCollection("coll3");


app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
