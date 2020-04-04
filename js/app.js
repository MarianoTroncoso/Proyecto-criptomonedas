const cotizador = new API('7b940c865fda42f45d74c18a4844e1e87f12856c1f66ac5d86ae1c25af68a41c');
const ui = new Interfaz();

cotizador.obtenerMonedasAPI();



// leer formulario

const formulario = document.querySelector('#formulario');

// event listener
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    // console.log(monedaSeleccionada)

    const criptoMonedaSelect = document.querySelector('#moneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
    // console.log(criptoMonedaSeleccionada)

    // Comprobar que ambos campos tengan algo seleccionado
    if(monedaSeleccionada === '' || criptoMonedaSeleccionada === ''){
        // aletar de error
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');

    } else{
        // todo bien, consultar la api
        console.log('todo bien!')
    }
});

