function olaMundo() {
    console.log("Olá, mundo!");
    alert("Olá mundo!");
}

function validarFormulario() {
    let campoNome = document.getElementById("campoNome").value;
    let campoEmail = document.getElementById("campoEmail").value;
    let campoSenha = document.getElementById("campoSenha").value;
    let campoDataNascimento = document.getElementById("campoDataNascimento").value;
    let campoSexo = document.getElementById("campoSexo").value;
    //let tecnologias = validarCheckbox();
    let xpAssinada = document.getElementById("xpAssinada").value
    let xpNaoAssinada = document.getElementById("xpNaoAssinada").value

    // Exibir informações no terminal
    //console.log("Nome: " + campoNome);
    //console.log("E-mail: " + campoEmail);
    //console.log("Senha: " + campoSenha);
    //console.log("Data de Nascimento: " + campoDataNascimento);
    //console.log("Sexo: " + campoSexo);
    
    // Calculo de XP
    
    let totalXp = Number(xpAssinada) + Number(xpNaoAssinada)
    console.log("Texto XP: " + Number(totalXp))
    
    // Exibir informações no documento HTML
    let html = ""+
        "<p>Nome: "+ campoNome +"</p>" +
        "<p>E-mail: "+ campoEmail +"</p>" +
        "<p>Senha: "+ campoSenha +"</p>" +
        "<p>Data de Nascimento: "+ campoDataNascimento +"</p>" +
        "<p>Sexo: "+ campoSexo +"</p>" +
        "<p>Tempo XP: "+ totalXp +"</p>" +
    "";

    document.getElementById('respostaFormulario').innerHTML = html;

}

function validarSenha() {
    let campoSenha = document.getElementById("campoSenha").value;
    
    if (campoSenha.length > 5 ) {
        document.getElementById("campoSenha").style = "border: 1px solid green"
        document.getElementById("dicaSenha").innerHTML = ""
        return true;
    } else {
        document.getElementById("campoSenha").style = "border: 1px solid red"
        
        //htmlAntigo = document.getElementById("dicaSenha").innerHTML
        let htmlNovo = "<p style='color:red'>Senha precisa ter ao menos 6 caracteres</p>"
        document.getElementById("dicaSenha").innerHTML = htmlNovo
        return false;
    }

}

function validarRadioButton() {
    if (document.getElementById("0-3").checked) {
        return "Tempo de XP: 0 a 3 anos"   
    } else if (document.getElementById("3-5").checked) {
        return "Tempo de XP: 3 a 5 anos"
    } else if (document.getElementById("5-10").checked) {
        return "Tempo de XP: 5 a 10 anos"
    } else {
        return "Nenhum foi selecionado"
    }

}

function validarCheckbox() {
    // TO DO... Validar checkbox
}


/* Bloco global */
let formulario = document.getElementById("formularioAtual")
formulario.onsubmit = validarSenha();
//formulario.onsubmit = validarFormulario();