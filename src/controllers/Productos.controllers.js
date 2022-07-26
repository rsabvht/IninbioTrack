'use strict';
const Productos = require('../models/Productos.model');
exports.findAll = function(req, res) {
Productos.findAll(function(err, Productos) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', Productos);
  res.send(Productos);
});
};
exports.create = function(req, res) {
const new_Productos = new Productos(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Productos.create(new_Productos, function(err, Productos) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Productos added successfully!",data:Productos});
});
}
};
exports.findById = function(req, res) {
Productos.findById(req.params.id, function(err, Productos) {
  if (err)
  res.send(err);
  res.json(Productos);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Productos.update(req.params.id, new Productos(req.body), function(err, Productos) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Productos successfully updated' });
});
}
};
exports.delete = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
Productos.delete( req.params.id, new Productos(req.body), function(err, Productos) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Producto successfully deleted' });
});
  }
};