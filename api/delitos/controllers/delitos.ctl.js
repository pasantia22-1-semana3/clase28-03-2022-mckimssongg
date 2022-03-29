import {FuncMethods} from '../models/delitos.models.js';
import{response} from "../../../response/response.js"

const funcMethods = new FuncMethods();

export class DelitosController{
  constructor(){}

  getTodosLosDatos(req, res){
    try{
      let Delitos = funcMethods.all();
      // let dataJson = JSON.parse(Delitos)
      response.succes(req,res,Delitos,200);
    }
    catch(e){
      response.error(req,res, null, 500)
    }
  }

  getTodosLosTipos(req, res){
    try{
      let Delitos = funcMethods.all();
      let tiposDelitos = []
      for(let index = 0; index<Delitos.length; index++){
        let tipo = Delitos[index].Tipo
        tiposDelitos.push(tipo)
      }
      response.succes(req,res,tiposDelitos,200);
    }
    catch(e){
      response.error(req,res, null, 500)
    }
  }

  getEstadisticasTotales(req, res){
    try{
      let Delitos = funcMethods.all();
      let orderDelitos = funcMethods.order(Delitos)
      response.succes(req,res,orderDelitos,200);
    }
    catch(e){
      response.error(req,res, null, 500)
    }
  }
}
