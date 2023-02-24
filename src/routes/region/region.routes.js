const RegionController = require ('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\features\\health\\Region\\regionController');
const Auth = require('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\Authentification.js');

const registerRegionRoutes = (app) => {
    app.post("/region-create",Auth, RegionController.createRegion);
  };

  const registerRegionRoutes2 = (app) => {
    app.get("/regionR",Auth, RegionController.getRegion);
  };

  const registerRegionRoutes3 = (app) => {
    app.get("/all-stars",Auth, RegionController.star);
  };

  module.exports ={
    registerRegionRoutes,
    registerRegionRoutes2,
    registerRegionRoutes3,
  }