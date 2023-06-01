const form = document.getElementById('form-campos')


function validarFormulario() {
    var numeroA = parseInt(document.getElementById("campoA").value);
    var numeroB = parseInt(document.getElementById("campoB").value);

    if (numeroB > numeroA) {
        alert("Formulário válido! Número B é maior que o número A.");
        document.getElementById("campoA").value = '';
        document.getElementById("campoB").value = '';

        return true;
    } else {
        alert("Formulário inválido! Número B deve ser maior que o número A.");
        return false;
    }

}

form.addEventListener('submit', function(e) {
    e.preventDefault();
})
console.log(form);

