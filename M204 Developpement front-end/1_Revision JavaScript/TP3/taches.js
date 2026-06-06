let Livres =[
    {id:10, titre:"POO", auteur:"RAMI", prix:300},
    {id:11, titre:"JS ES6", auteur:"FAMI", prix:230},
    {id:12, titre:"Algorithme", auteur:"KARIMI", prix:330},
    {id:13, titre:"HTML & CSS", auteur:"RAMI", prix:340}
]

function Ajouter(id,titre,auteur,prix){
    let livre = {id,titre,auteur,prix};
    Livres.push(livre)
    console.log("Le livre est ajouter dans les Livres")
}

function Supprimer(id){
    Livres = Livres.filter(function (l){return l.id !== id})
    console.log("Le livre a ete supprimer !")
}

function Liste_Livres(){
    return Livres
}

export {Ajouter,Supprimer,Liste_Livres};