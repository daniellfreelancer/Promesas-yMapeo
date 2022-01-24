export const PRODUCTO = [
    {
      id:0,
      nombreone: "Not Burger", 
      descriptionone: "XL version", 
      priceone: 1500,
      img: 'https://d3cgkqmmewql8l.cloudfront.net/site/products/1635350198931.png',
      stock: 90,
    
    },
    {
      id:1,
      nombreone: "Not Burger", 
      descriptionone: "100 grs", 
      priceone: 1000,
      img: 'https://d3cgkqmmewql8l.cloudfront.net/site/products/1619455097280.png',
      stock: 120,
    
    },
    {
      id:2,
      nombreone: "Not Meat", 
      descriptionone: "400 grs", 
      priceone: 5000,
      img:'https://d3cgkqmmewql8l.cloudfront.net/site/products/1625773346549.png',
      stock: 200,
    },
    {
      id:3,
      nombreone: "Not chicken", 
      descriptionone: "100 grs", 
      priceone: 1100,
      img:'https://d3cgkqmmewql8l.cloudfront.net/site/products/1638891319515.png',
      stock: 250,
    },
    {
      id:4,
      nombreone: "Not chicken nuggets", 
      descriptionone: "300 grs", 
      priceone: 4500,
      img:'https://d3cgkqmmewql8l.cloudfront.net/site/products/1641414056391.png',
      stock: 150,
    },
    
    
    ];
    

export const getProductos = () =>{
      return new Promise ((resolve,reject) => {

        setTimeout(() => resolve(PRODUCTO),2000);

      });
    };