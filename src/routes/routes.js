const express = require("express");
const routes = express.Router();

const PeopleController = require("../controllers/PeopleController");

const upload = require('../../uploadMiddleware');

routes.get("/people", PeopleController.index); 
routes.get("/people/:id", PeopleController.detail);  
routes.delete("/people/:id", PeopleController.destroy);   
routes.post("/people/:id", PeopleController.update);    
routes.post("/people", PeopleController.store, upload.single('image'), async function (req, res) {
    await console.log('post');
  });
  

module.exports = routes;