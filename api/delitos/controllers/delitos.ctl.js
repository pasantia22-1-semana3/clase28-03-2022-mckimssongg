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

      Delitos.map((delito)=>{
          let dato = delito.tipo
          tiposDelitos.push(dato)
      })

      response.succes(req,res,tiposDelitos,200);
    }
    catch(e){
      response.error(req,res, null, 500)
    }
  }

  getEstadisticasTotales(req, res){
  }


}