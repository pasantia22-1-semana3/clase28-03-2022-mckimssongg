import express from 'express';
import { DelitosController } from '../controllers/delitos.ctl.js';


const delitosController = new DelitosController();
const routerDelitos = express.Router();


routerDelitos.get('/', delitosController.getTodosLosDatos)


routerDelitos.get('/tipos', delitosController.getTodosLosTipos)


routerDelitos.get('/estadisticas', delitosController.getEstadisticasTotales)

export default routerDelitos;