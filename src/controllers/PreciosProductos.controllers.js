'use strict';
const PreciosProductos = require('../models/PreciosProductos.model');
exports.findAll = function(req, res) {
PreciosProductos.findAll(function(err, PreciosProductos) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', PreciosProductos);
  res.send(PreciosProductos);
});
};
exports.create = function(req, res) {
const new_PreciosProductos = new PreciosProductos(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
PreciosProductos.create(new_PreciosProductos, function(err, PreciosProductos) {
  if (err)
  res.send(err);
  res.json({error:false,message:"PreciosProductos added successfully!",data:PreciosProductos});
});
}
};
exports.findById = function(req, res) {
PreciosProductos.findById(req.params.id, function(err, PreciosProductos) {
  if (err)
  res.send(err);
  res.json(PreciosProductos);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    PreciosProductos.update(req.params.id, new PreciosProductos(req.body), function(err, PreciosProductos) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'PreciosProductos successfully updated' });
});
}
};


// exports.delete = function(req, res) {
//   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//     res.status(400).send({ error:true, message: 'Please provide all required field' });
//   }else{
// PreciosProductos.delete( req.params.id, new PreciosProductos(req.body), function(err, PreciosProductos) {
//   if (err)
//   res.send(err);
//   res.json({ error:false, message: 'PreciosProductos successfully deleted' });
// });
//   }
// };