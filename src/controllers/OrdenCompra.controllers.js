'use strict';
const OrdenCompra = require('../models/OrdenCompra.model');
exports.findAll = function(req, res) {
OrdenCompra.findAll(function(err, OrdenCompra) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', OrdenCompra);
  res.send(OrdenCompra);
});
};
exports.create = function(req, res) {
const new_OrdenCompra = new OrdenCompra(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
OrdenCompra.create(new_OrdenCompra, function(err, OrdenCompra) {
  if (err)
  res.send(err);
  res.json({error:false,message:"OrdenCompra added successfully!",data:OrdenCompra});
});
}
};
exports.findById = function(req, res) {
OrdenCompra.findById(req.params.id, function(err, OrdenCompra) {
  if (err)
  res.send(err);
  res.json(OrdenCompra);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    OrdenCompra.update(req.params.id, new OrdenCompra(req.body), function(err, OrdenCompra) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'OrdenCompra successfully updated' });
});
}
};
exports.delete = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
OrdenCompra.delete( req.params.id, new OrdenCompra(req.body), function(err, OrdenCompra) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'OrdenCompra successfully deleted' });
});
  }
};