class Node{
    constructor(value,next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(node){
        const newNode = new Node(node)
        if(!this.head){
            this.head = newNode;
        }else{
            this.tail.next = newNode;
        }

        this.tail = newNode
    }

    peek(value, current = this.head){
        if(this.head === null){
            return false
        }

        if(current != null){
            if(current.value === value){
                return true
            }else{
                return this.peek(value, current.next)
            }
        }
        return false;
    }

    size(current = this.head, acum = 1){
        if(this.head === null){
            return 0
        }
        if(current.next != null){
            return this.size(current.next, acum = acum + 1)
        }
        return acum
    }

    remove(value, current = this.head){
        if(this.head === null){
            return false
        }
    }


    print(){
        let node = this.head;
        while(node != null){
            console.log( `Valor ${node.value.titulo} ${node.value.descripcion} | Next: ${node.next?.value.titulo || null} ${node.next?.value.descripcion || null}`)
            node =  node.next
        }
    }
}

class tarea{
    constructor(titulo, descripcion){
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}
var linkedList = new LinkedList()
var titulo = "lengujae"
var descripcion = "leer "
var tarea2 = new tarea(titulo, descripcion)


var linkedList = new LinkedList()

linkedList.append(tarea2);
linkedList.print();

