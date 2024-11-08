function sortProducts(products) {
    return products.sort(function(a, b) {
        return a.price - b.price;
    });
}
const products = [{name: "sneakers", price: 200}, {name: "T-Shirt", price: 20},
                  {name: "Jeans", price: 50}, {name: "Bag", price: 100}];
console.log(sortProducts(products));
`Output
[
  { name: 'T-Shirt', price: 20 },
  { name: 'Jeans', price: 50 },
  { name: 'Bag', price: 100 },
  { name: 'sneakers', price: 200 }
]
`
