export const products = [
    {
        id: 1,
        categoria: "Vela",
        nombre: "Vela Copon",
        precio: 3500,
        imagen: "../img/productos/vela_copon.jpg",
        stock: 200
    },
    {
        id: 2,
        categoria: "Vela",
        nombre: "Vela Alba",
        precio: 3700,
        imagen: "../img/productos/vela_alba.jpg",
        stock: 200
    },
    {
        id: 3,
        categoria: "Vela",
        nombre: "Vela Bir",
        precio: 3000,
        imagen: "../img/productos/vela_bir.jpg",
        stock: 200
    },
    {
        id: 4,
        categoria: "Vela",
        nombre: "Vela Esfera",
        precio: 3000,
        imagen: "../img/productos/vela_esfera.jpg",
        stock: 200
    },
    {
        id: 5,
        categoria: "Vela",
        nombre: "Vela Hexa",
        precio: 3500,
        imagen: "../img/productos/vela_hexa.jpg",
        stock: 200
    },
    {
        id: 6,
        categoria: "Vela",
        nombre: "Vela Ren",
        precio: 2800,
        imagen: "../img/productos/vela_ren.jpg",
        stock: 200
    },
    {
        id: 7,
        categoria: "Esencia",
        nombre: "Aromatizador Rita",
        precio: 3000,
        imagen: "../img/productos/esencia.jpg",
        stock: 200
    },
    {
        id: 8,
        categoria: "Esencia",
        nombre: "Aromatizador Diana",
        precio: 2800,
        imagen: "../img/productos/esencia_carrousel.jpeg",
        stock: 200
    },
    {
        id: 9,
        categoria: "Esencia",
        nombre: "Esencia Solida",
        precio: 1900,
        imagen: "../img/productos/esencia_solida.jpg",
        stock: 200
    },
    {
        id: 10,
        categoria: "Textil",
        nombre: "Almohadon a rayas ",
        precio: 1700,
        imagen: "../img/productos/almohadones_ray.jpg",
        stock: 200
    },
    {
        id: 11,
        categoria: "Textil",
        nombre: "Camino de mesa",
        precio: 2000,
        imagen: "../img/productos/camino_mesa.jpeg",
        stock: 200
    },
    {
        id: 12,
        categoria: "Textil",
        nombre: "Repasador panal",
        precio: 1500,
        imagen: "../img/productos/repasadores.jpg",
        stock: 200
    },
    {
        id: 13,
        categoria: "Decoracion",
        nombre: "Colgante Corazon",
        precio: 1000,
        imagen: "../img/productos/colg_cora.jpg",
        stock: 200
    },
    {
        id: 14,
        categoria: "Decoracion",
        nombre: "Colgante Flor",
        precio: 1000,
        imagen: "../img/productos/colg_flor.jpg",
        stock: 200
    },
    {
        id: 15,
        categoria: "Decoracion",
        nombre: "Ramo de flores de tela",
        precio: 1500,
        imagen: "../img/productos/flores_tela.jpg",
        stock: 200
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) =>{

        setTimeout(() => {
            resolve(products.find(prod => prod.id == productId))
           // console.log(products.find(prod => prod.id == productId))
        }, 500)
    })
}
export const getProductsByCategory = (productCat) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria.toLowerCase() === productCat.toLowerCase()))
        }, 500)
    })
}