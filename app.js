let amigos = []; // Arreglo para almacenar los nombres de los amigos

function agregarAmigos(){
     // Obtener el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    // Verificar que el campo no esté vacío
    if (nombre ===""){
        alert("por favor ingresa un nombre valido");
        return
    }
      // Agregar el nombre al arreglo
    amigos.push(nombre);
      // Limpiar el campo de entrada
    input.value = "";

      // Mostrar la lista actualizada en el HTML
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });

}



