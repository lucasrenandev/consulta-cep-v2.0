"use strict"

// ATRIBUINDO OS ELEMENTOS EM SUAS VARIÁVEIS
const cep = document.getElementById("cep")
const logradouro = document.getElementById("logradouro")
const complemento = document.getElementById("complemento")
const bairro = document.getElementById("bairro")
const localidade = document.getElementById("localidade")
const uf = document.getElementById("uf")
const ibge = document.getElementById("ibge")
const gia = document.getElementById("gia")
const ddd = document.getElementById("ddd")
const siafi = document.getElementById("siafi")
const clear = document.getElementById("fa-clear")
const error = document.querySelectorAll("error")

// ADICIONANDO EVENTO PARA O CAMPO CEP
cep.addEventListener("blur", () => {
    getCep()
})

// ADICIONANDO EVENTO PARA O BOTÃO LIMPAR
clear.addEventListener('click', () => {
    clearField()
})

// FUNÇÃO PARA OBTER CEP + DADOS
function getCep() {
    const search = cep.value.replace("-", "")

    fetch(`https://viacep.com.br/ws/${search}/json/`)
    .then((response) => {
        response.json().then(getData)
    })
    ButtonClear()
}

// FUNÇÃO PARA OBTER DADOS
function getData(data) {
    logradouro.value = data.logradouro
    complemento.value = data.complemento
    bairro.value = data.bairro
    localidade.value = data.localidade
    uf.value = data.uf
    ibge.value = data.ibge
    gia.value = data.gia
    ddd.value = data.ddd
    siafi.value = data.siafi

    if(data.erro) {
        returnText()
    }
}

// FUNÇÃO PARA LIMPAR OS CAMPOS PREENCHIDOS
function clearField() {
    cep.value = ""
    logradouro.value = ""
    complemento.value = ""
    bairro.value = ""
    localidade.value = ""
    uf.value = ""
    ibge.value = ""
    gia.value = ""
    ddd.value = ""
    siafi.value = ""
    clear.style.display = "none"
}

// FUNÇÃO PARA O BOTÃO DE LIMPAR CAMPO
function ButtonClear() {
    if(cep.value === "") {
        clear.style.display = "none"
    }
    else {
        clear.style.display = "block"
    }
}

// FUNÇÃO PARA RETORNAR TEXTO DE ERRO
function returnText() {
    logradouro.value = "Não encontrado"
    complemento.value = "Não encontrado"
    bairro.value = "Não encontrado"
    localidade.value = "Não encontrado"
    uf.value = "Não encontrado"
    ibge.value = "Não encontrado"
    gia.value = "Não encontrado"
    ddd.value = "Não encontrado"
    siafi.value = "Não encontrado"
}