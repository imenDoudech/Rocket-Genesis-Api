const mongoose = require("mongoose");
const bodyParser = require('body-Parser');
const schemas = require('/src/shared/db/mongodb/shemas');


//Endpoint - '/agent-create'

const createAgent = async (req, res)=> {
    const shemas = new shemas({
      first_name :req.body.first_name,
      last_name  :req.body.last_name,
      email : req.body.email,
      region: req.body.region,
      rating: req.body.rating, 
      fee : req.body.fee, 
      sales: req.body.sales,

    });
    shemas.save()
    .then(()=> res.status(201).json ({message: 'agent ajoute !'}))
    .then(error => res.status (400).json ({error}));
  };


 // Endpoint - '/agents'
const ListAgents = async (req, res) => {
    schemas.find().then(
        (shemass) => {
            res.status(200).json(shemass);
        }
    ).catch(
        (error) => {
            res.status (400).json({
                error:error
            });
        }
    );
    };



  module.exports={
    createAgent,
    ListAgents
  };