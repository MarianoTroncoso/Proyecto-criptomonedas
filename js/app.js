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
        console.log('selecciona algo!');
    } else{
        // todo bien, consultar la api
        console.log('todo bien!')
    }
});

