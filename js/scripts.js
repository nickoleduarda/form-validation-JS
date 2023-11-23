const form = document.querySelector(".form")
const nameinput = document.querySelector("#name")
const cidadeinput = document.querySelector("#cidade")
const emailinput = document.querySelector("#email")
const numeroinput = document.querySelector("#numero")
const nomeErro = document.querySelector("#nome-erro");
const cidadeErro = document.querySelector("#cidade-erro");
const emailErro = document.querySelector("#email-erro");
const numeroErro = document.querySelector("#numero-erro");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameinput.value === ""){
        nomeErro.textContent = "Por favor, preencha seu nome";
        return;
    }

    if(cidadeinput.value === ""){
        cidadeErro.textContent = "Por favor, preencha sua cidade";
        return;
    }

    if(emailinput.value === "" || !isEmailValid(emailinput.value)){
        emailErro.textContent = "Por favor, insira um email válido";
        return;
    }

    if (numeroinput.value === "" || !isNumeroValid(numeroinput.value)){
        numeroErro.textContent = "Por favor, insira um telefone válido";
        return;
    }

    form.submit()
});

function isEmailValid(email){

    const emailRegex = new RegExp(

        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}

function isNumeroValid(numero){

    const numeroRegex = new RegExp(

     /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/

    );

    if (numeroRegex.test(numero)){
        return true;
    }

    return false
}