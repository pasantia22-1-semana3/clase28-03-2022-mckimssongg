
import fs from 'fs'; 


export class FuncMethods{
    constructor(){
        this._name = 'db'
        this._dataDIr = 'db'
        this._datPath = 'db/dbClean.json';
    }

    
    readJsonFile(){
        let contentFile = fs.readFileSync(this._datPath, 'utf-8');
        if(contentFile){
            return JSON.parse(contentFile)
        }
        return [];                                      
    }


    all(){
        return this.readJsonFile();
    }


    order(arrayD){
        arrayD.sort((a,b)=>{
            if ((a._2016.AmboSexos+a._2017.AmboSexos+a._2018.AmboSexos+a._2019.AmboSexos+a._2020.AmboSexos) < (b._2016.AmboSexos+b._2017.AmboSexos+b._2018.AmboSexos+b._2019.AmboSexos+b._2020.AmboSexos)) {
                return 1;
              }
              if ((a._2016.AmboSexos+a._2017.AmboSexos+a._2018.AmboSexos+a._2019.AmboSexos+a._2020.AmboSexos) > (b._2016.AmboSexos+b._2017.AmboSexos+b._2018.AmboSexos+b._2019.AmboSexos+b._2020.AmboSexos)) {
                return -1;
              }
              return 0;
        })
        return arrayD 
    }


    orderSex(arrayD){
        let arrayS = this.order(arrayD)
        for(let item = 0; item<arrayS.length; item++){
            delete arrayS[item]._2016.AmboSexos
            delete arrayS[item]._2017.Ignorados
            delete arrayS[item]._2018.AmboSexos
            delete arrayS[item]._2019.Ignorados
            delete arrayS[item]._2020.AmboSexos
            delete arrayS[item]._2016.Ignorados
            delete arrayS[item]._2017.AmboSexos
            delete arrayS[item]._2018.Ignorados
            delete arrayS[item]._2019.AmboSexos
            delete arrayS[item]._2020.Ignorados
        }
        return arrayS
    }
    
    findDelitos(tipo){
        let items = this.readJsonFile();
        return items.find(item => item.Tipo == tipo)
    }
}