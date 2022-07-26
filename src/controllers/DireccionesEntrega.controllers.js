'use strict';
const DireccionesEntrega = require('../models/DireccionesEntrega.model');
exports.findAll = function(req, res) {
DireccionesEntrega.findAll(function(err, DireccionesEntrega) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', DireccionesEntrega);
  res.send(DireccionesEntrega);
});
};
exports.create = function(req, res) {
const new_DireccionesEntrega = new DireccionesEntrega(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
DireccionesEntrega.create(new_DireccionesEntrega, function(err, DireccionesEntrega) {
  if (err)
  res.send(err);
  res.json({error:false,message:"DireccionesEntrega added successfully!",data:DireccionesEntrega});
});
}
};
exports.findById = function(req, res) {
  DireccionesEntrega.findById(req.params.id, function(err, DireccionesEntrega) {
  if (err)
  res.send(err);
  res.json(DireccionesEntrega);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    DireccionesEntrega.update(req.params.id, new DireccionesEntrega(req.body), function(err, DireccionesEntrega) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'DireccionesEntrega successfully updated' });
});
}
};
exports.delete = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    DireccionesEntrega.delete( req.params.id, new DireccionesEntrega(req.body), function(err, DireccionesEntrega) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'DireccionesEntrega successfully deleted' });
});
  }
};