'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var DetallesODC = function(DetallesODC){
  this.idProductos         = DetallesODC.idProductos;
  this.idOrdenCompra       = DetallesODC.idOrdenCompra;
  this.lote                = DetallesODC.lote;
  this.cantidad            = DetallesODC.cantidad;
  this.precio              = DetallesODC.precio;
  this.idImpuestos         = DetallesODC.idImpuestos;
  this.valorImpuesto       = DetallesODC.valorImpuesto;
  this.fRegistro           = DetallesODC.fRegistro;
  this.estatus             = DetallesODC.estatus;
};
DetallesODC.create = function (DetallesODC, result) {
dbConn.query("INSERT INTO DetallesODC set lote=?, cantidad=?, precio=?, idImpuestos=?, valorImpuesto=?, fRegistro=NOW(), estatus=?, idProductos = ?",
[DetallesODC.lote, DetallesODC.cantidad, DetallesODC.precio, DetallesODC.idImpuestos,DetallesODC.valorImpuesto,DetallesODC.estatus, DetallesODC.idProductos],
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
DetallesODC.findById = function (id, result) {
dbConn.query("Select * from DetallesODC where idOrdenCompra  = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
DetallesODC.findAll = function (result) {
dbConn.query("Select * from DetallesODC", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('DetallesODC : ', res);
  result(null, res);
}
});
};

DetallesODC.update = function(id, DetallesODC, result){
dbConn.query("UPDATE DetallesODC SET idProductos = ?, lote=?, cantidad=?, precio=?, idImpuestos=?, valorImpuesto=?, estatus=? WHERE idOrdenCompra  = ?", 
[DetallesODC.idProductos, DetallesODC.lote, DetallesODC.cantidad, DetallesODC.precio, DetallesODC.idImpuestos, DetallesODC.valorImpuesto,DetallesODC.estatus,id], 
function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

DetallesODC.delete = function(id, DetallesODC, result){
  dbConn.query("UPDATE DetallesODC SET estatus = ? WHERE idOrdenCompra  = ?",
  [DetallesODC.estatus,id], 
function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    result(null, res);
  }
  });
  };
module.exports= DetallesODC;