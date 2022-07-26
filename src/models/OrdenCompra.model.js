'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var OrdenCompra = function(OrdenCompra){
  this.idPersonal            = OrdenCompra.idPersonal;
  this.comentarios           = OrdenCompra.comentarios;
  this.fCreacion             = OrdenCompra.fCreacion;
  this.fDescarte             = OrdenCompra.fDescarte;
  this.fPreparacion          = OrdenCompra.fPreparacion;
  this.fEnvio                = OrdenCompra.fEnvio;
  this.fRealEntrega          = OrdenCompra.fRealEntrega;
  this.fPropuestaEntrega     = OrdenCompra.fPropuestaEntrega;
  this.fRegistro             = OrdenCompra.fRegistro;
  this.descuento             = OrdenCompra.descuento;
  this.estatus               = OrdenCompra.estatus;
};
OrdenCompra.create = function (OrdenCompra, result) {
dbConn.query("INSERT INTO OrdenCompra set idPersonal=?, comentarios=?, fCreacion=NOW(), fRegistro=NOW(), descuento=?, estatus=?",
[OrdenCompra.idPersonal, OrdenCompra.comentarios, OrdenCompra.descuento,OrdenCompra.estatus],
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
OrdenCompra.findById = function (id, result) {
dbConn.query("Select * from OrdenCompra where idOrdenCompra  = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
OrdenCompra.findAll = function (result) {
dbConn.query("Select * from OrdenCompra", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('OrdenCompra : ', res);
  result(null, res);
}
});
};

OrdenCompra.update = function(id, OrdenCompra, result){
dbConn.query("UPDATE OrdenCompra SET idPersonal = ?, comentarios=?, fDescarte=NOW(), fPreparacion=NOW(), fEnvio=NOW(), fRealEntrega=NOW(), fPropuestaEntrega=NOW(), fRegistro=NOW(), descuento=?, estatus=? WHERE idOrdenCompra  = ?", 
[OrdenCompra.idPersonal, OrdenCompra.comentarios, OrdenCompra.descuento, OrdenCompra.estatus,id], 
function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

OrdenCompra.delete = function(id, OrdenCompra, result){
  dbConn.query("UPDATE OrdenCompra SET estatus = ? WHERE idOrdenCompra  = ?",
  [OrdenCompra.estatus,id], 
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
module.exports= OrdenCompra;