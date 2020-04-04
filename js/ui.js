
class Interfaz{

    // no se recomienda un constructor tan cargado
    constructor(){
        this.init();
    }

    init(){
        this.constructorSelect()
    }

    constructorSelect(){
        cotizador.obtenerMonedasAPI()
            .then(monedas => {
                // console.log(monedas.monedas.Data);
                // lo anterior NO es un arreglo, pero podemos 
                // recorerlo de la siguiente manera

                // crear un select de opciones
                const select = document.querySelector('#criptomoneda')
               
               // iterar por los resultados de la API
                for( const [key, value] of Object.entries(monedas.monedas.Data) ){
                    // añadir el Symbol y el Nombre como opciones
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
            })
    }

    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        // seleccionar mensajes 
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);
        // mostrar contenido
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);

    }

    // imprimir el restulado de la cotizacion
    mostrarResultado(resultado, moneda, crypto){
        console.log(resultado[crypto][moneda]);
    }
}