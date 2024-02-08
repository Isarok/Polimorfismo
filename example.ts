// Definimos una clase base llamada Personaje
class Personaje {
    // Método actuar que muestra un mensaje genérico
    actuar() {
        return "El personaje está actuando...";
    }
}

// Definimos una subclase llamada Protagonista que extiende de Personaje
class Protagonista extends Personaje {
    // Método actuar específico para el protagonista
    actuar() {
        return "El protagonista está declarando su amor a su bella amada";
    }
}

// Definimos una subclase llamada Antagonista que extiende de Personaje
class Antagonista extends Personaje {
    // Método actuar específico para el antagonista
    actuar() {
        return "El antagonista está expresando su ira y su rabia por el rechazo de la bella princesa";
    }
}

// Definimos una subclase llamada PersonajeSecundario que extiende de Personaje
class PersonajeSecundario extends Personaje {
    // Método actuar específico para el personaje secundario
    actuar() {
        return "El personaje secundario está ayudando al protagonista con desmotrando su amistad con una cerveza";
    }
}

// Creamos instancias de cada clase
let protagonista = new Protagonista();
let antagonista = new Antagonista();
let personajeSecundario = new PersonajeSecundario();

// Llamamos al método actuar de cada instancia y mostramos el resultado por la terminal
console.log(protagonista.actuar());
console.log(antagonista.actuar());
console.log(personajeSecundario.actuar());

