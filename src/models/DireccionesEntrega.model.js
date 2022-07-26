'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var DireccionesEntrega = function(DireccionesEntrega){
  this.idClientes     = DireccionesEntrega.idClientes;
  this.alias          = DireccionesEntrega.alias;
  this.calle          = DireccionesEntrega.calle;
  this.colonia        = DireccionesEntrega.colonia;
  this.ciudad         = DireccionesEntrega.ciudad;
  this.pais           = DireccionesEntrega.pais;
  this.codigoPostal   = DireccionesEntrega.codigoPostal;
  this.entreCalle1    = DireccionesEntrega.entreCalle1;
  this.entreCalle2    = DireccionesEntrega.entreCalle2;
  this.latitud        = DireccionesEntrega.latitud;
  this.longitud       = DireccionesEntrega.longitud;
  this.estatus        = DireccionesEntrega.estatus;
};
DireccionesEntrega.create = function (newUs, result) {
dbConn.query("INSERT INTO DireccionesEntrega set ?", newUs, function (err, res) {
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
DireccionesEntrega.findById = function (id, result) {
dbConn.query("Select * from DireccionesEntrega where idDireccionesEntrega = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
DireccionesEntrega.findAll = function (result) {
dbConn.query("Select * from DireccionesEntrega", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('DireccionesEntrega : ', res);
  result(null, res);
}
});
};

DireccionesEntrega.update = function(id, DireccionesEntrega, result){
dbConn.query("UPDATE DireccionesEntrega SET  idClientes = ?, alias=?, calle=?, colonia=?, ciudad=?, pais=?, codigoPostal=?, entreCalle1=?, entreCalle2=?, latitud=?, longitud=?, estatus=? WHERE idDireccionesEntrega = ?", 
[DireccionesEntrega.idClientes,DireccionesEntrega.alias, DireccionesEntrega.calle, DireccionesEntrega.colonia, DireccionesEntrega.ciudad, 
DireccionesEntrega.pais, DireccionesEntrega.codigoPostal, DireccionesEntrega.entreCalle1, DireccionesEntrega.entreCalle2, DireccionesEntrega.latitud, 
DireccionesEntrega.longitud, DireccionesEntrega.estatus, id], 
function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

DireccionesEntrega.delete = function(id, DireccionesEntrega, result){
  dbConn.query("UPDATE DireccionesEntrega SET estatus = ? WHERE idDireccionesEntrega = ?",
  [DireccionesEntrega.estatus, id], 
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
module.exports= DireccionesEntrega;