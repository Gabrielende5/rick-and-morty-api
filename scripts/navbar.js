const navbar = document.getElementById("navbar")
const checkNavName = localStorage.getItem('nome')
navbar.innerHTML = `
    <div>
    <a class="links-navbar" href="./index.html">Home</a>
    <a class="links-navbar" href="./cartoons.html">Cartoons</a>
    </div>
    <div id="info-navbar">
        <div id = "nome-navbar"><p id ="nome-na-navbar">${checkNavName}</p></div>
        <img onclick ="logar()" src="./imagens/navbar/1.jpeg" id="navbar-image"> 
    </div>
`
function logar(){
    var userName = prompt('Por favor coloque seu nome: ')
    localStorage.setItem('nome', userName)
    const userNameCampo = document.getElementById('nome-navbar')
    userNameCampo.innerHTML = `<p id ="nome-na-navbar"> ${userName}</p>`
    if(userName === null)
    {
        userNameCampo.innerHTML = ` <p id = "nome-navbar"> </p>`
    }
}

