const HealthController = require("../features/health/health.controller");
const Auth = require("C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\Authentification.js");

const registerHealthRoutes = (app) => {
  app.get("/hello", HealthController.helloWorld);
};

const registerHealthRoutes2 = (app) => {
  app.get("/error", HealthController.error);
};

const registerHealthRoutes3 = (app) => {
  app.get("/emailList", Auth, HealthController.emailList);
};

const registerHealthRoutes4 = (app) => {
  app.get("/region", Auth, HealthController.region);
};
const registerHealthRoutes5 = (app) => {
  app.get("/residential", Auth, HealthController.residential);
};

const registerHealthRoutes6 = (app) => {
  app.post("/contact", Auth, HealthController.contact);
};

module.exports = {
  registerHealthRoutes,
  // registerHealthRoutes1,
  registerHealthRoutes2,
  registerHealthRoutes3,
  registerHealthRoutes4,
  registerHealthRoutes5,
  registerHealthRoutes6,
};
