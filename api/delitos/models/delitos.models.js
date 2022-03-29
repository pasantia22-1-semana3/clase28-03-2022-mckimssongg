
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
    
    findById(id){
        let items = this.readJsonFile()
        return items.find((item)=> item._id == id)
    }
}
