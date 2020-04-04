
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
        // console.log(resultado[crypto][moneda]);

        const datosMoneda = resultado[crypto][moneda];

        console.log(datosMoneda);

        // recordar digitos de precio
        let precio = datosMoneda.PRICE.toFixed(2);

        // construir template 
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado: </h2>
                    <p>El precio de: ${datosMoneda.FROMSYMBOL} a moneda 
                    ${datosMoneda.TOSYMBOL} es de $ ${precio}</p>
                </div>
            </div>
        `;

        // insertar 
        document.querySelector('#resultado').innerHTML = templateHTML;
    }
}