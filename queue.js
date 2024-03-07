class Queue {
    constructor () {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print () {
        return this.queue;
    }
}

const queueAtm = new Queue();

class Persona {
    constructor(nombre,horaLlegada){
        this.nombre = nombre;
        this.horaLlegada = horaLlegada;
    }
}

let seguir = "SI";

while(seguir == "SI"){
    let nombre = prompt("Introduce el nombre");
    let horaLlegada = prompt("Introduce la hora de llegada");

    const persona = new Persona(nombre, horaLlegada);
    queueAtm.enqueue(persona);
    console.log(queueAtm.size())
    seguir = prompt("SI/NO")

}
queueAtm.print();
