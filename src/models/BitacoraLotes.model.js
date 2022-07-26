'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var BitacoraLotes = function(BitacoraLotes){
  this.lote             = BitacoraLotes.lote;
  this.idDetallesODC    = BitacoraLotes.idDetallesODC;
  this.stock            = BitacoraLotes.stock;
  this.cantidad         = BitacoraLotes.cantidad;
  this.newStock         = BitacoraLotes.newStock;
  this.fRegistro        = BitacoraLotes.fRegistro;
};
BitacoraLotes.create = function (BitacoraLotes, result) {
dbConn.query("INSERT INTO BitacoraLotes set lote=?, idDetallesODC=?, stock=?, cantidad=?, newStock=?, fRegistro=NOW()",
[BitacoraLotes.lote, BitacoraLotes.idDetallesODC, BitacoraLotes.stock, BitacoraLotes.cantidad,BitacoraLotes.newStock],
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
BitacoraLotes.findById = function (id, result) {
dbConn.query("Select * from BitacoraLotes where idBitacoraLotes  = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
BitacoraLotes.findAll = function (result) {
dbConn.query("Select * from BitacoraLotes", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('BitacoraLotes : ', res);
  result(null, res);
}
});
};

BitacoraLotes.update = function(id, BitacoraLotes, result){
dbConn.query("UPDATE BitacoraLotes SET lote=?, idDetallesODC=?, stock=?, cantidad=?, newStock=? WHERE idBitacoraLotes = ?", 
[BitacoraLotes.lote, BitacoraLotes.idDetallesODC, BitacoraLotes.stock, BitacoraLotes.cantidad, BitacoraLotes.newStock,id], 
function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

// BitacoraLotes.delete = function(id, BitacoraLotes, result){
//   dbConn.query("UPDATE BitacoraLotes SET estatus = ? WHERE idBitacoraLotes  = ?",
//   [BitacoraLotes.estatus,id], 
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
module.exports= BitacoraLotes;