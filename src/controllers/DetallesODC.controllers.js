'use strict';
const DetallesODC = require('../models/DetallesODC.model');
exports.findAll = function(req, res) {
DetallesODC.findAll(function(err, DetallesODC) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', DetallesODC);
  res.send(DetallesODC);
});
};
exports.create = function(req, res) {
const new_DetallesODC = new DetallesODC(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
DetallesODC.create(new_DetallesODC, function(err, DetallesODC) {
  if (err)
  res.send(err);
  res.json({error:false,message:"DetallesODC added successfully!",data:DetallesODC});
});
}
};
exports.findById = function(req, res) {
DetallesODC.findById(req.params.id, function(err, DetallesODC) {
  if (err)
  res.send(err);
  res.json(DetallesODC);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    DetallesODC.update(req.params.id, new DetallesODC(req.body), function(err, DetallesODC) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'DetallesODC successfully updated' });
});
}
};
exports.delete = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
DetallesODC.delete( req.params.id, new DetallesODC(req.body), function(err, DetallesODC) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'DetallesODC successfully deleted' });
});
  }
};