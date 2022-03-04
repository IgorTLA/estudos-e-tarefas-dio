function product(a) {
    return function (b) {
        return a + b;
    }
}

const product2 = product(2);

console.log(product2(6));
console.log(product2(10));
console.log(product2(2));


