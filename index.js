let nomeDoHeroi = "Bia"
let xp = 10001
let fraseInicial = "O Herói de nome "
let fraseFinal = ", está no nível "
let ponto = "!"

if (xp <= 1000){
    console.log(fraseInicial + nomeDoHeroi + fraseFinal + "Ferro" + ponto)
} else if (xp >= 1001 && xp <= 2000){
    console.log(fraseInicial + nomeDoHeroi + fraseFinal + "Bronze" + ponto)
} else if (xp >= 2001 && xp <= 5000){
    console.log(fraseInicial + nomeDoHeroi + fraseFinal + "Prata" + ponto)
} else if (xp >= 5001 && xp <= 7000){
    console.log(fraseInicial + nomeDoHeroi + fraseFinal + "Ouro" + ponto)
} else if (xp >= 7001 && xp <= 8000){
    console.log(fraseInicial + nomeDoHeroi + fraseFinal + "Platina" + ponto)
} else if (xp >= 8001 && xp <= 9000){
    console.log(fraseInicial + nomeDoHeroi + fraseFinal + "Ascendente" + ponto)
} else if (xp >= 9001 && xp <= 10000){
    console.log(fraseInicial + nomeDoHeroi + fraseFinal + "Imortal" + ponto)
} else if (xp >= 10001){
    console.log(fraseInicial + nomeDoHeroi + fraseFinal + "Radiante" + ponto)
} 