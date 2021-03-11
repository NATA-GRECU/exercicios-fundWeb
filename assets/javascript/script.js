let nome = document.getElementById("nome")
let email = document.querySelector("#email")
let ideia = document.querySelector("#ideia")
let nomeOk = false
let emailOk = false
let ideiaOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function verificaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color= "red"
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "Green"
        nomeOk = true
    }
}

function verificaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function verificaIdeia() {
    let txtIdeia = document.querySelector("#txtIdeia")
    if(ideia.value.length > 244) {
        txtIdeia.innerHTML = "Texto muito longo"
        txtIdeia.style.color = "red"
        txtIdeia.style.display = "block"
    } else {
        txtIdeia.style.display = "none"
        ideiaOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && ideiaOk == true) {
        alert("Sua idéia foi enviada com sucesso!")
    } else {
        alert("Preencha os campos corretamente")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.heigth = "600px"

}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.heigth = "250px"
}

