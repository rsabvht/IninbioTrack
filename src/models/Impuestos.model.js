'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var Impuestos = function(Impuestos){
  this.nombre            = Impuestos.nombre;
  this.alias             = Impuestos.alias;
  this.descripcion       = Impuestos.descripcion;
  this.valor             = Impuestos.valor;
  this.fRegistro         = Impuestos.fRegistro;
  this.estatus           = Impuestos.estatus;
};
Impuestos.create = function (Impuestos, result) {
dbConn.query("INSERT INTO Impuestos set nombre=?, alias=?, descripcion=?, valor=?, fRegistro=NOW(),  estatus=?",
[Impuestos.nombre, Impuestos.alias, Impuestos.descripcion, Impuestos.valor, Impuestos.estatus],
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
Impuestos.findById = function (id, result) {
dbConn.query("Select * from Impuestos where idImpuestos  = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Impuestos.findAll = function (result) {
dbConn.query("Select * from Impuestos", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Impuestos : ', res);
  result(null, res);
}
});
};

Impuestos.update = function(id, Impuestos, result){
dbConn.query("UPDATE Impuestos SET nombre = ?, alias = ?, descripcion = ?, valor=?, estatus=? WHERE idImpuestos  = ?", 
[Impuestos.nombre, Impuestos.alias, Impuestos.descripcion, Impuestos.valor, Impuestos.estatus,id], 
function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Impuestos.delete = function(id, Impuestos, result){
  dbConn.query("UPDATE Impuestos SET estatus = ? WHERE idImpuestos  = ?",
  [Impuestos.estatus,id], 
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
module.exports= Impuestos;