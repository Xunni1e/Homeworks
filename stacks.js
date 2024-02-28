class Stack {
    constructor(){
        this.stack={};
        this.count= 0;
    }

    push(element){
        this.stack[this.count] = element;
        this.count++;
        return this.stack
    }

    pop(){
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }

    peek(){
        return this.stack[this.count -1];
    }

    size(){
        return this.count;
    }

    print(){
        console.log(this.stack)
    }
}

const pila = new Stack()

class libro{
    constructor(name, author, isbn, editorial){
        this.name = name;
        this.author = author;
        this.isbn = isbn
        this.editorial = editorial
    }
}

let seguir = "SI"

while(seguir== "SI"){
    let name = prompt("Introduce el nombre");
    let author = prompt("Introduce el autor");
    let isbn = prompt("Introduce el isbn");
    let editorial = prompt("Introduce la editorial");

    let book = new libro (name,author, isbn, editorial );
    pila.push(book)
    let eleccion = prompt("1. Eliminar ultimo elemento \n 2.Ver ultimo elemento agregado")
    switch (eleccion) {
        case "1":
            pila.pop()
            console.log("Opcion 1")
            break
        case "2":
            console.log(pila.peek())
            console.log("Opcion 2")
    }
    seguir = prompt("SI/NO")
    console.log(pila.size())
}
pila.print()