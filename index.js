const div_resultados = document.createElement("div");
div_resultados.id = "div_resultados";

async function carregarJson() {
    try {
        // const response = await fetch('https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena/1941');
        const response = await fetch('https://github.com/professor-salinet/cnx-pa/blob/main/application_data.json');
            // .then(response => response.json()) // Parse JSON
            // .then(data => alert("data: " + data)) // Work with JSON data
            // .catch(error => alert('Error fetching JSON: ' + error));

        if (response.ok) {
            const dados = await response.json();
            div_resultados.innerText = JSON.stringify(dados);
        } else {
            div_resultados.innerText = "deu erro";
        }
    } catch (error) {
        div_resultados.innerText = `Erro na requisição: ${error}`;
    }
}

alert("ok");
carregarJson();
// import jsonData from './resultados.json' assert { type: 'json' };
// div_resultados.innerText = jsonData;

// const resultados = $.getJSON("resultado1.json", function(data) {
//     alert("success");
//     // Process the data here
//     $.each(data.items, function(i, item) {
//         $("<p>").text(item.name).appendTo("#div_resultados");
//     });
// })
// .done(function() {
//     alert("second success");
// })
// .fail(function(jqxhr, textStatus, error) {
//     var err = textStatus + ", " + error;
//     alert("Request Failed: " + err);
// })
// .always(function() {
//     alert("complete");
// });

// const resultados = $.ajax({
//     url: "./resultados.json",
//     dataType: 'json',
//     data: data,
//     success: callback
// });

// function loadJSON(path, success, error)
// {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function()
//     {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 if (success)
//                     success(JSON.parse(xhr.responseText));
//             } else {
//                 if (error)
//                     error(xhr);
//             }
//         }
//     };
//     xhr.open("GET", path, true);
//     xhr.send();
// }

// loadJSON('resultados.json',
//          function(data) { alert(data); },
//          function(xhr) { console.error(xhr); }
// );

document.body.appendChild(div_resultados);