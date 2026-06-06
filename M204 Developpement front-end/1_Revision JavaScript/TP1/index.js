class Document{
    constructor(id,titre,auteur){
        this.id = id;
        this.titre = titre;
        this.auteur = auteur;
    }
}
class Livre extends Document{
    constructor(id,titre,auteur,page,lu){
        super(id,titre,auteur);
        this.page = page;
        this.lu = false;
    }
    infoLivre(){
        return `Livre  ID:${this.id}  Titre:${this.titre}  Auteur:${this.auteur}  Page: ${this.page} Lu: ${this.lu} `
    }
    lireLivre(page){
        if(page>0){

        }else{

        }
    } 
}
D1 = new Document(1,"Document1","Auteur1");
D2 = new Document(2,"Document2","Auteur2");

L1 = new Livre(3,"livre1","Auteur3",200,true);
L2 = new Livre(4,"livre2","Auteur4",400,false);
console.log(L1.infoLivre()); 