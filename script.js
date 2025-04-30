let palavras = [ //a variável 'palavras' que conterá uma lista de objeto (dentro de um array. Mas pode existir um objeto fora da array)
    {palavra: "word", dicas: ["escrita em inglês", "com quatro letras", "um dicionário pode ser composto por ela"]},
    //o identificador ´palavra´, que pode ser qualquer outro termo, e um valor 'word'
    //o identificador ´dicas´, que pode ser qualquer outro termo, e um valor 
    // 'dicas', por meio de uma matriz, contendo várias dicas.
    {palavra: "cat", dicas: ["escrita em inglês", "com três letras", "animal de estimação"]},
    {palavra: "house", dicas: ["escrita em inglês", "com cinco letras", "pode-se morar/habitar"]},
    {palavra: "awesome", dicas: ["escrita em inglês", "com sete letras", "significa 'legal'"]},
]

//elementos do HTML
let input = document.getElementById("txt_input")
let div_resultado = document.getElementById("resultado")
let paragrafo_dicas = document.getElementById("paragrafo_dicas")
let paragrafo_tentativas = document.getElementById("paragrafo_tentativas")

//selecionar uma palavra e suas dicas
let palavra_secreta = palavras[Math.floor(Math.random() *palavras.length)] //o floor busca arredondar o valor de um
//  número. O random  procura o valor de forma aleatória.
let palavra_selecionada = palavra_secreta.palavra.toLowerCase() //criei uma variável 'palavra-selecionada' e
//atribui um valor, sendo que o que for digitado será sempre convertido em letras minúsculas pelo 'toLowerCase'.
let dicas = palavra_secreta.dicas
let tentativas = dicas.length

//função de Adivinhar
function Adivinhar(){
    let digitado = input.value.trim().toLowerCase() //o trim desconsidera toda acentuação inserida no input
    if(digitado == palavra_selecionada){
        div_resultado.innerText = "Acertou!"
    } else {
        tentativas --
        div_resultado.innerText = "Ah, que pena, você errou!  : ("
        
        if(tentativas > 0){
            paragrafo_dicas.textContent = "Dica:  " + dicas[dicas.length - tentativas] //a propriedade textContent não se trata do conteúdo
        //inserido pelo usuário e, sim, o conteúdo das dicas para que o usuário as veja.
            paragrafo_tentativas.textContent = "Tentivas:  " + tentativas
        } else {
            location.reload()
        }
    }
}

function mostrar_dica(){ //a função 'void' não retorna um valor
    paragrafo_dicas.textContent = `Dica: ${dicas[0]}` //Vale ressaltar que deve estar entre crase para funcionar. Mas
    // eu poderia concatenar fazendo assim também: "Dica: " + dicas[0]. Todavia, o sinal de + não é uma soma 
    // e, sim, concatenar string.

}