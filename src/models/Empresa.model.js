'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var Empresa = function(Empresa){
  this.razonSocial         = Empresa.razonSocial;
  this.direccionFiscal     = Empresa.direccionFiscal;
  this.rfc                 = Empresa.rfc;
  this.nombreComercial     = Empresa.nombreComercial;
  this.telefono            = Empresa.telefono;
  this.estatus             = Empresa.estatus;
};
Empresa.create = function (newEmp, result) {
dbConn.query("INSERT INTO Empresa set ?", newEmp, function (err, res) {
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
Empresa.findById = function (id, result) {
dbConn.query("Select * from Empresa where idEmpresa = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Empresa.findAll = function (result) {
dbConn.query("Select * from Empresa", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Empresa : ', res);
  result(null, res);
}
});
};

Empresa.update = function(id, Empresa, result){
dbConn.query("UPDATE Empresa SET razonSocial=?, direccionFiscal=?, rfc=?, nombreComercial=?, telefono=?, estatus=? WHERE idEmpresa = ?", 
[Empresa.razonSocial,Empresa.direccionFiscal,Empresa.rfc,Empresa.nombreComercial,Empresa.telefono,Empresa.estatus,id], 
function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Empresa.delete = function(id, Empresa, result){
  dbConn.query("UPDATE Empresa SET estatus = ? WHERE idEmpresa = ?",
  [Empresa.estatus,id], 
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
module.exports= Empresa;