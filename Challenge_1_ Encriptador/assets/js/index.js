const textoInput = document.getElementById("texto");
const resultadoOutput = document.getElementById("resultado");
const encriptarButton = document.getElementById("encriptar");
const desencriptarButton = document.getElementById("desencriptar");

function borrarTexto() {
  document.getElementById("texto").value = "";
}

function encriptarTexto(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function desencriptarTexto(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function onEncriptarClick() {
  const texto = textoInput.value;
  const resultado = encriptarTexto(texto);
  resultadoOutput.value = resultado;
}

function onDesencriptarClick() {
  const texto = textoInput.value;
  const resultado = desencriptarTexto(texto);
  resultadoOutput.value = resultado;
}

function copiar() {
    let resultado = document.getElementById("resultado").value;
    navigator.clipboard.writeText(resultado).then(() => {
        alert("Resultado copiado al portapapeles: ")
    }).catch((error) => {
        alert("Error al copiar el resultado: " + error);
    });
}


encriptarButton.addEventListener("click", onEncriptarClick);


desencriptarButton.addEventListener("click", onDesencriptarClick);