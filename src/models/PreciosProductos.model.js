'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var PreciosProductos = function(PreciosProductos){
  this.idEmpresa                    = PreciosProductos.idEmpresa;
  this.idProductos                  = PreciosProductos.idProductos;
  this.idClientes                   = PreciosProductos.idClientes;
  this.precio                       = PreciosProductos.precio;
  this.fRegistro                    = PreciosProductos.fRegistro;
  this.fUltimaActualizacion         = PreciosProductos.fUltimaActualizacion;
};
PreciosProductos.create = function (PreciosProductos, result) {
dbConn.query("INSERT INTO PreciosProductos set idEmpresa=?, idProductos=?, idClientes=?, precio=?, fRegistro=NOW()",
[PreciosProductos.idEmpresa, PreciosProductos.idProductos, PreciosProductos.idClientes, PreciosProductos.precio],
function (err, res) {
  if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
PreciosProductos.findById = function (id, result) {
dbConn.query("Select * from PreciosProductos where idPreciosProductos  = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
PreciosProductos.findAll = function (result) {
dbConn.query("Select * from PreciosProductos", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('PreciosProductos : ', res);
  result(null, res);
}
});
};

PreciosProductos.update = function(id, PreciosProductos, result){
dbConn.query("UPDATE PreciosProductos SET idEmpresa=?, idProductos=?, idClientes=?, precio=?, fUltimaActualizacion=NOW() WHERE idPreciosProductos = ?", 
[PreciosProductos.idEmpresa, PreciosProductos.idProductos, PreciosProductos.idClientes, PreciosProductos.precio,id], 
function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

// PreciosProductos.delete = function(id, PreciosProductos, result){
//   dbConn.query("UPDATE PreciosProductos SET estatus = ? WHERE idPreciosProductos  = ?",
//   [PreciosProductos.estatus,id], 
// function (err, res) {
//   if(err) {
//     console.log("error: ", err);
//     result(null, err);
//   }
//   else{
//     result(null, res);
//   }
//   });
//   };
module.exports= PreciosProductos;