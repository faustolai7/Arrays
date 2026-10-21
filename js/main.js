
function obtenerCatalogoDesdeLaPagina() {
    const titulos = document.querySelectorAll("main figcaption");
    return Array.from(titulos, (titulo) => titulo.textContent.trim());
}


function obtenerCategoria() {
    const titulo = document.querySelector("main h1");
    return titulo ? titulo.textContent.trim() : "Productos";
}


function pedirTexto(mensaje) {
    const respuesta = prompt(mensaje);
    return respuesta === null ? null : respuesta.trim();
}


function normalizar(texto) {
    return texto.trim().toLowerCase().replace(/\s+/g, " ");
}


function mostrarReporte(titulo, lista) {
    console.log(`--- ${titulo} (${lista.length} productos) ---`);
    for (const producto of lista) {
        console.log(`Producto: ${producto}`);
    }
}


function retirarUltimoProducto(catalogo) {
    if (catalogo.length === 0) {
        console.log("El catálogo está vacío, no hay nada para eliminar.");
        return;
    }
    const eliminado = catalogo.pop();
    console.log(`Se ha eliminado el elemento: ${eliminado}`);
}

function agregarAlFinal(catalogo) {
    const nombre = pedirTexto("Nuevo ingreso: ¿qué producto querés agregar al final del catálogo?");
    if (!nombre) {
        console.log("No se agregó ningún producto.");
        return;
    }
    if (catalogo.map(normalizar).includes(normalizar(nombre))) {
        console.log(`"${nombre}" ya está en el catálogo, no se agrega de nuevo.`);
        return;
    }
    catalogo.push(nombre);
    console.log(`Se agregó al final: ${nombre}`);
}

function agregarAlPrincipio(catalogo) {
    const nombre = pedirTexto("Destacado: ¿qué producto querés poner primero en el catálogo?");
    if (!nombre) {
        console.log("No se destacó ningún producto.");
        return;
    }
    if (catalogo.map(normalizar).includes(normalizar(nombre))) {
        console.log(`"${nombre}" ya está en el catálogo, no se destaca de nuevo.`);
        return;
    }
    catalogo.unshift(nombre);
    console.log(`Se agregó al principio: ${nombre}`);
}

function atenderPedido(catalogo) {
    const pedido = pedirTexto(
        "¿Qué producto querés pedir? Escribí el nombre completo:\n\n" + catalogo.join("\n")
    );
    if (!pedido) {
        console.log("El cliente no pidió ningún producto.");
        return;
    }

    const catalogoNormalizado = catalogo.map(normalizar);
    const pedidoNormalizado = normalizar(pedido);

    if (catalogoNormalizado.includes(pedidoNormalizado)) {
        const indice = catalogoNormalizado.indexOf(pedidoNormalizado);
        console.log(`El cliente pidió: ${catalogo[indice]} (posición ${indice} del catálogo)`);
    } else {
        alert(`Lo sentimos, "${pedido}" no está disponible.`);
    }
}

function reemplazarProducto(catalogo) {
    if (catalogo.length === 0) {
        console.log("El catálogo está vacío, no hay nada para reemplazar.");
        return;
    }

    const textoIndice = pedirTexto(
        `Reemplazar: ingresá el índice del producto (de 0 a ${catalogo.length - 1}):`
    );
    const indice = Number(textoIndice);

    if (!textoIndice || !Number.isInteger(indice) || indice < 0 || indice >= catalogo.length) {
        console.log("Índice inválido, no se reemplazó ningún producto.");
        return;
    }

    const nuevoNombre = pedirTexto(`¿Cuál es el nuevo producto para la posición ${indice}?`);
    if (!nuevoNombre) {
        console.log("No se ingresó un nombre nuevo, no se reemplazó ningún producto.");
        return;
    }

    const reemplazado = catalogo.splice(indice, 1, nuevoNombre);
    console.log(`Posición ${indice}: se reemplazó "${reemplazado[0]}" por "${nuevoNombre}"`);
}


function iniciarSimulador() {
    const categoria = obtenerCategoria();
    const catalogo = obtenerCatalogoDesdeLaPagina();

    if (catalogo.length === 0) {
        console.warn("No se encontraron productos en esta página.");
        return;
    }

    console.log(`Simulador de stock: ${categoria}`);
    mostrarReporte("Catálogo inicial", catalogo);

    const menu =
        `Stock de ${categoria} - ¿Qué querés hacer?\n\n` +
        "1 - Retirar el último producto\n" +
        "2 - Agregar un producto al final\n" +
        "3 - Agregar un producto destacado al principio\n" +
        "4 - Pedir un producto (cliente)\n" +
        "5 - Reemplazar un producto por índice\n" +
        "6 - Ver el catálogo\n" +
        "0 - Salir";

    let opcion = pedirTexto(menu);

    while (opcion !== null && opcion !== "0") {
        switch (opcion) {
            case "1":
                retirarUltimoProducto(catalogo);
                break;
            case "2":
                agregarAlFinal(catalogo);
                break;
            case "3":
                agregarAlPrincipio(catalogo);
                break;
            case "4":
                atenderPedido(catalogo);
                break;
            case "5":
                reemplazarProducto(catalogo);
                break;
            case "6":
                mostrarReporte("Catálogo actual", catalogo);
                break;
            default:
                console.log(`Opción "${opcion}" no válida. Elegí un número del 0 al 6.`);
        }
        opcion = pedirTexto(menu);
    }

    mostrarReporte("Catálogo final", catalogo);
}

iniciarSimulador();
