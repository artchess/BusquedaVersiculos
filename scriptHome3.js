class Libro {
    constructor(nombre, numeroDeCapitulos, versiculos) {
        this.nombre = nombre;
        this.numeroDeCapitulos = numeroDeCapitulos;
        this.versiculos = versiculos;
    }

    agregarVersiculo(versiculo) {
        // Asignamos el libro al versículo
        versiculo.libro = this;
        this.versiculos.push(versiculo);
    }

    buscar(texto) {
        for (let i = 0; i < this.versiculos.length; i++) {
            // verifica que el texto del versiculo incluya el texto que se busca sin importar mayusculas o minusculas
            if (this.versiculos[i].texto.toLowerCase().includes(texto.toLowerCase())) {
                return this.versiculos[i];
            }
        }

        return null;
    }
}

class Versiculo {
    constructor(capitulo, versiculo, texto) {
        this.capitulo = capitulo;
        this.versiculo = versiculo;
        this.texto = texto;
    }

    mostrar() {
        // obten el span
        // obten el unordered list
        const ul = document.getElementById("ul");
        // añade un elemento li al ul
        const li = document.createElement("li");
        li.innerText = `${this.libro.nombre} ${this.capitulo}:${this.versiculo} - ${this.texto}`;
        // agrega class atribute
        li.setAttribute("class", "list-group-item");
        ul.appendChild(li);
    }
}

// Creamos el objeto libro
const libro = new Libro("Génesis", 50, []);

// Creamos los versículos sin asignarles un libro
const versiculo1 = new Versiculo(
    1,
    1,
    "En el principio crió Dios los cielos y la tierra."
);
const versiculo2 = new Versiculo(
    1,
    2,
    "Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas."
);
// agrega versiculo3
const versiculo3 = new Versiculo(
    1,
    3,
    "Y dijo Dios: Sea la luz; y fue la luz."
);
// agrega versiculo4
const versiculo4 = new Versiculo(
    1,
    4,
    "Y vio Dios que la luz era buena; y separó Dios la luz de las tinieblas."
);
// agrega versiculo5
const versiculo5 = new Versiculo(
    1,
    5,
    "Y llamó Dios a la luz Día, y a las tinieblas llamó Noche. Y fue la tarde y la mañana un día."
);

// Agregamos los versículos al libro
libro.agregarVersiculo(versiculo1);
libro.agregarVersiculo(versiculo2);
libro.agregarVersiculo(versiculo3);
libro.agregarVersiculo(versiculo4);
libro.agregarVersiculo(versiculo5);


// Función que se ejecutará cuando se dispare el evento click
function buscar() {
    // Obtenemos el valor del input de busqueda
    const texto = input.value;

    // Realizamos la busqueda
    const resultado = libro.buscar(texto);

    // Mostramos el resultado en la consola
    if (resultado) {
        resultado.mostrar();
    } else {
        const mensaje = `No se encontró el texto "${texto}"`;
        // obten el unordered list
        const ul = document.getElementById("ul");
        // añade un elemento li al ul
        const li = document.createElement("li");
        li.innerText = mensaje;
        li.setAttribute("class", "list-group-item");
        ul.appendChild(li);
    }
}

function limpiarResultados() {
    const ul = document.getElementById("ul");
    ul.innerHTML = "";
}

// obtenemos el botón
const btnBuscar = document.getElementById("btn-buscar");
// Asignamos un evento click al botón
btnBuscar.addEventListener("click", buscar);

// obtenemos el botón
const btnLimpiar = document.getElementById("btn-limpiar");
// Asignamos un evento click al botón
btnLimpiar.addEventListener("click", limpiarResultados);