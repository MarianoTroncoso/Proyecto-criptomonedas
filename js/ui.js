
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

        // en caso de un resultado anterior ocularlo
        const resultadoAnterior = document.querySelector('#resultado > div');

        if(resultadoAnterior){
            resultadoAnterior.remove();
        }

        // console.log(resultado[crypto][moneda]);

        const datosMoneda = resultado[crypto][moneda];

        console.log(datosMoneda);

        // recordar digitos de precio
        let precio = datosMoneda.PRICE.toFixed(2),
            porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2), 
            actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-MX');;


        // construir template 
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado: </h2>
                    <p>El precio de: ${datosMoneda.FROMSYMBOL} a moneda 
                    ${datosMoneda.TOSYMBOL} es de $ ${precio}</p>
                    <p>Variacion ultimo dia: %${porcentaje}</p>
                    <p>Ultima actualizacion: ${actualizado}</p>
                </div>
            </div>
        `;
        this.mostrarOcultarSpinner('block');

        setTimeout(() => {
            // insertar 
            document.querySelector('#resultado').innerHTML = templateHTML;
            // ocultar spinner
            this.mostrarOcultarSpinner('none');
        }, 3000);
        
    }

    // Mostrar spinner de carga al enviar cotizacion
    mostrarOcultarSpinner(vista){
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }
}