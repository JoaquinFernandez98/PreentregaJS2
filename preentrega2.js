class Producto {
    constructor(id, bebida, marca, precio){
        this.id = id,
        this.bebida = bebida,
        this.marca = marca,
        this.precio = precio

    }
    mostrarInfoLibro(){
        console.log(`El titulo es ${this.bebida}, el autor es ${this.marca} y su precio es ${this.precio}`)
    }
}

const producto1 = new Producto(1, "Agua", "Villavicencio", 200)

const producto2 = new Producto(2, "Bebida cola", "Coca-Cola", 450)

const producto3 = new Producto(3, "Cerveza", "Heineken", 600)

const producto4 = new Producto(4, "Fernet", "Branca", 8000)

const producto5 = new Producto(5, "Whisky", "Jack Daniels", 15000)

const producto6 = new Producto(6, "Vino", "Trumpeter", 11000)


const carrito = [producto1, producto2, producto3, producto4, producto5, producto6]


function agregarProducto(){
    let bebidaIngresada = prompt("Ingrese el tipo de bebida")
    let marcaIngresada = prompt("Ingrese la marca de la bebida")
    let precioIngresado = parseInt(prompt("Ingrese el precio de la bebida"))
    const productoNuevo = new Producto(carrito.length+1, bebidaIngresada, marcaIngresada, precioIngresado)
    console.log(productoNuevo)
    carrito.push(productoNuevo) 
    console.log(carrito)
}

function eliminarProducto(array){
    console.log("A partir del catalogo ingrese el id que desea eliminar")
    for(let elem of array){
        console.log(`${elem.id} - ${elem.marca} del autor ${elem.bebida}`)
    }
    let idEliminar = parseInt(prompt("Ingrese el id a eliminar"))
    let arrayID = array.map((producto) => producto.id)
    console.log(arrayID)
    let indice = arrayID.indexOf(idEliminar)
    array.splice(indice, 1)
    verCatalogo(array)
}

function verCatalogo(array){
    console.log("Estes es nuestro stock disponible:")
    array.forEach((producto)=>{
        console.log(producto.id, producto.marca, producto.precio, producto.bebida)
    })
}


function buscarPorMarca(array){
    let marcaBuscada = prompt("Ingrese el nombre de la marca buscada")
    let marcaEncontrada = array.find(
        (book)=> book.marca.toLowerCase() == marcaBuscada.toLowerCase()
        )
    if(marcaEncontrada == undefined){
        console.log(`La marca ${marcaBuscada} no está en stock`)
    }
    else{
        console.log(marcaEncontrada) 
    }
}


function buscarPorBebida(arr){
    let bebidaBuscada = prompt("Ingrese el nombre del tipo de bebida que esta buscando")
    let busqueda = arr.filter((producto)=> producto.bebida.toLowerCase() == bebidaBuscada.toLowerCase())
    if(busqueda.length == 0){
        console.log(`No hay coincidencias para el tipo de bebida ${bebidaBuscada}`)
    }else{
        console.log(busqueda)
        verCatalogo(busqueda)
    }

}


function ordenarMenorMayor(array){
        
        const menorMayor = [].concat(array)
        
        menorMayor.sort((a,b) => a.precio - b.precio)
        verCatalogo(menorMayor)
}
function ordenarMayorMenor(arr){
    
    const mayorMenor = [].concat(arr)
    mayorMenor.sort((param1, param2)=>{
        return param2.precio - param1.precio
    })
    verCatalogo(mayorMenor)
}
function ordenarAlfabeticamenteMarca(array){
    const ordenadoAlfabeticamente = [].concat(array)
     ordenadoAlfabeticamente.sort((a,b) => {
          if(a.marca > b.marca) {
            return 1
          }
          if (a.marca < b.marca) {
            return -1
          }
          
          return 0;
    })
    verCatalogo(ordenadoAlfabeticamente)
}
function ordenar(array){
    let opcion = parseInt(prompt(`
    1 - Ordenar de menor a mayor
    2 - Ordenar de mayor a menor
    3 - Ordenar alfabeticamente `))
    switch(opcion){
        case 1:
            ordenarMenorMayor(array)
        break
        case 2:
            ordenarMayorMenor(array)
        break
        case 3:
            ordenarAlfabeticamenteTitulo(array)
        break
        default:
            console.log(`${opcion} no es válida para ordenar`)
        break    
    }
}

function menu(){
    let salirMenu = false
    do{
        salirMenu = preguntarOpcion(salirMenu)
    }while(!salirMenu)
} 

function preguntarOpcion(salir){
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
           1 - Agregar producto
           2 - Borrar producto
           3 - Ver el catálogo
           4 - Encontrar por marca:
           5 - Buscar productos por el mismo tipo:
           6 - Ordenar productos:
           0 - Salir del menu`))
    
        switch(opcionIngresada){
            case 1:
                agregarProducto()
            break
            case 2:
                eliminarProducto(carrito)
            break
            case 3:
                verCatalogo(carrito)
            break
            case 4:
                buscarPorMarca(carrito)
            break
            case 5:
                buscarPorBebida(carrito)
            break
            case 6:
                ordenar(carrito)
            break
            case 0:
                console.log("Gracias por su compra")
                salir = true
                return salir
            break
            default:
                console.log("Ingrese una opción correcta")
            break
        }
}

menu()