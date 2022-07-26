const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require employee routes
const EmpresaRoutes = require('./src/routes/Empresa.routes')
// using as middleware
app.use('/api/v1/Empresa', EmpresaRoutes)
// listen for requests

const PersonalRoutes = require('./src/routes/Personal.routes')
// using as middleware
app.use('/api/v1/Personal', PersonalRoutes)
// listen for requests

const UsuariosRoutes = require('./src/routes/Usuarios.routes')
// using as middleware
app.use('/api/v1/Usuarios', UsuariosRoutes)
// listen for requests

const ProductosRoutes = require('./src/routes/Productos.routes')
// using as middleware
app.use('/api/v1/Productos', ProductosRoutes)
// listen for requests

const DetallesODCRoutes = require('./src/routes/DetallesODC.routes')
// using as middleware
app.use('/api/v1/DetallesODC', DetallesODCRoutes)
// listen for requests

const ClientesRoutes = require('./src/routes/Clientes.routes')
// using as middleware
app.use('/api/v1/Clientes', ClientesRoutes)
// listen for requests

const DireccionesEntregaRoutes = require('./src/routes/DireccionesEntrega.routes')
// using as middleware
app.use('/api/v1/DireccionesEntrega', DireccionesEntregaRoutes)
// listen for requests

const BitacoraLotesRoutes = require('./src/routes/BitacoraLotes.routes')
// using as middleware
app.use('/api/v1/BitacoraLotes', BitacoraLotesRoutes)
// listen for requests


const OrdenCompraRoutes = require('./src/routes/OrdenCompra.routes')
// using as middleware
app.use('/api/v1/OrdenCompra', OrdenCompraRoutes)
// listen for requests

const ImpuestosRoutes = require('./src/routes/Impuestos.routes')
// using as middleware
app.use('/api/v1/Impuestos', ImpuestosRoutes)
// listen for requests

const PreciosProductosRoutes = require('./src/routes/PreciosProductos.routes')
// using as middleware
app.use('/api/v1/PreciosProductos', PreciosProductosRoutes)
// listen for requests

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});