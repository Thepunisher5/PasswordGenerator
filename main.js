var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

var password_list = [];

function generarLetters(nr_letters) {
    for (var i = 0; i < nr_letters; i++) {
        var indiceAleatorio = Math.floor(Math.random() * letters.length);
        password_list.push(letters[indiceAleatorio]);
    }
}

function generarNumbers(nr_numbers) {
    for (var i = 0; i < nr_numbers; i++) {
        var indiceAleatorio = Math.floor(Math.random() * numbers.length);
        password_list.push(numbers[indiceAleatorio]);
    }
}

function generarSymbols(nr_symbols) {
    for (var i = 0; i < nr_symbols; i++) {
        var indiceAleatorio = Math.floor(Math.random() * symbols.length);
        password_list.push(symbols[indiceAleatorio]);
    }
}

function generarYMostrarPassword() {
    var nrLettersElement = document.getElementById("nr-letters");
    var nrNumbersElement = document.getElementById("nr-numbers");
    var nrSymbolsElement = document.getElementById("nr-symbols");
    var nr_letters = nrLettersElement.value;
    var nr_numbers = nrNumbersElement.value;
    var nr_symbols = nrSymbolsElement.value;

    password_list = []; // Reiniciar el arreglo para cada generación

    generarLetters(nr_letters);
    generarNumbers(nr_numbers);
    generarSymbols(nr_symbols);

    password_list.sort(() => Math.random() - 0.5);

    var passwordAleatorio = password_list.join(''); // Convertir el arreglo a una cadena

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Contraseña: " + passwordAleatorio;

    var copyButton = document.createElement('button');
    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
    copyButton.classList.add('copy-button');
    copyButton.addEventListener('click', function() {
        copiarAlPortapapeles(passwordAleatorio);
        alert('¡Contraseña copiada al portapapeles!');
    });

    resultadoElement.appendChild(copyButton);
}

function copiarAlPortapapeles(texto) {
    var tempInput = document.createElement('input');
    tempInput.value = texto;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}
