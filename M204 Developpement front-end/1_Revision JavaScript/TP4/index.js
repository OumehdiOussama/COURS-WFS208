let inscreptions =[
    {id:10, nom:"RAMI", filiere:"DEV"},
    {id:11, nom:"KAMALI", filiere:"DEV"},
    {id:12, nom:"Fahmi", filiere:"DEV"},
    {id:13, nom:"Chaouki", filiere:"DEV"}
]
//! 1-
//* fonction pure:
function Suprimer(id){
    let inscris = inscreptions.filter((e)=>e.id != id);
    return console.log(inscris);
}
Suprimer(12);

//! 2-
//* fonction pure:
function Modifier(id,fil) {
    let tab = inscreptions.map((e)=> {
        if (e.id === id) {
            return {...e, filiere:fil};
        }
        return e;
    });
    return console.log(tab);
}
Modifier(12,"WFS202");

//* fonction impure:
function Modifier2(id,fil){
    let modifier = inscreptions.find((e)=> e.id === id).filiere = fil
    return console.log(modifier);
}
//Modifier2(12,"WFS");

//! 3-
copier=(Tab)=>{
    return [...Tab];
}
console.log(copier(inscreptions));

//! 4-
let nbr_inscri = inscreptions.reduce((T) => T+1,0);
console.log(nbr_inscri);

//! 5- 
personne = {id:14,nom:"Alaoui"};
function Ajouter_f(){
    let per = {...personne, filiere:"WFS208"};
    return per;
}
console.log(Ajouter_f());

//! 6-
function Ajouter (){
    return console.log([...copier(inscreptions),Ajouter_f()])
}
Ajouter()
