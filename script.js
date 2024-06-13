let nomes = ["Igor", "Inaca", "Raiane",
              "Raina", "Fernanda", "Fernando",
               "Julia","Juliano","Juliana",
               "Juca","Maria","Joao","Bastião"]

function clic () {
    let ns = nomes.length;
    let mh = Math.floor(Math.random() * ns);
    let vencedor = nomes[mh];

    document.getElementById("d").innerHTML = "Parabens, voce ganhou o sorteio! " + vencedor + "!";
}               