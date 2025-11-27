const div_resultados = document.createElement("div");

const resultados = jQuery.getJSON('./resultados.json');

div_resultados.innerText = JSON.parse(JSON.stringify(resultados));

document.body.appendChild(div_resultados);