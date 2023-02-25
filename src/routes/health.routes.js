const HealthController = require("../features/health/health.controller");

//l'authetification
const Auth = require("C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\Authentification.js");

//La journalisation - Express.js
const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";


//Endpoint - '/hello'
const registerHealthRoutes = (app) => {
  app.get("/hello", HealthController.helloWorld);
  logger.debug("GET: hello");
};

//Endpoint - '/error'
const registerHealthRoutes2 = (app) => {
  app.get("/error", HealthController.error);
  logger.debug("GET: error");
};

//Endpoint - '/emailList'
const registerHealthRoutes3 = (app) => {
  app.get("/emailList", Auth, HealthController.emailList);
  logger.debug("GET: emailList");
};

//Endpoint - '/region'
const registerHealthRoutes4 = (app) => {
  app.get("/region", Auth, HealthController.region);
  logger.debug("GET: region");

};

//Endpoint - '/residential'
const registerHealthRoutes5 = (app) => {
  app.get("/residential", Auth, HealthController.residential);
  logger.debug("GET: residential");
};

//Endpoint - '/contact'
const registerHealthRoutes6 = (app) => {
  app.post("/contact", Auth, HealthController.contact);
  logger.debug("POST: contact");
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
