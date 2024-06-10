export const productos = [
    {
        id: 1,
        nombre: "Camisa hawaiana",
        precio: 10000,
        categoria: "Ropa",
        stock: 8,
        descripcion: "Camisa manga corta para hombre con estampado de Pokemon",
        medidas: "Longitud:73.7cm - Pecho:100cm - Hombro:43.8cm - Longitud de la manga :25.4cm",
        img: "https://ae01.alicdn.com/kf/S8221a7136cbf483099ffe5af1bda0ff41/Camisa-hawaiana-de-manga-corta-para-hombre-ropa-Harajuku-Original-con-estampado-de-dibujos-animados-de.jpg_640x640.jpg_.webp"
    },
    {
        id: 2,
        nombre: "Buzo Harajuku Kawaii",
        precio: 10000,
        categoria: "Ropa",
        stock: 10,
        descripcion: "Buzo con capucha para mujer, con estampado de letras",
        medidas: "Longitud:73.7cm - Pecho:100cm - Hombro:43.8cm - Longitud de la manga :25.4cm",
        img: "https://ae01.alicdn.com/kf/HTB1Me3yXcfrK1Rjy0Fmq6xhEXXaZ/Sudadera-con-capucha-Harajuku-Kawaii-para-mujer-su-ter-con-estampado-de-letras-de-Lolita-de.jpg_.webp"
    },
    {
        id: 3,
        nombre: "Remera Harajuku anime",
        precio: 10000,
        categoria: "Ropa",
        stock: 6,
        descripcion: "Remera de Anime para mujer, estilo japonesa con brazos cubiertos",
        medidas: "Longitud:73.7cm - Pecho:100cm - Hombro:43.8cm - Longitud de la manga :25.4cm",
        img: "https://ae01.alicdn.com/kf/S435d803e751b4837b92f14b36b73009bj/Camiseta-de-Anime-para-mujer-ropa-de-calle-japonesa-con-cubierta-de-brazo-Top-gr-fico.jpg_.webp"
    },
    {
        id: 4,
        nombre: "Figura Bulma",
        precio: 10000,
        categoria: "Figuras",
        stock: 5,
        descripcion: "Nueva figura de Dragon Ball - Bulma",
        medidas: "Alto: 20cm",
        img: "https://s.alicdn.com/@sc04/kf/H331cedf4e70045d291caef951a89270ef.jpg_1200x1200.jpg?avif=close"
    },
    {
        id: 5,
        nombre: "Peluche llaver Haikyuu",
        precio: 10000,
        categoria: "Peluches",
        stock: 5,
        descripcion: "Llavero de peluche Shoyo Hinat - Haikyuu",
        medidas: "Alto: 15cm",
        img: "https://s.alicdn.com/@sc04/kf/H8b126f2f30a24367a959706171fef585H.jpg_1200x1200.jpg?avif=close"
    },
    {
        id: 6,
        nombre: "Pulsera - One Piece",
        precio: 10000,
        categoria: "Accesorios",
        stock: 5,
        descripcion: "Pulsera unisex de One Piece",
        medidas: "-",
        img: "https://s.alicdn.com/@sc04/kf/H671612fd46b84e939c3cfadfa7637977Y.jpg_1200x1200.jpg?avif=close"
    },
    {
        id: 7,
        nombre: "Pulsera - Cinnamoroll",
        precio: 10000,
        categoria: "Accesorios",
        stock: 5,
        descripcion: "Pulsera de mujer con perlas artificiales de colores, elastica",
        medidas: "-",
        img: "https://s.alicdn.com/@sc04/kf/H28a479e0e8eb4950b94c0686a3b9e62ap.jpg_1200x1200.jpg?avif=close"
    },
    {
        id: 8,
        nombre: "Taza - One Piece",
        precio: 10000,
        categoria: "Tazas",
        stock: 5,
        descripcion: "Taza Sombrero de Luffy - One Piece",
        medidas: "-",
        img: "https://s.alicdn.com/@sc04/kf/Hc44891e1bf234851a43922bd72b860cbX.jpg_1200x1200.jpg?avif=close"
    },
    {
        id: 9,
        nombre: "Taza - Mario Bros.",
        precio: 10000,
        categoria: "Tazas",
        stock: 5,
        descripcion: "Taza de tuberia de Mario Bros.",
        medidas: "-",
        img: "https://s.alicdn.com/@sc04/kf/Hd950cb363c074e21b0f5215bf1b359a2D.jpg_1200x1200.jpg?avif=close"
    },
    {
        id: 10,
        nombre: "Billetera Sailor Moon",
        precio: 10000,
        categoria: "Otros",
        stock: 10,
        descripcion: "Billetera para mujer de Serena, Sailor Moon, con cierre y 2 compartimientos",
        medidas: "-",
        img: "https://s.alicdn.com/@sc04/kf/H39e15b12f8284f3bab4c90cf97ead723U.jpg_1200x1200.jpg?avif=close"
    },
    {
        id: 11,
        nombre: "Cuaderno - Death Note",
        precio: 10000,
        categoria: "Otros",
        stock: 5,
        descripcion: "Cuaderno rallado de 100 hojas - Death Note",
        medidas: "-",
        img: "https://s.alicdn.com/@sc04/kf/H27f89930761e4713a6e3223a79c377636.jpg_1200x1200.jpg?avif=close_1200x1200.jpg?avif=close?avif=close"
    },
];

export const getProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productos);
        }, 2000)
    })
};

export const getProductosByCategoria = (category) => {
    return new Promise((res) => {
        const productosFiltrados = productos.filter(
            (prod) => prod.categoria === category
        );
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    })
}

export const getProductosById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000)
    })
}