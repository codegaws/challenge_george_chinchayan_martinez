const textArea = document.querySelector("[name='text-area']");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar");

btnCopiar.addEventListener("click", function () {
	mensaje.select(); // Selecciona todo el texto en el área de texto
	document.execCommand("copy"); // Copia el texto seleccionado al portapapeles
});

function btnEncriptar() {
	const textoEncriptado = encriptar(textArea.value);
	mensaje.value = textoEncriptado;
	textArea.value = "";
	mensaje.style.backgroundImage = "none"; // quita la imagen
}

function encriptar(stringEncriptada) {
	let matrizCodigo = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];

	stringEncriptada = stringEncriptada.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringEncriptada.includes(matrizCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll(
				matrizCodigo[i][0],
				matrizCodigo[i][1]
			);
		}
	}
	return stringEncriptada;
}

function btnDesencriptar() {
	const textoEncriptado = desencriptar(textArea.value);
	mensaje.value = textoEncriptado;
	textArea.value = "";
	mensaje.style.backgroundImage = "none"; // quita la imagen
}
function desencriptar(stringDesencriptada) {
	let matrizCodigo = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];

	stringDesencriptada = stringDesencriptada.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringDesencriptada.includes(matrizCodigo[i][1])) {
			stringDesencriptada = stringDesencriptada.replaceAll(
				matrizCodigo[i][1],
				matrizCodigo[i][0]
			);
		}
	}
	return stringDesencriptada;
}
