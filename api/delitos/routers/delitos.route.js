import express from 'express';
import { DelitosController } from '../controllers/delitos.ctl.js';


const delitosController = new DelitosController();
const routerDelitos = express.Router();

/**
 * En este apartado van todas las urls que vienen de "delitos"
 */
routerDelitos.get('/', delitosController.getTodosLosDatos)
/**
 * Esta seria la ruta principal de "delitos"
 */
routerDelitos.get('/tipos', delitosController.getTodosLosTipos)
/**
 * En esta ruta apareceran todos los tipos de delitos que se encuentren en la db
 */
routerDelitos.get('/tipos/:delito', delitosController.getTipo)
/**
 * Aca podra consultar cada tipo de delito de la anterior ruta en especifico 
 * 
 */
routerDelitos.get('/estadisticas', delitosController.getEstadisticasTotales)
/**
 * Aca podra ver todos los tipos de delitos desde el que tiene mayor numero de casos 
 * hasta el que tiene menor numeros de casos
 */
export default routerDelitos;