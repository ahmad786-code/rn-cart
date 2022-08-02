const PRODUCTS = [ // This is a just dummy data imagine this is backend server 
    {
        id: 1,
        name: "Banana",
        price: 3,
        image: require("../assets/product_images/banana.jpg"),
        description:
          "Fresh banana",
    },
    {
        id: 2,
        name: "Mango",
        price: 2,
        image: require("../assets/product_images/mango.jpg"),
        description:
            "Our Mango is fresh and sweet",
    },
    {
    id: 3,
    name: "Watermillon",
    price: 6,
    image: require("../assets/product_images/watermilon.jpg"),
    description: "Our store is keep fresh watermillon"
    }
]

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product) => product.id == id);
}