const HealthController = require("../features/health/health.controller");

const registerHealthRoutes = (app) => {
  app.get("/hello", HealthController.helloWorld);
};
const registerHealthRoutes1 = (app) => {
  app.get("/status", HealthController.status);
}; 
const registerHealthRoutes2 = (app) => {
  app.get("/error", HealthController.error);
};

/*
const registerHealthRoutes3 = (app) => {
  app.get("/emailList", HealthController.emailList);
};

const registerHealthRoutes4 = (app) => {
  app.get("/region", HealthController.region);
};*/
const registerHealthRoutes5 = (app) => {
  app.get("/residential", HealthController.residential);
};

const registerHealthRoutes6 = (app) => {
  app.post("/contact", HealthController.contact);
};



module.exports = {
  registerHealthRoutes,
  registerHealthRoutes2,
//  registerHealthRoutes3,
  //registerHealthRoutes4,
  registerHealthRoutes5,
  registerHealthRoutes6,
};