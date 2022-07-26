'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var Usuarios = function(Usuarios){
  this.tipo           = Usuarios.tipo;
  this.involucrado    = Usuarios.involucrado;
  this.usuario        = Usuarios.usuario;
  this.password       = Usuarios.password;
  this.estado         = Usuarios.estado;
};
Usuarios.create = function (newUs, result) {
dbConn.query("INSERT INTO Usuarios set ?", newUs, function (err, res) {
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
Usuarios.findById = function (id, result) {
dbConn.query("Select * from Usuarios where idUsuarios = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Usuarios.findAll = function (result) {
dbConn.query("Select * from Usuarios", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Usuarios : ', res);
  result(null, res);
}
});
};

Usuarios.update = function(id, Usuarios, result){
dbConn.query("UPDATE Usuarios SET  tipo = ?, involucrado=?, usuario=?, password=?, estado=? WHERE idUsuarios = ?", 
[Usuarios.tipo,Usuarios.involucrado, Usuarios.usuario, Usuarios.password, Usuarios.estado, id], 
function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Usuarios.delete = function(id, Usuarios, result){
  dbConn.query("UPDATE Usuarios SET estado = ? WHERE idUsuarios = ?",
  [Usuarios.estado, id], 
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
module.exports= Usuarios;