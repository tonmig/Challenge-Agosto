let amigos = []; // Arreglo para almacenar los nombres de los amigos

function agregarAmigos(){
     // Obtener el valor del campo de entrada
    const input = document.getElementById("amigo");
    //Obtiene el texto ingresado por el usuario en el campo de entrada (`input.value`)
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

function seleccionarAmigo(){

    // Verificar si el arreglo tiene amigos
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para seleccionar.");
        return;
    }
     // Generar un índice aleatorio basado en el tamaño del arreglo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

 // Obtener el amigo en el índice aleatorio
     const amigoSeleccionado = amigos[indiceAleatorio];

     // Mostrar el amigo seleccionado en el HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo seleccionado es: <strong>${amigoSeleccionado}</strong></li>`;
}