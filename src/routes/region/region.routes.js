const RegionController = require ('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\features\\health\\Region\\regionController');

//l'authetification
const Auth = require('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\Authentification.js');

//La journalisation - Express.js
const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";

//Endpoint - '/region-create'
const registerRegionRoutes = (app) => {
    app.post("/region-create",Auth, RegionController.createRegion);
    logger.debug("POST: cregion-create");
  };

  //Endpoint - '/regionR'
  const registerRegionRoutes2 = (app) => {
    app.get("/regionR",Auth, RegionController.getRegion);
    logger.debug("Get: regionR");
  };

  //Endpoint - '/all-stars'
  const registerRegionRoutes3 = (app) => {
    app.get("/all-stars",Auth, RegionController.star);
    logger.debug("GET: all-star");
  };

  module.exports ={
    registerRegionRoutes,
    registerRegionRoutes2,
    registerRegionRoutes3,
  }