let Livre =[
    {id:10, titre:"POO", auteur:"RAMI", prix:300},
    {id:11, titre:"JS ES6", auteur:"FAMI", prix:230},
    {id:12, titre:"Algorithme", auteur:"KARIMI", prix:330},
    {id:13, titre:"HTML & CSS", auteur:"RAMI", prix:340}
]

let titres = Livre.map((e)=>e.titre);
console.log(titres);

let titres_rami = Livre.filter((e)=>e.auteur == "RAMI").map((e)=>e.titre);
console.log(titres_rami);

let livre_id12 = Livre.find((e)=>e.id === 12);
console.log(livre_id12);

let Livre_prix = Livre.filter((e)=>e.prix < 330).map((e)=>e.titre);
console.log(Livre_prix);