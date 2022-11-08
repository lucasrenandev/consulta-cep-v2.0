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
const buttonClear = document.getElementById("fa-clear")

// ADICIONANDO EVENTO PARA O CAMPO CEP
cep.addEventListener("blur", () => {
    getCep()
})

// ADICIONANDO EVENTO PARA O BOTÃO LIMPAR
buttonClear.addEventListener('click', () => {
    clearField()
})

// FUNÇÃO PARA VALIDAR O CAMPO CEP
function validationCep() {
    if(cep.value.length !== 8) {
        invalidCep()
    }
    if(cep.value === "") {
        emptyField()
    }
}

// FUNÇÃO PARA OBTER CEP + DADOS
function getCep() {
    const search = cep.value.replace("-", "")
    const url = `https://viacep.com.br/ws/${search}/json/`

    fetch(url).then((response) => {
        response.json().then(getData)
    })
    validationCep()
    displayButton()
}

// FUNÇÃO PARA RETORNAR OS DADOS OBTIDOS
function getData(data) {
    if(data.erro) {
        errorText()
    }
    else {
        getDataField(data)
    }
}

// FUNÇÃO PARA OBTER OS DADOS DOS CAMPOS
function getDataField(data) {
    logradouro.value = data.logradouro
    complemento.value = data.complemento
    bairro.value = data.bairro
    localidade.value = data.localidade
    uf.value = data.uf
    ibge.value = data.ibge
    gia.value = data.gia
    ddd.value = data.ddd
    siafi.value = data.siafi
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
    buttonClear.style.display = "none"
}

// FUNÇÃO PARA RETORNAR TEXTO DE ERRO CASO(UNDEFINED)
function errorText() {
    logradouro.value = "Cep não encontrado!"
    complemento.value = "Cep não encontrado!"
    bairro.value = "Cep não encontrado!"
    localidade.value = "Cep não encontrado!"
    uf.value = "Cep não encontrado!"
    ibge.value = "Cep não encontrado!"
    gia.value = "Cep não encontrado!"
    ddd.value = "Cep não encontrado!"
    siafi.value = "Cep não encontrado!"
}

// FUNÇÃO PARA RETORNAR TEXTO DE ERRO CASO(CEP INVÁLIDO)
function invalidCep() {
    logradouro.value = "Cep inválido!"
    complemento.value = "Cep inválido!"
    bairro.value = "Cep inválido!"
    localidade.value = "Cep inválido!"
    uf.value = "Cep inválido!"
    ibge.value = "Cep inválido!"
    gia.value = "Cep inválido!"
    ddd.value = "Cep inválido!"
    siafi.value = "Cep inválido!"
}

// FUNÇÃO PARA RETORNAR TEXTO DE ERRO CASO(CAMPO VAZIO)
function emptyField() {
    logradouro.value = "Campo cep vazio!"
    complemento.value = "Campo cep vazio!"
    bairro.value = "Campo cep vazio!"
    localidade.value = "Campo cep vazio!"
    uf.value = "Campo cep vazio!"
    ibge.value = "Campo cep vazio!"
    gia.value = "Campo cep vazio!"
    ddd.value = "Campo cep vazio!"
    siafi.value = "Campo cep vazio!"
}

// FUNÇÃO PARA OCULTAR/MOSTRAR BOTÃO LIMPAR CAMPO
function displayButton() {
    if(!cep.value) {
        buttonClear.style.display = "none"
    }
    else {
        buttonClear.style.display = "block"
    }
}