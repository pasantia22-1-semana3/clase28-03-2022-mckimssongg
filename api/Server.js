
import express from 'express';
import routerDelitos from './delitos/routers/delitos.route.js' 

export class Server{ //constructor del server del appi
  constructor(hostName, port, nameApp){
    this._hostName = hostName;
    this._port = port;
    this._nameApp = nameApp;
    this._app = express();
    this.initMiddleware();
    this.initRoutes();
  }


  initMiddleware(){ // Configurar para saber que datos dejar pasar
      this._app.use(express.json());
      this._app.use(express.urlencoded({extended: true}));
  }


  initRoutes(){ //Para crear las rutas 
    this._app.use("/api/v1/delitos", routerDelitos);  
    this._app.use("/api/v1/home", (req,res)=>{
        res.json({
            message:"Este es el home"
        })
    });
    
  }


  initServer(){ //Para iniciar el server
    try{
        this._app.set('trust proxy', this._hostName);
        this._app.listen(this._port, ()=>{
            console.log(`El server ${this._nameApp} esta corriendo en http://${this._hostName}:${this._port}`);
        })
    } catch(e){
        console.log('Ocurrio un error')
    }
    }
}