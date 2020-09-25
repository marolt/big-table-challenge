var faker = require('faker');
var database = { products: [] };
for (let i=1; i<=10000; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    currency: faker.finance.currencySymbol(),
    rating: Math.floor(Math.random() * 5 + 1),
    reviews: Math.floor(Math.random() * 500),
    image: faker.image.fashion(),
    category: faker.commerce.department(),
    brand: faker.company.companyName(),
  });
}
console.log(JSON.stringify(database));

