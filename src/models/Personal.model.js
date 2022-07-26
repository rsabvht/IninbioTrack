'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var Personal = function(Personal){
  this.idPersonal         = Personal.idPersonal
  this.idEmpresa          = Personal.idEmpresa;
  this.nombre             = Personal.nombre;
  this.paterno            = Personal.paterno;
  this.materno            = Personal.materno;
  this.rfc                = Personal.rfc;
  this.direccion          = Personal.direccion;
  this.telefono           = Personal.telefono;
  this.fingreso           = Personal.fingreso;
  this.fProximoContrato   = Personal.fProximoContrato;
  this.estatus            = Personal.estatus;
};
Personal.create = function (Personal, result) {
dbConn.query("INSERT INTO Personal set idEmpresa=?, nombre=?, paterno=?, materno=?, rfc=?, direccion=?, telefono=?, fingreso=NOW(), estatus=?",
[Personal.idEmpresa,Personal.nombre,Personal.paterno,Personal.materno,Personal.rfc,Personal.direccion,Personal.telefono,Personal.estatus], 
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
Personal.findById = function (id, result) {
dbConn.query("Select * from Personal where idPersonal = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Personal.findAll = function (result) {
dbConn.query("Select * from Personal", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Personal : ', res);
  result(null, res);
}
});
};
Personal.update = function(id, Personal, result){
dbConn.query("UPDATE Personal SET idEmpresa=?, nombre=?, paterno=?, materno=?, rfc=?, direccion=?, telefono=?, fProximoContrato=NOW(), estatus=? WHERE idPersonal = ?", 
[Personal.idEmpresa,Personal.nombre,Personal.paterno,Personal.materno,Personal.rfc,Personal.direccion,Personal.telefono,Personal.estatus,id], 
function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Personal.delete = function(id, Personal, result){
  dbConn.query("UPDATE Personal SET estatus = ? WHERE idPersonal = ?",
  [Personal.estatus, id], 
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
module.exports= Personal;