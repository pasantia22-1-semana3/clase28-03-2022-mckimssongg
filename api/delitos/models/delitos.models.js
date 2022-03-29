
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
        console.log(arrayD)
        arrayD.sort((a,b)=>{
            if ((a._2016.AmboSexos+a._2017.AmboSexos+a._2018.AmboSexos+a._2019.AmboSexos+a._2020.AmboSexos) < (b._2016.AmboSexos+b._2017.AmboSexos+b._2018.AmboSexos+b._2019.AmboSexos+b._2020.AmboSexos)) {
                return 1;
              }
              if ((a._2016.AmboSexos+a._2017.AmboSexos+a._2018.AmboSexos+a._2019.AmboSexos+a._2020.AmboSexos) > (b._2016.AmboSexos+b._2017.AmboSexos+b._2018.AmboSexos+b._2019.AmboSexos+b._2020.AmboSexos)) {
                return -1;
              }
              return 0;
        })
        console.log(arrayD)
        return arrayD 
    }

















































    
    findDelitos(tipo){
        let items = this.readJsonFile();
        return items.find(item => item.Tipo == tipo)
    }
}