// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    
}
//console.log(upperCaseCustomerName());

function setBestCustomer() {
    bestCustomer = 'not bob';
}
//console.log(setBestCustomer());

function overwriteBestCustomer () {
    bestCustomer = 'maybe bob';
    
}

const leastFavoriteCustomer = 'jug';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "max"
    return leastFavoriteCustomer
}
console.log(changeLeastFavoriteCustomer());