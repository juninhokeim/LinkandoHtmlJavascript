document.addEventListener('DOMContentLoaded', function() {
    var input1 = document.querySelector('input[placeholder="digite um número"]');
    var input2 = document.querySelector('input[placeholder="digite outro número"]');
    
    var button = document.createElement('button');
    button.textContent = 'Calcular Soma';
    button.addEventListener('click', function() {
        calcularSoma();
    });

    document.body.appendChild(button);

    function calcularSoma() {
        var valor1 = parseFloat(input1.value);
        var valor2 = parseFloat(input2.value);

        if (!isNaN(valor1) && !isNaN(valor2)) {
            var resultado = valor1 + valor2;

            var resultadoElement = document.createElement('p');
            resultadoElement.textContent = 'Resultado da soma: ' + resultado;

            document.body.appendChild(resultadoElement);
        } else {
            alert('Por favor, digite números válidos nos campos.');
        }
    }
});
