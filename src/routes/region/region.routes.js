const RegionController = require ('C:\\Users\\Admin\\Desktop\\formations2023\\web\\Codeboxx\\Senaine5\\Rocket-Genesis-Api\\src\\features\\health\\Region\\regionController');

const registerRegionRoutes = (app) => {
    app.post("/region-create",RegionController.createRegion);
  };

  const registerRegionRoutes2 = (app) => {
    app.post("/region",RegionController.getRegion);
  };

  module.exports ={
    registerRegionRoutes,
    registerRegionRoutes2,
  }