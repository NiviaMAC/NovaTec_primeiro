let imagens = [
    "fotos/Cafezinho.jpg",
    "fotos/Jogos.jpg",
    "fotos/Trabalho.jpg",
]

let indiceAtual = 0

let imagem = document.getElementById("img")

function trocaFoto(){
    indiceAtual = (indiceAtual + 1) % imagens.length
    console.log(indiceAtual)

    imagem.src = imagens[indiceAtual]
}