document.addEventListener("DOMContentLoaded", function() {

    const botao = document.querySelector("button");
    const mensagem = document.querySelector("#mensagem");
    const titulo = document.querySelector("#titulo");

    botao.onclick = function() {
        mensagem.textContent =
            "Você começou a explorar a Tech Angola!";

        if (titulo.style.color === "blue") {
            titulo.style.color = "#159957";
        } else {
            titulo.style.color = "blue";
        }
    };

    document.querySelector("#site").onclick = function() {
        const detalhes = document.querySelector("#site .detalhes");

        detalhes.style.display =
            detalhes.style.display === "block" ? "none" : "block";
    };

    document.querySelector("#ia").onclick = function() {
        const detalhes = document.querySelector("#ia .detalhes");

        detalhes.style.display =
            detalhes.style.display === "block" ? "none" : "block";
    };

    document.querySelector("#digital").onclick = function() {
        const detalhes = document.querySelector("#digital .detalhes");

        detalhes.style.display =
            detalhes.style.display === "block" ? "none" : "block";
    };

    document.querySelector("#enviar").onclick = function() {

        const nome = document.querySelector("#nome").value.trim();

        if (nome === "") {
            alert("Por favor, escreva o seu nome.");
            return;
        }

        alert("Obrigado, " + nome + "! A sua mensagem foi recebida.");

        document.querySelector("#nome").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#mensagemContacto").value = "";
    };

});
