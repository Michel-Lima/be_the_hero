const express = require('express');

const routes =require('./routes');

const app =express();
app.use(cors());
app.use(express.json());
app.use(routes);
/** rota /recurso */

/** metodo http
 * 
 *get usando quando for buscar informação 

 post = usado para criar uma informação 
 put usado para alterar informação 
 delete = deletar informação no backend
 */
 
 /** tipos de parametros
  * query params:  parametros noemados enviados na rota apos o simbolo "?" s
  * server para filtos paginacao 
  * route  params:utilizado para indentificar recursos  
  * request body:corpo da requisicao utilizado para criar ou alterar recursos 
  */


 app.listen(3333);