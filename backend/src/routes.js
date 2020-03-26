const express =require('express');

const OngController =require('./controllers/ongController');
const IncidentsController =require('./controllers/IncidentController');
const ProfileController =require('./controllers/ProfileControllers');
const SessionControllers =require('./controllers/sessionControllers');
const routes = express.Router();
routes.post('/sessions',SessionControllers.create)

routes.get('/ongs',OngController.index);
/** metodo usado para salvar */
routes.post('/ongs',OngController.create) ;

routes.post('/incidents',IncidentsController.create);
routes.get('/incidents',IncidentsController.index);
routes.delete('/incidents/:id',IncidentsController.delete);
routes.get('/profile',ProfileController.index);
module.exports = routes;
 