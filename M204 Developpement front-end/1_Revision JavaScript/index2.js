// Impure Modifie
let p = 10
function calculer1(n){
    return p=n+p
};
calculer1(5);
console.log(p);

// Pure ne modifier  des variables
p = 10
function calculer2(i){
    return p+i
};
calculer2(5);
console.log(p);