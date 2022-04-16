require.context('./styles/', true, /\.(css|scss)$/)
require.context('./images/', true, /\.(png|jpg|jpeg|gif|svg|webp|ico)/)

console.log('Projet Webpack!');
console.log('Projet jean!');
let a = 1;
let b = 2;
function test() {
    console.log(a + b);
}
test()
