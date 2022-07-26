'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var Clientes = function(Clientes){
  this.idEmpresa         = Clientes.idEmpresa;
  this.razonSocial       = Clientes.razonSocial;
  this.nombreComercial   = Clientes.nombreComercial;
  this.direccionFiscal   = Clientes.direccionFiscal;
  this.rfc               = Clientes.rfc;
  this.telefono          = Clientes.telefono;
  this.estatus           = Clientes.estatus;
};
Clientes.create = function (newUs, result) {
dbConn.query("INSERT INTO Clientes set ?", newUs, function (err, res) {
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
Clientes.findById = function (id, result) {
dbConn.query("Select * from Clientes where idClientes = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Clientes.findAll = function (result) {
dbConn.query("Select * from Clientes", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Clientes : ', res);
  result(null, res);
}
});
};

Clientes.update = function(id, Clientes, result){
dbConn.query("UPDATE Clientes SET  idEmpresa = ?, razonSocial=?, nombreComercial=?, direccionFiscal=?, rfc=?, telefono=?, rfc=estatus WHERE idClientes = ?", 
[Clientes.idEmpresa,Clientes.razonSocial, Clientes.nombreComercial, Clientes.direccionFiscal, Clientes.rfc, Clientes.telefono, Clientes.estatus, id], 
function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Clientes.delete = function(id, Clientes, result){
  dbConn.query("UPDATE Clientes SET estatus = ? WHERE idClientes = ?",
  [Clientes.estatus, id], 
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
module.exports= Clientes;