const imagens = [
    "Jogos.jpg",
    "Trabalho.jpg",
    "Cafezinho.jpg",
]

let indiceAtual = 0
let imagem = document.getElementById("img")
function trocaFoto() {
    indiceAtual  = (indiceAtual + 1) % imagens.length
    imagem.src = imagens[indiceAtual]
    console.log(indiceAtual.toString)
    console.log(imagemAtual)
}