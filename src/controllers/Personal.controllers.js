'use strict';
const Personal = require('../models/Personal.model');
exports.findAll = function(req, res) {
Personal.findAll(function(err, Personal) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', Personal);
  res.send(Personal);
});
};
exports.create = function(req, res) {
const new_Personal = new Personal(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Personal.create(new_Personal, function(err, Personal) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Personal added successfully!",data:Personal});
});
}
};
exports.findById = function(req, res) {
Personal.findById(req.params.id, function(err, Personal) {
  if (err)
  res.send(err);
  res.json(Personal);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Personal.update(req.params.id, new Personal(req.body), function(err, Personal) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Personal successfully updated' });
});
}
};
exports.delete = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
Personal.delete( req.params.id,  new Personal(req.body), function(err, Personal) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Personal successfully deleted' });
});
  }
};