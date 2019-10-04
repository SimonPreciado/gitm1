const fs = require('fs');

console.log("Escribe tu nombre (ingrese 'salir' para terminar)");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var dato = d.toString().trim();
    console.log("Ingresaste el nombre: " + dato);
    if(dato == 'salir'){
        return process.stdin.destroy();
    }
    //process.stdin.destroy();
    var base = (dato);
    if(base.toString().trim() != "NaN"){
        console.log("Procederé generar los saludos");
        var cinco ="Salut";
        var cuatro ="Ciao";
        var tres ="hello";
        var dos ="halo";
        var uno = "Hola";
        var lenguaje = "";
        for (let index = 0; index <= 0; index++) {
            lenguaje += `${cinco}  ${cuatro} ${tres} ${dos}${uno} ${ base}   ` + "\n";
        }

        fs.writeFile(
            `saludo para ${ base }.txt` , 
            lenguaje, 
            (err) => {
                if (err) 
                    throw err;
                console.log(`${tres} ${dos}  ${uno}  ${ base }`);
            }
        );
    }else{
        console.log("No ingresaste un nombre válido");
    }
    
});

