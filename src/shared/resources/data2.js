const unitPrices = {
    standard: 8000,
    premium: 12000,
    excelium: 15000,
  };
  
  const installPercentFees = {
    standard: 10,
    premium: 15,
    excelium: 20,
  };
  MongoManager.openMongoConnection();
  module.exports = {agents,unitPrices,installPercentFees};