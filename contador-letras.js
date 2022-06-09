let contadorLetra = () => { 

    let nome = document.querySelector(".name").value; 

   document.querySelector('h3.exibirNome').innerText = "O texto possui " + nome.replace(/\s+/g, "").length + " letras"; 


}