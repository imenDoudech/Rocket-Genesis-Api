// Initial dependencies and definitions

require("dotenv").config();
const Express = require("express");
const app = Express();

const port = process.env.PORT || 3004;

// Import routes
const HealthRoutes = require("./src/routes/health.routes");
const AgentRoutes = require("./src/routes/Agents/agent.routes");
const MongoManager = require("./src/shared/db/mongodb/mongo-manager");
const RegionRoutes = require("./src/routes/region/region.routes");
app.use(Express.json());

HealthRoutes.registerHealthRoutes(app);
HealthRoutes.registerHealthRoutes2(app);

AgentRoutes.registerAgentRoutes(app);

RegionRoutes.registerRegionRoutes(app);

MongoManager.openMongoConnection();
//MongoManager.creationCollection("coll3");

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
