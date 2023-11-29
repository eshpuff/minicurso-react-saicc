function handleSubmit(event) {
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const cpf = document.getElementById("cpf").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    const usuario  = {
        nome,
        cpf,
        email,
        senha,
    }

    fetch("http://10.230.158.48:3333/form", {
        method: "POST",
        body: JSON.stringify(usuario),
        headers:{
            "Content-Type": "application/json"
        }
    })
    // console.log(usuario)
}
