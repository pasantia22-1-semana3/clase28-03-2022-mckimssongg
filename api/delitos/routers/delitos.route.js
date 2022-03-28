import express from 'express';
import { DelitosController } from '../controllers/delitos.ctl.js';


const delitosController = new DelitosController();
const routerDelitos = express.Router();


routerDelitos.get('/', delitosController.getTodosLosDatos)


routerDelitos.get('/Tipos', delitosController.getTodosLosTipos)


export default routerDelitos;