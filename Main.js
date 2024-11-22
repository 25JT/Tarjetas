let agenda = {
    titulos: JSON.parse(localStorage.getItem("titulos")) || [],
    descripcion: JSON.parse(localStorage.getItem("decriptarea")) || []
};

// Mostrar los elementos guardados en localStorage
mostrarTitulos();

// Evento para añadir un título y su descripción
document.getElementById("enviar").addEventListener("click", (event) => {
    event.preventDefault();
    let titulo = document.getElementById("titulo").value.trim();
    let descrip = document.getElementById("tarea").value.trim();

    // Validación IF
    if (titulo === "" || descrip === "") {
        Swal.fire({
            title: "CAMPOS EN BLANCO",
            text: "Por favor escribe tu Nota",
            icon: "error"
          });
        return;
    }

    // Agregar título y descripción al objeto agenda
    agenda.titulos.push(titulo);
    agenda.descripcion.push(descrip);

    // Guardar tanto los títulos como las descripciones en localStorage
    localStorage.setItem("titulos", JSON.stringify(agenda.titulos));
    localStorage.setItem("decriptarea", JSON.stringify(agenda.descripcion));

    // Limpiar los campos de entrada
    document.getElementById("titulo").value = "";
    document.getElementById("tarea").value = "";
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Nota creada",
        showConfirmButton: false,
        timer: 1000
      });

    mostrarTitulos(); // Mostrar los títulos y descripciones actualizados
});

// Función para mostrar los títulos y descripciones
function mostrarTitulos() {
    let lista = document.getElementById("nTarea");
    lista.innerHTML = ""; // Limpiar la lista

    // Mostrar cada título con su descripción // Diseño general de la tarjeta
    agenda.titulos.forEach((titulo, index) => {
        let item = document.createElement("div");
        item.classList.add("cajatarjetas")

        
        let texto = document.createElement("h1");
        texto.classList.add("titulo")
        texto.textContent = `${index + 1}. ${titulo}`;


        let descripcion = document.createElement("p");
        descripcion.textContent = `${agenda.descripcion[index]}`
        descripcion.classList.add("descripcion")
        

        // Botón para borrar el título y la descripción específicos
        let botonBorrar = document.createElement("button");
        botonBorrar.textContent = "Borrar";
        botonBorrar.classList.add("botonEli")

        // Evento para borrar el título y la descripción específicos
        botonBorrar.addEventListener("click", () => {

            Swal.fire({
                title: "¿Quieres borrar esta Nota?",
                text: "Una vez borrada no podras recuperarla",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, eliminala!",
                cancelButtonText:"Cancelar"
              }).then((result) => {
                if (result.isConfirmed) {
                    agenda.titulos.splice(index, 1); // Elimina el título del array
                    agenda.descripcion.splice(index, 1); // Elimina la descripción del array
                    localStorage.setItem("titulos", JSON.stringify(agenda.titulos)); // Actualiza localStorage con los títulos
                    localStorage.setItem("decriptarea", JSON.stringify(agenda.descripcion)); // Actualiza localStorage con las descripciones 
                    //alerta de nota eliminada
                  Swal.fire({
                    title: "Nota eliminada",
                    icon: "success"
                  });
                  mostrarTitulos(); // Refresca la lista
                }
              });  
        });

        item.appendChild(texto);
        item.appendChild(descripcion);
        item.appendChild(botonBorrar);
        lista.appendChild(item);
    });
}
