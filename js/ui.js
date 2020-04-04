
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
                for( const [key, value] of Object.entries(monedas.monedas.Data) ){
                    console.log(value)
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
}