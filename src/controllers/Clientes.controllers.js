'use strict';
const Clientes = require('../models/Clientes.model');
exports.findAll = function(req, res) {
Clientes.findAll(function(err, Clientes) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', Clientes);
  res.send(Clientes);
});
};
exports.create = function(req, res) {
const new_Clientes = new Clientes(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Clientes.create(new_Clientes, function(err, Clientes) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Clientes added successfully!",data:Clientes});
});
}
};
exports.findById = function(req, res) {
  Clientes.findById(req.params.id, function(err, Clientes) {
  if (err)
  res.send(err);
  res.json(Clientes);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Clientes.update(req.params.id, new Clientes(req.body), function(err, Clientes) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Clientes successfully updated' });
});
}
};
exports.delete = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Clientes.delete( req.params.id, new Clientes(req.body), function(err, Clientes) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Clientes successfully deleted' });
});
  }
};