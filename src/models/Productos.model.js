'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var Productos = function(Productos){
  this.idEmpresa         = Productos.idEmpresa;
  this.nombre            = Productos.nombre;
  this.PartNum           = Productos.PartNum;
  this.code              = Productos.code;
  this.precioMenudeo     = Productos.precioMenudeo;
  this.precioMayoreo     = Productos.precioMayoreo;
  this.estato            = Productos.estato;
  this.idUnidadMedida    = Productos.idUnidadMedida;
};
Productos.create = function (newPro, result) {
dbConn.query("INSERT INTO Productos set ?", newPro, function (err, res) {
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
Productos.findById = function (id, result) {
dbConn.query("Select * from Productos where idProductos = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Productos.findAll = function (result) {
dbConn.query("Select * from Productos", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Productos : ', res);
  result(null, res);
}
});
};

Productos.update = function(id, Productos, result){
dbConn.query("UPDATE Productos SET idEmpresa=?, nombre=?, PartNum=?, code=?, precioMenudeo=?, precioMayoreo=?, estato=?, idUnidadMedida=? WHERE idProductos = ?", 
[Productos.idEmpresa, Productos.nombre, Productos.PartNum,Productos.code,Productos.precioMenudeo,Productos.precioMayoreo,Productos.estato,Productos.idUnidadMedida,id], 
function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Productos.delete = function(id, Productos, result){
  dbConn.query("UPDATE Productos SET estato = ? WHERE idProductos = ?",
  [Productos.estato,id], 
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
module.exports= Productos;