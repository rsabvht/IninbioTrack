'use strict';
const Empresa = require('../models/Empresa.model');
exports.findAll = function(req, res) {
Empresa.findAll(function(err, Empresa) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', Empresa);
  res.send(Empresa);
});
};
exports.create = function(req, res) {
const new_Empresa = new Empresa(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Empresa.create(new_Empresa, function(err, Empresa) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Empresa added successfully!",data:Empresa});
});
}
};
exports.findById = function(req, res) {
Empresa.findById(req.params.id, function(err, Empresa) {
  if (err)
  res.send(err);
  res.json(Empresa);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Empresa.update(req.params.id, new Empresa(req.body), function(err, Empresa) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Empresa successfully updated' });
});
}
};
exports.delete = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
Empresa.delete( req.params.id, new Empresa(req.body), function(err, Empresa) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Empresa successfully deleted' });
});
  }
};