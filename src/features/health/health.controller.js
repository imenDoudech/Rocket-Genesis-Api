

const helloWorld = async (req, res) => {
  res.send("Hello World!!");
};

const status = async (req, res) => {
  res.send("Name: " + process.env.ENV_NAME + "  Port: " + Port);
};

const error = async (req, res) => {
  res.send(
    "Erreur 404: Bad request : Impossible de convertir entre les ID d’abonnement Commerce et Azure Active Directory."
  );
};
/*
const emailList = async (req, res) => {  
 
  const emails = [];
  for (let agent of agents) {
    emails.push(agent.email);
  }
  res.json(emails);
};

const region = async (req, res) => {
  let feeT = 0;
  let ratingT = 0;
  let feeM;
  let ratingM;
  //chercher les agents selon leurs regions
  const region = req.query.region;
  const resultR = agents.filter((agent) => agent.region.includes(region));
  if (resultR.length < 1) {
    res.status(404).send("No agents found in region  " + region);
  }
  //calculer le rating
  for (let i = 0; i < resultR.length; i++) {
    feeT = feeT + JSON.parse(resultR[i].fee);
    ratingT = ratingT + JSON.parse(resultR[i].rating);
  }
  //calculer le fee
  feeM = (feeT / resultR.length).toFixed(2);
  ratingM = (ratingT / resultR.length).toFixed(2);

  res.json(
    region + " : { Frais Moyen: " + feeM + " , Note moyenne:" + ratingM + " }"
  );
};
*/
const residential = async (req, res) => {
  const calcul1 = require("../shared/resources/calcul");
  //appeler les fonctons de calcul
  let assenceursR = calcul1.calcResidentialElev(3, 100);
  let prixTT = calcul1.calculatTTP(100, 3, "excelium", assenceursR);
  let infos = {
    Assenceurs_requis: assenceursR,
    Prix_Total: prixTT,
  };
  res.send(infos);
};

const contact = async (req, res) => {
  const last_name = req.body.last_name;
  const message = req.body.message;

  res.send(`${first_name} (${last_name} a envoyé un message`); //confirmation
  console.log(
    `Message recu de la part de:  ${first_name}  ${last_name}. Message : ${message}.`
  );
};





module.exports = {
  helloWorld,
  status,
  error,
  //emailList,
 // region,
  residential,
  contact,
};