var XLSX = require("xlsx");

const ExcelaJson = () => {
  const excel = XLSX.readFile(
    "C:\\Users\\STRZAW\\Desktop\\clase28-03-2022-mckimssongg\\informeMP-Guatemala.xlsx"
  );
  var nombreHoja = excel.SheetNames; // regresa un array
  let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[2]]);
  let datosformat = []
//   console.log(datos);
  
  for(let i = 1; i<datos.length; i++){
      datosformat.push({
        "Tipo":datos[i].__EMPTY,
        "2016":{
            "AmboSexos":datos[i]._2016,
            "Hombres":datos[i].__EMPTY_1,
            "Mujeres":datos[i].__EMPTY_2,
            "Ignorados":datos[i].__EMPTY_3,
          },
        "2017":{
            "AmboSexos":datos[i]._2017,
            "Hombres":datos[i].__EMPTY_4,
            "Mujeres":datos[i].__EMPTY_5,
            "Ignorados":datos[i].__EMPTY_6,
          },
        "2018":{
            "AmboSexos":datos[i]._2018,
            "Hombres":datos[i].__EMPTY_7,
            "Mujeres":datos[i].__EMPTY_8,
            "Ignorados":datos[i].__EMPTY_9,
          },
        "2019":{
            "AmboSexos":datos[i]._2019,
            "Hombres":datos[i].__EMPTY_10,
            "Mujeres":datos[i].__EMPTY_11,
            "Ignorados":datos[i].__EMPTY_12,
          },
          
        "2020":{
            "AmboSexos":datos[i]._2020,
            "Hombres":datos[i].__EMPTY_13,
            "Mujeres":datos[i].__EMPTY_14,
            "Ignorados":datos[i].__EMPTY_15,
          },
      })
  }
  // console.log(datosformat)

//   const datosformat = datos.map((d)=>{
//     // console.log(d)
//     return({
//         "Tipos":datos[0].__EMPTY
//     })
//  })
    return datosformat
};


function crearJson(){
  let dataJson = JSON.stringify(ExcelaJson())
  console.log(dataJson)
}
crearJson()