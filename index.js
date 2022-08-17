class Usuario {
    constructor(nombre, apellido, libros,mascotas){
    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros
    this.mascotas = mascotas
}

getFullname(){
    return `${this.nombre} ${this.apellido}`
}

addMascota(mascota){
    this.mascota.push(mascota)
}

countMascota(){
    return this.mascotas.length
}

addBook(nombre, autor){
    this.libros.push({nombre:nombre, autor:autor})
}

getBooksNames(){
    return this.libros.map(e => e.nombre)
}
}

const usuario1 = new Usuario ("Marcia", "Gomez", [{nombre:"Rayuela", autor:"Julio Cortázar"}], ["Gato", "Perro"])

console.log (usuario1.getFullname());
usuario1.addMascota("Tortuga")
console.log(usuario1.mascotas);
console.log(usuario1.countMascotas());
usuario1.addBook("El Aleph", "Jorge Luis Borges")
console.log(usuario1.libros);
console.log(usuario1.getBooksNames());
