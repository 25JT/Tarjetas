let titulos = [];
let element = ''

document.getElementById("enviar").addEventListener("click", () =>{
    event.preventDefault()
    let titulo = document.getElementById("titulo").value
  //validacion if 
  if (titulo.trim() === "") {
    alert("Por favor, escribe un título.");
    return;
}


localStorage.setItem(element,titulo)
  titulos.push(titulo);

  document.getElementById("titulo").value = ""
  
  mostrarTitulos();

})

function mostrarTitulos() {

    let lista = document.getElementById("nTarea")
    let borrar = document.getElementById("borrar")

    borrar.innerHTML = "BORRAR"
    lista.innerHTML = ""
    
    titulos.forEach((titulo,index) => {
        let li = document.createElement("h1");
        borrar.addEventListener("click",()=>{
            localStorage.removeItem(element)
            alert("Se borro We")
        })
        li.textContent = `${index + 1}. ${titulo}`;
        
        lista.appendChild(li); 
    })
}

let lista = document.getElementById("nTarea")
lista.innerHTML = localStorage.getItem(element)


for (let i = 0; i < 1; i++) {
    element = element + i;
    console.log(element);
}



