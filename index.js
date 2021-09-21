// Ejercicio 1 - Creando variables
const nombre = 'Jhon Steven';
const apellido = 'Saavedra'
const edad = '22';
const ciudad = 'Villavicencio/Meta - Colombia';

console.log(`Hola soy ${nombre} ${apellido}, tengo ${edad} de edad, soy de ${ciudad}`);

// Ejercicio 2 - Sumando los valores de un arreglo
const array = [1, 4, 5, 3, 1];
let suma = 0;

array.forEach (function(num) {
    suma += num;
})
console.log(`Suma total ${suma}`);

// Ejercicio 3 - Creando un objeto
const user = {
    nombre: 'Jhon Steven',
    apellido: 'Saavedra',
    edad: 22
}

const nombreCompleto = `${user.nombre} ${user.apellido}`
console.log(nombreCompleto)

// Ejercicio 4 - Obteniendo correos de usuarios
const clients = [
    {id: 1, nombre: 'Miguel Angel Sosa', email: 'miguelito@gmail.com', edad: 40},
    {id: 2, nombre: 'Juan Camilo Rogel', email: 'juank@gmail.com', edad: 34},
    {id: 3, nombre: 'Maria Angelica Rozo', email: 'mariaangelih@gmail.com', edad: 22},
    {id: 4, nombre: 'Luis Fernando Muriel', email: 'luifermu@gmail.com', edad: 19},
    {id: 5, nombre: 'Steven Gonzalez', email: 'stevgonza@gmail.com', edad: 18},
]

clients.filter(client => console.log(`Opcion 1: ${client.nombre} - ${client.email}`))

clients.map(({nombre, email}) => (
    console.log(`Opcion 2: ${nombre} - ${email}`)
))