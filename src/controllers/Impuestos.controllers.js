'use strict';
const Impuestos = require('../models/Impuestos.model');
exports.findAll = function(req, res) {
Impuestos.findAll(function(err, Impuestos) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', Impuestos);
  res.send(Impuestos);
});
};
exports.create = function(req, res) {
const new_Impuestos = new Impuestos(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Impuestos.create(new_Impuestos, function(err, Impuestos) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Impuestos added successfully!",data:Impuestos});
});
}
};
exports.findById = function(req, res) {
Impuestos.findById(req.params.id, function(err, Impuestos) {
  if (err)
  res.send(err);
  res.json(Impuestos);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Impuestos.update(req.params.id, new Impuestos(req.body), function(err, Impuestos) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Impuestos successfully updated' });
});
}
};
exports.delete = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
Impuestos.delete( req.params.id, new Impuestos(req.body), function(err, Impuestos) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Impuestos successfully deleted' });
});
  }
};