const listaDeContactos = [];

// AÑADIR CONTACTO

function añadirContacto(contacto) {
    listaDeContactos.push (contacto)
};
añadirContacto("jordan aranda");
añadirContacto("carlos flor");
añadirContacto("sara ramires");
añadirContacto("camilo gomez");

console.log(listaDeContactos)


// ELIMINAR CONTACTO

function eliminarContacto(nombre) {
    listaDeContactos.splice(2, 1);
    
};
// eliminarContacto();
 
function actulizarContacto() {
    listaDeContactos.splice(2,0, "camilo fuentes")
};
// actulizarContacto();
