'use strict';
const Usuarios = require('../models/Usuarios.model');
exports.findAll = function(req, res) {
Usuarios.findAll(function(err, Usuarios) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', Usuarios);
  res.send(Usuarios);
});
};
exports.create = function(req, res) {
const new_Usuarios = new Usuarios(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Usuarios.create(new_Usuarios, function(err, Usuarios) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Usuarios added successfully!",data:Usuarios});
});
}
};
exports.findById = function(req, res) {
  Usuarios.findById(req.params.id, function(err, Usuarios) {
  if (err)
  res.send(err);
  res.json(Usuarios);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Usuarios.update(req.params.id, new Usuarios(req.body), function(err, Usuarios) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Usuarios successfully updated' });
});
}
};
exports.delete = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Usuarios.delete( req.params.id, new Usuarios(req.body), function(err, Usuarios) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Usuarios successfully deleted' });
});
  }
};