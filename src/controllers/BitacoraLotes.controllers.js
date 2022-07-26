'use strict';
const BitacoraLotes = require('../models/BitacoraLotes.model');
exports.findAll = function(req, res) {
BitacoraLotes.findAll(function(err, BitacoraLotes) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', BitacoraLotes);
  res.send(BitacoraLotes);
});
};
exports.create = function(req, res) {
const new_BitacoraLotes = new BitacoraLotes(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
BitacoraLotes.create(new_BitacoraLotes, function(err, BitacoraLotes) {
  if (err)
  res.send(err);
  res.json({error:false,message:"BitacoraLotes added successfully!",data:BitacoraLotes});
});
}
};
exports.findById = function(req, res) {
BitacoraLotes.findById(req.params.id, function(err, BitacoraLotes) {
  if (err)
  res.send(err);
  res.json(BitacoraLotes);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    BitacoraLotes.update(req.params.id, new BitacoraLotes(req.body), function(err, BitacoraLotes) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'BitacoraLotes successfully updated' });
});
}
};


// exports.delete = function(req, res) {
//   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//     res.status(400).send({ error:true, message: 'Please provide all required field' });
//   }else{
// BitacoraLotes.delete( req.params.id, new BitacoraLotes(req.body), function(err, BitacoraLotes) {
//   if (err)
//   res.send(err);
//   res.json({ error:false, message: 'BitacoraLotes successfully deleted' });
// });
//   }
// };